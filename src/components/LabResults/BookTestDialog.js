"use client";
import React, { useState } from "react";

const testTypes = [
  "Complete Blood Count",
  "Lipid Panel",
  "Thyroid Function Test",
  "Vitamin D Test",
  "Liver Function Test",
  "Kidney Function Test",
  "HbA1c (Diabetes Test)",
  "Hormone Panel",
  "Allergy Test",
  "COVID-19 Test",
];

const availableLabs = [
  "City Diagnostics",
  "HealthLab Plus",
  "MedLife Diagnostics",
  "Central Medical Lab",
  "Premier Diagnostics",
];

function BookTestDialog({ onClose, onBookingComplete }) {
  const [formData, setFormData] = useState({
    testType: "",
    lab: "",
    date: "",
    time: "",
    notes: "",
    homeCollection: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.testType) newErrors.testType = "Test type is required";
    if (!formData.lab) newErrors.lab = "Lab is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        onBookingComplete(formData);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800">
            Book New Test
          </h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="testType"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Test Type*
            </label>
            <select
              id="testType"
              name="testType"
              value={formData.testType}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.testType ? "border-red-500" : "border-gray-300"}`}
              required
            >
              <option value="">Select a test type</option>
              {testTypes.map((test, index) => (
                <option key={index} value={test}>
                  {test}
                </option>
              ))}
            </select>
            {errors.testType && (
              <p className="mt-1 text-sm text-red-500">{errors.testType}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lab"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Select Lab*
            </label>
            <select
              id="lab"
              name="lab"
              value={formData.lab}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.lab ? "border-red-500" : "border-gray-300"}`}
              required
            >
              <option value="">Select a lab</option>
              {availableLabs.map((lab, index) => (
                <option key={index} value={lab}>
                  {lab}
                </option>
              ))}
            </select>
            {errors.lab && (
              <p className="mt-1 text-sm text-red-500">{errors.lab}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Date*
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${errors.date ? "border-red-500" : "border-gray-300"}`}
                min={new Date().toISOString().split("T")[0]}
                required
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-slate-700 mb-1"
              >
                Time*
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg ${errors.time ? "border-red-500" : "border-gray-300"}`}
                required
              />
              {errors.time && (
                <p className="mt-1 text-sm text-red-500">{errors.time}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Any special instructions or information..."
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="homeCollection"
                checked={formData.homeCollection}
                onChange={handleChange}
                className="mr-2 h-4 w-4 text-indigo-700"
              />
              <span className="text-sm text-slate-700">
                Request home sample collection
              </span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-slate-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-indigo-700 text-white rounded-lg disabled:bg-indigo-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookTestDialog;
