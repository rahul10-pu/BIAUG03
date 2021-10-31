

var expressClass=require('express')
var userController=require('../controller/user.js')
var userRouter=expressClass.Router()


//http://localhost:8080/user
userRouter.get("/",userController.getUser) //http://localhost:8080/user : GET request
userRouter.get("/:id",userController.getUserDetailByname) //http://localhost:8080/user/jayesh : GET request
userRouter.post("/",userController.createUser)
userRouter.delete("/",userController.deleteUser)
userRouter.put("/:id",userController.updateUser)
userRouter.patch("/",userController.patchUser)
//http://localhost:8080/user/user
userRouter.get("/user",(req,res)=>{
    res.send("I am get request of user/user api")
})
module.exports=userRouter 
//passing the data in URL - 2 types - 1.param , 2.Query
// https://www.google.com/user/jayesh
// https://www.google.com/user?name=jayesh&&age=10

// / - http://localhost:8080/user + /
// /user - http://localhost:8080/user + /user


// GET - request information ()
//POST - pass data from frontend to backend via api in JSON format in req
//delete - 
//update - pass data from frontend to backend via api in JSON format to update it
//patch - patch is for minor update
