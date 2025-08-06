// components/BookingModal.tsx
"use client";
import { useState } from "react";

export default function BookingModal({
  doctor,
  isOpen,
  onClose,
}: {
  doctor: any;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    const token = localStorage.getItem("access_token");
    const res = await fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // if using JWT
      },
      body: JSON.stringify({ doctorId: doctor.id, date, time }),
    });

    if (res.ok) {
      alert("Booking successful!");
      onClose();
    } else {
      alert("Booking failed!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-600 text-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h2 className="text-white-700 font-bold mb-4">
          Book with {doctor.name}
        </h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={handleBooking}
            className="px-4 py-2 bg-blue-600 text-white rounded">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
