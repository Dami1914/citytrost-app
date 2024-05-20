import DashboardSwitcher from "./dashboard_componnet/buttons/DashboardSwitcher";
import { useEffect, useRef, useState } from "react";
import ManagementDashboard from "./dashboard_componnet/1_Management_component/ManagementDashboard";
import UserDashboard from "./dashboard_componnet/2-User_dashboard/UserDashboard";
import LoanDashboard from "./dashboard_componnet/3_Loan_dashboard/LoanDashboard";
import AnalyticsDashboard from "./dashboard_componnet/4_Analytics_dashboard/AnalyticsDashboard";
import DisplayMapComponents from "./DisplayMapComponents";

const Dashboard = () => {
  const dashboards = [
    { name: "Management", component: <ManagementDashboard /> },
    { name: "User", component: <UserDashboard /> },
    { name: "Loan", component: <LoanDashboard /> },
    { name: "Analytics", component: <AnalyticsDashboard /> },
  ];

  return <DisplayMapComponents componentData={dashboards} />;
};

export default Dashboard;
