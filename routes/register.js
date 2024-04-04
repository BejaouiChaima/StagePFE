const express = require('express')
const router = express.Router();
const user = require('../models/userModel');
const userModel = require('../models/userModel');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.post ('/register',jsonParser,(req,res)=>{
   


  console.log("body data",req.body);

  const{nom, prenom, cin, email, numtel, role, password}=req.body;


  const createNewUser = new userModel ({
    nom: nom, 
    prenom:prenom, 
    cin:cin, 
    email:email, 
    numtel:numtel,   
    role:role, 
    password:password,
  })

  createNewUser.save().then((result)=>{
    res.status(201).json({msg:'utilisateur crée', result})
  })
});
module.exports = router;