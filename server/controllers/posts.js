// the controllers is used for writing the logic for the application
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    // success status
    res.status(200).json(postMessages);
  } catch (error) {
    // error status
    res.status(404).json({ message: error.message });
  }
};

// creating a new post
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    //  status code for successful post creation
    res.status(201).json(newPost);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
