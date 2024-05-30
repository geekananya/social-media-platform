import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:email", getUser);
// router.get("/:id/friends", getUserFriends);

/* UPDATE */
// update profile info
// router.patch("/:id/:friendId", addRemoveFriend);

export default router;
