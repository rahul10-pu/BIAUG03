
import db from "../model/postgres/index.js"
const User=db.user
const Roles=db.ROLE
export const checkDuplicateUsernameOrEmail = (req, res,next)=>{
    //1. check username
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(
        (user)=>{
            if(user){
                return res.status(400).send("Username already exist")
            }
            User.findOne({
                where:{
                    emailID:req.body.emailid
                }
            }).then(
                (user)=>{
                    if(user){
                        return res.status(400).send("email already exist")
                    }
                    next()//here it will go to controller
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
export const checkRoleExisted=(req, res,next)=>{
    if(req.body.role){
        for(let i=0;i<req.body.role.length;i++){
            if(!Roles.includes(req.body.role[i])){
                return res.status(400).send("role does not exist"+req.body.role[i])
            }
        }
        next()
    }
}