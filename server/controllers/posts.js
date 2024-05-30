import Post from "../models/Post.js";
import User from "../models/User.js";
import { uploadToImgur } from "./upload.js";


/* CREATE */
export const createPost = async (req, res) => {
  try {

    const imageUrl = await uploadToImgur(req, res);
    console.log(imageUrl)
    if(!imageUrl) throw new Error("Can't upload image");

    const { email, description, tags } = req.body;
    const user = await User.findOne({ email });
    if(user===null) throw new Error("User not found");
    const newPost = new Post({
      email: email,
      name: user.name,
      description,
      userPicturePath: user.picturePath,
      picturePath: imageUrl,
      tags: tags.length?tags.split(" "):[],
      likes: {},
      // comments: [],
    });
    // console.log(newPost);
    await newPost.save();

    // const post = await Post.find();
    const post = await Post.find().sort({ createdAt: -1 }); //query to sort the posts by their creation date in descending order
    // console.log(post);
    res.status(201).json('Success');
  } catch (err) {
    console.log(err);
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    // const post = await Post.find();
    const post = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getFeedByTag = async (req, res) => {
  try {
    const {tag} = req.params;
    // const post = await Post.find();
    const post = await Post.find({tags: tag}).sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { email } = req.params;
    // const post = await Post.find({ userId });
    const post = await Post.find({ email }).sort({ createdAt: -1 });
    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(id);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {}
};


