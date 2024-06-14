import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Admin from '../components/Admin'
import Dashboard from '../components/Dashboard'
import Operation from '../components/Operation'
import SideMenu from '../components/menu_component/SideMenu'
import TopMenu from '../components/menu_component/TopMenu'
import Loan from '../components/Loan'
import MiniTopMenu from '../components/menu_component/MiniTopMenu'
import { useEffect, useRef, useState } from 'react'
import { HandleLayoutDesign } from '../context/layoutDesignContext'
import { CSSTransition } from 'react-transition-group'
import SideMenuSmallScreen from '../components/menu_component/SideMenuSmallScreen'
import Savings from '../components/Savings'

const Userpage = () => {
  const pageRef = useRef({})
  const location = useLocation()
  const { mode } = HandleLayoutDesign()

  useEffect(() => {
    if (mode) {
      pageRef.current.classList.add('dark')
    } else {
      pageRef.current.classList.remove('dark')
    }
  }, [mode])

  return (
    <div ref={pageRef} className=" w-full  h-full ">
      <div className="w-full  dark:text-slate-400 text-lightmode-light bg-lightmode-2 dark:bg-darkmode-1  h-full text-sm">
        <TopMenu />
        <div className="w-full h-[90%] flex gap-3 ">
          <SideMenu />
          <SideMenuSmallScreen />
          <div className="w-[85%]  drop-shadow-xl h-full flex flex-col rounded-xl ">
            {location.pathname.split('/').includes('dashboard') ? (
              ''
            ) : (
              <div className="h-[10%] flex-shrink-0">
                <MiniTopMenu />
              </div>
            )}
            <div className="w-full h-full">
              <Routes>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard/*" element={<Dashboard />} />
                <Route path="admin/*" element={<Admin />} />
                <Route path="savings/*" element={<Savings />} />
                <Route path="loan/*" element={<Loan />} />
                <Route path="operation/*" element={<Operation />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userpage
