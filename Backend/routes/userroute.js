const express=require('express')
const {register,login,logout,getme}=require('../controllers/usercontroller')
const router=express.Router()
router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)
router.get('/me',getme)
module.exports=router
