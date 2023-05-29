const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({

    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},

},{ timstamps:true } )

const UserModel = mongoose.model("user",UserSchema);

module.exports = UserModel;