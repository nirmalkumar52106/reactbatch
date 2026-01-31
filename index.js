
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require("./config/connection")
const server = express()
const User = require("./routes/UserRouter")

server.use(cors(origin =  "*"))
server.use(bodyParser.json())

server.use("/users" ,  User)

server.get("/" , (req,res)=>{
    res.send("hello")
})

const port = 5000

server.listen(port , (req,res)=>{
       console.log("Server Started")
})