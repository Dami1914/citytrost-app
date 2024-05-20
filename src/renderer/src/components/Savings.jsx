import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'
import MiniSideMenu from './menu_component/MiniSideMenu'
import Customers from './savings/Customers'
import CreateCustomer from './savings/CreateCustomer'

const Savings = () => {
  const data = [{ name: 'Customers', to: 'customers' }]
  return (
    <div className="w-full h-full flex">
      <MiniSideMenu data={data} />
      <div className="w-[95%] h-full overflow-y-scroll">
        <Routes>
          <Route index element={<Navigate to="customers" />} />
          <Route path="customers" element={<Customers />} />
          <Route path="createcustomers" element={<CreateCustomer />} />
        </Routes>
      </div>
    </div>
  )
}

export default Savings
