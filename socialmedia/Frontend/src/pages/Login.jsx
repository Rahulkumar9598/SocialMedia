import React from 'react'

const Login = () => {
  return (
    <div className='w-full flex justify-center items-center min-h-screen'>
        <div className='w-full max-w-md p-8 rounded-2xl bg-[#FFABD6]/50  shadow-2xl'>
    <form action="">
        <h2 className='text-3xl font-bold text-gray-800 text-center'>Log in</h2>

        {/* username */}
        <label className='text-gray-700 text-sm font-medium block'>User name : </label>
        <input type="text" placeholder='Enter your user name' className='border rounded-xl py-3 px-2 w-full flex mt-1 focus:ring-2 focus:ring-blue-500 outline-none' />
          
          {/* Password */}
         <label className='text-gray-700 text-sm font-medium block'>Password : </label>
        <input type="text" placeholder='Enter your Password' className='border rounded-xl py-3 px-2 w-full flex mt-1 focus:ring-2 focus:ring-blue-500 outline-none' />
        <div className='w-full items-center justify-between flex mt-2'>
        <p className='text-gray-700 text-md '>Forgot Password</p>
        <p className='text-blue-500 hover:underline'>Sign up</p>
        </div>
        <button className='w-full bg-gra  bg-gradient-to-r from-[#ffb377] to-[#FFABD6] font-bold border rounded-xl py-3 px-2 mt-3'>Login</button>
    </form>
        </div>
    </div>
  )
}

export default Login