// src/pages/ProfilePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { MdGridOn } from "react-icons/md";
import { LuSquareUser } from "react-icons/lu";

const UserProfile = ({ user }) => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <aside className="w-64 border-r border-gray-800 p-6 hidden  md:flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-6 flex "><img src="./logo.png" alt="" className="w-10" /><span className="text-white text-2xl  font-bold">Snap</span> <span className="text-[#ff48a7] text-2xl  font-bold">Ture</span></h1>
        <nav className="flex flex-col gap-5 text-lg">
          <Link to="/" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><GrHomeRounded  size={30} />Home</Link>
          <Link to="/search" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><IoSearch size={30}/>Search</Link>
          <Link to="/explore" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><MdOutlineExplore size={30}/>Explore</Link>
          <Link to="/reels" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><BiSolidMoviePlay size={30}/>Reels</Link>
          <Link to="/messages" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><LuMessageCircleMore size={30}/>Messages</Link>
          <Link to="/notifications" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"> <FaRegHeart size={30}/>Notifications</Link>
          <Link to="/create" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><CgAddR size={30}/>Create</Link>
          <Link to="/profile" className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"> <FaUserCircle className='text-white size-7' />Profile</Link>
          <Link className="mt-10 flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><RxHamburgerMenu size={30}/>More</Link>
          <Link className="flex gap-3 py-[8px] hover:bg-zinc-800 w-full pl-2 rounded-2xl"><img src="./logo.png" className="w-8" alt="" />Also about </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex flex-col sm:flex-row  sm:items-start gap-10">
          <div className="w-36 h-36 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden lg:ml-20 ">

          </div>

          <div className="flex-1 md:ml-15">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-xl">(username)Rachana</h2>
              <button className="bg-zinc-800 px-3 py-1 rounded-md text-sm">
                Edit Profile
              </button>
              <button className="bg-zinc-800 px-3 py-1 rounded-md text-sm">
                View Archive
              </button>
              <button className="bg-zinc-800 p-2 rounded-full"><FiSettings size={20}/></button>
            </div>
            <div className="flex gap-8 my-6">
              <p className="text-zinc-500">
                <span className="font-semibold text-white">0</span> posts
              </p>
              <p className="text-zinc-500">
                <span className="font-semibold text-white">0</span> followers
              </p>
              <p className="text-zinc-500">
                <span className="font-semibold text-white">0</span> following
              </p>
            </div>
            <div className="mt-4">
              <p className="font-semibold">(fullname)Rachana chauhan</p>
              <p>bio</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-20">
        <div className="w-20 h-20 rounded-full bg-zinc-800 items-center justify-center flex "><IoAdd size={40}/></div>
        <p className="items-center justify-center">new</p>
        </div>
        <div className="border-t border-gray-800 mt-10 flex justify-center gap-10 text-sm uppercase tracking-wider">
          <button className="py-3  border-t-2 border-white"><MdGridOn size={30}/></button>
          <button className="py-3 text-gray-400"><BiBookmark size={30}/></button>
          <button className="py-3 text-gray-400"><LuSquareUser size={30}/></button>
        </div>
        <div className="mt-6 flex">
         
            <div className="flex flex-col items-center justify-center mt-20">
              <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center">
                <IoAdd size={40}/>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Share Photos</h3>
              <p className="text-gray-400 text-sm mt-2">
                When you share photos, they’ll appear on your profile.
              </p>
              <button className="mt-4 bg-blue-600 px-4 py-2 rounded-md text-white text-sm">
                Share Your First Photo
              </button>
            </div>
      
        </div>

          
      </main>
    </div>
  );
};

export default UserProfile;
