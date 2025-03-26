import React, { useState } from "react";
import { pharmacists, paymentMethods, medicationFees } from "../utils/data";
import PaymentModal from "../components/common/PaymentModal";
import SuccessModal from "../components/common/SuccessModal";
import PharmacistSearch from "../components/Pharmacist/PharmacistSearch";
import MedicationModal from "../components/Pharmacist/MedicationModal";

const PharmacistPage = () => {
  const [showMedicationModal, setShowMedicationModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedPharmacist, setSelectedPharmacist] = useState(null);
  const [medicationForm, setMedicationForm] = useState({
    medication: "",
    dosage: "",
    quantity: "",
    refill: "no",
    prescription: "",
    deliveryAddress: "",
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

  const openMedicationModal = (pharmacist) => {
    setSelectedPharmacist(pharmacist);
    setShowMedicationModal(true);
  };

  const submitMedicationOrder = () => {
    setShowMedicationModal(false);
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
    setMedicationForm({
      medication: "",
      dosage: "",
      quantity: "",
      refill: "no",
      prescription: "",
      deliveryAddress: "",
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
      medicationFees.medicationCost +
      medicationFees.deliveryFee +
      medicationFees.tax
    );
  };

  return (
    <>
      <PharmacistSearch
        pharmacists={pharmacists}
        openMedicationModal={openMedicationModal}
      />

      {showMedicationModal && (
        <MedicationModal
          selectedPharmacist={selectedPharmacist}
          medicationForm={medicationForm}
          setMedicationForm={setMedicationForm}
          onClose={() => setShowMedicationModal(false)}
          onSubmit={submitMedicationOrder}
        />
      )}

      {showPaymentModal && (
        <PaymentModal
          selectedProvider={selectedPharmacist}
          orderForm={medicationForm}
          paymentMethods={paymentMethods}
          selectedPaymentMethod={selectedPaymentMethod}
          setSelectedPaymentMethod={setSelectedPaymentMethod}
          cardDetails={cardDetails}
          setCardDetails={setCardDetails}
          fees={medicationFees}
          getTotalAmount={getTotalAmount}
          onClose={() => setShowPaymentModal(false)}
          onSubmit={processPayment}
          isPharmacist={true}
        />
      )}

      {showSuccessModal && (
        <SuccessModal
          selectedProvider={selectedPharmacist}
          orderDetails={medicationForm}
          isPharmacist={true}
        />
      )}
    </>
  );
};

export default PharmacistPage;
