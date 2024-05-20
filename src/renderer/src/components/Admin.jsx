import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MiniSideMenu from "./menu_component/MiniSideMenu";
import User from "./admin_components/user_component/User";
import Branch from "./admin_components/branch_component'/Branch";
import Market from "./admin_components/market_component/Market";
import CreateUser from "./admin_components/user_component/CreateUser";
import { Marketer } from "./admin_components/marketer_component/Marketer";
import CreateMarket from "./admin_components/market_component/CreateMarket";
import CreateBranch from "./admin_components/branch_component'/CreateBranch";
import CreateMarketer from "./admin_components/marketer_component/CreateMarketer";

const Admin = () => {
  const miniSideMenuInfo = [
    { name: "Manage User", to: "user" },
    { name: "Manage Market", to: "market" },
    { name: "Manage Branch", to: "branch" },
    { name: "Manage Marketer", to: "marketer" },
  ];

  console.log(location.pathname.split("/").slice(1, 1));
  return (
    <div className="w-full flex flex-col h-full ">
      <div className="w-full flex h-[90%]">
        <MiniSideMenu data={miniSideMenuInfo} />
        <div className="h-full w-[85%] overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route index element={<Navigate to="user" />} />
            <Route path="user" element={<User />}/>
            <Route path="createuser" element={<CreateUser />} />
            <Route path="market" element={<Market />} />
            <Route path="createmarket" element={<CreateMarket />} />
            <Route path="branch" element={<Branch />} />
            <Route path="createbranch" element={<CreateBranch />} />
            <Route path="marketer" element={<Marketer />} />
            <Route path="createmarketer" element={<CreateMarketer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
