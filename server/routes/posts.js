import express from "express";
import { getFeedPosts, getUserPosts, likePost, getFeedByTag } from "../controllers/posts.js";
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", getFeedPosts);
router.get("/:tag", getFeedByTag);
router.get("/:email/posts", getUserPosts);

/* UPDATE */
router.patch("/:id/like", likePost);

export default router;
