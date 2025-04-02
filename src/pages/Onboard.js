import React, { useEffect, useState } from 'react'
import FormNavigation from '../components/onboard/FormNavigation';
import ProgressBar from '../components/onboard/ProgressBar';
import StepIndicator from '../components/onboard/StepIndicator';
import BasicDetailsForm from '../components/onboard/BasicDetailsForm';
import FamilyInformationForm from '../components/onboard/FamilyInformationForm';
import HealthBackgroundForm from '../components/onboard/HealthBackgroundForm';

export const Onboard = ({step=2}) => {

    const [currentStep, setCurrentStep] = useState(step);
    const [formProgress, setFormProgress] = useState({
      basicDetails: false,
      familyDetails: false,
      healthDetails: false,
    });
  
    const [formData, setFormData] = useState({
      basicDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
      },
      familyDetails: {
        maritalStatus: "",
        spouseName: "",
        children: "",
        emergencyContact: "",
        emergencyPhone: "",
      },
      healthDetails: {
        height: "",
        weight: "",
        allergies: "",
        medications: "",
        conditions: "",
      },
    });
  
    const updateFormData = (step, field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [step]: {
          ...prevData[step],
          [field]: value,
        },
      }));
    };
  
    const saveProgress = () => {
      const stepKey = Object.keys(formProgress)[currentStep - 1];
      setFormProgress((prev) => ({
        ...prev,
        [stepKey]: true,
      }));
    };
  
    const nextStep = () => {
      if (currentStep < 3) {
        saveProgress();
        setCurrentStep((prev) => prev + 1);
      }
    };
  
    const prevStep = () => {
      if (currentStep > 1) {
        setCurrentStep((prev) => prev - 1);
      }
    };
  
    const saveAndExit = () => {
      saveProgress();
      // In a real application, you would save to backend and redirect
      console.log("Saving and exiting", formData);
    };
  
    const submitForm = () => {
      saveProgress();
      // In a real application, you would submit to backend
      console.log("Form submitted", formData);
    };
  
    const isBasicDetailsValid = () => {
      return Object.values(formData.basicDetails).every((value) => value !== "");
    };
  
    const isFamilyDetailsValid = () => {
      return Object.values(formData.familyDetails).every((value) => value !== "");
    };
  
    const isHealthDetailsValid = () => {
      return Object.values(formData.healthDetails).every((value) => value !== "");
    };
  
    const completedSections = Object.values(formProgress).filter(Boolean).length;

    useEffect(()=>{

    },[])
  
    return (
      <main className="flex min-h-screen bg-[#F8F9FA] text-[#1E293B]">
        <section className="mx-auto my-4 w-full max-sm:my-0 max-sm:min-h-screen rounded-[13px] bg-white p-8 max-sm:p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
          <header className="mb-8 max-sm:mb-6">
            <h1 className="text-[32px] font-semibold max-sm:text-[24px]">
              Patient Onboarding
            </h1>
            <StepIndicator
              currentStep={currentStep}
              formProgress={formProgress}
            />
          </header>
  
          {currentStep === 1 && (
            <BasicDetailsForm
              formData={formData.basicDetails}
              updateFormData={(field, value) =>
                updateFormData("basicDetails", field, value)
              }
            />
          )}
  
          {currentStep === 2 && (
            <FamilyInformationForm
              formData={formData.familyDetails}
              updateFormData={(field, value) =>
                updateFormData("familyDetails", field, value)
              }
            />
          )}
  
          {currentStep === 3 && (
            <HealthBackgroundForm
              formData={formData.healthDetails}
              updateFormData={(field, value) =>
                updateFormData("healthDetails", field, value)
              }
            />
          )}  
          <FormNavigation
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={nextStep}
            submitForm={submitForm}
            saveProgress={saveProgress}
            saveAndExit={saveAndExit}
            isBasicDetailsValid={isBasicDetailsValid}
            isFamilyDetailsValid={isFamilyDetailsValid}
            isHealthDetailsValid={isHealthDetailsValid}
          />
  
          <ProgressBar
            formProgress={formProgress}
            completedSections={completedSections}
          />
        </section>
      </main>
    );
}
