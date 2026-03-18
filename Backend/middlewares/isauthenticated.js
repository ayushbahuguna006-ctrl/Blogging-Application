const jwt = require("jsonwebtoken")
const isauthenticated=async(req,res,next)=>{


   try {
        const token = req.cookies.token;

    if(!token){
      return res.json({success:false});
    }

    const decoded = jwt.verify(token,process.env.SECRET_KEY);
      if(!decoded){
        return res.json({
            message:"Invalid Token",
            success:false,
        })
    }
    req.id=decoded.userId
    next()
   } catch (error) {
    console.log(error);
    
   }
  

 
  
}