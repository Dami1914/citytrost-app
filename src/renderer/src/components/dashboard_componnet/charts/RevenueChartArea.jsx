import React from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const RevenueChartArea = () => {
  const locations = [
    "ilasamaja",
    "mushin",
    "lagos island",
    "oshodi",
    "ojuelegba",
    "abiodun",
    "ladipo1",
    "ladipo2",
  ];
  let data = [];
  for (let i in locations) {
    const newValue = (parseInt(i) + Math.random()) * 10000; // Calculate value based on index
    data.push({
      name: locations[i],
      value: newValue,
    });
  }
  console.log(data);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
      <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="blue" stopOpacity={0.4} />
            <stop offset="100%" stopColor="green" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke="green" fill="url(#gradient)" />
        <XAxis dataKey="name" />
        <YAxis tickLine={false} tickCount={8} axisLine={false} tickFormatter={number=>`₦${number}`} />
        <Tooltip />
        <Legend align="center" verticalAlign="bottom" layout="horizontal" />
        <CartesianGrid vertical={false} opacity={0.3}/>
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RevenueChartArea;
