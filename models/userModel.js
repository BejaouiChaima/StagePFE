const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    cin: { type: String, required: true },
    email: { type: String, required: true },
    numtel: { type: String, required: true },   
    role: {type: String, require: true,},
    password: { type: String, required: true },
    isAdmin :{type :Boolean , default:true}    
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;