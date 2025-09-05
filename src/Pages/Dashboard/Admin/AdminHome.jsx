import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "../../../hook/UseAuthContext";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import React, { PureComponent } from 'react';
import { PieChart, Pie} from 'recharts';




const AdminHome = () => {
    const {user}=UseAuthContext()
    const axiosSecure=useAxiosSecure()
    const {data:history}=useQuery({
        queryKey:['history'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/admin_stats')
            return data
        }
    })

    // for chart  get data
    const {data:chartData=[]}=useQuery({
        queryKey:['chartData'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/order_stats')
            return data
        }
    })
//    custom shape by chart

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

//   custom shape by piechart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','red'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const pieChartData=chartData?.map(data=>{
    return {name:data.category,value:data.revenue}
})

    return (
        <div>
      <div className="space-y-3 my-4 font-serif">
          <h1 className="text-lg font-bold" >Welcome back, Admin!</h1>
        <p>Here's what's happening with your resturant today.</p>
      </div>

{/* cart */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="flex  text-white text-3xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#BE42F4] to-[#F2C1FC]" >
<div>
<BsLayoutSidebarReverse />
</div>
<div className="text-white">
    <h1>${history?.revenue}</h1>
    <p className="text-xl">Revenue</p>
</div>
</div>
<div className="flex text-white text-3xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#D6A860] to-[#F5DBAD]" >
<div>
<FaUsersLine />
</div>
<div className="text-white">
    <h1>{history?.users}</h1>
    <p className="text-xl">Customer</p>
</div>
</div>
<div className="flex text-white text-3xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#FD588C] to-[#FCAFD1]" >
<div>
<AiFillProduct />
</div>
<div className="text-white">
    <h1>{history?.menuItems}</h1>
    <p className="text-xl">Product</p>
</div>
</div>
<div className="flex text-white text-3xl font-bold justify-center py-4 px-4 gap-4 rounded-md items-center bg-gradient-to-r from-[#73B5FF] to-[#ACECFF]" >
<div>
<CiDeliveryTruck />
</div>
<div className="text-white">
    <h1>{history?.orders}</h1>
    <p className="text-xl">Orders</p>
</div>
</div>
        </div>

        {/*bar and pie chart */}
        <div className="flex">
            {/* barchart */}
            <div className="w-1/2">
            <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 6]} />
        ))}
      </Bar>
    </BarChart>
            </div>
            {/* piechart */}
            <div className="w-1/2">
            <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
            </div>
        </div>
        </div>
    );
};

export default AdminHome;