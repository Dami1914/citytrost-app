import React from 'react'

const AccountInfo = () => {
  return (
    <section className="border flex gap-5 p-5 rounded-2xl">
      <div className="w-full flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <label htmlFor="bankname">Bank Name:</label>
          <input type="text" className="w-[70%]" name="bankname" id="bankname" />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="accountname">Account Name:</label>
          <input type="text" className="w-[70%]" name="accountname" id="accountname" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
          <label htmlFor="accountnumber">Account Number:</label>
          <input type="text" className="w-[70%]" name="accountnumber" id="accountnumber" />
        </div>
        <div className="flex w-full justify-between items-center">
          <label htmlFor="bvn">BVN:</label>
          <input type="text" className="w-[70%]" name="bvn" id="bvn" />
        </div>
      </div>
    </section>
  )
}

export default AccountInfo
