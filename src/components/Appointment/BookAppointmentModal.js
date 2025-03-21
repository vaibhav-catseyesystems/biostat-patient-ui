import React from "react";

function BookAppointmentModal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <div className="bg-white rounded-[13px] w-[600px] max-sm:w-[95%] p-[32px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
        <header className="flex justify-between items-center mb-[24px]">
          <h2 className="text-[24px] font-[600] text-[#1E293B]">{title}</h2>
          <button
            onClick={onClose}
            className="text-[#64748B] text-[24px]"
            aria-label="Close modal"
          >
            ×
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}

export default BookAppointmentModal;
