import React from "react";
import { LuLineChart } from "react-icons/lu";
const Card = ({ tag, total, percentage }) => {
  return (
    <div className="w-[50%] flex-shrink-0 h-[80%] border text-slate-600 gap-1 flex flex-col  rounded-lg bg-white p-3">
      <div className="w-full font-bold flex h-[20%]">
        <div className="w-[70%]">Total Employees</div>
        <div className="flex bg-green-300 p-3 text-green-700 rounded-xl justify-evenly w-[30%] items-center">
            <LuLineChart className="flex-shrink-0"/>
            <div>20.0%</div>
        </div>
      </div>
      <div className=" w-full h-[50%] flex items-center text-[3rem] font-bold">20</div>
      <div className="text-slate-400 flex w-full justify-between">
        <div>EMPLOYEE</div>
        <div className="cursor-pointer text-slate-700">See all...</div>
      </div>
    </div>
  );
};

export default Card;
