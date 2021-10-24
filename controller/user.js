


module.exports={
    getUser:(req,res)=>{
        res.send("Hey I am in controller now, get request")
    },
    createUser:(req,res)=>{
        res.send("Hey I am in controller now, post request")
    },
    deleteUser:(req,res)=>{
        res.send("Hey I am in controller now, delete request")
    },
    updateUser:(req,res)=>{
        res.send("Hey I am in controller now, update request")
    },
    patchUser:(req,res)=>{
        res.send("Hey I am in controller now, patch request")
    }
}