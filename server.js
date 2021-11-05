import express from 'express' // const express=require("express")
const app=express()
import tutorialRouter from './router/tutorial.js' //const tutorialRouter=require("./router/tutorial.js")
import db from "./model/index.js"//const db=require("./model/index.js")
app.use(express.json())

db.mongoose.connect(db.url,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log("Yesss, my db got connected")
        app.listen(8080,()=>{
            console.log("Hey, your app got started at port 8080")
        })
    }
).catch(
    (err)=>{
        console.log("OOps....you got error")
        console.log(err)
    }
)

app.get("/",(req,res)=>{
    res.json({message:"Welcome to my application"})
})  // http://localhost:8080
app.use("/api/tutorials",tutorialRouter)

// http://localhost:8080/api/tutorials
/**
 * api/tutorials - GET -get all the tutorials - http://localhost:8080/api/tutorials
 * api/tutorials/:id - GET - get the tutorial by ID
 * api/tutorials - POST - create new tutorial
 * api/tutorial - DELETE - delete all the tutorials
 * api/tutorial/id - Delete - delete the tutorial based on it's id
 * api/tutorial/id - PUT - update tutorial based on ID
 * api/tutorial/title - patch - update title 
 */