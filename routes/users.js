const express = require('express');
const router = express.Router();
const data = require ('./data.js')
const users = data['users']

router.get("/",(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    // message:"this is the home for users",
    users: users
  })
})

router.get("/:id",(req,res)=>{
  let userID = req.params.id
  let result

  for (let i =0 ; i< users.length; i++){
    if (users[i]["id"]==userID){
      result = users[i]
    }
  }
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    id: result
  })
})

module.exports = router
