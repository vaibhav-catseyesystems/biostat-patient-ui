import React from "react";

function AddMedicationModal({
  setShowAddModal,
  uploadPrescription,
  setUploadPrescription,
}) {
  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[13px] p-8 max-w-[500px] w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[24px] font-[600] text-[#1E293B]">
            Add New Medication
          </h2>
          <button
            onClick={() => setShowAddModal(false)}
            className="text-[24px] text-[#64748B]"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setUploadPrescription(false)}
            className={`
              px-4 py-2 rounded-[8px] font-[500] flex-1
              ${!uploadPrescription ? "bg-[#4318D1] text-white" : "bg-[#F1F5F9] text-[#64748B]"}
            `}
          >
            Manual Entry
          </button>
          <button
            onClick={() => setUploadPrescription(true)}
            className={`
              px-4 py-2 rounded-[8px] font-[500] flex-1
              ${uploadPrescription ? "bg-[#4318D1] text-white" : "bg-[#F1F5F9] text-[#64748B]"}
            `}
          >
            Upload Prescription
          </button>
        </div>

        {!uploadPrescription ? (
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="medication-name"
                className="text-[14px] font-[500] text-[#1E293B]"
              >
                Medication Name
              </label>
              <input
                id="medication-name"
                type="text"
                placeholder="Enter medication name"
                className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="dosage"
                className="text-[14px] font-[500] text-[#1E293B]"
              >
                Dosage
              </label>
              <input
                id="dosage"
                type="text"
                placeholder="Enter dosage (e.g., 10mg)"
                className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="frequency"
                className="text-[14px] font-[500] text-[#1E293B]"
              >
                Frequency
              </label>
              <select
                id="frequency"
                className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              >
                <option value="">Select frequency</option>
                <option value="once-daily">Once daily</option>
                <option value="twice-daily">Twice daily</option>
                <option value="three-times-daily">Three times daily</option>
                <option value="as-needed">As needed</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="prescribing-doctor"
                className="text-[14px] font-[500] text-[#1E293B]"
              >
                Prescribing Doctor
              </label>
              <input
                id="prescribing-doctor"
                type="text"
                placeholder="Enter doctor's name"
                className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-3 bg-[#F1F5F9] text-[#64748B] rounded-[8px] font-[500]"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-[#4318D1] text-white rounded-[8px] font-[500]">
                Add Medication
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-[#E9ECEF] rounded-[8px] p-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[32px]">📄</span>
                <h3 className="text-[16px] font-[500] text-[#1E293B]">
                  Drag and drop your prescription
                </h3>
                <p className="text-[14px] text-[#64748B]">
                  or{" "}
                  <span className="text-[#4318D1] cursor-pointer">
                    browse files
                  </span>
                </p>
                <p className="text-[12px] text-[#64748B] mt-2">
                  Supported formats: PDF, JPG, PNG (max 5MB)
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-3 bg-[#F1F5F9] text-[#64748B] rounded-[8px] font-[500]"
              >
                Cancel
              </button>
              <button className="px-6 py-3 bg-[#4318D1] text-white rounded-[8px] font-[500]">
                Upload Prescription
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddMedicationModal;
