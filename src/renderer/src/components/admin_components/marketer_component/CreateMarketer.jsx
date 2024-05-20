import React from "react";
import { useState } from "react";
import { HandleSubmitDataContext } from "../../../context/dataSubmitContext";
import ImageUploader from "../../ImageUploader";
const CreateMarketer = () => {
  const { handleImageUpload, handleChange, handleSubmit } = HandleSubmitDataContext();
  const [imageUrl, setImageUrl] = useState({});
  const properties = {
    name: "",
    id: "",
  }
  const [marketerData, setMarketerData] = useState({});

  return (
    <div className="w-full  p-[2rem]">
      <fieldset className="w-full pt bg-white border rounded-xl h-full">
        <legend>Create Marketer</legend>
        <form className="w-full p-3 gap-6 flex flex-col ">
          <ImageUploader properties={properties} setMarketerData={setMarketerData} marketerData={marketerData} handleImageUpload={handleImageUpload}/>
          <section className="w-full flex rounded p-5 border">
            <div className="flex items-center w-[50%] gap-4">
              <label htmlFor="marketername">Marketer Name</label>
              <input
                type="text"
                className="border rounded  outline-green-600 w-[70%] "
                id="marketername"
                name="Marketer Name"
                value={marketerData["Marketer Name"]}
                onChange={(event)=>{handleChange(event,setMarketerData)}}
              />
            </div>
            <div className="flex items-center w-[50%] gap-4">
              <label htmlFor="marketercontact">Contact</label>
              <input
                type="tel"
                className="w-full"
                id="marketercontact"
                name="Contact"
                value={marketerData.Contact}
                onChange={(event)=>{handleChange(event,setMarketerData)}}
              />
            </div>
          </section>
          <section className="w-full border rounded flex flex-col gap-5 p-5 ">
            <div className="flex gap-5 items-center">
              <div className="flex items-center gap-4 ">
                <label htmlFor="age">DOB</label>
                <input
                  type="date"
                  name="Dob"
                  id="dob"
                  value={marketerData.Dob}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className=""
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <select
                  name="Gender"
                  id="gender"
                  className=""
                  value={marketerData.Gender}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                >
                  <option value="">---Select Gender---</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex items-center gap-4 w-[70%]">
                <label htmlFor="adrress">Address</label>
                <input
                  type="text"
                  name="Address"
                  id="address"
                  value={marketerData.Address}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-full gap-y-4 flex flex-col dark:bg-darkmode-1 dark:border-slate-600 bg-slate-50 border rounded-md p-4">
              <div className="w-full  flex items-center gap-3 justify-between">
                <label htmlFor="bankname">Bank Name:</label>
                <input
                  value={marketerData["Bank Name"]}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className="w-[65%]"
                  type="text"
                  placeholder="Bank Name"
                  id="bankname"
                  name="Bank Name"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="accountname">Account Name:</label>
                <input
                  value={marketerData["Account Name"]}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className="w-[65%] "
                  type="text"
                  placeholder="Account Name"
                  id="accountname"
                  name="Account Name"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="accountnumber">Account Number:</label>
                <input
                  value={marketerData["Account Number"]}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className="w-[65%] "
                  type="number"
                  placeholder="Account Number"
                  id="accountnumber"
                  name="Account Number"
                />
              </div>
              <div className="w-full flex items-center gap-3 justify-between">
                <label htmlFor="bvn">BVN :</label>
                <input
                  value={marketerData.Bvn}
                  onChange={(event)=>{handleChange(event,setMarketerData)}}
                  className="w-[65%] "
                  type="number"
                  placeholder="Bvn Number"
                  id="bvnnumber"
                  name="Bvn"
                />
              </div>
            </div>
          </section>
          <section className="w-full border flex gap-3 font-bold rounded p-2">
            <button onClick={(event)=>handleSubmit(event,marketerData)} className="btn1">Submit</button>
            <button className="btn2">Cancel</button>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateMarketer;
