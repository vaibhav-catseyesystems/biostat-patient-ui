import React, { useState } from "react";

const UploadMedRecordModal = ({ recordTypes, closeModal }) => {
  const [recordType, setRecordType] = useState("");
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission
    // For now, just close the modal
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
      <div className="bg-white rounded-[13px] p-5 max-w-[500px] w-full mx-4">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[24px] font-[600] text-[#1E293B]">
            Upload New Record
          </h2>
          <button
            onClick={closeModal}
            className="text-[24px] text-[#64748B]"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="recordType"
              className="text-[14px] font-[500] text-[#1E293B]"
            >
              Record Type
            </label>
            <select
              id="recordType"
              value={recordType}
              onChange={(e) => setRecordType(e.target.value)}
              className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              required
            >
              <option value="" disabled>
                Select record type
              </option>
              {recordTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-[14px] font-[500] text-[#1E293B]"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter record title"
              className="w-full px-4 py-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="provider"
              className="text-[14px] font-[500] text-[#1E293B]"
            >
              Provider
            </label>
            <input
              id="provider"
              type="text"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              placeholder="Enter provider name"
              className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="date"
              className="text-[14px] font-[500] text-[#1E293B]"
            >
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[14px] font-[500] text-[#1E293B]">
              Upload File
            </label>
            <div className="border-[2px] border-dashed border-[#E9ECEF] rounded-[8px] p-4 text-center">
              <span className="text-[38px] block mb-2">📄</span>
              <p className="text-[14px] text-[#64748B] mb-4">
                Drag and drop your file here or
              </p>
              <label
                htmlFor="fileUpload"
                className="px-2 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] cursor-pointer"
              >
                Browse Files
              </label>
              <input
                id="fileUpload"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px]"
            >
              Upload Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadMedRecordModal;
