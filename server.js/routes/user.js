const express=require("express")
const router=express.Router()
const {handleusersignup,handleuserlogin}=require('../controllers/user')
router.post('/signup',handleusersignup)
router.post('/login',handleuserlogin)
module.exports=router
