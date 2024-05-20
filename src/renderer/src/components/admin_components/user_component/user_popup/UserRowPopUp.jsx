import React, { useEffect, useRef, useState } from "react";
import { FaStar, FaUser } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { TbFileInfo } from "react-icons/tb";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

const UserRowPopUp = ({ elem }) => {
  const infoRef = useRef(null);
  const [employmentInfo, setEmploymentInfo] = useState(false);
  const [about, SetAbout] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {});

  console.log(elem);
  return (
    <div className="w-full rounded h-full entered p-2 flex  gap-2 ">
      <div className="w-1/3 h-full relative border dark:border-0 flex flex-col gap-3 rounded-xl p-2 bg-lightmode-2  dark:border-b-slate-600 dark:bg-darkmode-2">
        <div className="w-full h-1/2 flex overflow-hidden  rounded-xl">
          <img
            src="/src/assets/images/userimg.jpg"
            width="100%"
            alt="user Image"
          />
        </div>
        <div className="w-full flex flex-col gap-3 p-5 font-medium h-1/2 border-t dark:border-slate-600">
          <div className="flex gap-5 w-full justify-between items-center">
            <span className="text-md ">ID:</span>
            <span>001</span>
          </div>
          <div className="flex gap-2 w-full justify-between items-center">
            <span className="text-md ">Till No:</span>
            <span>00100000000010</span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-5 rounded-xl p-3">
        <div className="w-full h-1/2 border dark:border-slate-600 p-4 flex items-center rounded-xl">
          <ul className="flex flex-col gap-5 p-2 w-1/2">
            <li className="flex gap-5 items-center">
              <span className="text-2xl font-bold flex items-center">
                Damilola Jibowu
              </span>
              <span className="flex items-center gap-4 text-slate-400">
                <span className="">
                  <FaLocationDot />
                </span>
                <span>Lagos, LG</span>
              </span>
            </li>
            <li className="text-green-600 font-bold">IT</li>
            <li>
              <span>RANKINGS</span>
              <span>
                <FaStar />
              </span>
            </li>
            <li className="flex items-center gap-10 ">
              <div  className="cursor-pointer flex items-center gap-2">
                <span>Send Message</span>
                <span>
                  <FaMessage />
                </span>
              </div>
              <div className="cursor-pointer flex items-center gap-2">
                <span>Contact</span>
                <span>
                  <IoCall />
                </span>
              </div>
              <div className="cursor-pointer flex items-center gap-2">
                <span>Query</span>
                <span>
                  <GoReport />
                </span>
              </div>
            </li>
          </ul>
          <div className="w-1/2  h-full">
          </div>
        </div>
        <div className="w-full  h-1/2 p-2 flex flex-col gap-6">
          <div className="w-full border-b cursor-pointer dark:border-slate-600 px-2 flex items-center gap-3">
            <div
              onClick={() => SetAbout(true)}
              className="flex gap-3 p-1 items-center"
            >
              <span>
                <FaUser />
              </span>
              <span className="flex items-center">About</span>
            </div>
            <div
              className="flex gap-3 p-1 items-center cursor-pointer"
              onClick={() => setEmploymentInfo(true)}
            >
              <span>
                <TbFileInfo />
              </span>
              <span>Employment Info</span>
            </div>
          </div>
          <CSSTransition
            in={about}
            timeout={100}
            classNames="about"
            nodeRef={infoRef}
            unmountOnExit
            onEnter={() => setEmploymentInfo(false)}
            onExited={() => setEmploymentInfo(true)}
          >
            <ul ref={infoRef} className="w-1/2 flex about flex-col gap-5">
              <li className="flex justify-between w-full">
                <span>Email:</span>
                <span>damilola.jibowu@gmail.com</span>
              </li>
              <li className="flex justify-between w-full">
                <span>Address:</span>
                <span>1, Agboola fagbemi street, Ilasmaja, Lagos State</span>
              </li>
              <li className="flex justify-between w-full">
                <span>Contact:</span>
                <span>09133909108</span>
              </li>
              <li className="flex justify-between w-full">
                <span>Gender:</span>
                <span>Male</span>
              </li>
              <li className="flex justify-between w-full">
                <span>DOB:</span>
                <span>15/3/1995</span>
              </li>
            </ul>
          </CSSTransition>

          <CSSTransition
            in={employmentInfo}
            timeout={100}
            classNames="info"
            nodeRef={infoRef}
            unmountOnExit
            onEnter={() => SetAbout(false)}
            onExited={() => SetAbout(true)}
          >
            <div ref={infoRef} className="info h-full w-full bg-red-300">
              hello
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default UserRowPopUp;
