import { Router } from "express";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { getActiveUser } from "../../api/users/controllers/getActiveUser.js";
const router = Router()

router.get("/api/user", verifyToken, getActiveUser)

export default router