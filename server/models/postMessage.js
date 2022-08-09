import mongoose from "mongoose";

// creating the schema for the postMessage model
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {},
});

// turning the schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
