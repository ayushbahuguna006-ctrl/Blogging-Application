const User = require('../models/user')
const handleusersignup=async(req,res)=>{
    try {
           const { name, email, password } = req.body
    if (!name || !email || !password) {
            return res.status(400).json({ error: 'Enter form data' })
        }
     const newUser = await User.create({ name, email, password })
        return res.status(201).json({ message: 'User created successfully', user: newUser })
        console.log(newUser)

}
catch(error){
    console.log(error);
}}
const handleuserlogin=async(req,res)=>{
    try {
             const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: 'Please provide all fields' })
        }
            const user=await User.findOne({email,password})
              if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' })
        }

    } catch (error) {
        console.log(error)
    }

}
module.exports={handleusersignup,handleuserlogin}