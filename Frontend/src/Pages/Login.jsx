import React from 'react'
import signup from '../assets/signup.jpg'
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className='flex justify-around items-center'>
        <div>
          <img src={signup} alt="signup-image" className='h-dvh hidden md:block' />
        </div>
        <div>
          <form>
            <div className='bg-white flex flex-col'>
              <div className='text-center'><h1 className='text-2xl font-medium mt-5 md:mt-0'>Login into your Account</h1></div>
              <div className='text-center'><h3>Enter your Details below to login your account</h3></div>
              <div className='text-center md:text-start mt-5'>
                <label><h5 className='font-bold'>Email</h5><input type="text" placeholder='Email Address' className='border w-[85vw] outline-none md:w-[31.5vw] p-2 border-black rounded-xl' /></label>
              </div>
              <div className='text-center md:text-start mt-5'>
                <label><h5 className='font-bold'>Password</h5><input type="password" placeholder='Enter your Password' className='border w-[85vw] outline-none md:w-[31.5vw] p-2 border-black rounded-xl' /></label>
              </div>
              <div className='mt-5 text-center flex flex-col'>
                <button className='bg-gradient-to-r from-indigo-500 via-purple-500 cursor-pointer to-pink-500 p-2 w-[85vw] rounded-xl text-white md:w-[30vw] font-medium'>Login</button>
                <span className='mt-4'>Already have an account?  <Link className='text-blue-500' to="/signup">SIGN-UP</Link></span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login