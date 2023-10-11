const express = require("express");
const cors = require("cors");
require("dotenv").config();


//set-up DB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // confirm connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally{}
}
run().catch(console.dir);
const db = client.db("Connect");  //setup database Connect


//HANDLE REQUESTS
const app = express();

app.use(express.urlencoded({extended: false}));    //middleware for accessing req.body
app.use(express.json());    //for accessing req.body
app.use(cors());


app.get('/', (req, res)=>
  res.status(200).send("hiii")
)


//define Routes
app.post('/register', async (req, res)=>{
  try{
    const {name, username, email} = req.body;
    //Insert user in DB
    let n = await db.collection("users").countDocuments();
    db.collection("users").insertOne({
      _id: n+1,
      email: email,
      name: name,
      username: username,
      join_date: new Date()
    })
    .then(res.send("Inserted successfully"))
    .catch(error=> res.status(400).send("Error inserting: "+ error))
  }catch(e){
    console.log("error in req,", e);
  }
}
)

app.get("/publicposts", (req, res)=>{    //without signin
  db.collection("posts").find({public:true}).toArray()   //get timeline(public)
  .then(posts=> res.send(posts))
  .catch(error=> res.status(400).send("Can't load posts"+ error))
})

app.get("/posts", (req, res)=>{          //on signin
  db.collection("posts").find().toArray()   //get all posts
  .then(posts=> res.send(posts))
  .catch(error=> res.status(400).send("No posts available"+ error))
})

app.get("/postsbyuser", (req, res)=>{
  const {id} = req.query;
  db.collection("posts").find({poster_id: Number(id)}).toArray()
  .then(posts=> res.send(posts))
  .catch(error=> res.status(400).send("No posts available"+ error))
})

app.get("/userinfo", (req,res)=>{ 
  const {email} = req.query;
  db.collection("users").findOne({email: email})  
  .then(userInfo=> res.send(userInfo))
  .catch(error=> res.status(400).send("User Info not available"+ error))

})

app.get("/userinfobyid", (req,res)=>{ 
  const {id} = req.query;
  db.collection("users").findOne({_id: Number(id)})  
  .then(userInfo=> res.send(userInfo))
  .catch(error=> res.status(400).send("User Info not available"+ error))
}) 

app.post('/createpost', async (req, res)=>{
  try{
    const {hasImg, body, title, tags, public, poster, poster_id} = req.body;
    //Insert post in DB
    let n = await db.collection("posts").countDocuments();
    db.collection("posts").insertOne({
      _id: n+1,
      poster_id: poster_id,
      poster: poster,
      image: hasImg,
      title: title,
      body: ReportBody,
      tags: tags,
      reactions: 0,
      public: public
    })
    .then(res.send("Post Created Successfully"))
    .catch(error=> res.status(400).send("Error inserting: "+ error))
  }catch(e){
    console.log("error in req,", e);
  }
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Server is listening to port ${PORT}`);
});

module.exports = db;    //exports to manual data entries.