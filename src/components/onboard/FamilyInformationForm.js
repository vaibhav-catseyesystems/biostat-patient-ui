import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import FormField from "./FormField";
import { getMember } from "../../actions/memberActions";

const FamilyInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (field, value) => {
    updateFormData(field, value);
  };
  const dispatch = useDispatch();

  const [familyMembers, setFamilyMembers] = useState([]);
  const [showFamilyForm, setShowFamilyForm] = useState(false);
  const [newFamilyMember, setNewFamilyMember] = useState({
    first_name: "",
    last_name: "",
    relation: "",
    role:"relative",
    gender:"",
    address:"",
    date_of_birth:"",
    mobile_no: "",
    email: "",
  });

  const handleFamilyChange = (field, value) => {
    setNewFamilyMember((prev) => ({ ...prev, [field]: value }));
  };

  const addFamilyMember = () => {
    if (
      newFamilyMember.first_name &&
      newFamilyMember.last_name &&
      newFamilyMember.role &&
      newFamilyMember.relation &&
      newFamilyMember.gender &&
      newFamilyMember.date_of_birth &&
      newFamilyMember.address &&
      newFamilyMember.mobile_no &&
      newFamilyMember.email
    )
    {
      const members = {
        role_name: "relative",
        username: newFamilyMember.mobile_no,
        first_name: newFamilyMember.first_name,
        last_name: newFamilyMember.last_name,
        gender: newFamilyMember.gender,
        date_of_birth: new Date(newFamilyMember.date_of_birth).toISOString(),
        mobile_no: newFamilyMember.mobile_no,
        email: newFamilyMember.email,
        address: newFamilyMember.address,
      };
  
      dispatch(getMember(members));    
    {
      setFamilyMembers([...familyMembers, newFamilyMember]);
      setNewFamilyMember({ first_name: "", last_name:"", role:"relative", relation: "", gender:"",date_of_birth:"", address:"",mobile_no: "", email: "" });
      setShowFamilyForm(false);
    }
  }
  };

  

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#64748B]">
            Marital Status
          </label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
          >
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <FormField
          label="Emergency Contact Name"
          type="text"
          value={formData.emergencyContact}
          onChange={(e) => handleChange("emergencyContact", e.target.value)}
          placeholder="Enter emergency contact name"
        />
      </div>

      <FormField
        label="Emergency Contact Phone"
        type="tel"
        value={formData.emergencyPhone}
        onChange={(e) => handleChange("emergencyPhone", e.target.value)}
        placeholder="Enter emergency contact phone"
      />

      {familyMembers.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-[14px] font-medium text-[#64748B]">
            Family Members
          </h3>
          <ul className="space-y-2">
            {familyMembers.map((member, index) => (
              <li
                key={index}
                className="p-3 border rounded-md border-[#E9ECEF] flex flex-col gap-1"
              >
                <span className="text-[14px] text-[#64748B]">
                  <strong>First Name:</strong> {member.first_name}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Last Name:</strong> {member.last_name}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Relation:</strong> {member.relation}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Role:</strong> {member.role_name}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Gender:</strong> {member.gender}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Date of Birth:</strong> {member.date_of_birth}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Address:</strong> {member.address}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Contact No.:</strong> {member.mobile_no}
                </span>
                <span className="text-[14px] text-[#64748B]">
                  <strong>Email:</strong> {member.email}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={() => setShowFamilyForm(true)}
        className="w-auto px-5 py-2 rounded-md bg-[#4318D1] text-white text-[14px] font-medium"
      >
        Add Family Member
      </button>

      {showFamilyForm && (
        <div className="space-y-4 p-4 border rounded-md border-[#E9ECEF]">
          <h3 className="text-[14px] font-medium text-[#64748B]">
            Add Family Member
          </h3>
          <FormField
            label="First Name"
            type="text"
            value={newFamilyMember.first_name}
            onChange={(e) => handleFamilyChange("first_name", e.target.value)}
            placeholder="Enter family member's first name"
          />
          <FormField
            label="Last Name"
            type="text"
            value={newFamilyMember.last_name}
            onChange={(e) => handleFamilyChange("last_name", e.target.value)}
            placeholder="Enter family member's last name"
          />
          <FormField
            label="Relation"
            type="text"
            value={newFamilyMember.relation}
            onChange={(e) => handleFamilyChange("relation", e.target.value)}
            placeholder="Enter relation (e.g., Father, Sister)"
          />
          <FormField
            label="Gender"
            type="select"
            value={newFamilyMember.gender}
            onChange={(e) => handleFamilyChange("gender", e.target.value)}
            placeholder="Enter Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />
          <FormField
            label="Date of Birth"
            type="date"
            value={newFamilyMember.date_of_birth}
            onChange={(e) => handleFamilyChange("date_of_birth", e.target.value)}
            placeholder="Enter Date of Birth"
          />
          <FormField
            label="Address"
            type="text"
            value={newFamilyMember.address}
            onChange={(e) => handleFamilyChange("address", e.target.value)}
            placeholder="Enter Address"
          />
          <FormField
            label="Contact No."
            type="tel"
            value={newFamilyMember.mobile_no}
            onChange={(e) => handleFamilyChange("mobile_no", e.target.value)}
            placeholder="Enter contact number"
          />
          <FormField
            label="Email"
            type="email"
            value={newFamilyMember.email}
            onChange={(e) => handleFamilyChange("email", e.target.value)}
            placeholder="Enter email"
          />
          <button
            onClick={addFamilyMember}
            className="w-auto px-5 py-2 rounded-md bg-[#4318D1] text-white text-[14px] font-medium"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FamilyInformationForm;
