import React from "react";
import { RiExpandUpDownLine } from "react-icons/ri";

const TableHead = ({elem}) => {

  return Object.keys(elem).map((ele, index) => {
    return (
      <th
        key={index * 1 - 2}
        className="text-slate-500 sticky top-0 m-0 dark:text-slate-400 font-normal p-2"
      >
        <span className="flex items-center gap-2 justify-center">
          {ele} <RiExpandUpDownLine />
        </span>
      </th>
    );
  });
};

export default TableHead;
