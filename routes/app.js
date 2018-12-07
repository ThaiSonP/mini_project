const express = require("express");
const app = express()
const posts = require('./posts.js')
const users = require('./users.js')
const pictures = require('./pictures.js')
const port = 3000;

app.use('/posts',posts)
app.use('/users',users)
app.use('/pictures',pictures)

app.get("/",(req,res)=>{
  res.json({
    message: "this is the home page"
  })
})

app.get("*",(req,res)=>{
  res.status(404).json({
    message: 'page does not exist',
    validRoute1: "/posts",
    validRoute2: "/users",
    validRoute3: "/pictures",
  })
})
//we're catching all other pages that we have not explicative defined with an error page

app.listen(port,()=>{
  console.log('app is working')
})
