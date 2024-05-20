import React, { useState } from 'react'
import { HandleSubmitDataContext } from '../../../context/dataSubmitContext'
import NameSpace from '../../form_component/NameSpace'

const CreateUser = () => {
  const { handleChange, handleImageUpload, handleSubmit } = HandleSubmitDataContext()
  const [userData, setUserData] = useState({})

  return (
    <div className="w-full dark:bg-darkmode-2  flex items-center justify-center p-[2rem] text-sm">
      <fieldset className="w-full dark:text-slate-500 dark:bg-darkmode-1 dark:border-slate-600 bg-white border h-full flex flex-col gap-5 rounded-xl">
        <legend>Create User</legend>
        <form className="w-full h-full flex flex-col gap-6 p-4">
          <div className="w-full rounded-xl bg-green-600 h-[5px]"></div>
          <section className="w-full justify-center items-center flex-col gap-4 flex p-4">
            <div className="w-[11em] h-[11em] dark:border-slate-600 border border-green-500 p-1 rounded-[50%] overflow-hidden flex justify-center items-center ">
              {userData?.imageUrl ? (
                <img
                  src={userData?.imageUrl}
                  className="w-full h-full rounded-[50%]"
                  alt="user image"
                />
              ) : (
                ''
              )}
            </div>
            <div className="w-full  flex justify-center items-center gap-3 ">
              <label htmlFor="" className="mb-1">
                Upload Image
              </label>
              <input
                onChange={(event) => handleImageUpload(event, setUserData)}
                type="file"
                accept="image/*"
                className="border rounded accent-slate-600"
              />
            </div>
          </section>
          <NameSpace />
          <section className="w-full flex border dark:bg-darkmode-2 dark:border-slate-600 rounded flex-col py-3 ">
            <div className="w-full flex ">
              <div className="w-full flex gap-4 p-4  items-center">
                <label htmlFor="">DOB</label>
                <input
                  type="date"
                  className=""
                  value={userData.DOB}
                  name="DOB"
                  onChange={(event) => handleChange(event, setUserData)}
                  placeholder="DOB"
                />
              </div>
              <div className="w-full flex gap-4 p-4 items-center">
                <label htmlFor="">Gender</label>
                <select
                  name="Gender"
                  className=""
                  value={userData.Gender}
                  onChange={(event) => handleChange(event, setUserData)}
                >
                  <option value="">--Choose Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="w-full flex gap-4 p-4 items-center">
                <label htmlFor="">Position</label>
                <select
                  value={userData.Position}
                  onChange={(event) => handleChange(event, setUserData)}
                  name="Position"
                  id="position"
                  className="gap-4"
                >
                  <option value="">--Choose Position--</option>
                  <option value="IT">IT</option>
                  <option value="Teller">Teller</option>
                  <option value="Loan Officer">Loan Officer</option>
                </select>
              </div>
            </div>
            <div className="w-full flex p-4 gap-4 ">
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Contact</label>
                <input
                  type="tel"
                  className="w-full outline-green-400  indent-3 border"
                  placeholder="Contact"
                  name="Contact"
                  value={userData.Contact}
                  onChange={(event) => handleChange(event, setUserData)}
                />
              </div>
              <div className="w-full rounded gap-3 flex">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="border outline-green-400  indent-3 w-full"
                  placeholder="Address"
                  value={userData.Address}
                  onChange={(event) => handleChange(event, setUserData)}
                  name="Address"
                />
              </div>
            </div>
            <div className="flex h-[30px]  gap-3 items-center justify-center px-4">
              <div className="w-full justify-around items-center rounded gap-3 flex">
                <label htmlFor="" className="">
                  Branch
                </label>
                <input
                  type="text"
                  className=" w-full "
                  placeholder="Branch"
                  value={userData.Branch}
                  name="Branch"
                  onChange={(event) => handleChange(event, setUserData)}
                />
              </div>
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="border w-full"
                  placeholder="Email"
                  value={userData.Email}
                  name="Email"
                  onChange={(event) => handleChange(event, setUserData)}
                />
              </div>
            </div>
          </section>
          <section className="w-full items-center flex gap-4">
            <button className="btn1" onClick={(event) => handleSubmit(event, userData)}>
              Submit
            </button>
            <button className="btn2">Cancel</button>
          </section>
        </form>
      </fieldset>
    </div>
  )
}

export default CreateUser
