/**
 * signup
 * signIn - you will get token(JWT)
 * use token for all other api calls which need authentication
 * for API if we don't need authentication we can call them without token.
 */
import bcryptjs from 'bcryptjs'
import db from  '../model/postgres/index.js' //const db = require("../model/index.js")
 const User=db.user 
 const Role=db.roles
 import jwt from 'jsonwebtoken'
 const Op=db.Sequelize.Op
export const signup=(req, res)=>{ //post  in req.body
    const user=new User({
        username:req.body.username,
        password:bcryptjs.hashSync(req.body.password,8),  //1st prob : the actual passsword is getting saved in the db
        emailID:req.body.emailid
    })
    user.save().then(
      user=>{
          if(req.body.role){
            Role.findAll({
                where:{
                    name:{
                        [Op.or]:req.body.role
                    }
                }
            }).then(
                roles=>{
                    user.setRoles(roles).then(
                        ()=>{
                            res.send("User got registered with desired role")
                        }
                    ).catch(
                        err=>{
                            res.status(500).send(err)
                        }
                    )
                }
            ).catch(
                err=>{
                    res.status(500).send(err)
                }
            )
          }
          res.send(user)
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
            var isPasswordValid=bcryptjs.compareSync(req.body.password,user.password)

            if(!isPasswordValid){
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
  //middleware - just a function
  //server -> router -> controller
  //use middleware
    // server -> router -> middleware function -> controller