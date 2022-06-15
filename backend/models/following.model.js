const mongoose = require("mongoose");

const followingSchema = mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    followed:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Following = mongoose.model("Following", followingSchema);
module.exports = Following;