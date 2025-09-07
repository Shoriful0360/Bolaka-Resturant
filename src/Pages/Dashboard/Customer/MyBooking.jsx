import {useState } from "react";

import UseAuthContext from "../../../hook/UseAuthContext";
import UseFetching from "../../../hooks/useFetching";
import Loading from "../../../component/Loading";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import ReviewModal from "../../../component/modal/ReviewModal";
import UserInfo from "../../../hook/UserInfo";
import Swal from "sweetalert2";

const MyBooking = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const axiosPublic=useAxiosPublic()
    const [isModalOpen,setIsModalOpen]=useState(false)
const {user}=UseAuthContext()
const [role]=UserInfo()
const{name,image,designation}=role || {}
   const { data:bookings, isLoading,  refetch } = UseFetching('get',
    `/booking/${user?.email}?status=${activeTab}`
  );

  // add review

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
      console.log(error.message)
    }
  }
  // status change
  const handleStatus=async(text,id)=>{
    console.log(text)
    await axiosPublic.patch(`/booking/${id}`,{status:text})
    refetch()
 
  }
if(isLoading) return <Loading/>
 

  return (
    <div className="mt-6 sm:px-6  min-h-screen bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

      {/* Tabs */}
      <div className="flex sm:justify-center gap-2 sm:gap-4 mb-8">
        {["Pending","Upcoming", "Completed", "Cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2 sm:px-6 py-2 rounded-lg font-semibold capitalize ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-white border text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>   
      {/* Upcoming/pending/cancelled→ Card Style */}

      {
        activeTab==="Pending" ||activeTab==="Upcoming" || activeTab==="Cancelled" ?
         
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookings?.map((booking) => (
            <div
  key={booking._id}
  className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
>
  <h3 className="text-xl font-bold">Table #{booking.table}</h3>
  <p className="text-gray-600">📛 Name: {booking.name}</p>
  <p className="text-gray-600">📞 Phone: {booking.phone}</p>
  <p className="text-gray-600">✉️ Email: {booking.email}</p>
  <p className="text-gray-600">📅 {booking.date}</p>
  <p className="text-gray-600">⏰ {booking.time}</p>
  <p className="text-gray-600">👥 Guests: {booking.guests}</p>

  <p className="mt-2">
    Status:{" "}
    <span
      className={`font-semibold ${
        booking.status === "Pending"
          ? "text-yellow-600"
          : booking.status === "Upcoming"
          ? "text-blue-600"
          : "text-green-600"
      }`}
    >
      {booking.status}
    </span>
  </p>
{
  booking.status==='Pending' &&(
<div className="mt-4 flex gap-2">
    <button onClick={()=>handleStatus("Cancelled",booking._id)} className="btn btn-sm bg-red-500 text-white">Cancel</button>
  
  </div>
  )
}
  {
      booking.status==='Cancelled' &&(
<div className="mt-4 flex gap-2">
      <button onClick={()=>handleStatus("Pending",booking._id)} className="btn btn-sm bg-blue-500 text-white">Rebook</button>
  
  </div>
  )
  }
</div>

            ))}
        </div>
        :

        // complete status
 <div className="overflow-x-auto  flex flex-col">
          <table className="table w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Table</th>
                <th>Status</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.table}</td>
                    <td className="text-gray-500">{booking.status}</td>
                    <td>
                      <button onClick={()=>setIsModalOpen(true)} className="btn btn-xs bg-blue-500 text-white">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      }
 
  <ReviewModal isOpen={isModalOpen} onSubmit={handleReview} onClose={()=>setIsModalOpen(false)}/>
    </div>
  );
};

export default MyBooking;
