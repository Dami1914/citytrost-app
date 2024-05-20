import { useEffect, useRef, useState } from 'react';
import { FaExpand, FaFilter} from "react-icons/fa";
import { IoMdContract } from "react-icons/io";
import Table from '../table_component/Table';
import { HandleLayoutDesign } from '../../context/layoutDesignContext';
const PerfomanceTable = () => {
  const perfomanceRef = useRef({})
  const [expand,setExpand] = useState(false)

  //not all table needs operation header, so i am using this to filter off operation on my table
  const operation = false

  const {handleExpand} = HandleLayoutDesign()


  const tableData = [
    {
     "MRKT ID": "001",
      Market:"Mushin",
      Markerter:"Ego Nwabali",
      "Curr Month Trgt":1000000,
      "Actual Daily RRT":30000,
      "Avrg Daily RRT":2000,
      "Actual Returns":500000,
      MTD:300000,
      Difference:-40000,
      Percentage: "50%",
      Status: "Poor"
    },
    {
      "MRKT ID": "001",
       Market:"Mushin",
       Markerter:"Ego Nwabali",
       "Curr Month Trgt":1000000,
       "Actual Daily RRT":30000,
       "Avrg Daily RRT":2000,
       "Actual Returns":500000,
       MTD:300000,
       Difference:-40000,
       Percentage: "50%",
       Status: false
     }
  ]

  return (
    <div ref={perfomanceRef} id="performanceTable" className="hover:drop-shadow-lg w-full  dark:bg-darkmode-1 h-full  bg-white p-4 dark:border-slate-600 border rounded-xl">
        <div className="flex w-full border-b dark:text-slate-500 dark:border-b-slate-600 p-2 font-bold dark:text-darkmode-dark text-slate-700">
          <div className="w-[20%]">Perfomance Table</div>
          <div className='w-[60%] flex gap-10'>
            <div className='flex gap-3 items-center bg-green-200 px-2 flex-grow-0 text-green-600 rounded-xl '>
              <div>Days Left :</div>
              <div>21</div>
            </div>
            <div className='flex dark:bg-d bg-green-600 text-green-200 px-2 rounded-xl gap-3 items-center'>
              <div>Target :</div>
              <div>90,000,000</div>
            </div>
            <div className='flex items-center gap-3 bg-red-300 rounded-xl px-2 text-red-600'>
              <div>Current Month :</div>
              <div>March</div>
            </div>
          </div>
          <div className="w-[20%] items-center gap-5 flex justify-end ">
            <div className='bg-green-200 text-green-600 text-sm cursor-pointer gap-3 flex items-center rounded-xl p-1 px-2'>
              <div className=''>Filter & Sort</div>
              <div className=''>
                <FaFilter/>
              </div>
            </div>
            <div className='cursor-pointer relative'>
              <div  className='peer border border-slate-300 p-2 rounded-lg'>
                 {
                  expand? <IoMdContract className='text-lg' onClick={()=>{handleExpand(perfomanceRef,setExpand,expand)}}/>: <FaExpand onClick={()=>{handleExpand(perfomanceRef,setExpand,expand)}}/>
                 }
              </div>
              <div className='transition-all absolute peer-hover:text-slate-700 peer-hover:bg-white peer-hover:flex top-15 -left-20 text-transparent p-2 rounded-xl drop-shadow-xl '>click to expand</div>
            </div>
          </div>
        </div>
        <Table operation={operation} tableData={tableData}/>
      </div>
  )
}

export default PerfomanceTable