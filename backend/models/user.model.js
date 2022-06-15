const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [ true, "Please provide a username" ],
        unique: true,
        trim: true
    },

    firstName:{
        type: String,
        required: [ true, "Please provide your first name" ],
        trim: true
    },

    lastName:{
        type: String,
        required: [ true, "Please provide your last name" ],
        trim: true
    },

    password:{
        type: String,
        required: true
    },

    bio:{
        type: String,
        trim: true
    },

    email:{
        type: String,
        required: [ true, "Please provide an email" ],
        lowercase: true,
        unique: true,
        trim: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valie email address"
        ]
    },

    profileImage: {
        type: String
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
        type: this.type,
        profileImageUrl: this.profileImage == undefined ? "/public/images/default-profile.png": `/uploads/${this.profileImage}`
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;