import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "../../../hook/UseAuthContext";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";


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
    const {data:chartData}=useQuery({
        queryKey:['chartData'],
        queryFn:async()=>{
            const {data}=await axiosSecure.get('/order_stats')
            return data
        }
    })
    console.log(chartData)
    return (
        <div>
        <h1 className="text-lg font-bold" >Hi,<span className="text-lg font-bold uppercase">{user?user?.displayName :'Wellcome Back'}</span></h1>

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
        </div>
    );
};

export default AdminHome;