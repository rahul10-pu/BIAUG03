

var expressClass=require('express')
var userController=require('../controller/user.js')
var userRouter=expressClass.Router()


//http://localhost:8080/user
userRouter.get("/",userController.getUser)
userRouter.post("/",userController.createUser)
userRouter.delete("/",userController.deleteUser)
userRouter.put("/",userController.updateUser)
userRouter.patch("/",userController.patchUser)
//http://localhost:8080/user/user
userRouter.get("/user",(req,res)=>{
    res.send("I am get request of user/user api")
})
module.exports=userRouter


// / - http://localhost:8080/user + /
// /user - http://localhost:8080/user + /user