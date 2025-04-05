import React, { useEffect, useState } from 'react';
import FormNavigation from '../components/onboard/FormNavigation';
import ProgressBar from '../components/onboard/ProgressBar';
import StepIndicator from '../components/onboard/StepIndicator';
import BasicDetailsForm from '../components/onboard/BasicDetailsForm';
import FamilyInformationForm from '../components/onboard/FamilyInformationForm';
import HealthBackgroundForm from '../components/onboard/HealthBackgroundForm';

export const Onboard = ({ step = 1 }) => {
  const [currentStep, setCurrentStep] = useState(step);
  const [formProgress, setFormProgress] = useState({
    basicDetails: false,
    familyDetails: false,
    healthDetails: false,
  });

  const [formData, setFormData] = useState({
    basicDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      abhaNumber: '',
      address: '',
      emergencyContact: '',
      nationality: '',
      passportNumber: '',
      countryOfResidence: '',
      isIndian: '',
      password: '',
    },
    familyDetails: {
      maritalStatus: '',
      emergencyContact: '',
      emergencyPhone: '',
      familyMembers: [{ first_name: "",last_name: "",relation: "", role:"relative",gender:"",address:"",date_of_birth:"",mobile_no: "",email: "", }],
    },
    healthDetails: {
      height: '',
      weight: '',
      bloodGroup: '',
      allergies: '',
      diseaseProfiles: [{ title: '' }],
      medications: '',
      conditions: '',
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
    setCurrentStep(currentStep+1);
    console.log(`Step ${currentStep} Data Saved:`, formData);
  };

  const nextStep = () => {
    saveProgress();
    if (currentStep < 3) {
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
    console.log('Saved & Exited with Data:', formData);
  };

  const submitForm = () => {
    saveProgress();
    console.log('Form Submitted:', formData);
  };

  const isBasicDetailsValid = () => {
    return Object.values(formData.basicDetails).every((value) => value !== '');
  };

  const isFamilyDetailsValid = () => {
    return formData.familyDetails.familyMembers.every(
      (member) =>
        member.first_name !== '' &&
      member.last_name !== '' &&
      member.relation !== '' &&
        member.gender !== '' &&
        member.date_of_birth !== '' &&
        member.address !== '' &&
        member.mobile_no !== '' &&
        member.email !== ''
    );
  };

  const isHealthDetailsValid = () => {
    return Object.values(formData.healthDetails).every((value) => value !== '');
  };

  const completedSections = Object.values(formProgress).filter(Boolean).length;

  return (
    <main className="flex min-h-screen bg-[#F8F9FA] text-[#1E293B]">
      <section className="mx-auto my-4 w-full max-sm:my-0 max-sm:min-h-screen rounded-[13px] bg-white p-8 max-sm:p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
        <header className="mb-8 max-sm:mb-6">
          <h1 className="text-[32px] font-semibold max-sm:text-[24px]">
            Patient Onboarding
          </h1>
          <StepIndicator currentStep={currentStep} formProgress={formProgress} />
        </header>

        {currentStep === 1 && (
          <BasicDetailsForm
            formData={formData.basicDetails}
            updateFormData={(field, value) =>
              updateFormData('basicDetails', field, value)
            }
          />
        )}

        {currentStep === 2 && (
          <FamilyInformationForm
            formData={formData.familyDetails}
            updateFormData={(field, value) =>
              updateFormData('familyDetails', field, value)
            }
          />
        )}

        {currentStep === 3 && (
          <HealthBackgroundForm
            formData={formData.healthDetails}
            updateFormData={(field, value) =>
              updateFormData('healthDetails', field, value)
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

        <ProgressBar formProgress={formProgress} completedSections={completedSections} />
      </section>
    </main>
  );
};


