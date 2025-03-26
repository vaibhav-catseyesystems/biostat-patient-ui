import React from "react";import CardBase from "../common/CardBase";

const DoctorCard = ({ doctor, openBookingModal }) => {
  const actionButton = (
    <button
      onClick={openBookingModal}
      className="bg-[#4318D1] text-white px-4 py-2 rounded-[8px] text-[14px] max-lg:w-full"
    >
      Book Appointment
    </button>
  );

  return (
    <CardBase
      image={doctor.image}
      title={doctor.name}
      subtitle={doctor.specialty}
      rating={doctor.rating}
      location={doctor.location}
      availability={doctor.availability}
      actionButton={actionButton}
    />
  );
};

export default DoctorCard;
