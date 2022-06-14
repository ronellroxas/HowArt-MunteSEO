const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || "8000";

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if(err){
        console.log(`Cannot connect to database: ${err}`);
    }else{
        console.log("Connected to database");
    }
});

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/user", require("./routes/user.routes"));

// Error-handlers
app.use((err, req, res, next) => res.status(500).json({ message: "Internal server error" }));

app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
});