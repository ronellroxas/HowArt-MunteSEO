const mongoose = require("mongoose");
const Post = require("../models/post.model");
const PostLike = require("../models/post-like.model");

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

/**
 * Gets details regarding a specific post whose id is specified in the postId route parameter
 */
module.exports.getPostById = async (req, res, next) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.postId)){
            return res.status(400).json({ message: "Invalid post id"});
        }

        let post = await Post.findOne({
            _id: req.params.postId
        }).populate("user");

        if(post == null){
            return res.status(404).json({ message: "Post with specified is is not found" });
        }

        let [ likeCount, loggedInUserLike ] = await Promise.all([
            PostLike.count({ post: post._id }),
            PostLike.findOne({ post: post._id, liker: req.userId })
        ]);

        res.status(200).json({
            ...post.toPlainObjectWithUser(),
            likeCount,
            hasLiked: loggedInUserLike != null
        });
    }catch(e){
        next(e);
    }
}

/**
 * Gets the 50 most recently created posts
 */
module.exports.getRecentPosts = async (req, res, next) => {
    try{
        let posts = await Post.find().populate("user").sort("-dateCreated").limit(50);

        res.status(200).json(posts.map((post) => post.toPlainObjectWithUser()));
    }catch(e){
        next(e);
    }
}

/**
 * Likes the post specified in the postId field of the body as the currently logged-in user. The user cannot
 * like their own posts or like posts that they have already liked previously
 */
module.exports.likePost = async (req, res, next) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(req.body.postId)){
            return res.status(400).json({ message: "Invalid post id"});
        }

        let post = await Post.findById(req.body.postId);

        if(post == null){
            return res.status(404).json({ message: "Post not found" });
        }

        if(post.user.toString() == req.userId){
            return res.status(400).json({ message: "You cannot like your own post" });
        }

        let existingLike = await PostLike.findOne({
            liker: req.userId,
            post: post._id 
        });

        if(existingLike != null){
            return res.status(400).json({ message: "You have already liked the post" });
        }

        let like = new PostLike({
            liker: req.userId,
            post: post._id
        });

        await like.save();

        res.status(204).end();
    }catch(e){
        next(e);
    }
}