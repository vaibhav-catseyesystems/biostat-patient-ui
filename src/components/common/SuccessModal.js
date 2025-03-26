import React from "react";

const SuccessModal = ({ selectedProvider, orderDetails, isPharmacist }) => {
  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[13px] w-[400px] max-lg:w-full p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#ECFDF5] rounded-full flex items-center justify-center">
            <span className="text-[32px] text-[#10B981]">✓</span>
          </div>
        </div>
        <h2 className="text-[24px] font-semibold text-[#1E293B] mb-2">
          {isPharmacist ? "Order Confirmed!" : "Appointment Confirmed!"}
        </h2>
        <p className="text-[16px] text-[#64748B] mb-4">
          {isPharmacist ? (
            <>
              Your medication order with {selectedProvider?.name} has been
              placed.
              {orderDetails.deliveryAddress &&
                " Delivery details have been saved."}
            </>
          ) : (
            <>
              Your appointment with {selectedProvider?.name} has been scheduled
              for {orderDetails.date} at {orderDetails.time}.
            </>
          )}
        </p>
        <p className="text-[14px] text-[#64748B]">
          A confirmation email has been sent to your registered email address.
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;
