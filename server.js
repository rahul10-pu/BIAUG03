
var bodyParser=require('body-parser')
var userRouter=require('./router/user.js')
var tutorialRouter=require('./router/tutorial.js')
var express= require('express')()
var expressClass=require('express')
const PORT=8080
express.use(bodyParser.json())

//http://localhost:8080/ - get request
express.get("/",(req, res)=>{
    res.send("Hello 20222222222")
})
//2 things for router in express
//1. create the router
//2. use the router
// http://localhost:8080/user
// userRouter=expressClass.Router() //create this in router folder in file named user.js

express.use("/user",userRouter)
express.use("/tutorial",tutorialRouter)
//loosly-coupling
// tightly coupled - dev
express.listen(PORT)