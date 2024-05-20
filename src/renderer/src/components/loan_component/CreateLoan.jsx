import React, { useState } from "react";
import ImageUploader from "../ImageUploader";
import ExistingCustomer from "./create_loan_component/ExistingCustomer";
import NewCustomer from "./create_loan_component/NewCustomer";
import GroupLoan from "./create_loan_component/GroupLoan";
import DisplayMapComponents from "../DisplayMapComponents";

const CreateLoan = () => {
 /* const [loanData, setLoanData] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Address: "",
    Gender: "",
    MaritalStatus: "",
    Dob: "",
    SOO: "",
    ResidentialState: "",
    Country: "",
    Contact: "",
    Email: "",
    LoanAmount: "",
    Duration: "",
    Interest: "",
    LoanType: "",
    StartDate: "",
    GuarantorsName: "",
    GurantorsContact: "",
    GurantorsAddress: "",
  });
  */

  const createloans = [
    { name: "New Customer", component: <NewCustomer />, },
    { name: "Existing Customer", component: <ExistingCustomer/>,},
    { name: "Group Loan", component: <GroupLoan/>, },
  ]

 

  return (
    <div className="w-full h-full ">
      <form className="w-full  h-full overflow-scroll scroll-my-60 scrollbar-hide border-inherit rounded-2xl ">
          <DisplayMapComponents componentData={createloans}/>
      </form>
    </div>
  );
};

export default CreateLoan;
