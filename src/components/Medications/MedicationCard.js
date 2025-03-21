import React from "react";

function MedicationCard({ medicine }) {
  return (
    <div className="bg-white rounded-[12px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-[18px] font-[600] text-[#1E293B]">
            {medicine.name}
          </h2>
          <p className="text-[14px] text-[#64748B]">
            {medicine.dosage} • {medicine.frequency}
          </p>
        </div>
        <span className="px-3 py-1 bg-[#DCFCE7] text-[#166534] text-[12px] font-[500] rounded-full">
          {medicine.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Prescribed by</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {medicine.doctor}
          </p>
        </div>
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Last ordered</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {medicine.lastOrdered}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Next refill</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {medicine.nextRefill}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] text-[14px] font-[500]">
            Details
          </button>
          <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]">
            Refill
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicationCard;
