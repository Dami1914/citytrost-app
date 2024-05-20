import {useEffect} from "react";

const DashboardSwitcher = ({ data,handleClick,handleRef,index}) => {
  
  useEffect(()=>{
    console.log("inside dashboardswitcher",handleRef.current[0].classList)
    console.log(data.name)
  })
  return (
    <div ref={(ele)=> handleRef.current[index] = ele} onClick={(event)=>handleClick(data.name,event)}  className="rounded-2xl dashboard-nav-button border-inherit border cursor-pointer  flex items-center justify-center p-2">
      {data.name}
    </div>
  );
};

export default DashboardSwitcher;
