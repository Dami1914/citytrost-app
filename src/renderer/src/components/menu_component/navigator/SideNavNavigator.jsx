import React from 'react'
import { FaRegMoneyBillAlt, FaSignOutAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { LuLayoutDashboard, LuPiggyBank, LuUser } from 'react-icons/lu'
import { NavLink, useNavigate } from 'react-router-dom'
import { HandleLayoutDesign } from '../../../context/layoutDesignContext'

const SideNavNavigator = () => {
  const data = [
    { name: 'Dashboard', to: 'dashboard', component: <LuLayoutDashboard /> },
    { name: 'Admin', to: 'admin', component: <LuUser /> },
    { name: 'Savings', to: 'savings', component: <LuPiggyBank /> },
    { name: 'Loan', to: 'loan', component: <FaRegMoneyBillAlt /> },
    { name: 'Settings', to: 'settings', component: <IoSettings /> }
  ]
  return (
    <ul className="w-full flex flex-col gap-3">
      {data.map((ele, index) => {
        return (
          <li
            key={ele.name + index}
            className="flex relative    h-[40px]   hover:text-green-600   w-full items-center cursor-pointer"
          >
            <NavLink to={ele.to} className="w-full peer h-full flex px-5  gap-3 items-center">
              <div className="text-2xl">{ele.component}</div>
              <div className="font-bold">{ele.name}</div>
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SideNavNavigator
