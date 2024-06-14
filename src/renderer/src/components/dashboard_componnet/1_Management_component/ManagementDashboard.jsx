import React from 'react'
import Statistics from '../Statistics'
import PerfomanceTable from '../PerformanceTable'

const ManagementDashboard = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <div className="hover:drop-shadow-lg p-3 h-[30%] flex-shrink-0 bg-white dark:border-slate-600  dark:bg-darkmode-1  border flex gap-5 items-center  w-full   rounded-xl">
        <div className="w-[30%] dark:border-slate-600 h-full rounded-xl border">
            
        </div>
      </div>
      <Statistics />
      <PerfomanceTable />
    </div>
  )
}

export default ManagementDashboard
