import { useState } from "react";

const MyBooking = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const bookings = [
    {
      id: 1,
      date: "Jan 12, 2025",
      time: "7:00 PM",
      guests: 4,
      table: 12,
      status: "Confirmed",
    },
    {
      id: 2,
      date: "Dec 20, 2024",
      time: "8:00 PM",
      guests: 2,
      table: 5,
      status: "Completed",
    },
    {
      id: 3,
      date: "Nov 10, 2024",
      time: "6:30 PM",
      guests: 3,
      table: 7,
      status: "Cancelled",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["upcoming", "completed", "cancelled"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg font-semibold capitalize ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-white border text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Upcoming → Card Style */}
      {activeTab === "upcoming" && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bookings
            .filter((b) => b.status === "Confirmed")
            .map((booking) => (
              <div
                key={booking.id}
                className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold">Table #{booking.table}</h3>
                <p className="text-gray-600">📅 {booking.date}</p>
                <p className="text-gray-600">⏰ {booking.time}</p>
                <p className="text-gray-600">👥 Guests: {booking.guests}</p>
                <p className="mt-2">
                  Status:{" "}
                  <span className="text-green-600 font-semibold">
                    {booking.status}
                  </span>
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-sm bg-red-500 text-white">
                    Cancel
                  </button>
                  <button className="btn btn-sm bg-blue-500 text-white">
                    Rebook
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Completed → Table Style */}
      {activeTab === "completed" && (
        <div className="overflow-x-auto">
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
              {bookings
                .filter((b) => b.status === "Completed")
                .map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td>{booking.guests}</td>
                    <td>{booking.table}</td>
                    <td className="text-gray-500">{booking.status}</td>
                    <td>
                      <button className="btn btn-xs bg-blue-500 text-white">
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cancelled → Timeline Style */}
      {activeTab === "cancelled" && (
        <div className="relative border-l-2 border-red-500 pl-6 space-y-6">
          {bookings
            .filter((b) => b.status === "Cancelled")
            .map((booking) => (
              <div key={booking.id}>
                <h4 className="font-bold">
                  {booking.date} • {booking.time}
                </h4>
                <p>Table #{booking.table}, Guests: {booking.guests}</p>
                <span className="text-red-600 font-semibold">
                  {booking.status}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
