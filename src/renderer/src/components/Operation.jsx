import React, { useRef, useState } from "react";
import MiniSideMenu from "./menu_component/MiniSideMenu";
import Table from "./table_component/Table";
import * as XLSX from "xlsx";
import MiniTopMenu from "./menu_component/MiniTopMenu";
import { Routes, Route,Navigate } from "react-router-dom";
import Loan from "./Loan";

const Operation = () => {
  const uploadedRef = useRef({});
  const operation = true;
  const [uploadedData, setUploadedData] = useState([]);

  const bulkUploadData = [
    {
      "Market ID": "",
      "Market Name": "",
      Marketer: "",
      Teller: "",
      Amount: "",
      Date: "",
      Condition: "",
      Narration: "",
    },
  ];

  function handleFileUpload(event) {
    event.preventDefault();
    if (uploadedRef.current.value === "") {
      alert("No file chosing");
    } else {
      const file = uploadedRef.current.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const data = new Uint8Array(reader.result);
        const workbook = XLSX.read(data, { type: "array" });

        const worksheetName = workbook.SheetNames[0];
        console.log(worksheetName);
        const worksheet = workbook.Sheets[worksheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: false });

        console.log(jsonData);
        setUploadedData(jsonData);

        uploadedRef.current.value = "";
      };

      reader.readAsArrayBuffer(file);
    }
  }
  const operationMenuData = [{ name: "Update Markets", to: "updatemarket" }];
  return (
    <div className="w-full h-full flex">
      <MiniSideMenu data={operationMenuData} />
      <div className="w-[85%] h-full flex flex-col ">
        <div className="w-full h-[40%] font-bold text-slate-700 flex">
          <div className="w-[50%] flex gap-4 flex-col items-start justify-center relative border-r h-full">
            <div className="absolute top-5 left-5 font-bold text-slate-700">
              Upload Data
            </div>
            <form className="w-full p-2 gap-5 flex flex-col justify-center items-center">
              <input
                ref={uploadedRef}
                accept=".xlsx, .xls"
                type="file"
                className="w-full h-[60%] flex items-center border bg-white border-slate-300 rounded p-2"
              />
              <div className="w-full flex gap-4 justify-center">
                <button
                  onClick={handleFileUpload}
                  className="btn1 "
                >
                  Upload
                </button>
                <button className="btn1 ">
                  Post
                </button>
                <button
                  onClick={() => setUploadedData([])}
                  className="btn2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="w-[50%] relative h-full flex justify-center items-center">
            <div className="absolute top-5 left-5 font-bold text-slate-700">
              Enter Account Numbers
            </div>
            <form className="w-full flex flex-col gap-4">
              <div className="w-full flex flex-col p-3 justify-center gap-5   items-start">
                <input
                  type="number"
                  placeholder="Market ID"
                  className="indent-4 border-slate-300  outline-0 p-2 w-[60%] border h-[30px] rounded-lg"
                />
                <input
                  type="number"
                  placeholder="Amount"
                  className="indent-4 p-2 border-slate-300  outline-0 w-[60%] border h-[30px] rounded-lg"
                />
              </div>
              <div className="w-full flex gap-5 pl-3">
                <button className="btn1">
                  Post
                </button>
                <button className="btn2">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full dark:border-slate-600 border">
          <Table
            operation={operation}
            tableData={
              uploadedData.length === 0 ? bulkUploadData : uploadedData
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Operation;
