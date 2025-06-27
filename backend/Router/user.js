const express = require("express")

const router = express.Router()

const userController  =  require("../Controller/user")


router.post("/contact",userController.contact)



module.exports = router