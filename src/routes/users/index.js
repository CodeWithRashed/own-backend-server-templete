const getActiveUser = require("../../api/users/controllers/getActiveUser")
const verifyToken = require("../../middlewares/verifyToken")

const router = require("express").Router()

router.get("/api/user", verifyToken, getActiveUser)

module.exports = router