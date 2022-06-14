const jwt = require("jsonwebtoken");

module.exports.checkAuth = async (req, res, next) => {
    try{
        let token = req.cookies.token;

        if(typeof token === "string"){
            let { userId } = jwt.verify(token, process.env.JWT_SECRET);
            if(userId != undefined){
                req.userId = userId;
                return next();
            }
        }

        res.status(401).send({ message: "Unauthorized" });
    }catch(e){
        if(e instanceof jwt.JsonWebTokenError || e instanceof jwt.TokenExpiredError || e instanceof SyntaxError){
            return res.status(401).send({ message: "Unauthorized" });
        }
        next(e);
    }
}