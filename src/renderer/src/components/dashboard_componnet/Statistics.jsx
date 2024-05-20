import { HandleLayoutDesign } from "../../context/layoutDesignContext";
import DashboardBarChart from "./charts/DashboardBarChart";
import RevenueChartArea from "./charts/RevenueChartArea";
import RevenueLineChart from "./charts/RevenueLineChart";

const Statistics = () => {
  const { mode } = HandleLayoutDesign();
  return (
    <div className="w-full flex gap-4 ">
      <div className="justify-center border hover:drop-shadow-lg dark:border-slate-600 dark:bg-darkmode-1 bg-white  p-2  rounded-xl flex w-[70%]">
        <div className="w-full flex flex-col gap-3  ">
          <div className=" flex  p-3 justify-between items-center dark:border-slate-600 border-b text-slate-500">
            <div className="font-bold gap-3 flex items-center ">
              <select className="border-0 outline-none">
                <option value="Market">Market</option>
                <option value="Revenue">Revenue</option>
              </select>
            </div>
            <div className="outline-none">
                <select >
                  <option value="Monthly">Monthly</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Yearly">Yearly</option>
                </select>
            </div>
          </div>
          <div className="flex justify-center items-center">
            {!mode ? <RevenueLineChart /> : <RevenueChartArea />}
          </div>
        </div>
      </div>
      <div className="w-[30%] hover:drop-shadow-lg bg-white border dark:bg-darkmode-1 dark:border-slate-600 rounded-xl h-full "></div>
    </div>
  );
};

export default Statistics;
