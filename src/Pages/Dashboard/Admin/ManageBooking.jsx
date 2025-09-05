import React, { useState } from "react";

// Sample booking data with user info
const bookingsData = [
  {
    id: 1,
    user: { name: "John Doe", email: "john@example.com" },
    table: 5,
    date: "2025-09-05",
    time: "7:00 PM",
    guests: 4,
    status: "Pending",
  },
  {
    id: 2,
    user: { name: "Jane Smith", email: "jane@example.com" },
    table: 3,
    date: "2025-09-06",
    time: "8:00 PM",
    guests: 2,
    status: "Confirmed",
  },
  {
    id: 3,
    user: { name: "Alice Johnson", email: "alice@example.com" },
    table: 1,
    date: "2025-09-07",
    time: "6:30 PM",
    guests: 6,
    status: "Cancelled",
  },
];

const ManageBooking = () => {
  const [bookings, setBookings] = useState(bookingsData);

  const handleStatusChange = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  const statusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-800";
      case "Confirmed":
        return "bg-green-200 text-green-800";
      case "Completed":
        return "bg-blue-200 text-blue-800";
      case "Cancelled":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Bookings</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
          >
            <h3 className="text-xl font-bold mb-1">{booking.user.name}</h3>
            <p className="text-gray-500 mb-2">{booking.user.email}</p>
            <h4 className="font-semibold">Table #{booking.table}</h4>
            <p className="text-gray-600">📅 {booking.date}</p>
            <p className="text-gray-600">⏰ {booking.time}</p>
            <p className="text-gray-600">👥 Guests: {booking.guests}</p>
            <p className="mt-2">
              Status:{" "}
              <span
                className={`px-2 py-1 rounded-full font-semibold ${statusColor(
                  booking.status
                )}`}
              >
                {booking.status}
              </span>
            </p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {booking.status === "Pending" && (
                <>
                  <button
                    onClick={() =>
                      handleStatusChange(booking.id, "Confirmed")
                    }
                    className="btn btn-sm bg-green-500 text-white"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() =>
                      handleStatusChange(booking.id, "Cancelled")
                    }
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Cancel
                  </button>
                </>
              )}
              {booking.status === "Confirmed" && (
                <button
                  onClick={() => handleStatusChange(booking.id, "Completed")}
                  className="btn btn-sm bg-blue-500 text-white"
                >
                  Mark Completed
                </button>
              )}
              {booking.status === "Cancelled" && (
                <button
                  onClick={() => handleStatusChange(booking.id, "Pending")}
                  className="btn btn-sm bg-yellow-500 text-white"
                >
                  Rebook
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBooking;
