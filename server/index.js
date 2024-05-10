const express = require('express');
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require("./config.js") 

app.use(express.json());
app.use(cors());

const userRouter = require('./Routes/user.js')

app.use("/user", userRouter)

app.get("/", (req, res) => {
    res.send("OK");
})

 app.listen(5600, ()=> console.log('listening on port'));


