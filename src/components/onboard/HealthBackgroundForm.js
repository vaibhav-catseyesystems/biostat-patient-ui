import React, { useState } from "react";
import FormField from "./FormField";
import TextAreaField from "./TextAreaField";

const HealthBackgroundForm = ({ formData, updateFormData }) => {
    const handleChange = (field, value) => {
        updateFormData(field, value);
    };

    const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

    const allergiesOptions = [
        "Pollen", "Dust", "Peanuts", "Shellfish", "Dairy", 
        "Gluten", "Soy", "Penicillin", "Insect Stings", "Latex"
    ];

    const diseaseProfiles = [
        { title: "Diabetes", description: "A metabolic disorder causing high blood sugar.",},
        { title: "Acidity",description: "Acidity is one of the most common ailments that almost everyone"},
        { title: "Anorexia Nervosa",  description: "Anorexia nervosa, often simply referred to as anorexia, is a behavioral and life-...", },
        { title: "Asthma", description: "Respiratory condition causing breathing difficulties." },
        { title: "Heart Disease", description: "Various cardiovascular conditions affecting heart health." },
    ];

    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [selectedDisease, setSelectedDisease] = useState("");

    const handleAllergyChange = (event) => {
        const value = event.target.value;
        if (!selectedAllergies.includes(value)) {
            setSelectedAllergies([...selectedAllergies, value]);
        }
    };

    const removeAllergy = (allergy) => {
        setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
                <FormField
                    label="Height (cm)"
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleChange("height", e.target.value)}
                    placeholder="Enter height in cm"
                />
                <FormField
                    label="Weight (kg)"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    placeholder="Enter weight in kg"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#64748B]">Blood Group</label>
                <select
                    value={formData.bloodGroup}
                    onChange={(e) => handleChange("bloodGroup", e.target.value)}
                    className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
                >
                    <option value="">Select blood group</option>
                    {bloodGroups.map((group, index) => (
                        <option key={index} value={group}>
                            {group}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#64748B]">Allergies</label>
                <select
                    onChange={handleAllergyChange}
                    className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
                >
                    <option value="">Select allergies</option>
                    {allergiesOptions.map((allergy, index) => (
                        <option key={index} value={allergy}>
                            {allergy}
                        </option>
                    ))}
                </select>

                {selectedAllergies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {selectedAllergies.map((allergy, index) => (
                            <span
                                key={index}
                                className="bg-[#F3F4F6] text-[#64748B] px-3 py-1 rounded-full text-sm flex items-center gap-2"
                            >
                                {allergy}
                                <button
                                    type="button"
                                    onClick={() => removeAllergy(allergy)}
                                    className="text-[#DC2626] text-xs font-bold"
                                >
                                    ✕
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium text-[#64748B]">Choose Disease Profile</label>
                <select
                    value={selectedDisease}
                    onChange={(e) => setSelectedDisease(e.target.value)}
                    className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none w-full"
                >
                    <option value="">Select disease profile</option>
                    {diseaseProfiles.map((disease, index) => (
                        <option key={index} value={disease.title}>
                            {disease.title} - {disease.description}
                        </option>
                    ))}
                </select>
            </div>

            {selectedDisease && (
                <div className="p-4 border border-[#E9ECEF] rounded-md bg-[#F9FAFB] mt-2">
                    <h3 className="text-[14px] font-medium text-[#4318D1]">{selectedDisease}</h3>
                    <p className="text-[12px] text-[#64748B]">
                        {diseaseProfiles.find((d) => d.title === selectedDisease)?.description}
                    </p>
                </div>
            )}

            <TextAreaField
                label="Current Medications"
                value={formData.medications}
                onChange={(e) => handleChange("medications", e.target.value)}
                placeholder="List current medications"
            />

            <TextAreaField
                label="Pre-existing Conditions"
                value={formData.conditions}
                onChange={(e) => handleChange("conditions", e.target.value)}
                placeholder="List any pre-existing conditions"
            />
        </div>
    );
};

export default HealthBackgroundForm;
