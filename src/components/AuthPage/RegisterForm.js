import React, { useState } from "react";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";
import RegisterStepThree from "./RegisterStepThree";

function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    height: "",
    weight: "",
    bloodType: "",
    allergies: "",
    medications: "",
    conditions: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission
    console.log("Registration data:", formData);
  };

  return (
    <div>
      {currentStep === 1 && (
        <RegisterStepOne
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNextStep}
        />
      )}

      {currentStep === 2 && (
        <RegisterStepTwo
          formData={formData}
          updateFormData={updateFormData}
          onNext={handleNextStep}
          onBack={handlePreviousStep}
        />
      )}

      {currentStep === 3 && (
        <RegisterStepThree
          formData={formData}
          updateFormData={updateFormData}
          onBack={handlePreviousStep}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default RegisterForm;
