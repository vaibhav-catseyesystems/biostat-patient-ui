import React from "react";

function AppointmentCard({ appointment, selectAppointment }) {
  const { doctor, specialty, date, time, type, location, status, image } =
    appointment;

  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Determine status color
  const getStatusColor = () => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <article
      className="bg-white rounded-[13px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => selectAppointment(appointment)}
    >
      <div className="flex gap-4 items-start max-sm:flex-col">
        <img
          src={image}
          alt={doctor}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2 max-sm:flex-col max-sm:gap-2">
            <div>
              <h3 className="text-[18px] font-[600] text-[#1E293B]">
                {doctor}
              </h3>
              <p className="text-[14px] text-[#64748B]">{specialty}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-[12px] font-medium ${getStatusColor()}`}
            >
              {status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 max-sm:grid-cols-1">
            <div>
              <p className="text-[14px] text-[#64748B] mb-1">Date & Time</p>
              <p className="text-[15px] font-[500] text-[#1E293B]">
                {formattedDate} • {time}
              </p>
            </div>

            <div>
              <p className="text-[14px] text-[#64748B] mb-1">Type</p>
              <p className="text-[15px] font-[500] text-[#1E293B]">{type}</p>
            </div>

            <div className="col-span-2">
              <p className="text-[14px] text-[#64748B] mb-1">Location</p>
              <p className="text-[15px] font-[500] text-[#1E293B]">
                {location}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]">
              {type.includes("Video") ? "Join Call" : "View Details"}
            </button>
            <button className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] text-[14px] font-[500]">
              Reschedule
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default AppointmentCard;
