import mongoose from "mongoose";

const postLinkSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var postLink = mongoose.model("postLink", postLinkSchema);

export default postLink;
