import React from "react";
import Modal from "../common/Modal";

const BookingModal = ({
  selectedDoctor,
  appointmentForm,
  setAppointmentForm,
  onClose,
  onSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={true} onClose={onClose} title="Schedule Appointment">
      <div className="flex items-center gap-4 mb-6 max-lg:flex-col max-lg:items-start">
        <img
          src={selectedDoctor?.image}
          alt={selectedDoctor?.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-[18px] font-medium text-[#1E293B]">
            {selectedDoctor?.name}
          </h3>
          <p className="text-[14px] text-[#64748B]">
            {selectedDoctor?.specialty}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 mb-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-[14px] font-medium text-[#1E293B]"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={appointmentForm.date}
              onChange={handleChange}
              className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="time"
              className="text-[14px] font-medium text-[#1E293B]"
            >
              Time
            </label>
            <select
              id="time"
              name="time"
              value={appointmentForm.time}
              onChange={handleChange}
              className="h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B] bg-white"
              required
            >
              <option value="">Select a time</option>
              {selectedDoctor?.availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="text-[14px] font-medium text-[#1E293B]">
            Appointment Type
          </label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="in-person"
                checked={appointmentForm.type === "in-person"}
                onChange={handleChange}
                className="text-[#4318D1]"
              />
              <span className="text-[14px] text-[#1E293B]">
                In-Person Visit
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="virtual"
                checked={appointmentForm.type === "virtual"}
                onChange={handleChange}
                className="text-[#4318D1]"
              />
              <span className="text-[14px] text-[#1E293B]">Virtual Visit</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="reason"
            className="text-[14px] font-medium text-[#1E293B]"
          >
            Reason for Visit
          </label>
          <textarea
            id="reason"
            name="reason"
            value={appointmentForm.reason}
            onChange={handleChange}
            className="w-full h-24 px-4 py-3 mt-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="insurance"
            className="text-[14px] font-medium text-[#1E293B]"
          >
            Insurance Information
          </label>
          <input
            id="insurance"
            type="text"
            name="insurance"
            value={appointmentForm.insurance}
            onChange={handleChange}
            placeholder="Insurance provider and policy number"
            className="w-full h-12 px-4 mt-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
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
            value={appointmentForm.notes}
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

export default BookingModal;
