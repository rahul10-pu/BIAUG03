import db from  '../model/postgres/index.js' //const db = require("../model/index.js")
const User=db.user
export const getAllUsers=(req, res)=>{
  User.findAll().then(
      result=>{
          res.send(result)
      }
  ).catch(
      err=>{
          res.status(500).send(err)
      }
  )
}
export const getUserByID=(req, res)=>{
   
}
export const createUser=(req, res)=>{ //post  in req.body
  const user=new User({
      username:req.body.username,
      password:req.body.password,
      emailID:req.body.emailid
  })
  user.save().then(
    result=>{
        res.send(result)
    }
).catch(
    err=>{
        res.status(500).send(err)
    }
)
}
export const signin=(req, res)=>{
   
}
export const deleteAllUsers=(req, res)=>{
   
}
export const deleteUsersByID=(req, res)=>{
    const id=req.params.id //either that id exist or that id don't exist
    // if id exist then delete it and if not then throw error as 404 in response
  
}
export const updateUserByID=(req, res)=>{
    const id=req.params.id 
   
}
export const updateUsername=(req, res)=>{
    res.send("hi")
}
