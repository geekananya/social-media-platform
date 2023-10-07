const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await admin.auth().createUser({
        email,
        password,
      });
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      res.status(400).json({ message: 'Registration failed', error });
    }
  });






/* Server API skeleton
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = userinfo
/profile/:userId --> GET = user
/Post --> PUT --> user
/ comment, likes --> PUT --> post
*/