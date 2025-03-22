import React from "react";

const MedicalHistorydModal = ({ record, onClose }) => {
  const isNewRecord = !record;

  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-[13px] p-8 max-lg:p-4 w-[600px] max-lg:w-full max-h-[90vh] overflow-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-semibold text-[#1E293B]">
            {isNewRecord ? "New Record" : record.description}
          </h2>
          <button
            onClick={onClose}
            className="text-[24px] text-[#64748B]"
            aria-label="Close modal"
          >
            ✕
          </button>
        </header>

        {isNewRecord ? <NewRecordForm /> : <RecordDetails record={record} />}

        <footer className="mt-8 flex justify-end gap-4 max-lg:flex-col">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-[8px] bg-[#F1F5F9] text-[#64748B]"
          >
            Close
          </button>
          {isNewRecord && (
            <button className="px-6 py-2 rounded-[8px] bg-[#4318D1] text-white">
              Save Record
            </button>
          )}
        </footer>
      </div>
    </div>
  );
};

const RecordDetails = ({ record }) => {
  const { type, doctor, hospital, date, details, notes } = record;

  const detailItems = [
    { label: "Type", value: type },
    { label: "Doctor", value: doctor },
    { label: "Hospital", value: hospital },
    { label: "Date", value: date },
    { label: "Details", value: details },
    { label: "Notes", value: notes },
  ];

  return (
    <div className="flex flex-col gap-4">
      {detailItems.map((item, index) => (
        <p key={index} className="text-[16px] text-[#1E293B]">
          <span className="font-medium">{item.label}:</span> {item.value}
        </p>
      ))}
    </div>
  );
};

const NewRecordForm = () => {
  const formFields = [
    {
      id: "type",
      label: "Type",
      type: "select",
      options: ["Surgery", "Vaccination", "Consultation", "Treatment", "Other"],
    },
    { id: "description", label: "Description", type: "text" },
    { id: "doctor", label: "Doctor", type: "text" },
    { id: "hospital", label: "Hospital", type: "text" },
    { id: "date", label: "Date", type: "date" },
    { id: "details", label: "Details", type: "textarea" },
    { id: "notes", label: "Notes", type: "textarea" },
    {
      id: "status",
      label: "Status",
      type: "select",
      options: ["completed", "ongoing"],
    },
  ];

  return (
    <form className="flex flex-col gap-4">
      {formFields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1">
          <label
            htmlFor={field.id}
            className="text-[14px] font-medium text-[#1E293B]"
          >
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              id={field.id}
              className="w-full h-[40px] px-3 rounded-[6px] border border-[#E9ECEF] bg-white text-[#1E293B]"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.id}
              className="w-full h-[80px] p-3 rounded-[6px] border border-[#E9ECEF] bg-white text-[#1E293B] resize-none"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              className="w-full h-[40px] px-3 rounded-[6px] border border-[#E9ECEF] bg-white text-[#1E293B]"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default MedicalHistorydModal;
