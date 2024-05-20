import React, { useState } from "react";
import { HandleSubmitDataContext } from "../../../context/dataSubmitContext";

const CreateMarket = () => {
  const {handleChange,handleSubmit} = HandleSubmitDataContext()

  const [marketData,setMarketData] = useState({})

  return (
    <div className="w-full   p-[2rem]">
      <fieldset className="border h-full bg-white rounded-xl">
        <legend>Create Market</legend>
        <form className="w-full p-3 flex flex-col gap-5">
          <div className="w-full mb-5 rounded-xl bg-green-600 h-[5px]"></div>
          <section className="w-full flex flex-col rounded-xl gap-8 dark:bg-darkmode-1 dark:border-slate-600 bg-white justify-between p-4 rounded border">
            <div className="flex gap-4">
              <label htmlFor="">Market Name</label>
              <input name="Market Name" value={marketData["Market Name"]} onChange={(event)=>{handleChange(event,setMarketData)}} type="text" className="border rounded   outline-green-600 "  />
            </div>
            <div className="flex  gap-4">
            <label htmlFor="marketer">Head Marketer</label>
            <select onChange={(event)=>{handleChange(event,setMarketData)}} value={marketData["Head Marketer"]} name="Head Marketer" id="marketer" className="border outline-green-600  rounded px-2">
                <option value="">--Choose Marketer--</option>
              </select>
            </div>
            <div className="flex  gap-4">
              <label htmlFor="">Contact</label>
              <input onChange={(event)=>{handleChange(event,setMarketData)}}  value={marketData.Contact} type="tel" className="border rounded  outline-green-600 " id="contact" name="Contact"  />
            </div>
            <div className="flex gap-4">
              <label htmlFor="branch">Branch</label>
              <select onChange={(event)=>{handleChange(event,setMarketData)}} value={marketData.Branch} name="Branch" id="branch" className="border  outline-green-600 flex gap-3 rounded">
                <option value="">---Choose Branch---</option>
                <option value="Mushin">Mushin</option>
                <option value="Ilasamaja">Ilasamja</option>
                <option value="Ilasamaja">Ladipo</option>
              </select>
            </div>
          </section>
          <section className="flex  gap-3 border rounded p-2 font-bold">
            <button onClick={(event)=>handleSubmit(event,marketData)} className="btn1">Submit</button>
            <button className="btn2">Cancel</button>
          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default CreateMarket;
