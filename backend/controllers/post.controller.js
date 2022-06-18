const mongoose = require("mongoose");
const Post = require("../models/post.model");

/**
 * Creates a new post as the currently logged-in user
 */
module.exports.createPost = async (req, res, next) => {
    try{
        let post = new Post({
            user: req.userId,
            title: req.body.title,
            medium: req.body.medium,
            subject: req.body.subject,
            width: req.body.width,
            height: req.body.height,
            price: req.body.price,
            image: req.file != undefined ? req.file.filename : undefined,
            tags: typeof req.body.tags === "string" ? JSON.parse(req.body.tags): undefined
        });

        await post.save();
        await post.populate("user");

        res.status(201).json(post.toPlainObjectWithUser());
    }catch(e){
        if(e instanceof SyntaxError){
            return res.status(400).send({
                errors: {
                    tags: "Tags must be a valid JSON array"
                }
            })
        }
        next(e);
    }
}

/**
 * Gets all posts that are created by the user whose id is specified in the userId query parameter
 */
module.exports.getPostsByUser = async (req, res, next) => {
    try{
        const posts = await Post.find({
            user: req.query.userId
        }).sort("-dateCreated").populate("user");

        res.status(200).json(posts.map((post) => post.toPlainObjectWithUser()));
    }catch(e){
        next(e);
    }
}