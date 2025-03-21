import React from "react";

function RegisterStepTwo({ formData, updateFormData, onNext, onBack }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h3 className="text-[18px] font-medium text-[#1E293B] mb-[24px]">
        Health Information
      </h3>
      <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <label
              htmlFor="height"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              Height (cm)
            </label>
            <input
              id="height"
              name="height"
              type="number"
              value={formData.height}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Enter height"
            />
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              Weight (kg)
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Enter weight"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="bloodType"
            className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
          >
            Blood Type
          </label>
          <select
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
          >
            <option value="">Select blood type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="allergies"
            className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
          >
            Allergies
          </label>
          <textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
            placeholder="List any allergies (if none, write 'None')"
            rows="2"
          />
        </div>

        <div>
          <label
            htmlFor="medications"
            className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
          >
            Current Medications
          </label>
          <textarea
            id="medications"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
            placeholder="List current medications (if none, write 'None')"
            rows="2"
          />
        </div>

        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 py-[12px] bg-[#F1F5F9] text-[#1E293B] rounded-[8px] text-[15px] font-medium"
          >
            Back
          </button>
          <button
            type="submit"
            className="flex-1 py-[12px] bg-[#4318D1] text-white rounded-[8px] text-[15px] font-medium"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterStepTwo;
