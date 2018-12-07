const express = require ('express');
const router = express.Router();
const data = require ('./data.js')
const pictures = data["pictures"]

router.get("/",(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    message:"this is the home page for pictures",
    pictures: pictures
  })
})

router.get('/user',(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    message:"this is a valid path for users"})
})

router.get("/:id",(req,res)=>{
  res.set("Access-Control-Allow-Origin", "*")
  let picID = req.params.id;
  for (let i = 0;i<pictures.length;i++){
    if(pictures[i]["id"]==picID){
      res.json({
        result:pictures[i]
      })
    }
  }
})



router.get('/user/:id',(req,res)=>{
  let userID = req.params.id;
  let userResults = []
  for(let i = 0; i <pictures.length;i++){
    if(pictures[i]["userId"]==userID){
      userResults.push(pictures[i])
    }
  }
  res.set("Access-Control-Allow-Origin", "*")
  res.json({
    usersImages: userResults
  })

})

module.exports = router
