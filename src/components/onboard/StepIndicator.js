import React from "react";

const StepIndicator = ({ currentStep, formProgress }) => {
  return (
    <div className="mt-4 flex items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-4">
      <StepItem
        number={1}
        title="Basic Details"
        isActive={currentStep === 1}
        isCompleted={formProgress.basicDetails}
      />

      <div className="h-[2px] w-12 bg-[#E9ECEF] max-sm:hidden" />

      <StepItem
        number={2}
        title="Family Information"
        isActive={currentStep === 2}
        isCompleted={formProgress.familyDetails}
      />

      <div className="h-[2px] w-12 bg-[#E9ECEF] max-sm:hidden" />

      <StepItem
        number={3}
        title="Health Background"
        isActive={currentStep === 3}
        isCompleted={formProgress.healthDetails}
      />
    </div>
  );
};

const StepItem = ({
  number,
  title,
  isActive,
  isCompleted,
}) => {
  const circleBackground = isCompleted
    ? "bg-[#4318D1]"
    : isActive
      ? "bg-[#4318D1]"
      : "bg-[#E9ECEF]";

  const textColor = isActive
    ? "text-[#4318D1]"
    : isCompleted
      ? "text-[#4318D1]"
      : "text-[#64748B]";

  const circleTextColor =
    isActive || isCompleted ? "text-white" : "text-[#64748B]";

  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full ${circleBackground} ${circleTextColor} max-sm:h-6 max-sm:w-6 max-sm:text-[14px]`}
      >
        {isCompleted ? "✓" : number}
      </div>
      <div className={`whitespace-nowrap ${textColor} max-sm:text-[14px]`}>
        {title}
      </div>
    </div>
  );
};

export default StepIndicator;
