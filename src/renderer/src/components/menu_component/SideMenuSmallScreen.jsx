import React from 'react'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { LuLayoutDashboard, LuPiggyBank, LuUser } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'


const SideMenuSmallScreen = () => {
  const data = [
    { name: 'Dashboard', to: 'dashboard', component: <LuLayoutDashboard /> },
    { name: 'Admin', to: 'admin', component: <LuUser /> },
    { name: 'Savings', to: 'savings', component: <LuPiggyBank /> },
    { name: 'Loan', to: 'loan', component: <FaRegMoneyBillAlt /> },
    { name: 'Settings', to: 'settings', component: <IoSettings /> }
  ]
  return (
    <nav className="w-[8%] dark:bg-darkmode-2 h-full items-center rounded-br-xl smscreen:hidden flex bg-white">
      <ul className="w-full flex flex-col h-full mt-36 gap-6 items-center">
        {data.map((ele, index) => {
          return (
            <li
 
            key={ele.name + index}
              className="flex relative h-[40px hover:text-green-600 w-full items-center cursor-pointer"
            >
              <NavLink to={ele.to} className="w-full h-full flex px-5  gap-3 items-center">
                <div className="text-2xl peer text-white  p-2 bg-green-600 rounded-2xl">{ele.component}</div>
                <div className='peer-hover:flex hidden z-[3]'>{ele.name}</div>
              </NavLink> 
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default SideMenuSmallScreen
