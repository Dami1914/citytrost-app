import React, { useRef, useState } from 'react'
import ImageUploader from '../../ImageUploader'
import Table from '../../table_component/Table'
import { FaExpand, FaFilter } from 'react-icons/fa'
import { HandleLayoutDesign } from '../../../context/layoutDesignContext'
import { motion } from 'framer-motion'

const NewCustomer = () => {
  const loanOverviewRef = useRef({})
  const [expand, setExpand] = useState(false)
  const { handleExpand } = HandleLayoutDesign()
  const paymentOverviewTableData = [
    {
      Dates: '2/2/2023',
      Principals: '50,000',
      'Monthly Interest': '10,000',
      'Avrg Monthly Interest': '10,000',
      'Monthly Returns': '20,000',
      'Avrg Monthly Returns': '20,000'
    },
    {
      Dates: '2/2/2023',
      Principals: '50,000',
      'Monthly Interest': '10,000',
      'Avrg Monthly Interest': '10,000',
      'Monthly Returns': '20,000',
      'Avrg Monthly Returns': '20,000'
    }
  ]
  return (
    <fieldset className="w-[95%] right-[1000] bg-white border absolute p-2 rounded-md   dark:border-slate-600 ">
      <div className="w-full flex flex-col gap-4  p-5">
        <section className="w-full flex flex-col gap-3">
          <section className="w-full flex border p-3 rounded-lg">
            <div className="w-full flex items-center gap-3">
              <label htmlFor="first_name">First Name:</label>
              <input className="w-[80%]" type="text" id="first_name" name="First Name" required />
            </div>
            <div className="w-full flex items-center gap-3">
              <label htmlFor="last_name">Last Name:</label>
              <input className="w-[80%]" type="text" id="last_name" name="Last Name" required />
            </div>
          </section>
          <section className="w-full flex border rounded-lg items-center p-3 justify-between">
            <div className="w-full flex items-center gap-3 justify-start">
              <label htmlFor="dob">Dob</label>
              <input className="" type="date" id="dob" name="Dob" required />
            </div>
            <div className="w-full flex items-center gap-3 justify-center">
              <label htmlFor="gender">Gender</label>
              <select name="Gender" id="gender">
                <option value="">--Choose Gender--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="w-full flex items-center gap-3 justify-end">
              <label htmlFor="marital_status">Marital Status</label>
              <select name="Marital Status" id="marital_status">
                <option value="">--Choose Status--</option>
                <option value="Married">Married</option>
                <option value="Single">single</option>
                <option value="Other">other</option>
              </select>
            </div>
          </section>
          <section className="w-full flex flex-col border rounded-lg p-3 gap-5">
            <div className="w-full flex gap-3 ">
              <div className="w-full flex items-center gap-3">
                <label htmlFor="contact">Contact</label>
                <input type="tel" className="w-full" id="contact" name="Contact" required />
              </div>
              <div className="w-full flex items-center justify-center gap-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="w-full" id="email" name="Email" required />
              </div>
              <div className="w-full flex items-center justify-end gap-3">
                <label htmlFor="residential_state">Residential State</label>
                <select id="residential_state" name="Residential State">
                  <option value="">--Choose State--</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="w-full flex gap-3 ">
              <div className="w-[40%] flex items-center justify-start gap-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="w-full" id="address" name="Address" required />
              </div>
              <div className="w-[30%] flex items-center justify-center gap-3">
                <label htmlFor="state_of_origin">State of Origin</label>
                <select name="State of Origin" id="state_of_origin">
                  <option value="">--Choose State--</option>
                  <option value=""></option>
                </select>
              </div>
              <div className="w-[30%] flex justify-end items-center gap-3">
                <label htmlFor="local_gov_area">Lga</label>
                <select id="local_gov_area" name="Lga">
                  <option value="">--Choose Lga--</option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </section>
        </section>
        <fieldset className="w-full gap-3 flex">
          <legend>Loan info</legend>
          <section className="w-[40%]  border rounded-lg p-3 flex flex-col gap-5  ">
            <div className="w-full justify-between  gap-3 flex items-center">
              <label htmlFor="loan_amount">Loan Amount Requested</label>
              <input
                type="number"
                id="loan_amount"
                className="w-[40%]"
                name="loan_amount"
                required
              />
            </div>
            <div className="w-full gap-3 justify-between  flex items-center">
              <label htmlFor="interest_rate">Interest Rate (%)</label>
              <input className="w-[40%]" type="text" id="interest_rate" name="Interest" required />
            </div>
            <div className="w-full gap-3 justify-between  flex items-center">
              <label htmlFor="repayment_period">Repayment Period (months)</label>
              <input
                className="w-[40%]"
                type="number"
                id="repayment_period"
                name="rRepayment Period"
                required
              />
            </div>
            <div className="w-full gap-3 justify-between flex items-center">
              <label htmlFor="lrepayment_method">Repayment Method</label>
              <select id="repayment_method" className="w-[40%]" name="Repayement Method" required>
                <option value="">Select Repayment Method</option>
                <option value="Fixed">Fixed</option>
                <option value="Reducingn">Reducing</option>
              </select>
            </div>
            <div className="w-full gap-3 justify-between flex items-center">
              <label htmlFor="loan_type">Loan Type</label>
              <select id="loan_type" className="w-[40%]" name="loan_type" required>
                <option value="">Select Loan Type</option>
                <option value="Personal Loan">Personal Loan</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Auto Loan">Auto Loan</option>
              </select>
            </div>
          </section>
          <section
            ref={loanOverviewRef}
            className="w-[60%]  dark:bg-darkmode-2 bg-white rounded-lg border"
          >
            <div className="w-full flex justify-between p-2 border-b border-inherit">
              <span className="flex items-center">Loan Payment Overview</span>
            </div>
            <div>
              <Table tableData={paymentOverviewTableData} operation={false} />
            </div>
          </section>
        </fieldset>
        <fieldset>
          <legend>Next of kin</legend>
          <section>
            <div>
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" placeholder="First Name" type="text" />
            </div>
            <div>
              <label htmlFor="Second A"></label>
            </div>
          </section>
        </fieldset>
      </div>
    </fieldset>
  )
}

export default NewCustomer
