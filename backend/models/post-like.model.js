const mongoose = require("mongoose");

const postLikeSchema = new mongoose.Schema({
    liker:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }
});

const PostLike = mongoose.model("PostLike", postLikeSchema);
module.exports = PostLike;