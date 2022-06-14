const mongoose = require("mongoose");

const NAME_MAX_CHAR = 50;
const MODEL_NAME = "User";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    firstName:{
        type: String,
        required: true,
        maxlength: [NAME_MAX_CHAR, `First name cannot exceed ${NAME_MAX_CHAR} characters`]
    },

    lastName:{
        type: String,
        required: true,
        maxlength: [NAME_MAX_CHAR, `First name cannot exceed ${NAME_MAX_CHAR} characters`]
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

const User = mongoose.model(MODEL_NAME, userSchema);
module.exports = User;