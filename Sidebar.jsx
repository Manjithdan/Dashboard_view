import React from 'react'
import 
{BsHexagon, BsGrid1X2Fill, BsFillArchiveFill,  BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillChatSquareDotsFill}
 from 'react-icons/bs'
 import 
{ CgProfile}
 from 'react-icons/cg'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsHexagon  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Product
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Income
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Promote
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillChatSquareDotsFill className='icon'/> Help
                </a>
            </li>
        </ul>
        <div className='sidebar-list-rew'>
              
                    <CgProfile className='icon'/>Evano
                    <p>Project Manager</p>
              
            </div>
    </aside>
  )
}

export default Sidebar