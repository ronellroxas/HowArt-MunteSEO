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

userSchema.methods.toPlainObject = function(){
    return {
        id: this._id,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        bio: this.bio,
        type: this.type
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;