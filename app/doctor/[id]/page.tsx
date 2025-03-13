
'use client'

import { use, useState } from "react";
import { doctors } from "../../data";

interface Props {
  params: Promise<{ id: string }>;
}

export default function DoctorPage({ params }: Props) {
  const { id } = use(params);
  const doctor = doctors.find((doc) => doc.id.toString() === id);

  const [selectedDate, setSelectedDate] = useState("");
  const [minTime, setMinTime] = useState("");

  if (!doctor) {
    return <div className="text-center text-red-500">Doctor not found</div>;
  }

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Handle date change
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);

    // If the selected date is today, set the min time to the current time
    if (newDate === today) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setMinTime(`${hours}:${minutes}`);
    } else {
      setMinTime(""); // Reset for future dates
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{doctor.name}</h1>
      <div className="text-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
        />
        <p className="text-gray-600 text-xl mb-8">{doctor.specialty}</p>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            min={today} // Disable past dates
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            min={selectedDate === today ? minTime : undefined} // Disable past hours for today
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Book an Appointment
        </button>
      </form>
    </div>
  );
}
