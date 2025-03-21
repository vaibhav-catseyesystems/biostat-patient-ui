import React from "react";

function SymptomDetails({ formData, updateFormData, onBack, onSubmit }) {
  const { symptoms } = formData;

  const isFormValid = symptoms.trim().length > 0;

  return (
    <div className="space-y-[24px]">
      <div>
        <label
          htmlFor="symptoms"
          className="block text-[14px] font-[500] text-[#1E293B] mb-[8px]"
        >
          Describe Your Symptoms
        </label>
        <textarea
          id="symptoms"
          value={symptoms}
          onChange={(e) => updateFormData("symptoms", e.target.value)}
          className="w-full border-[1px] border-[#E9ECEF] rounded-[8px] p-[12px] text-[#1E293B] h-[120px]"
          placeholder="Please describe your symptoms or reason for visit..."
        />
      </div>

      <div className="flex gap-[12px] mt-[24px]">
        <button
          onClick={onBack}
          className="flex-1 bg-[#F1F5F9] text-[#64748B] rounded-[8px] py-[12px]"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!isFormValid}
          className={`flex-1 bg-[#4318D1] text-white rounded-[8px] py-[12px] ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          Schedule Appointment
        </button>
      </div>
    </div>
  );
}

export default SymptomDetails;
