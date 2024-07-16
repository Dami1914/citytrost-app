/* eslint-disable react/jsx-key */
import React, { useEffect, useRef, useState } from 'react'
import TableHead from './TableHead'
import TableRow from './TableRow'

const Table = ({ tableData, operation, PopUpComponent, popUpTypePath }) => {
  const [popUp, setPopUp] = useState(true)
  const rowRefs = useRef([])
  console.log("this is the werey empty array",tableData)
  return (
    <div className="w-full">
      <div className="w-full bg-white  dark:bg-darkmode-2  h-[40%]">
        <form className="w-1/2 p-3">
          <input type="search" className="w-2/3" placeholder="Search ID and Name" />
        </form>
      </div>
      {tableData.length === 0 ? (
        ""
      ) : (
        <table className="w-full overflow-scroll  dark:bg-darkmode-2 dark:border-0 dark:text-darkmode-dark  text-slate-600 text-sm">
          <thead className="border-b dark:bg-darkmode-1 bg-white dark:border-b-slate-600 dark:border-darkmode-1">
            <tr className="">
              {<TableHead elem={tableData[0]} />}
              {operation ? <th className="font-normal  p-2">Operation</th> : ''}
            </tr>
          </thead>
          <tbody className="">
            {tableData?.map((ele, index) => {
              return (
                <TableRow
                  operation={operation}
                  index={index}
                  key={index}
                  elem={ele}
                  rowRefs={rowRefs}
                  popUpTypePath={popUpTypePath}
                />
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Table
