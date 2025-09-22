import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'
import api from '../services/endpoint'

const Login = () => {
  const [loading , setLoading] = useState(false)
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
        const res = await axios.post(api.user.userLogin, data)
        console.log(res , "this is response") 
        toast.success(res?.data?.message)
        setLoading(false)
        localStorage.setItem("authorization" , res?.data?.token)
        navigate("/")
    } catch (error) {
      setLoading(false)
      console.log(error)
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <div className='w-full flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-md p-8 rounded-2xl bg-[#FFABD6]/50  shadow-2xl'>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <h2 className='text-3xl font-bold text-gray-800 text-center'>Log in</h2>

          {/* username */}
          <label className='text-gray-700 text-sm font-medium block'>User name : </label>
          <input value={data.username} type="text" onChange={(e) => handleInputChange(e)} placeholder='Enter your user name' className='border rounded-xl py-3 px-2 w-full flex mt-1 focus:ring-2 focus:ring-blue-500 outline-none' name='username' />

          {/* Password */}
          <label className='text-gray-700 text-sm font-medium block'>Password : </label>
          <input value={data.password} type="text" placeholder='Enter your Password' onChange={(e) => handleInputChange(e)} className='border rounded-xl py-3 px-2 w-full flex mt-1 focus:ring-2 focus:ring-blue-500 outline-none' name='password' />
          <div className='w-full items-center justify-between flex mt-2'>
            <p className='text-gray-700 text-md '>Forgot Password</p>
            <a className='text-blue-500 hover:underline' href='/signup'>Sign up</a>
          </div>
          <button disabled={loading} className='w-full bg-gra  bg-gradient-to-r from-[#ffb377] to-[#FFABD6] font-bold border rounded-xl py-3 px-2 mt-3'>{loading ? "Loading..." : "Login"}</button>
        </form>
      </div>
    </div>
  )
}

export default Login