import jwt from 'jsonwebtoken'
import db from '../model/postgres/index.js'
import role from '../model/postgres/role.js'
const User = db.user
export const validateToken=(req,res,next)=>{
    var token=req.headers["token"]
    if(!token){
        return res.status(401).send("Token is missing")
    }
    jwt.verify(token,"secret",(err, decode)=>{
        if(err){
            return res.status(401).send("Token is not valid")
        }
        req.userId=decode.id
        next()
    })
}
export const isAdmin=(req,res,next)=>{
    User.findByPk( req.userId).then(
        user=>{
             user.getRoles().then(
                 roles=>{
                     console.log(roles)
                     for(let i=0;i<roles.length;i++){
                         if(roles[i].dataValues.name=="admin"){
                             next()
                             return
                         }
                     }
                     res.status(403).send("User is not admin")
                 }
             ).catch(   
                err=>{
                res.status(500).send(err)
            }) 
        }
    ).catch(   
        err=>{
        res.status(500).send(err)
    })
}