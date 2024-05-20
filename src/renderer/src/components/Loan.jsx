import React from 'react'
import MiniSideMenu from './menu_component/MiniSideMenu'
import MiniTopMenu from './menu_component/MiniTopMenu'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loans from './loan_component/Loans'
import LoanDetails from './loan_component/LoanDetails'
import CreateLoan from './loan_component/CreateLoan'
import PendingLoans from './loan_component/PendingLoans'

const Loan = () => {
    const data = [
        {name:"Loans", to:'loans'},
        {name:"Pending Loans", to:'pendingloans'}
    ]
  return (
    <div className='w-full flex h-full'>
        <MiniSideMenu data={data}/>
        <div className='w-[85%]  h-full'>
            <Routes>
                <Route index element={<Navigate to="loans"/>}/>
                <Route path="loans" element={<Loans/>}/>
                <Route path="pendingloans" element={<PendingLoans/>}/>
                <Route path="createloans" element={<CreateLoan/>}/>
                <Route path='loans/loandetails' element={<LoanDetails/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Loan