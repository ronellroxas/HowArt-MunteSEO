const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    medium:{
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    width: {
        type: Double,
        required: true
    },

    price: {
        type: Double
    },

    imageUrl: {
        type: String,
        required: true
    },

    tags: [{
        type: String,
    }]
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;