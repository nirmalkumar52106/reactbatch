const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://kumarnirmal52106_db_user:wGtmIknZX080AdrU@cluster0.kzhdisi.mongodb.net/?appName=Cluster0",{
    family  : 4,
}).then(()=>{
    console.log("mongodb connected..!")
}).catch(()=>{
    console.log("mongo not connected")
})
