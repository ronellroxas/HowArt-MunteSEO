const mongoose = require("mongoose");

const followingSchema = mongoose.Schema({
    followerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    followedId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Following = mongoose.model("Following", followingSchema);
module.exports = Following;