import {signup} from '../controller/auth.js'// const user=require("../controller/user.js")
import { Router } from 'express'
const router=Router()
router.post("/signup", signup)
// router.post("/signin", signin)

export  default router