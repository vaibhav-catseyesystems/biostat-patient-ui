import React from "react";
import Modal from "../common/Modal";

const MedicationModal = ({
  selectedPharmacist,
  medicationForm,
  setMedicationForm,
  onClose,
  onSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={true} onClose={onClose} title="Order Medication">
      <div className="flex items-center gap-4 mb-6 max-lg:flex-col max-lg:items-start">
        <img
          src={selectedPharmacist?.image}
          alt={selectedPharmacist?.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-[18px] font-medium text-[#1E293B]">
            {selectedPharmacist?.name}
          </h3>
          <p className="text-[14px] text-[#64748B]">
            {selectedPharmacist?.specialty}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col gap-2 col-span-2">
            <label
              htmlFor="medication"
              className="text-[14px] font-medium text-[#1E293B]"
            >
              Medication Name
            </label>
            <input
              id="medication"
              type="text"
              name="medication"
              value={medicationForm.medication}
              onChange={handleChange}
              placeholder="Enter medication name"
              className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dosage"
              className="text-[14px] font-medium text-[#1E293B]"
            >
              Dosage
            </label>
            <input
              id="dosage"
              type="text"
              name="dosage"
              value={medicationForm.dosage}
              onChange={handleChange}
              placeholder="e.g., 10mg"
              className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="quantity"
              className="text-[14px] font-medium text-[#1E293B]"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              name="quantity"
              value={medicationForm.quantity}
              onChange={handleChange}
              placeholder="e.g., 30 tablets"
              className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="text-[14px] font-medium text-[#1E293B]">
            Refill Options
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="refill"
                value="no"
                checked={medicationForm.refill === "no"}
                onChange={handleChange}
                className="text-[#4318D1]"
              />
              <span className="text-[14px] text-[#1E293B]">No Refill</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="refill"
                value="auto"
                checked={medicationForm.refill === "auto"}
                onChange={handleChange}
                className="text-[#4318D1]"
              />
              <span className="text-[14px] text-[#1E293B]">Auto Refill</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="prescription"
            className="text-[14px] font-medium text-[#1E293B]"
          >
            Prescription Information
          </label>
          <textarea
            id="prescription"
            name="prescription"
            value={medicationForm.prescription}
            onChange={handleChange}
            placeholder="Enter prescription details or upload an image"
            className="w-full h-24 px-4 py-3 mt-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="deliveryAddress"
            className="text-[14px] font-medium text-[#1E293B]"
          >
            Delivery Address
          </label>
          <textarea
            id="deliveryAddress"
            name="deliveryAddress"
            value={medicationForm.deliveryAddress}
            onChange={handleChange}
            placeholder="Enter your delivery address"
            className="w-full h-24 px-4 py-3 mt-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="notes"
            className="text-[14px] font-medium text-[#1E293B]"
          >
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={medicationForm.notes}
            onChange={handleChange}
            placeholder="Any additional information you'd like to share"
            className="w-full h-24 px-4 py-3 mt-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
          />
        </div>
        <div className="flex justify-end gap-4 mt-6 max-lg:flex-col">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B] max-lg:order-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-[8px] bg-[#4318D1] text-white max-lg:order-1"
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MedicationModal;
