import React from 'react'
import Table from '../table_component/Table'

const Customers = () => {
  const tableData = [
    {
      LoanID: '001',
      Name: 'Damilola Jibowu',
      Loan: '110,000',
      'Percentage(%)': '10%',
      Duration: '5 Months',
      'Unit Interest': '20,000',
      'Monthly Payment': '50,000',
      Status: true
    }
  ]
  return (
    <div className="w-full h-full">
      <Table tableData={tableData} process={true} />
    </div>
  )
}

export default Customers
