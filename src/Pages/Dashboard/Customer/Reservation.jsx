import { FaCalendarAlt, FaUsers, FaClock } from "react-icons/fa";

export default function Reservation() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Table Reservation</h1>
        <p className="mt-2 text-lg">Book your table in just a few steps</p>
      </div>

      {/* Reservation Form */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Make a Reservation</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2">Date</label>
            <input type="date" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Time</label>
            <input type="time" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Guests</label>
            <input type="number" placeholder="Number of guests" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block font-semibold mb-2">Special Request</label>
            <input type="text" placeholder="Optional" className="input input-bordered w-full" />
          </div>
          <button className="btn bg-orange-500 text-white col-span-1 md:col-span-2">
            Reserve Now
          </button>
        </form>
      </div>

      {/* Upcoming Reservations */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Upcoming Reservations</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border rounded-lg">
            <div>
              <p className="font-bold">Table #12</p>
              <p className="text-gray-600">Jan 10, 2025 • 7:00 PM</p>
              <p className="text-sm text-gray-500">Guests: 4</p>
            </div>
            <button className="btn btn-sm btn-error text-white">Cancel</button>
          </div>
        </div>
      </div>

      {/* Reservation History */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Reservation History</h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center border-b pb-2">
            <span>Table #5 - Dec 20, 2024 • 8:00 PM (Completed)</span>
            <button className="btn btn-xs bg-blue-500 text-white">Review</button>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>Table #3 - Dec 10, 2024 • 6:30 PM (Cancelled)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
