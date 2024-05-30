import User from "../models/User.js";
import { uploadToImgur } from "./upload.js";

/*CREATE*/
export const createUser = async (req, res) =>{
  try{
    const {lname, fname, email, location} = req.body;
    const imageUrl = await uploadToImgur(req, res);
    //Insert user in DB

    const newUser = new User({
      name: fname+' '+lname,
      email,
      location,
      picturePath: imageUrl,
      bio: 'Just a human being',
    });
    await newUser.save();
    res.status(201).json('Success');
  }catch(err){
    console.log(err);
    res.status(409).json({ message: err.message });
  }
}

/* READ */
export const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    // const user = await User.findById(id);
    //findbyemail
    const user = await User.find({email: email});
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.find({email: email});

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.find({email: email});
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );

    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

