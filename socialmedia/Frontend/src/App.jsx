import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/Navbar/MobileNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Navbar />
        <Outlet />
        <MobileNav />
      </main>
    </>
  )
}

export default App
