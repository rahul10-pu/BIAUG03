import { Router } from 'express'
const router=Router()
/**
 * api/users - GET -get all the users - http://localhost:8080/api/users
 * api/users/:id - GET - get the user by ID
 * api/users - POST - create new user
 * api/user - DELETE - delete all the users
 * api/user/id - Delete - delete the user based on it's id
 * api/user/id - PUT - update user based on ID
 * api/user/title - patch - update title 
 */
// import {getAllUsers,getUserByID,createUser,deleteAllUsers,deleteUsersByID,signin,updateUserByID,updateUsername} from '../controller/user.js'// const user=require("../controller/user.js")
// router.get("/", getAllUsers)
// router.get("/:id", getUserByID) //http://localhost:8080/user/3123123124 - GET
// router.post("/", createUser)
// router.delete("/", deleteAllUsers)
// router.delete("/:id", deleteUsersByID)
// router.put("/:id", updateUserByID)
// router.patch("/:title", updateUsername)
import {createUser,signin} from '../controller/user.js'// const user=require("../controller/user.js")
router.post("/signup", createUser)
router.post("/signin", signin)

export  default router

//1. register the user : POST 
//2. sign in user: 