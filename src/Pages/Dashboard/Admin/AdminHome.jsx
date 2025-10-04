import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "../../../hook/UseAuthContext";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer,
  LineChart, Line, Tooltip
} from 'recharts';
import React from 'react';
import { PieChart, Pie } from 'recharts';

// Colors
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red'];
const RADIAN = Math.PI / 180;

// Pie Chart Label
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminHome = () => {
  const { user } = UseAuthContext();
  const axiosSecure = useAxiosSecure();

  const { data: history } = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/admin_stats');
      return data;
    }
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ['chartData'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/order_stats');
      return data;
    }
  });

  // PieChart Data
  const pieChartData = chartData?.map(data => {
    return { name: data.category, value: data.revenue }
  });

  // Dummy Recent Orders
  const recentOrders = [
    { id: "ORD123", customer: "Shakib", amount: 1200, status: "Delivered", date: "2025-10-01" },
    { id: "ORD124", customer: "Tamim", amount: 800, status: "Pending", date: "2025-10-02" },
    { id: "ORD125", customer: "Mushfiq", amount: 1500, status: "Cancelled", date: "2025-10-02" },
  ];

  // Dummy Top Products
  const topProducts = [
    { name: "Chicken Biryani", sales: 120, revenue: 24000 },
    { name: "Beef Curry", sales: 80, revenue: 20000 },
    { name: "Cold Drinks", sales: 200, revenue: 10000 },
  ];

  // Dummy User Growth
  const userGrowth = [
    { month: "Jan", users: 50 },
    { month: "Feb", users: 80 },
    { month: "Mar", users: 120 },
    { month: "Apr", users: 150 },
    { month: "May", users: 200 },
  ];

  return (
    <div className="px-2">
      {/* Welcome */}
      <div className="space-y-3 my-4 font-serif">
        <h1 className="text-lg font-bold">Welcome back, Admin!</h1>
        <p>Here's what's happening with your restaurant today.</p>
      </div>

      {/* KPI Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
  {/* Revenue */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#BE42F4] to-[#F2C1FC]">
    <BsLayoutSidebarReverse />
    <div>
      <h1>${history?.revenue}</h1>
      <p className="text-sm">Revenue</p>
    </div>
  </div>

  {/* Customers */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#D6A860] to-[#F5DBAD]">
    <FaUsersLine />
    <div>
      <h1>{history?.users}</h1>
      <p className="text-sm">Customers</p>
    </div>
  </div>

  {/* Products */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#FD588C] to-[#FCAFD1]">
    <AiFillProduct />
    <div>
      <h1>{history?.menuItems}</h1>
      <p className="text-sm">Products</p>
    </div>
  </div>

  {/* Orders */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#73B5FF] to-[#ACECFF]">
    <CiDeliveryTruck />
    <div>
      <h1>{history?.orders}</h1>
      <p className="text-sm">Orders</p>
    </div>
  </div>

  {/* Avg Order Value */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-green-400 to-green-600">
    💰
    <div>
      <h1>$120</h1>
      <p className="text-sm">Avg Order Value</p>
    </div>
  </div>

    {/* Complete Orders Card - New */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-purple-500 to-purple-700">
    ✅
    <div>
      <h1>{history?.completedOrders || 0}</h1>
      <p className="text-sm">Completed Orders</p>
    </div>
  </div>

  {/* Returning Customers */}
  <div className="flex text-white text-2xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-yellow-500 to-yellow-700">
    📈
    <div>
      <h1>65%</h1>
      <p className="text-sm">Returning Customers</p>
    </div>
  </div>


</div>


      {/* Charts */}
      <div className="md:flex gap-6 mt-10 justify-center items-center">
        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar dataKey="quantity" fill="#8884d8">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
              <Legend />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders + Top Products */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {/* Recent Orders */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="font-bold mb-3">Recent Orders</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.amount}</td>
                  <td className={`font-bold ${order.status === "Delivered" ? "text-green-500" :
                    order.status === "Pending" ? "text-yellow-500" : "text-red-500"}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Products */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="font-bold mb-3">Top Selling Products</h2>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sales</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.name}</td>
                  <td>{p.sales}</td>
                  <td>${p.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Growth */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-4">
        <h2 className="font-bold mb-3">User Growth</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
