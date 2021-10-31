const db = require("../model/index.js")
const Tutorial=db.tutorial
module.exports.getAllTutorials=(req, res)=>{
    Tutorial.find().then(
        result=>{
            res.status(200).send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.getTutorialByID=(req, res)=>{
    res.send("hi")
}
module.exports.createTutorial=(req, res)=>{ //post  in req.body
    const tutorial= new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published
    })
    tutorial.save(tutorial).then(
        result=>{
            res.send(result)
        }
    ).catch(
        err=>{
            res.status(500).send(err)
        }
    )
}
module.exports.deleteAllTutorials=(req, res)=>{
    res.send("hi")
}
module.exports.deleteTutorialsByID=(req, res)=>{
    res.send("hi")
}
module.exports.updateTutorialByID=(req, res)=>{
    res.send("hi")
}
module.exports.updateTitle=(req, res)=>{
    res.send("hi")
}
