const express = require('express');
const router = express.Router();

const UserModel = require('../models/user.js');

router.get("/login", (req, res) => {
    const userEmail = req.query.userEmail;
    const userPassword = req.query.userPassword;
    console.log(userEmail+ userPassword);
    UserModel.find({ userEmail: userEmail, userPassword: userPassword })
      .then((result) => {
        // ok response (user found)
        const data = result.length;
        console.log(data);
        if (data === 1)
          res.status(200).json("success");
        else 
          res.status(200).json("error");
      })
      .catch((err) => {
        res.send("ERR");
        console.log(err);
      });
  }); 
  
  // post request to save the user registration in the DB
router.post("/saveUser", async (req, res) => {
    // store the values from front-end
 
    const fullName = req.body.fullName;
    const userPassword = req.body.userPassword;
    const userEmail = req.body.userEmail;
    const userAge = req.body.userAge;
  
 console.log(fullName, userPassword, userEmail);
  
   
  // make a object-model to save the data
    const user = new UserModel({
      fullName: fullName,
      userEmail: userEmail,
      userPassword: userPassword,
      userAge: userAge
    });
  
  // save the data
    try {
      let userSaveResult = await user.save();
      res.send("OK");
    } catch (err) {
      res.send("NO");
    }
  });
 
router.get("/home", (req, res) => {
    res.send("OK");
})

module.exports = router;