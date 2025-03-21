import React from "react";
import AppointmentCard from "./AppointmentCard";

function AppointmentSection({
  activeTab,
  setActiveTab,
  appointments,
  selectAppointment,
}) {
  return (
    <section>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("upcoming")}
          style={{
            background: activeTab === "upcoming" ? "#4318D1" : "#F1F5F9",
            color: activeTab === "upcoming" ? "#FFFFFF" : "#64748B",
          }}
          className="px-6 py-3 rounded-[8px] font-[500] flex-1"
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("past")}
          style={{
            background: activeTab === "past" ? "#4318D1" : "#F1F5F9",
            color: activeTab === "past" ? "#FFFFFF" : "#64748B",
          }}
          className="px-6 py-3 rounded-[8px] font-[500] flex-1"
        >
          Past
        </button>
      </div>

      {activeTab === "upcoming" && appointments.upcoming.length === 0 && (
        <EmptyAppointments />
      )}

      {activeTab === "upcoming" && (
        <div className="grid gap-4">
          {appointments.upcoming.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              selectAppointment={selectAppointment}
            />
          ))}
        </div>
      )}

      {activeTab === "past" && (
        <div className="grid gap-4">
          {appointments.past.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              selectAppointment={selectAppointment}
            />
          ))}
        </div>
      )}


      
    </section>
  );
}

function EmptyAppointments() {
  return (
    <div className="text-center py-12">
      <div className="text-[96px] mb-4">📅</div>
      <p className="text-[#1E293B] text-[18px] font-[500] mb-4">
        No appointments scheduled yet
      </p>
      <button className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500]">
        Book New Appointment
      </button>
    </div>
  );
}

export default AppointmentSection;
