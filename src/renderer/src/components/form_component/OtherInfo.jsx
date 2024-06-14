import React, { useEffect, useRef } from 'react'
import NextOfKin from '../savings/component/NextOfKin'
import { HandleSubmitDataContext } from '../../context/dataSubmitContext'
import occupationsBySector from '../../assets/data/sector_occupation'

const OtherInfo = ({ NextOfKin, path }) => {
  const { handleChange, setAccountOpeningData, controledValue } = HandleSubmitDataContext()
  console.log(occupationsBySector)
  const sectorRef = useRef(null)
  const occupationRef = useRef(null)

  useEffect(() => {
    console.log('this happens to be', occupationRef.current)
    handleChange(occupationRef.current, setAccountOpeningData, 0,"reset")
  }, [sectorRef.current?.value])

  return (
    <div className="flex w-full flex-col gap-4 ">
      <section className="flex flex-col gap-3 w-full">
        <div className="flex justify-between w-full">
          <div className="flex w-full gap-6 items-center">
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              id="dob"
              name={`${path}.age`}
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.age`)}
            />
          </div>
          <div className="flex gap-5 w-[50%] items-center">
            <label htmlFor="gender">Gender:</label>
            <select
              name={`${path}.gender`}
              id="gender"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.gender`)}
            >
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
          <div className="flex w-full items-center gap-5 justify-end">
            <label htmlFor="maritalstatus">Marital Status:</label>
            <select
              name={`${path}.marital_status`}
              id="maritalstatus"
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.marital_status`)}
            >
              <option value="">---Choose---</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className=" w-full gap-4 flex items-center ">
            <label htmlFor="sector">Sector:</label>
            <select
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.sector`)}
              name={`${path}.sector`}
              id="sector"
              className="w-[31%]"
              ref={sectorRef}
            >
              <option value="">---Choose---</option>
              {Object.keys(occupationsBySector).map((ele, index) => {
                return <option key={index + ele}>{ele}</option>
              })}
            </select>
          </div>
          <div className="flex w-[50%] items-center">
            <label htmlFor="occupation">Occupation:</label>
            <select
              ref={occupationRef}
              onChange={(event) => handleChange(event, setAccountOpeningData)}
              value={controledValue(`${path}.occupation`)}
              name={`${path}.occupation`}
              id="occupation"
              className="overflow-hidden w-[55%]"
            >
              <option value="">---Choose---</option>
              {occupationsBySector[controledValue(`${path}.sector`)]?.map((ele, index) => (
                <option className="w-[50%] overflow-hidden" key={index + 'occupation'}>
                  {ele}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end w-full">
            {NextOfKin ? (
              <div className="gap-5 flex items-center justify-between">
                <label htmlFor="relationship">Relationship:</label>
                <select
                  onChange={(event) => handleChange(event, setAccountOpeningData)}
                  value={controledValue('nok.other_Info.relationship')}
                  name="nok.other_Info.relationship"
                  id="relationship"
                >
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
              <div className="gap-5 flex items-center">
                <label htmlFor="accountofficer">Account Officer:</label>
                <select
                  onChange={(event) => handleChange(event, setAccountOpeningData)}
                  value={controledValue(`${path}.account_officer`)}
                  name={`${path}.account_officer`}
                  id="accountofficer"
                >
                  <option className="w-full flex justify-center" value="">
                    ---Choose---
                  </option>
                  <option className="w-full flex justify-center" value="damilola123">
                    damilola123
                  </option>
                </select>
              </div>
            )}
          </div>
        </div>
      </section>
      <hr />
    </div>
  )
}

export default OtherInfo
