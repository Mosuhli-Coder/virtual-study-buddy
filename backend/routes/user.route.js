import express from "express"
import { verifyToken } from "../utils/verifyToken.js"
import { deleteUser, updateUser } from "../controllers/user.controller.js"


const router = express.Router()

router.post("/update/:id", verifyToken, updateUser)
router.post("/delete/:id", verifyToken, deleteUser)

export default router