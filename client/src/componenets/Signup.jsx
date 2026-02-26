import React from 'react'
import { useState } from 'react'
import signupGif from '../assets/signup.gif'
const togglesignin=()=>{

}


function Signup() {
  
  return (
    <div>
         <div className='h-[10vh]'>
          <h1 className=' font-black text-center mt-5'>SIGN UP</h1>
         </div>
         <div className='flex justify-center'>
           <img src={signupGif} alt="signup animation" className="h-10 border border-black p-2  text-center rounded-xl" />
         </div>
         <div>
          <h1 className='font-bold text-center mt-7 text-2xl'>CREATE YOUR ACCOUNT</h1>
         </div>
         <div>
          <h6 className='font-light text-center mt-2'>Join us and start your journey today</h6>
         </div>
         {/* //Name details */}
         <div>
            <h1 className=' ml-2 mt-10 text-center'>Full Name</h1>
         </div>
         <div className='text-center  md:ml-0  mt-2'>
          <input type="text" className='border border-black p-2 rounded-xl md:w-[30vw] w-[80vw] md:pl-5 pl-18' name='name' placeholder='Enter your full name' />
         </div>
         {/* Email details */}
         <div>
            <h1 className=' ml-2 mt-5 text-center'>Email Address </h1>
         </div>
         <div className='text-center  md:ml-0  mt-2'>
          <input type="text" name='email' className='border border-black p-2 rounded-xl md:w-[30vw] w-[80vw] md:pl-5 pl-18' placeholder='name@example.com' />
         </div>
         {/* Password details */}
         <div>
            <h1 className=' ml-2 mt-5 text-center'>Password</h1>
         </div>
         <div className='text-center  md:ml-0  mt-2'>
          <input type="password" name='password' className='border border-black p-2 rounded-xl md:w-[30vw] w-[80vw] md:pl-5 pl-16' placeholder='Create a strong password' />
         </div>
         <div className='text-center mt-10'>
          <button className='bg-blue-600 cursor-pointer rounded-xl hover:bg-blue-900 active:md:w-[60vh] active:w-[40vh] transition-all ease-in md:w-[65vh] font-bold text-white py-2 w-[45vh]'>Sign Up</button>
         </div>
         <div className='flex mt-1 gap-2 justify-center'>
             <h1 className='text-gray-500'>Already have an account?</h1>
             <a href='#login' onClick={()=>{togglesignin}} className='text-blue-500 font-bold cursor-pointer'>Login</a>
         </div>
         <div className='flex justify-center'>
          <h1 className='font-light text-xs text-center w-[40vh] mt-1'>By signing up , you agree to our <a href=""><u>Terms of Service</u></a>and <a href=""><u>Privacy Policy</u></a></h1>
         </div>

         
    </div>
  )
}

export default Signup
