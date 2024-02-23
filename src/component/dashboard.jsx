import React, { useState } from "react";
import {
  BarChart,
  ComposedChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  PieChart,
  Pie,
} from "recharts";
import {
  Monthdata,
  Yeardata,
  weeKdata,
  pieData,
  pieData2,
  pieData3,
} from "../charts/barchart";
import mainframe from "../assets/Mainframe.svg";
import mainframe2 from "../assets/Mainframe2.svg";
import mainframe3 from "../assets/Mainframe3.svg";
import mainframe4 from "../assets/Mainframe4.svg";
export const Dashboard = () => {
  const [tab, setTab] = useState("Week");
  const handleChange = (value) => {
    setTab(value);
  };
  let currData;
  switch (tab) {
    case "Week":
      currData = weeKdata;
      break;

    case "Month":
      currData = Monthdata;
      break;
    case "Year":
      currData = Yeardata;
      break;
    default:
      currData = [];
  }
  console.log(tab, currData);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-gray-800 text-white w-64 h-screen fixed transition-all ease-in-out duration-300">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
        </div>
        <nav className="space-y-4">
          <a
            href="#"
            className="block p-3 hover:bg-gray-700 transition-all ease-in-out duration-300"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block p-3 hover:bg-gray-700 transition-all ease-in-out duration-300"
          >
            Orders
          </a>
          <a
            href="#"
            className="block p-3 hover:bg-gray-700 transition-all ease-in-out duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="block p-3 hover:bg-gray-700 transition-all ease-in-out duration-300"
          >
            Customers
          </a>
          {/* Add more sidebar links based on your requirements */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-4 transition-all ease-in-out duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-md shadow-md transition-all ease-in-out duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Total Sales</h3>
            <p className="text-3xl font-bold">$25,000</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-md shadow-md transition-all ease-in-out duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Pending Orders</h3>
            <p className="text-3xl font-bold">15</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-md shadow-md transition-all ease-in-out duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Products in Stock</h3>
            <p className="text-3xl font-bold">120</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md transition-all ease-in-out duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">Expense</h3>
            <p className="text-3xl font-bold">$5000</p>
          </div>
        </div>
        <div className=" flex justify-around mt-6">
          <img src={mainframe} alt="" />
          <img src={mainframe2} alt="" />
          <img src={mainframe3} alt="" />
          <img src={mainframe4} alt="" />
        </div>
        <div className="chart-container  p-4 mt-4 w-full border">
          <div className="chart-content flex">
            <button onClick={() => handleChange("Week")}>Week</button>
            <button onClick={() => handleChange("Month")}>Month</button>
            <button onClick={() => handleChange("Year")}>Year</button>
          </div>
          <div className="barchart-container w-full ">
            <LineChart
              width={1200}
              height={300}
              data={currData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="w-[49%]">
            {" "}
            <BarChart
              width={500}
              height={300}
              data={Yeardata}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="w-[49%]">
            <BarChart
              width={500}
              height={300}
              data={Monthdata}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" stackId="a" fill="#8884d8" />
              <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>

        {/* 3 row */}
        <div className="flex justify-between w-full">
          <div className="w-[49%]">
            {" "}
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={Yeardata}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>
          <div className="w-[49%]">
            <ComposedChart
              width={500}
              height={400}
              data={Yeardata}
              margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis
                dataKey="name"
                label={{
                  value: "Pages",
                  position: "insideBottomRight",
                  offset: 0,
                }}
                scale="band"
              />
              <YAxis
                label={{ value: "Index", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <PieChart width={400} height={400}>
            <Pie
              data={pieData}
              dataKey="value"
              cx={200}
              cy={200}
              outerRadius={60}
              fill="#8884d8"
            />

            <Pie
              data={pieData2}
              dataKey="value"
              cx={200}
              cy={200}
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={pieData}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={pieData3}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
          </PieChart>
        </div>
      </div>
    </div>
  );
};
