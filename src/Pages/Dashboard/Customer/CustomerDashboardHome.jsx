import { useContext, useState } from "react";
import { FaShoppingCart, FaHistory, FaHeart } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import ReviewModal from "../../../component/modal/ReviewModal";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import UseAuthContext from "../../../hook/UseAuthContext";
import UserInfo from "../../../hook/UserInfo";
import Loading from "../../../component/Loading";

export default function CustomerDashboard() {
  const[role,isLoading]=UserInfo()
  const{name,role:designation,image}=role || {}
 
  const [isModalOpen,setIsModalOpen]=useState(false)
const axiosPublic=useAxiosPublic()

if(isLoading) return <Loading/>
  const handleReview=async(reviewData)=>{
    const newReview={
      ...reviewData,
      name:name,
      image:image,
      designation:designation
    }

    try {
     const {data}= await axiosPublic.post('/review',newReview)
     if(data.insertedId){
      Swal.fire({
  position: "top-center",
  icon: "success",
  title: "Thank you giving review",
  showConfirmButton: false,
  timer: 1500
});
     }
    } catch (error) {
   alert(error.message)
    }
  }
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome Back, Customer!</h1>
        <p className="mt-2 text-lg">
          Manage your orders, wishlist, and reviews all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaShoppingCart className="mx-auto text-4xl text-orange-500" />
          <h2 className="text-xl font-semibold mt-2">Active Orders</h2>
          <p className="text-2xl font-bold text-gray-700">3</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaHistory className="mx-auto text-4xl text-green-500" />
          <h2 className="text-xl font-semibold mt-2">Order History</h2>
          <p className="text-2xl font-bold text-gray-700">12</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaHeart className="mx-auto text-4xl text-red-500" />
          <h2 className="text-xl font-semibold mt-2">Wishlist</h2>
          <p className="text-2xl font-bold text-gray-700">5</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between border-b pb-2">
            <span className="font-medium">Ordered: Chicken Biriyani</span>
            <span className="text-gray-500 text-sm">2 days ago</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span className="font-medium">Added Pizza to Wishlist</span>
            <span className="text-gray-500 text-sm">5 days ago</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="font-medium">Reviewed: Grilled Burger</span>
            <span className="text-gray-500 text-sm">1 week ago</span>
          </li>
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="flex items-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-2xl shadow hover:bg-orange-600 transition">
          <FaShoppingCart className="text-2xl" /> Order Food
        </button>
        <button onClick={()=>setIsModalOpen(true)}  className="flex items-center gap-3 bg-blue-500 text-white px-6 py-4 rounded-2xl shadow hover:bg-blue-600 transition">
          <MdRateReview className="text-2xl" /> Write a Review
        </button>
      </div>
    <ReviewModal isOpen={isModalOpen} onSubmit={handleReview} onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
}
