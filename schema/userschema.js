const express = require("express")
const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    username : String,
    email : String,
    mobile :  String,
    dob : String,
    password :  String,
    image : String
})

const Users = new mongoose.model("users" , UserModel)
module.exports = Users