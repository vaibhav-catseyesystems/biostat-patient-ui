import React from "react";

const ViewMedRecordModal = ({ record, closeModal }) => {
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
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[13px] p-8 max-w-[800px] w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[24px] font-[600] text-[#1E293B]">View Record</h2>
          <button
            onClick={closeModal}
            className="text-[24px] text-[#64748B]"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 pb-4 border-b border-[#E9ECEF]">
            <span className="text-[32px]">{getRecordIcon(record.type)}</span>
            <div>
              <h3 className="text-[20px] font-[500] text-[#1E293B]">
                {record.title}
              </h3>
              <p className="text-[14px] text-[#64748B]">{record.type}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div>
              <p className="text-[14px] font-[500] text-[#64748B]">Provider</p>
              <p className="text-[16px] text-[#1E293B]">{record.provider}</p>
            </div>
            <div>
              <p className="text-[14px] font-[500] text-[#64748B]">Date</p>
              <p className="text-[16px] text-[#1E293B]">{record.date}</p>
            </div>
            <div>
              <p className="text-[14px] font-[500] text-[#64748B]">Status</p>
              <p className="text-[16px] text-[#1E293B]">{record.status}</p>
            </div>
            <div>
              <p className="text-[14px] font-[500] text-[#64748B]">File Name</p>
              <p className="text-[16px] text-[#1E293B]">{record.file}</p>
            </div>
            {record.details && (
              <div className="col-span-2">
                <p className="text-[14px] font-[500] text-[#64748B]">Details</p>
                <p className="text-[16px] text-[#1E293B]">{record.details}</p>
              </div>
            )}
          </div>
          <div className="flex justify-end gap-2 pt-4 border-t border-[#E9ECEF]">
            <button
              className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px]"
              onClick={closeModal}
            >
              Close
            </button>
            <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px]">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMedRecordModal;
