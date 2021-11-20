import {signup,signin} from '../controller/auth.js'// const user=require("../controller/user.js")
import { Router } from 'express'
import { checkDuplicateUsernameOrEmail ,checkRoleExisted} from '../middleware/verifySignup.js'
const router=Router()
router.post("/signup",[checkDuplicateUsernameOrEmail,checkRoleExisted], signup)
router.post("/signin", signin)
// router.post("/signin", signin)

export  default router