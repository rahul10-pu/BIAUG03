


module.exports={
    getUser:(req,res)=>{
        console.log(req.query.username)
        console.log(req.query.password)
        res.send("Hey I am in controller now, get request")
    },
    createUser:(req,res)=>{
        console.log(req.body)
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
    },
    getUserDetailByname:(req,res)=>{
        console.log(req.params.name)
        res.send(req.params.name)
    }
}

// web 3 is coming (dapps) app which is running on some blockchain platform
// youtube? google 
// odysee like youtube but it's a dapp
// web 2 {2004 till now}
// jobs in dapp or blockchain 