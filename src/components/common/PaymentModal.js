import React from "react";
import Modal from "../common/Modal";

const PaymentModal = ({
  selectedProvider,
  orderForm,
  paymentMethods,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  cardDetails,
  setCardDetails,
  fees,
  getTotalAmount,
  onClose,
  onSubmit,
  isPharmacist,
}) => {
  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={true} onClose={onClose} title="Payment Details">
      <div className="mb-6 p-4 bg-[#F8F9FA] rounded-[8px]">
        <h3 className="text-[16px] font-medium text-[#1E293B] mb-2">
          {isPharmacist ? "Order Summary" : "Appointment Summary"}
        </h3>
        <div className="flex justify-between mb-1">
          <p className="text-[14px] text-[#64748B]">
            {isPharmacist ? "Pharmacist:" : "Doctor:"}
          </p>
          <p className="text-[14px] text-[#1E293B]">{selectedProvider?.name}</p>
        </div>
        {isPharmacist ? (
          <>
            <div className="flex justify-between mb-1">
              <p className="text-[14px] text-[#64748B]">Medication:</p>
              <p className="text-[14px] text-[#1E293B]">
                {orderForm.medication} {orderForm.dosage}
              </p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="text-[14px] text-[#64748B]">Quantity:</p>
              <p className="text-[14px] text-[#1E293B]">{orderForm.quantity}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-[#64748B]">Refill:</p>
              <p className="text-[14px] text-[#1E293B]">
                {orderForm.refill === "auto" ? "Auto Refill" : "No Refill"}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between mb-1">
              <p className="text-[14px] text-[#64748B]">Date:</p>
              <p className="text-[14px] text-[#1E293B]">{orderForm.date}</p>
            </div>
            <div className="flex justify-between mb-1">
              <p className="text-[14px] text-[#64748B]">Time:</p>
              <p className="text-[14px] text-[#1E293B]">{orderForm.time}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-[#64748B]">Type:</p>
              <p className="text-[14px] text-[#1E293B]">
                {orderForm.type === "in-person"
                  ? "In-Person Visit"
                  : "Virtual Visit"}
              </p>
            </div>
          </>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-[16px] font-medium text-[#1E293B] mb-3">
            Payment Method
          </h3>
          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center gap-2 p-3 rounded-[8px] border-[0.8px] cursor-pointer ${
                  selectedPaymentMethod === method.id
                    ? "border-[#4318D1] bg-[#F1EAFE]"
                    : "border-[#E9ECEF]"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedPaymentMethod === method.id}
                  onChange={() => setSelectedPaymentMethod(method.id)}
                  className="hidden"
                />
                <span className="text-[18px]">{method.icon}</span>
                <span className="text-[14px] text-[#1E293B]">
                  {method.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {selectedPaymentMethod === "credit-card" ||
        selectedPaymentMethod === "debit-card" ? (
          <div className="mb-6">
            <h3 className="text-[16px] font-medium text-[#1E293B] mb-3">
              Card Details
            </h3>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mb-4">
              <div className="flex flex-col gap-2 col-span-2">
                <label
                  htmlFor="number"
                  className="text-[14px] font-medium text-[#1E293B]"
                >
                  Card Number
                </label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={cardDetails.number}
                  onChange={handleCardDetailsChange}
                  placeholder="1234 5678 9012 3456"
                  className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="expiry"
                  className="text-[14px] font-medium text-[#1E293B]"
                >
                  Expiry Date
                </label>
                <input
                  id="expiry"
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleCardDetailsChange}
                  placeholder="MM/YY"
                  className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cvv"
                  className="text-[14px] font-medium text-[#1E293B]"
                >
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardDetailsChange}
                  placeholder="123"
                  className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 col-span-2">
                <label
                  htmlFor="name"
                  className="text-[14px] font-medium text-[#1E293B]"
                >
                  Cardholder Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={cardDetails.name}
                  onChange={handleCardDetailsChange}
                  placeholder="John Doe"
                  className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
                  required
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-[#F8F9FA] rounded-[8px]">
            <p className="text-[14px] text-[#64748B]">
              You'll be redirected to complete your payment with{" "}
              {
                paymentMethods.find(
                  (method) => method.id === selectedPaymentMethod,
                )?.name
              }
              .
            </p>
          </div>
        )}

        <div className="mb-6 p-4 bg-[#F8F9FA] rounded-[8px]">
          <h3 className="text-[16px] font-medium text-[#1E293B] mb-3">
            Payment Summary
          </h3>
          <div className="flex justify-between mb-2">
            <p className="text-[14px] text-[#64748B]">
              {isPharmacist ? "Medication Cost" : "Consultation Fee"}
            </p>
            <p className="text-[14px] text-[#1E293B]">
              $
              {isPharmacist
                ? fees.medicationCost.toFixed(2)
                : fees.consultation.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-[14px] text-[#64748B]">
              {isPharmacist ? "Delivery Fee" : "Booking Fee"}
            </p>
            <p className="text-[14px] text-[#1E293B]">
              $
              {isPharmacist
                ? fees.deliveryFee.toFixed(2)
                : fees.bookingFee.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-[14px] text-[#64748B]">Tax</p>
            <p className="text-[14px] text-[#1E293B]">${fees.tax.toFixed(2)}</p>
          </div>
          <div className="border-t-[0.8px] border-[#E9ECEF] mt-2 pt-2 flex justify-between">
            <p className="text-[16px] font-medium text-[#1E293B]">Total</p>
            <p className="text-[16px] font-medium text-[#1E293B]">
              ${getTotalAmount().toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6 max-lg:flex-col">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B] max-lg:order-2"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-[8px] bg-[#4318D1] text-white max-lg:order-1"
          >
            Complete Payment
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default PaymentModal;
