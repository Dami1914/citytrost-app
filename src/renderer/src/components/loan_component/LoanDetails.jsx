import React from 'react'
import { GeneralStateData } from '../../context/generalStateContext'

const LoanDetails = ({}) => {
  const {currentLoanCustomer } = GeneralStateData()
  console.log(currentLoanCustomer)
  return (
    <div className='w-full h-full bg-green-400'>

    </div>
  )
}

export default LoanDetails