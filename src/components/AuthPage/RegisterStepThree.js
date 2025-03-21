import React from "react";

function RegisterStepThree({ formData, updateFormData, onBack, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFormData({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <div>
            <h3 className="text-[18px] font-medium text-[#1E293B] mb-[24px]">
                Emergency Contact
            </h3>
            <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="emergencyContact"
                        className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
                    >
                        Emergency Contact Name
                    </label>
                    <input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
                        placeholder="Enter emergency contact name"
                    />
                </div>

                <div>
                    <label
                        htmlFor="emergencyPhone"
                        className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
                    >
                        Emergency Contact Phone
                    </label>
                    <input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
                        placeholder="Enter emergency contact phone"
                    />
                </div>

                <div>
                    <label
                        htmlFor="conditions"
                        className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
                    >
                        Pre-existing Conditions
                    </label>
                    <textarea
                        id="conditions"
                        name="conditions"
                        value={formData.conditions}
                        onChange={handleChange}
                        className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
                        placeholder="List any pre-existing conditions (if none, write 'None')"
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
                        Complete Registration
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterStepThree;
