const constants = require("../constants");
const path = require("path");
const fs = require("fs");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fileHelper = require("../helpers/file-helper");
const mongoose = require("mongoose");

module.exports.login = async (req, res, next) => {
    try{
        let user = await User.findOne({
            email: req.body.email
        });
    
        if(user != null){
            let isCorrectPassword = bcrypt.compareSync(req.body.password, user.password);
    
            if(isCorrectPassword){
                let token = jwt.sign({
                    userId: user._id.toString()
                }, process.env.JWT_SECRET, {
                    expiresIn: "2h"
                });
                return res.cookie("token", token).status(204).end();
            }
        }
    
        res.status(400).json({ message: "Incorrect email or password" });
    }catch(e){
        next(e);
    }
}

module.exports.getLoggedInUser = async (req, res, next) => {
    try{
        let user = await User.findOne({
            _id: req.userId
        });

        if(user != null){
            res.status(200).json(user.toPlainObject());
        }else {
            res.status(404).json({ message: "User not found" })
        }
    }catch(e){
        next(e);
    }
}

module.exports.updateProfilePicture = async (req, res, next) => {
    try{
        if(req.file == undefined){
            return res.status(400).json({ message: "Please provide an image file" });
        }

        let user = await User.findById(req.userId);
        if(user == null){
            return res.status(404).end();
        }
        let oldProfileImage = user.profileImage;
        user.profileImage = req.file.filename;
        await user.save();

        if(oldProfileImage != undefined){
            fileHelper.deleteIfExists(path.join(constants.UPLOADS_DIRECTORY, oldProfileImage));
        }

        res.status(204).end();
    }catch(e){
        if(req.file != undefined){
            fileHelper.deleteIfExists(path.join(constants.UPLOADS_DIRECTORY, req.file.filename));
        }
        next(e);
    }
}

module.exports.createUser = async (req, res, next) => {
    try{
        let password = req.body.password;
        let hashedPassword = typeof password === "string" && password.length > 0 ? bcrypt.hashSync(password, 10): undefined;
        if(hashedPassword == undefined){
            return res.status(400).json({
                errors: {
                    password: "Password must be provided"
                }
            });
        }

        let user = new User({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            bio: req.body.bio,
            email: req.body.email
        });

        await user.save();

        res.status(201).json(user.toPlainObject());
    }catch(e){
        if(e.name === "MongoServerError" && e.code === 11000){
            let key = e.keyPattern.username === 1 ? "username" : "email";
            return res.status(400).json({
                errors: {
                    [key]: `${key} already exists`
                }
            })
        }
        next(e);
    }
}

