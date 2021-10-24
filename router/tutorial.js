



var express=require('express')
var tutorialRouter=express.Router()
tutorialRouter.get("/",(req, res)=>{
    res.send("Hey I am the get request of the tutorial API")
})

module.exports=tutorialRouter
