import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import fileUpload from 'express-fileupload'
import path from "path";    //native package
import { fileURLToPath } from "url";
// import { register } from "./controllers/auth.js";
// import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { createPost} from "./controllers/posts.js";
import { createUser } from "./controllers/users.js";
// import { verifyToken } from "./middleware/auth.js";
/* DUMMY DATA */
// import User from "./models/User.js";
// import Post from "./models/Post.js";
// import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(fileUpload())
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(
  {
    origin: ["https://connect-social-media-app.netlify.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  }
));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


app.get('/', (req, res)=>{
  res.status(200).json("Welcome!")
})
app.post("/auth/register", createUser);
// upload.single("picture"),  to be added as middlware in /posts route handler incase there is need for localstorage
app.post("/createpost", createPost);

/* ROUTES */
// app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.post("/uploadtest", (req,res)=>(uploadToImgur(req, res)))

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));
