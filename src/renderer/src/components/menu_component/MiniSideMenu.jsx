import { NavLink } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

const MiniSideMenu = ({ data }) => {
  return (
    <div className="w-[15%] py-2">
      <div className="w-full text-xl  text-slate-700 h-[5%]">
        <FaRegWindowClose />
      </div>
      <div className="w-full h-1/2 border-y  dark:border-slate-600  border-r dark:bg-darkmode-2  bg-white">
        <ul className="w-full pt-3 pl-3 flex text-sm  flex-col gap-3">
          {data.map((ele, index) => {
            return (
              <li
                key={index + 2 * 3}
                className="w-full  border-b  dark:border-slate-600 flex items-center  relative font-bold text-slate-400 "
              >
                <NavLink
                  to={ele.to}
                  className="peer w-full cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis p-2 dark:hover:bg-darkmode-1 hover:text-green-600 hover:bg-slate-100"
                >
                  {ele.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MiniSideMenu;
