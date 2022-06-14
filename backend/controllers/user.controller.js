const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

