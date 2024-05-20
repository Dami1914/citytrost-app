import Logo from "../../assets/Logo";
import { IoChatbubblesSharp, IoMoon, IoSunny } from "react-icons/io5";
import { HandleLayoutDesign } from "../../context/layoutDesignContext";
import { useEffect, useRef } from "react";

const TopMenu = () => {
  const { handleModeChange, mode } = HandleLayoutDesign();
  const modeRef = useRef({});
  const sunRef = useRef({})
  const moonRef = useRef({})
  
  return (
    <div className="w-full  lg:flex lg:h-[10%] h-[50px]">
      <div className="w-[8%] bg-white smscreen:w-[15%] dark:bg-darkmode-2 rounded-tr-3xl p-2  h-full flex justify-start px-3 items-center">
        <div className="w-full h-full flex items-center">
          <div className=" w-[74%]">
            <Logo height={"50px"} width={"50px"} />
          </div>
        </div>
      </div>
      <div className="w-[86%]  flex text-slate-600">
        <div className="w-[80%]  h-full"></div>
        <div className="w-[20%] flex text-3xl h-full ">
          <div className="w-1/2 flex justify-center items-center">
            <IoChatbubblesSharp className="cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
