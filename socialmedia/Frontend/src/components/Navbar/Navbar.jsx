import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
const Navbar = () => {
    const [user, setUser] = useState()
    return (
        <>
            <nav className='w-full h-15 bg-gradient-to-r from-[#ffb377] to-[#FFABD6] px-2 md:px-4 flex justify-between'>
                <Link to="/" className='h-15 flex gap-2 items-center'>
                    <img className='h-10 w-10' src="./logo.png" alt="" />
                    <span className='flex gap-0 leading-tight w-full h-full  items-center'><p className='text-white text-2xl  font-bold '>Snap</p><p className='text-[#ff48a7] text-2xl  font-bold'>Ture</p></span>
                </Link>
                <div className='h-full flex items-center gap-5'>
                    <Link to="/search" className='text-white cursor-pointer md:block hidden'><FaSearch size={20} /> </Link>
                    <Link to="/likes" className='text-white cursor-pointer '><FaRegHeart size={20} /> </Link>


                    <div className='w-auto  gap-5 h-full items-center hidden md:flex'>
                        <Link className='font-semibold px-3 cursor-pointer py-2 hover:scale-[110%] duration'>Home</Link>
                        <Link className='font-semibold px-3 cursor-pointer py-2 hover:scale-[110%] duration'>Reels</Link>
                        <Link className='font-semibold px-3 cursor-pointer py-2 hover:scale-[110%] duration'>Message</Link>
                        <Link className='font-semibold px-3 cursor-pointer py-2 hover:scale-[110%] duration'>Create</Link>
                    </div>

                    {
                        user ? <Link to="/my-account" className='flex items-center h-full gap-2  '>
                            <p className='text-white font-semibold hidden md:block'>{user}</p>
                            <FaUserCircle className='text-white size-10' />
                        </Link>
                            : <>
                                <Link className='text-white border-2 rounded-md px-3 py-[6px] font-semibold border-white cursor-pointer'>Login</Link>
                                <Link className='text-black  rounded-md px-3 py-2 font-semibold bg-white cursor-pointer hidden md:block'>Sign up</Link>
                            </>
                    }

                </div>
            </nav>
           

        </>
    )
}

export default Navbar
