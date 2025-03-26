import React, { useState } from "react";
import { doctors, paymentMethods, appointmentFees } from "../utils/data";
import BookingModal from "../components/Doctors/BookingModal";
import DoctorSearch from "../components/Doctors/DoctorSearch";
import PaymentModal from "../components/common/PaymentModal";
import SuccessModal from "../components/common/SuccessModal";
import PageHeader from "../components/common/PageHeader";

const DoctorPage = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentForm, setAppointmentForm] = useState({
    date: "",
    time: "",
    type: "in-person",
    reason: "",
    insurance: "",
    notes: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("credit-card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const openBookingModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  const submitAppointment = () => {
    setShowBookingModal(false);
    setShowPaymentModal(true);
  };

  const processPayment = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      resetAllForms();
    }, 3000);
  };

  const resetAllForms = () => {
    setAppointmentForm({
      date: "",
      time: "",
      type: "in-person",
      reason: "",
      insurance: "",
      notes: "",
    });
    setCardDetails({
      number: "",
      expiry: "",
      cvv: "",
      name: "",
    });
    setSelectedPaymentMethod("credit-card");
  };

  const getTotalAmount = () => {
    return (
      appointmentFees.consultation +
      appointmentFees.bookingFee +
      appointmentFees.tax
    );
  };

  return (
    <>
      <PageHeader heading={"Appointments"} subheading={"Schedule appointments"}/>
      <DoctorSearch doctors={doctors} openBookingModal={openBookingModal} />

      {showBookingModal && (
        <BookingModal
          selectedDoctor={selectedDoctor}
          appointmentForm={appointmentForm}
          setAppointmentForm={setAppointmentForm}
          onClose={() => setShowBookingModal(false)}
          onSubmit={submitAppointment}
        />
      )}

      {showPaymentModal && (
        <PaymentModal
          selectedProvider={selectedDoctor}
          orderForm={appointmentForm}
          paymentMethods={paymentMethods}
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          fees={appointmentFees}
          getTotalAmount={getTotalAmount}
          onClose={() => setShowPaymentModal(false)}
          onSubmit={processPayment}
          isPharmacist={false}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          selectedProvider={selectedDoctor}
          orderDetails={appointmentForm}
          isPharmacist={false}
        />
      )}
    </>
  );
};

export default DoctorPage;
