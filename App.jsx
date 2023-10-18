import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Mainer from './Mainer'
import Home from './Home'








function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      
      <Sidebar />
      <Mainer />
      <Home />
      
    </div>
  )
}

export default App
