import React from "react";
import CardBase from "../common/CardBase";

const PharmacistCard = ({ pharmacist, openMedicationModal }) => {
  const actionButton = (
    <button
      onClick={openMedicationModal}
      className="bg-[#4318D1] text-white px-4 py-2 rounded-[8px] text-[14px] max-lg:w-full"
    >
      Order Medication
    </button>
  );

  return (
    <CardBase
      image={pharmacist.image}
      title={pharmacist.name}
      subtitle={pharmacist.specialty}
      rating={pharmacist.rating}
      location={pharmacist.location}
      availability={pharmacist.availability}
      actionButton={actionButton}
    >
      <p className="text-[13px] text-[#64748B] mt-1">
        <span className="text-[#10B981]">🚚</span> {pharmacist.deliveryTime}
      </p>
    </CardBase>
  );
};

export default PharmacistCard;
