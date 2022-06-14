const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    bio:{
        type: String,
        required: false
    },

    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;