import { FaPlus } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MiniTopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  

  const currentPath = location.pathname
    .split("/")
    .slice(location.pathname.split("/").length-1)
    .join("/");
  function handleNavigate() {
    //this stores the current location i.e admin,loan, and so on
    const currentLocation = location.pathname.split("/").slice(location.pathname.split("/").length-2,-1).join("/")
    navigate(`${currentLocation}/create${currentPath}`);
  }
 
  console.log(location.pathname.split("/").length - 1);
  //values to check for is used to stop the rendering of click to add button
  // so each page will not have the click to add button
  const valuesToCheckFor = [
    "dashboard",
    "operation",
    "createuser",
    "createbranch",
    "createmarket",
    "createmarketer",
    "loandetails",
    "createloans",
    "pendingloans",
    "createcustomers"
  ];
  return (
    <div className="w-full  h-full flex border-b dark:border-b-slate-600 ">
      <div className="w-[70%] h-full flex gap-3 px-4 items-center">
        {location.pathname.split("/").map((ele, index) => {
          return (
            <NavLink
              key={`${ele} ${index}`}
              //sets to to their the respective paths by using the location.pathname property
              //this splits the location.pathname strings thereby returning an array representation
              //the slice function reduced the array content based on the arguement passed to it 
              //in this case the first arguement "1" removes the space that was also stored in the
              //in the process of spliting the array, while the "index+1" simply removes any other element
              //right after the targeted endpoint so as to return something like this "userpage/{endpoint}"
              to={`/${location.pathname
                .split("/")
                .slice(1, index + 1)
                .join("/")}`}
              className="flex hover:text-slate-800 text-slate-500 dark:text-slate-400  cursor-pointer items-center gap-3"
            >
              <div>{ele}</div>
              <div>
                <FaChevronRight />
              </div>
            </NavLink>
          );
          //removes the first element in the array that's "userpage" in this case
        }).splice(2)}
      </div>
      {valuesToCheckFor.some((ele) => {
        return location.pathname.split("/").includes(ele);
      }) ? (
        ""
      ) : (
        <div className="w-[30%] h-full px-10 flex justify-end items-center ">
          <div className="flex gap-3 w-full items-center justify-center">
            <div className="w-[30px] hover: border-slate-500 cursor-pointer text-slate-600 flex items-center justify-center h-[30px] border rounded-2xl">
              <FaPlus onClick={handleNavigate} />
            </div>
            <div>
              
              Click to add {""}
              {
              //the returned value here is dynamically concatenated to "Click to add"
              location.pathname
                .split("/")
                //dynamically return only the last element in the array to be concatenated to "click to add"
                .slice(location.pathname.split("/").length-1)
                .join("/")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniTopMenu;
