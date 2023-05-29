const   mongoose   = require("mongoose")

const Schema = new mongoose.Schema({
    _id: Number ,
    fullname:String,
    email:String,
    password:String,
    image:String,
    age:Number,
});
module.exports = mongoose.model("Teachers", Schema);

 




