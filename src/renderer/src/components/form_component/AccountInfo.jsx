import React from 'react'
import { HandleSubmitDataContext } from '../../context/dataSubmitContext'
const AccountInfo = ({ path }) => {
  const { handleChange, setAccountOpeningData, controledValue } = HandleSubmitDataContext()
  return (
    <section className="border flex gap-5 p-5 rounded-2xl">
      <div className="w-full flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <label htmlFor="bankname">Bank Name:</label>
          <input
            onChange={(event) => handleChange(event, setAccountOpeningData)}
            value={controledValue(`${path}.bank_name`)}
            type="text"
            className="w-[70%]"
            name={`${path}.bank_name`}
            id="bankname"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="accountname">Account Name:</label>
          <input
            onChange={(event) => handleChange(event, setAccountOpeningData)}
            value={controledValue(`${path}.account_name`)}
            type="text"
            className="w-[70%]"
            name={`${path}.account_name`}
            id="accountname"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <label htmlFor="accountnumber">Account Number:</label>
          <input
            onChange={(event) => handleChange(event, setAccountOpeningData)}
            value={controledValue(`${path}.account_number`)}
            type="text"
            className="w-[70%]"
            name={`${path}.account_number`}
            id="accountnumber"
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="bvn">BVN:</label>
          <input
            type="text"
            className="w-[70%]"
            onChange={(event) => handleChange(event, setAccountOpeningData)}
            value={controledValue(`${path}.bvn`)}
            name={`${path}.bvn`}
            id="bvn"
          />
        </div>
      </div>
    </section>
  )
}

export default AccountInfo
