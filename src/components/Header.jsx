import React, { useState } from 'react'
import navMenu from '../constants/navMenu'
import { NavLink } from 'react-router-dom'
import { FaBots, FaMarsAndVenus, FaMobile, FaMobileButton, FaStreetView } from 'react-icons/fa6';
import { BiMenu } from 'react-icons/bi';
import { CiMenuBurger } from 'react-icons/ci';
import { TiThMenu } from 'react-icons/ti';
import Login from '../pages/auth/Login';

const Header = () => {
  const navlinkactive=({isActive})=>(isActive?" text-blue-900 font-bold ":"");
  {/*Mobile Menu hidden */}
  const [ismobilehidden, setmobilehidden]= useState(true);
  return (
    <>
      <header className='fixed w-full bg-white border-b-2  top-0 start-0'>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/200px-Amazon_2024.svg.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink to={Login}> <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button></NavLink>
            <button data-collapse-toggle="navbar-sticky" type="button" onClick={()=>setmobilehidden(!ismobilehidden)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <TiThMenu className='text-black text-2xl'/>
            </button>
          </div>
          <div className={`items-center justify-between   w-full md:flex md:w-auto md:order-1 ${ismobilehidden?"hidden":""}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navMenu.map((menu)=>(
              <li key={menu.route}>
              <NavLink to={menu.route} className={navlinkactive}>
              {menu.label}
              </NavLink>
            </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  )
}

export default Header
