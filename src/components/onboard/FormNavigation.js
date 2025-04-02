import React from "react";

const FormNavigation = ({
  currentStep,
  prevStep,
  nextStep,
  submitForm,
  saveProgress,
  saveAndExit,
  isBasicDetailsValid,
  isFamilyDetailsValid,
  isHealthDetailsValid,
}) => {
  const isNextDisabled =
    (currentStep === 1 && !isBasicDetailsValid()) ||
    (currentStep === 2 && !isFamilyDetailsValid());

  const isSubmitDisabled = currentStep === 3 && !isHealthDetailsValid();

  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        {/* {currentStep > 1 && (
          <button
            onClick={prevStep}
            className="rounded-[8px] bg-[#F1F5F9] px-6 py-3 font-medium text-[#1E293B] max-sm:w-full"
          >
            Previous
          </button>
        )} */}

        {currentStep < 3 && (
          <button
            onClick={nextStep}
            disabled={isNextDisabled}
            className={`rounded-[8px] bg-[#4318D1] px-6 py-3 font-medium text-white max-sm:w-full ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button
            onClick={submitForm}
            disabled={isSubmitDisabled}
            className={`rounded-[8px] bg-[#4318D1] px-6 py-3 font-medium text-white max-sm:w-full ${
              isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </button>
        )}
      </div>

      { (currentStep===1||currentStep===2 )&&
        <div className="flex flex-wrap gap-4">
        <button
          onClick={saveProgress}
          className="rounded-[8px] border-[0.8px] border-[#E9ECEF] px-6 py-3 font-medium text-[#64748B] max-sm:w-full"
        >
          Save & Continue
        </button>
        <button
          onClick={saveAndExit}
          className="rounded-[8px] bg-[#F1F5F9] px-6 py-3 font-medium text-[#1E293B] max-sm:w-full"
        >
          Save & Exit
        </button>
      </div>}
    </div>
  );
};

export default FormNavigation;
