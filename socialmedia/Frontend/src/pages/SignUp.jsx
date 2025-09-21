import React from 'react'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className='w-full max-w-md p-8 bg-[#FFABD6]/50 rounded-2xl shadow-2xl '>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-8 '>Create Account</h2>

            <form action="">
                {/* full name */}
                <label className='text-sm font-medium text-gray-700  block'>Full Name : </label>
                <input type="text" name='name' placeholder='Enter your name' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none' />
      {/* user name */}
       <label className='text-sm font-medium text-gray-700  items-center block'>User Name : </label>
                <input type="text" name='username' placeholder='Enter your User name' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none' />

                {/* Email */}

                <label className='text-sm font-medium items-center block text-gray-700'>Email : </label>
                <input type="text" placeholder='Enter your Email' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' />

                {/* Password */}
               
                 <label className='text-sm font-medium items-center block text-gray-700'>Password : </label>
                <input type="text" placeholder='Enter your Password' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' />

                {/* conformPassword */}

               <label className='text-sm font-medium items-center block text-gray-700'>Confirm Password : </label>
                <input type="text" placeholder='Enter your Confirm Password' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' />

                {/* sign up button */}

                <button className='w-full font-bold py-2 px-2 border rounded-xl mt-4 bg-gradient-to-r from-[#ffb377] to-[#FFABD6]'>Sign up</button>

                <p className='text-sm text-gray-600 text-center mt-6'>Already have an account? {" "}
                    <a href="/login" className='text-blue-500  font-medium hover:underline'>Log In</a>
                     </p>
            </form>

        </div>
    </div>
  )
}

export default SignUp