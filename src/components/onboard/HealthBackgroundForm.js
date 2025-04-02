import React from "react";
import FormField from "./FormField";
import TextAreaField from "./TextAreaField";

const HealthBackgroundForm = ({ formData, updateFormData }) => {
    const handleChange = (field, value) => {
        updateFormData(field, value);
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

            <TextAreaField
                label="Known Allergies"
                value={formData.allergies}
                onChange={(e) => handleChange("allergies", e.target.value)}
                placeholder="List any known allergies"
            />

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
