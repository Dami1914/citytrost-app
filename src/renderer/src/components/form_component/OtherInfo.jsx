import React from 'react'
import NextOfKin from '../savings/component/NextOfKin'

const OtherInfo = ({ NextOfKin }) => {
  return (
    <div className="flex w-full flex-col gap-4 ">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-2  justify-between">
          <label htmlFor="dob">DOB:</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="gender">Gender:</label>
          <select name="gender" className="w-[60%]" id="gender">
            <option className="w-full flex justify-center" value="">
              ---Choose---
            </option>
            <option className="w-full flex justify-center" value="Male">
              Male
            </option>
            <option className="w-full flex justify-center" value="Female">
              Female
            </option>
          </select>
        </div>
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="maritalstatus">Marital Status:</label>
          <select name="maritalstatus" id="maritalstatus">
            <option value="">--Choose--</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        {NextOfKin ? (
          <div className="flex items-center gap-3">
            <label htmlFor="relationship">Relationship:</label>
            <select name="relationship" className="w-[60%]" id="relationship">
              <option className="w-full flex justify-center" value="">
                ---Choose---
              </option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Wife">Wife</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Uncle">Uncle</option>
              <option value="Aunty">Aunty</option>
              <option value="Niece">Niece</option>
              <option value="Niece">Nephew</option>
              <option value="Friend">Friend</option>
            </select>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <label htmlFor="accountofficer">Account Officer:</label>
            <select name="accountofficer" className="w-[60%]" id="accountofficer">
              <option className="w-full flex justify-center" value="">
                ---Choose---
              </option>
            </select>
          </div>
        )}
      </section>
      <hr />
      <section className="flex justify-between">
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="country">Country(Birth):</label>
          <select name="country" id="country">
            <option value="">--Choose--</option>
          </select>
        </div>
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="stateoforigin">State(Birth):</label>
          <select name="stateoforigin" id="stateoforigin">
            <option value="">--Choose--</option>
          </select>
        </div>
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="lga">Lga(Birth):</label>
          <select name="lga" id="lga">
            <option value="">--Choose--</option>
          </select>
        </div>
      </section>
      <section className="flex justify-between">
        <div className="gap-1 flex items-center justify-between">
          <label htmlFor="residecountry">Country(Resides):</label>
          <select name="residecountry" id="residecountry">
            <option value="">--Choose--</option>
          </select>
        </div>
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="residestate">State(Resides):</label>
          <select name="residestate" id="residestate">
            <option value="">--Choose--</option>
          </select>
        </div>
        <div className="gap-5 flex items-center justify-between">
          <label htmlFor="residelga">Lga(Resides):</label>
          <select name="residelga" id="residelga">
            <option value="">--Choose--</option>
          </select>
        </div>
      </section>
    </div>
  )
}

export default OtherInfo
