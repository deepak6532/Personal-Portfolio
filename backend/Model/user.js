const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
},{timestamps:true ,versionKey:false})

const user = mongoose.model("user",userSchema)

module.exports =  user