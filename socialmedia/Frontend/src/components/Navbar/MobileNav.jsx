import React from 'react'
import { Link } from 'react-router-dom'
import { RiHome4Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { TbPhotoVideo } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { HiOutlineChat } from "react-icons/hi";

const MobileNav = () => {
  return (
    // bg-gradient-to-bl from-[#FFABD6] to-[#ffb377] 
    // <div className='w-full h-auto  flex flex-col bg-gradient-to-l from-[#FFABD6] to-[#ffb377]   justify-end fixed top-15 right-0 '>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1'>Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1'>Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1' >Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1' >Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1' >Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1' >Home</Link>
    //   <Link className='w-full flex justify-end px-3 py-1 my-1' >Home</Link>
    // </div>

    <>
        <div className='w-full h-10 flex justify-around fixed bottom-0 border-t-1 border-gray-600 md:hidden items-center'>
            <Link to="" className=' font-semibold text-red-600 '><RiHome4Line size={20} /></Link>
            <Link to="" className='text-gray-600 font-semibold'><IoMdAdd size={20} /></Link>
            <Link to="" className='text-gray-600 font-semibold'><FaSearch size={20} /></Link>
            <Link to="" className='text-gray-600 font-semibold'><TbPhotoVideo size={20} /></Link>
            <Link to="" className='text-gray-600 font-semibold'><HiOutlineChat size={20} /></Link>
        </div>
    </>
  )
}

export default MobileNav
