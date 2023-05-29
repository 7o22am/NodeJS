const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
  _id: Number,
  name: String,
  supervisor: { type: Number, ref: 'Teachers' },
  StudentsInClass: {type:[] , ref:'Students'},

});
module.exports = mongoose.model("Classes", Schema);






