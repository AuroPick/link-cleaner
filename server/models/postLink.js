import mongoose from "mongoose";

const postLinkSchema = mongoose.Schema({
    link: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var postLink = mongoose.model("postLink", postLinkSchema);

export default postLink;
