import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Table from "../../table_component/Table";
import MiniTopMenu from "../../menu_component/MiniTopMenu";
import CreateMarketer from "./CreateMarketer";

export const Marketer = () => {
  const operation = true;
  const marketerData = [
    {
      "Marketer ID": "",
      Name: "",
      Contact: "",
      Address: "",
      Gender: "",
      "Marital Status": "",
      Age: "",
      status: "",
    },
  ];
  return (
    <div className="w-full">
      <Table tableData={marketerData} operation={operation} />
    </div>
  );
};
