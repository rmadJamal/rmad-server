const { Schema, model } = require("mongoose");

const USER_SCHEMA = new Schema({
  firstName: String,
  lastName: String,
  image: String,
  userName: String,
  pass : String,
});

const USER_MODEL = model("user", USER_SCHEMA);
module.exports = USER_MODEL;
