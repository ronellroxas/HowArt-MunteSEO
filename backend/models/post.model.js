const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: [ true, "Please provide a title" ],
        trim: true
    },

    dateCreated: {
        type: Date,
        required: true,
        default: new Date()
    },
    
    medium:{
        type: String,
        required: [ true, "Please provide a medium" ],
        trim: true
    },

    subject: {
        type: String,
        required: [ true, "Please provide a subject" ],
        trim: true
    },

    width: {
        type: Number,
        required: [ true, "Please specify the width" ]
    },

    height: {
        type: Number,
        required: [ true, "Please specify the height" ]
    },

    price: {
        type: mongoose.Decimal128
    },

    image: {
        type: String,
        required: [ true, "Please provide an image file" ]
    },

    tags: [{
        type: String,
        trim: true
    }]
});

postSchema.methods.toPlainObjectWithUser = function(){
    if(!this.populated("user")){
        throw new Error("User field must be populated");
    }

    return {
        id: this._id,
        title: this.title,
        medium: this.medium,
        subject: this.subject,
        width: this.width,
        height: this.height,
        price: this.price.toString(),
        imageUrl: `/uploads/${this.image}`,
        tags: this.tags,
        user: this.user.toPlainObject()
    }
}

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
