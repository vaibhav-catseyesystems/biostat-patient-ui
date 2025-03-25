import React from "react";

const FamilyMemberCard = ({ member }) => {
  const getColor = (status) => {
    switch (status) {
      case "Good":
        return "bg-green-500";
      case "Average":
        return "bg-yellow-500";
      case "Bad":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="w-60 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.role}</p>

      <div className="w-full mt-3">
        <div className={`p-1 text-white text-center ${getColor(member.health)}`}>Health: {member.health}</div>
        <div className={`p-1 text-white text-center ${getColor(member.record)}`}>Record: {member.record}</div>
        <div className={`p-1 text-white text-center ${getColor(member.improvement)}`}>Improvement: {member.improvement}</div>
      </div>
    </div>
  );
};

export default FamilyMemberCard;
