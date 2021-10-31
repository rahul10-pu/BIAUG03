const router=require("express").Router()
/**
 * api/tutorials - GET -get all the tutorials - http://localhost:8080/api/tutorials
 * api/tutorials/:id - GET - get the tutorial by ID
 * api/tutorials - POST - create new tutorial
 * api/tutorial - DELETE - delete all the tutorials
 * api/tutorial/id - Delete - delete the tutorial based on it's id
 * api/tutorial/id - PUT - update tutorial based on ID
 * api/tutorial/title - patch - update title 
 */
const tutorial=require("../controller/tutorial.js")
router.get("/", tutorial.getAllTutorials)
router.get("/:id", tutorial.getTutorialByID)
router.post("/", tutorial.createTutorial)
router.delete("/", tutorial.deleteAllTutorials)
router.delete("/:id", tutorial.deleteTutorialsByID)
router.put("/:id", tutorial.updateTutorialByID)
router.patch("/:title", tutorial.updateTitle)
module.exports=router