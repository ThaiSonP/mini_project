const express = require('express');
const router = express.Router();
const data = require ('./data.js');
//we want to import the data so we can work with it in this route
let posts = data['posts']
let valuesP = Object.values(posts)
//we want to turn the object into an array of values because we can manipulate it in an array

router.get('/',(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Origin", "*")
  res.json(posts)
})

router.get("/user",(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    message: "this is the route for users & their posts"
  })
})

router.get("/:id",(req,res)=>{
  let id = req.params.id;
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    post: valuesP[id-1]['body']
  })
})


router.get('/user/:id',(req,res)=>{
  let userID = req.params.id;
  //we need to identify the wildcard /userID
  thing = []
  valuesP.forEach(el=>{
    if(el['userId']==userID){
      thing.push(el['body'])
    }
  })
  //from the userID we want to filter through the array of objects and see which values match the USER ID
  // once the IDs match we want to push it into an array because we can't have multiple values to one KEY unless it's in an array or a long string
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    user: userID,
    posts: thing

  })
})

module.exports = router
//because router is a class we don't need {}
