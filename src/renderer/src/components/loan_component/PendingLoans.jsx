import React from 'react'
import Table from '../table_component/Table'


const PendingLoans = () => {
    const pendingloans = [
        {
          LoanID: "001",
          Name: "Damilola Jibowu",
          "Loan": "110,000",
          "Percentage(%)": "10%",
          Duration:"5 Months",
          "Unit Interest": "20,000",
          "Monthly Payment": "50,000",
        }
      ]        
      
  return (
    <div>
        <Table tableData={pendingloans} operation={true}/>
    </div>
  )
}

export default PendingLoans