import React from 'react'

const AddressInfo = () => {
  return (
    <section className="flex gap-8 w-full items-center p-3  border rounded-2xl">
      <div className="flex w-full flex-col gap-4">
        <div className="w-full flex items-center  justify-between">
          <label htmlFor="customeremail">Email:</label>
          <input className="w-[85%]" type="email" id="customeremail" name="customeremail" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label htmlFor="customeraddress">Address:</label>
          <input className="w-[85%]" type="text" id="customeraddress" name="customeraddress" />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="officeaddress">Office Address:</label>
          <input className="w-[85%]" type="text" name="officeaddress" id="officeaddress" />
        </div>
        <div className="flex items-center w-full justify-between">
          <label htmlFor="contact1">Contact 1:</label>
          <input className="w-[70%]" type="tel" id="contact1" name="contact1" />
        </div>
        <div className="flex items-center w-full justify-between">
          <label htmlFor="contact2">Contact 2:</label>
          <input className="w-[70%]" type="tel" id="contact2" name="contact2" />
        </div>
      </div>
      <div className="w-full h-full flex items-center gap-5">
        <div>
          <label htmlFor="customerimage"> Customer Image</label>
          <input type="file" id="customerimage" name="customerimage" />
        </div>
        <div className="w-[100px] border dark:border-slate-600 h-[100px] rounded-2xl"></div>
      </div>
    </section>
  )
}

export default AddressInfo
