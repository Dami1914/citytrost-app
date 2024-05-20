import React from "react";
import MiniTopMenu from "../menu_component/MiniTopMenu";
import { Navigate, Route, Routes } from "react-router-dom";
import Table from '../table_component/Table'

const Loans = () => {
  const tableData = [
    {
      LoanID: "001",
      Name: "Damilola Jibowu",
      "Loan": "110,000",
      "Percentage(%)": "10%",
      Duration:"5 Months",
      "Unit Interest": "20,000",
      "Monthly Payment": "50,000",
      "Status": true,
    }
  ]
   
  return (
    <div className="w-full  h-full">
        <Table tableData={tableData } operation={true} />
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
};

export default Loans;
