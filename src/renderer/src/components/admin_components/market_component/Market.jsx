import React from "react";
import Table from "../../table_component/Table";
import MiniTopMenu from "../../menu_component/MiniTopMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateBranch from "../branch_component'/CreateBranch";
import CreateMarket from "./CreateMarket";
const Market = () => {
  const operation = true;
  const marketData = [
    {
      "Market ID": "001",
      Name: "Oshodi",
      "Head Marketer": "Ego Ugwuanyi",
      "Total Customer": 200,
      Contact: 913309108,
      "Control Branch": "Mushin",
      "Branch Contact": 9125943429,
      Status: "Active",
    },
  ];
  return (
    <div className="w-full h-full ">
      <Table operation={operation} tableData={marketData} />
    </div>
  );
};

export default Market;
