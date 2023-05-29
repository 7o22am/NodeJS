const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
  _id: Number,
  fullname: String,
  class:{ type: Number, ref: 'Classes' },
  level: String,
  address: String,
  age: Number,
});
module.exports = mongoose.model("Students", Schema);






