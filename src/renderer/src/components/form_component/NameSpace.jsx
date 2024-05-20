import React from 'react'

const NameSpace = () => {
  return (
    <div className="flex gap-5">
      <div className="w-full flex items-center justify-between">
        <label htmlFor="firstname">First Name:</label>
        <input className="w-[70%]" type="text" id="firstname" name="firstname" />
      </div>
      <div className="w-full flex items-center justify-between">
        <label htmlFor="middlename">Middle Name:</label>
        <input className="w-[70%]" type="text" id="middlename" name="middlename" />
      </div>
      <div className="w-full flex items-center justify-between">
        <label htmlFor="lastname">Last Name:</label>
        <input className="w-[70%]" type="text" id="lastname" name="lastname" />
      </div>
    </div>
  )
}

export default NameSpace
