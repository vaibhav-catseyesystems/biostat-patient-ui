import React from "react";

function DoctorSelection({ formData, updateFormData, onContinue }) {
  const { selectedDoctor, appointmentType } = formData;

  const isFormValid = selectedDoctor && appointmentType;

  return (
    <div className="space-y-[24px]">
      <div>
        <label
          htmlFor="doctor-select"
          className="block text-[14px] font-[500] text-[#1E293B] mb-[8px]"
        >
          Select Doctor
        </label>
        <select
          id="doctor-select"
          value={selectedDoctor}
          onChange={(e) => updateFormData("selectedDoctor", e.target.value)}
          className="w-full border-[1px] border-[#E9ECEF] rounded-[8px] p-[12px] text-[#1E293B]"
        >
          <option value="">Choose a doctor</option>
          <option value="dr-smith">Dr. Sarah Smith - Cardiologist</option>
          <option value="dr-chen">Dr. Michael Chen - Dermatologist</option>
          <option value="dr-patel">Dr. Ravi Patel - General Physician</option>
        </select>
      </div>

      <fieldset>
        <legend className="block text-[14px] font-[500] text-[#1E293B] mb-[8px]">
          Appointment Type
        </legend>
        <div className="flex gap-[12px]">
          <button
            type="button"
            onClick={() => updateFormData("appointmentType", "in-person")}
            className={`flex-1 py-[12px] rounded-[8px] ${
              appointmentType === "in-person"
                ? "bg-[#4318D1] text-white"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}
          >
            In-Person Visit
          </button>
          <button
            type="button"
            onClick={() => updateFormData("appointmentType", "video")}
            className={`flex-1 py-[12px] rounded-[8px] ${
              appointmentType === "video"
                ? "bg-[#4318D1] text-white"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}
          >
            Video Consultation
          </button>
        </div>
      </fieldset>

      <button
        onClick={onContinue}
        disabled={!isFormValid}
        className={`w-full bg-[#4318D1] text-white rounded-[8px] py-[12px] mt-[24px] ${
          !isFormValid ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

export default DoctorSelection;
