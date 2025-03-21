import React from "react";

function WelcomeSection() {
  return (
    <section className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[16px]">
      <div>
        <h1 className="text-[32px] font-semibold text-[#1e293b]">
          Welcome back, Sarah
        </h1>
        <p className="text-[#64748b] mt-2">
          Last check-up: Yesterday at 2:30 PM
        </p>
      </div>

      <div className="flex gap-[16px]">
        <button className="px-6 py-3 bg-[#4318D1] text-white rounded-[8px] font-medium">
          Schedule Appointment
        </button>
        <button className="px-6 py-3 bg-[#f1f5f9] text-[#1e293b] rounded-[8px] font-medium">
          Contact Doctor
        </button>
      </div>
    </section>
  );
}

export default WelcomeSection;
