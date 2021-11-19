/**
 * signup
 * signIn - you will get token(JWT)
 * use token for all other api calls which need authentication
 * for API if we don't need authentication we can call them without token.
 */
import db from  '../model/postgres/index.js' //const db = require("../model/index.js")
 const User=db.user 
 import jwt from 'jsonwebtoken'
export const signup=(req, res)=>{ //post  in req.body
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
  // post : username/password
  export const signin=(req,res)=>{
      //1. find the user if exist in the db with the given username
    User.findOne({where:{username:req.body.username}})
    .then(
        (user)=>{
            if(!user){ 
                return res.status(404).send({
                    message:"User Not found"
                })
            }
            //2.
            if(user.password!=req.body.password){
                return res.status(401).send({
                    message:"Password Incorrect"
                }) 
            }
            //3.issue a toekn and give it back to the user
            var token=jwt.sign({id:user.id},"secret",{
                expiresIn:86400
            })
            res.status(200).send({
                accessToken:token
            })
        }
    )
    .catch()
  }