import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/Navbar/MobileNav'
import { Toaster } from 'react-hot-toast';
import UserProfile from './pages/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <Toaster />
        <MobileNav />
      </main>
    </>
  )
}

export default App
