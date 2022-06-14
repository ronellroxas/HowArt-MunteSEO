const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

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
})

app.listen(port, () => {
    console.log(`Backend listening on http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.status(200).send("Hello");
});