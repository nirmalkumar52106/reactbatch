const express = require("express")
const router = express.Router()

const Users = require("../schema/userschema")


router.post("/add",async(req,res)=>{
 const data = new Users(req.body);
    const savedata = await data.save()
    if(savedata){
        res.status(200).json({
            message : "user signup successfulyy..!",
            dataa : savedata
        })
    }else{
        res.status(505).json({
            message : "Something went wrong"
        })
    }
})

module.exports = router