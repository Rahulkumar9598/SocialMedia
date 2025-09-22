import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  })
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!(data.password === data.confirmpassword)) {
      toast("password and confirm password must be same")
      return
    }
    console.log(data, "This is data")
    try {

      setLoading(true)
      const res = await axios.post("https://socialmedia-qphp.onrender.com/api/user/register", data)
      console.log(res)
      toast.success(res?.data?.message)
      navigate("/login")
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-md p-8 bg-[#FFABD6]/50 rounded-2xl shadow-2xl '>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-8 '>Create Account</h2>

        <form onSubmit={(e) => handleFormSubmit(e)} >
          {/* full name */}
          <label className='text-sm font-medium text-gray-700  block'>Full Name : </label>
          <input value={data.name} type="text" name='name' onChange={(e) => handleInputChange(e)} placeholder='Enter your name' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none' />
          {/* user name */}
          <label className='text-sm font-medium text-gray-700  items-center block'>User Name : </label>
          <input value={data.username} type="text" name='username' onChange={(e) => handleInputChange(e)} placeholder='Enter your User name' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none' />

          {/* Email */}

          <label className='text-sm font-medium items-center block text-gray-700'>Email : </label>
          <input value={data.email} type="email" placeholder='Enter your Email' onChange={(e) => handleInputChange(e)} className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' name='email' />

          {/* Password */}

          <label className='text-sm font-medium items-center block text-gray-700'>Password : </label>
          <input value={data.password} type="text" placeholder='Enter your Password' onChange={(e) => handleInputChange(e)} className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' name='password' />

          {/* conformPassword */}

          <label className='text-sm font-medium items-center block text-gray-700'>Confirm Password : </label>
          <input value={data.confirmpassword} type="text" placeholder='Enter your Confirm Password' onChange={(e) => handleInputChange(e)} name='confirmpassword' className='w-full mt-1 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none ' />

          {/* sign up button */}

          <button disabled={loading} className='w-full font-bold py-2 px-2 border rounded-xl mt-4 bg-gradient-to-r from-[#ffb377] to-[#FFABD6]'>{loading ? "Loading..." : "Sign up" }</button>

          <p className='text-sm text-gray-600 text-center mt-6'>Already have an account? {" "}
            <a href="/login" className='text-blue-500  font-medium hover:underline'>Log In</a>
          </p>
        </form>

      </div>
    </div>
  )
}

export default SignUp