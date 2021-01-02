import mongoose from "mongoose";

const postLinkSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

var PostLink = mongoose.model("PostLink", postLinkSchema);

export default PostLink;
