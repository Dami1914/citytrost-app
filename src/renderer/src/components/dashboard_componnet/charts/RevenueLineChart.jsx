import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const RevenueLineChart = () => {
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
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line dataKey="value" />
        <XAxis dataKey="months"/>
        <YAxis />
        <CartesianGrid vertical={false} opacity={0.7}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueLineChart;
