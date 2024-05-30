import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 70,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    // friends: {
      //   type: Array,
      //   default: [],
      // },
    bio: {
      type: String,
      max: 100,
    },
    location: String,
    // occupation: String,
    // viewedProfile: Number,
    // impressions: Number,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
