import React from "react";

function DateTimeSelection({ formData, updateFormData, onBack, onContinue }) {
  const { selectedDate, selectedTime } = formData;

  const isFormValid = selectedDate && selectedTime;

  return (
    <div className="space-y-[24px]">
      <div>
        <label
          htmlFor="date-select"
          className="block text-[14px] font-[500] text-[#1E293B] mb-[8px]"
        >
          Select Date
        </label>
        <input
          id="date-select"
          type="date"
          value={selectedDate}
          onChange={(e) => updateFormData("selectedDate", e.target.value)}
          className="w-full border-[1px] border-[#E9ECEF] rounded-[8px] p-[12px] text-[#1E293B]"
        />
      </div>

      <div>
        <label
          htmlFor="time-select"
          className="block text-[14px] font-[500] text-[#1E293B] mb-[8px]"
        >
          Select Time
        </label>
        <select
          id="time-select"
          value={selectedTime}
          onChange={(e) => updateFormData("selectedTime", e.target.value)}
          className="w-full border-[1px] border-[#E9ECEF] rounded-[8px] p-[12px] text-[#1E293B]"
        >
          <option value="">Choose time slot</option>
          <option value="09:00">09:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          <option value="14:00">02:00 PM</option>
          <option value="15:00">03:00 PM</option>
          <option value="16:00">04:00 PM</option>
        </select>
      </div>

      <div className="flex gap-[12px] mt-[24px]">
        <button
          onClick={onBack}
          className="flex-1 bg-[#F1F5F9] text-[#64748B] rounded-[8px] py-[12px]"
        >
          Back
        </button>
        <button
          onClick={onContinue}
          disabled={!isFormValid}
          className={`flex-1 bg-[#4318D1] text-white rounded-[8px] py-[12px] ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DateTimeSelection;
