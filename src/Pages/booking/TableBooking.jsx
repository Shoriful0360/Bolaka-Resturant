import { useState } from "react";
import UseAuthContext from "../../hook/UseAuthContext";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function TableBooking() {
    const{user}=UseAuthContext()
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: user?.displayName,
    phone: "",
    date: "",
    time: "",
    guests: 1,
    table: "",
    note: "",
    email:user?.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
 try {
    const {data}=await axiosPublic.post('/table_booking',formData)
    if(data.insertedId){
        Swal.fire({
  title: "Good job!",
  text: `Table ${formData.table} booking request submitted!`,
  icon: "success"
});
 setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      table: "",
      note: "",
    });
    }
navigate('/dashboard/my_booking')
 } catch (error) {
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: error.message,
  
});
 }
 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          🍽 Book Your Table
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              disabled
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Enter phone number"
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Table Number */}
          <div>
            <label className="block text-sm font-medium">Table Number</label>
            <select
              name="table"
              value={formData.table}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a Table</option>
              <option value="1">Table 1</option>
              <option value="2">Table 2</option>
              <option value="3">Table 3</option>
              <option value="4">Table 4</option>
              <option value="5">Table 5</option>
            </select>
          </div>

          {/* Note */}
          <div>
            <label className="block text-sm font-medium">Special Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-orange-400"
              placeholder="Any special request..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-xl hover:bg-orange-600 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
