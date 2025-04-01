import React, { useState } from "react";
import Modal from "../common/Modal";
import { useDispatch } from "react-redux";
import { addUserMedicalRecord } from "../../actions/medicalRecordActions";

const UploadMedRecordModal = ({ recordTypes, closeModal }) => {
  const [recordType, setRecordType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const dispatch=useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    let data = new FormData();
    data.append('file', file);
    data.append('upload_source', 'MANUAL');
    data.append('record_type', recordType);
    data.append('description', description);
    dispatch(addUserMedicalRecord(data))
    closeModal();
  };

  return (

    <Modal isOpen={true} onClose={closeModal} title="Upload New Record">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="recordType" className="text-[14px] font-[500] text-[#1E293B]">
            Record Type</label>
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
          <label htmlFor="description"
            className="text-[14px] font-[500] text-[#1E293B]"
          >Description</label>
          <textarea
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter record description"
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
            <p className="text-[14px] text-[#64748B] mb-4">Drag and drop your file here or</p>
            <label htmlFor="fileUpload" className="px-2 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] cursor-pointer">
              Browse Files
            </label>
            <input id="fileUpload" type="file"
              onChange={(e) => {setFile(e.target.files[0])}}
              className="hidden"
            />
            {file && <p className="text-[14px] text-green-600 mt-2">Selected file: {file.name}</p>}
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button type="button" onClick={closeModal} className="px-6 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B] max-lg:order-2" >
            Cancel </button>
          <button type="submit" className="px-6 py-3 rounded-[8px] bg-[#4318D1] text-white max-lg:order-1">
            Upload Record
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadMedRecordModal;
