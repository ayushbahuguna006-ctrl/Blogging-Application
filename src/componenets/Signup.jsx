import React from 'react'

function Signup() {
  return (
    <div>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='absolute top-10 shadow-2xl'><h1 className='font-bold text-2xl bg-gradient-to-r from-purple-900 via-purple-500 to-purple-400 bg-clip-text text-transparent'>SIGNUP</h1></div>
               <div className='bg-blue-50 border border-black min-h-[70vh] w-[90vw] md:w-[70vh] rounded-xl'>
                            <div className='flex flex-col justify-center items-center h-[50vh] mt-10'>
                                <input type="text" name='name' placeholder='Name' className='border rounded-xl border-black mt-7 p-2' />
                                <input type="text" name='email' placeholder='Email' className='border rounded-xl border-black mt-7 p-2' />
                                <input type="text" name='password' placeholder='Password' className='border rounded-xl border-black mt-7 p-2'/>
                                <button className='mt-10 bg-black text-white p-2 rounded-xl'>SIGNUP</button>
                                <h1 className='text-blue-500 mt-1 font-light'>Aleady have an account?</h1>
                                <button className='mt-1 bg-black text-white p-2 rounded-xl'>LOGIN</button>
                            </div>
               </div>
            </div>
    </div>
  )
}

export default Signup
