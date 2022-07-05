require('dotenv').config();
const express = require('express')
var router = express.Router();
var db = require('./database/db.js'); 

        

router.get('/get-all-users',(req,res) => { // an example of a protected route

 
     db.query("CALL get_test_user_details();", function (err, result){
       if (err) throw err;
     console.log(result[0])
     res.json(
       {message: "User Details",
       User_Details: result[0]
     })
 
     })
   
    })   

         
router.get('/get-selected-user-details/:id',(req,res) => { // an example of a protected route

      user_id = req.params.id
      value = [user_id]
      db.query("CALL get_selected_test_user_details(?);", value, function (err, result){
        if (err) throw err;
     // console.log(result[0])
      res.json(
        {message: "User Details",
        User_Details: result[0],
        Related_Pictures: result[1],
        Related_Pictures_Count: result[2],
        Vehicles_Details: result[3],
        Vehicles_Count: result[4]
      })
  
      })
    
     })    
     
     
     router.put('/update-user-phone_no/:id',(req,res) => { // an example of a protected route

      user_id = req.params.id
      phone_no = req.body.phone_no
      values = [user_id,phone_no]
      db.query("CALL update_selected_test_user_details(?,?);", values,function (err, result){
        if (err) throw err;
     
      res.json(
        {message: "User Details",
        User_Details: result[0],
        Related_Pictures: result[1],
        Related_Pictures_Count: result[2],
        Vehicles_Details: result[3],
        Vehicles_Count: result[4]
      })
  
      })
    
     })      

   module.exports = router;   
