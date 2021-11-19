/**
 * signup
 * signIn - you will get token(JWT)
 * use token for all other api calls which need authentication
 * for API if we don't need authentication we can call them without token.
 */
import db from  '../model/postgres/index.js' //const db = require("../model/index.js")
 const User=db.user 
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