import React from 'react'

function Signup() {
  return (
    <div>
            <div className='min-h-screen flex justify-center bg-gray-200 items-center'>
                <div className='absolute top-10 flex gap-10 '><h1 className='font-bold text-3xl bg-gradient-to-r from-black via-purple-500 to-black bg-clip-text text-transparent'>SIGNUP</h1><img src="blog-app-img.png" className='h-10 w-10 rounded-xl' alt="" /></div>
               <div className='bg-blue-50 shadow-2xl shadow-black border border-black min-h-[70vh] w-[90vw] md:w-[70vh] rounded-xl'>
                            <div className='flex flex-col justify-center  items-center h-[50vh] mt-5'>
                                <input type="text" name='name' placeholder='Name' className='border rounded-xl text-gray-900 border-black mt-7 p-2 px-8 md:px-15' />
                                <input type="text" name='email' placeholder='Email' className='border rounded-xl  text-gray-900 border-black mt-7 p-2 px-8 md:px-15' />
                                <input type="text" name='password' placeholder='Password' className='border   text-gray-900 rounded-xl border-black px-8 mt-7 md:px-15 p-2'/>
                                <button className='mt-7 bg-black text-white p-2  rounded-md cursor-pointer hover:bg-gray-900 hover:text-white active:h-10 active:w-17 active:text-sm hover:border-black hover:border'>SIGNUP</button>
                            </div>
                            <div className='flex flex-col justify-center items-center font-light'>
                                <span className='text-blue-500'>Already have an account?</span>
                                <a href='#' className='text-blue-500 hover:font-semibold transition-all font-medium ease-in'><u>LOGIN</u></a>
                            </div>
               </div>
            </div>
    </div>
  )
}

export default Signup
