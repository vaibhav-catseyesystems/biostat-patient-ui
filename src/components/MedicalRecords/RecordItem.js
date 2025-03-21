import React from "react";

const RecordItem = ({ record, onClick }) => {
  // Determine icon based on record type
  const getRecordIcon = (type) => {
    switch (type) {
      case "Insurance":
        return "🏥";
      case "Test Reports":
        return "🔬";
      case "Prescriptions":
        return "💊";
      case "Vaccinations":
        return "💉";
      case "Surgeries":
        return "🩺";
      default:
        return "📋";
    }
  };

  return (
    <article
      className="bg-white rounded-[12px] p-6 border-[0.8px] border-[#E9ECEF] hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <span className="text-[32px]">{getRecordIcon(record.type)}</span>
        <div className="flex-1">
          <h3 className="text-[18px] font-[500] text-[#1E293B] mb-1">
            {record.title}
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Provider:</span>
              <span className="text-[14px] text-[#1E293B]">
                {record.provider}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Date:</span>
              <span className="text-[14px] text-[#1E293B]">{record.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Status:</span>
              <span className="text-[14px] text-[#1E293B]">
                {record.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[14px] text-[#64748B]">{record.type}</span>
          <span className="text-[20px] mt-2">👁️</span>
        </div>
      </div>
    </article>
  );
};

export default RecordItem;
