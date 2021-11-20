import { Router } from 'express'
const router=Router()
/**
 * api/tutorials - GET -get all the tutorials - http://localhost:8080/api/tutorials
 * api/tutorials/:id - GET - get the tutorial by ID
 * api/tutorials - POST - create new tutorial
 * api/tutorial - DELETE - delete all the tutorials
 * api/tutorial/id - Delete - delete the tutorial based on it's id
 * api/tutorial/id - PUT - update tutorial based on ID
 * api/tutorial/title - patch - update title 
 */
import { validateToken,isAdmin} from '../middleware/authJWT.js'
 import {getAllTutorials,getTutorialByID,createTutorial,deleteAllTutorials,deleteTutorialsByID,updateTutorialByID,updateTitle} from '../controller/tutorial.js'// const tutorial=require("../controller/tutorial.js")
router.get("/",[validateToken,isAdmin], getAllTutorials)
router.get("/:id",[validateToken], getTutorialByID) //http://localhost:8080/tutorial/3123123124 - GET
router.post("/", createTutorial)
router.delete("/", deleteAllTutorials)
router.delete("/:id", deleteTutorialsByID)
router.put("/:id", updateTutorialByID)
router.patch("/:title", updateTitle)
export  default router