"use client";
import React, { useState } from "react";

const DiseaseProfile = ({ disease }) => {
  const [showAllPrecautions, setShowAllPrecautions] = useState(false);
  const [showAllDiet, setShowAllDiet] = useState(false);
  const [showAllSymptoms, setShowAllSymptoms] = useState(false);

  const getTrendIcon = (trend) => {
    return trend === "improving" ? "📈" : trend === "stable" ? "➡️" : "📉";
  };

  const getTrendColor = (trend) => {
    return trend === "improving"
      ? "#059669"
      : trend === "stable"
        ? "#6366F1"
        : "#DC2626";
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case "mild":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "severe":
        return "bg-red-100 text-red-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getStatusColor = (status) => {
    if (
      status.toLowerCase().includes("control") ||
      status.toLowerCase().includes("managed")
    ) {
      return "bg-green-100 text-green-800";
    } else if (status.toLowerCase().includes("monitor")) {
      return "bg-yellow-100 text-yellow-800";
    } else if (status.toLowerCase().includes("critical")) {
      return "bg-red-100 text-red-800";
    } else {
      return "bg-blue-100 text-blue-800";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white p-6 rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <header className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[24px]">{disease.icon}</span>
          <h3 className="text-[20px] font-semibold text-[#1E293B]">
            {disease.name}
          </h3>
          <span
            className={`text-[12px] px-3 py-1 rounded-full ${getSeverityColor(
              disease.severity,
            )}`}
          >
            {disease.severity}
          </span>
        </div>
        <span
          className={`text-[12px] px-3 py-1 rounded-full ${getStatusColor(
            disease.status,
          )}`}
        >
          {disease.status}
        </span>
      </header>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center p-2 rounded-[8px] bg-[#F8F9FA]">
            <span className="text-[#64748B] text-[14px]">Diagnosed</span>
            <span className="text-[#1E293B] text-[14px]">
              {formatDate(disease.diagnosed)}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-[8px] bg-[#F8F9FA]">
            <span className="text-[#64748B] text-[14px]">Next Checkup</span>
            <span className="text-[#1E293B] text-[14px]">
              {formatDate(disease.nextCheckup)}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center p-2 rounded-[8px] bg-[#F8F9FA]">
            <span className="text-[#64748B] text-[14px]">Doctor</span>
            <span className="text-[#1E293B] text-[14px]">{disease.doctor}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-[8px] bg-[#F8F9FA]">
            <span className="text-[#64748B] text-[14px]">Status</span>
            <span className="text-[#1E293B] text-[14px]">{disease.status}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 mb-6">
        {disease.metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#F8F9FA] p-4 rounded-[8px] flex flex-col gap-2"
          >
            <span className="text-[#64748B] text-[14px]">{metric.name}</span>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-semibold text-[#1E293B]">
                {metric.value}
              </span>
              <span className="text-[14px] text-[#64748B] mb-1">
                {metric.unit}
              </span>
              <span
                className="text-[14px] ml-auto"
                style={{ color: getTrendColor(metric.trend) }}
              >
                {getTrendIcon(metric.trend)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] font-medium text-[#1E293B]">Symptoms</h4>
            <button
              onClick={() => setShowAllSymptoms(!showAllSymptoms)}
              className="text-[14px] text-[#4318D1]"
            >
              {showAllSymptoms ? "Show Less" : "Show All"}
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {disease.symptoms
              .slice(0, showAllSymptoms ? disease.symptoms.length : 3)
              .map((symptom, index) => (
                <li
                  key={index}
                  className="text-[14px] text-[#64748B] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4318D1]"></span>
                  {symptom}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] font-medium text-[#1E293B]">
              Precautions
            </h4>
            <button
              onClick={() => setShowAllPrecautions(!showAllPrecautions)}
              className="text-[14px] text-[#4318D1]"
            >
              {showAllPrecautions ? "Show Less" : "Show All"}
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {disease.precautions
              .slice(0, showAllPrecautions ? disease.precautions.length : 3)
              .map((precaution, index) => (
                <li
                  key={index}
                  className="text-[14px] text-[#64748B] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4318D1]"></span>
                  {precaution}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h4 className="text-[16px] font-medium text-[#1E293B]">
              Dietary Guidelines
            </h4>
            <button
              onClick={() => setShowAllDiet(!showAllDiet)}
              className="text-[14px] text-[#4318D1]"
            >
              {showAllDiet ? "Show Less" : "Show All"}
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {disease.diet
              .slice(0, showAllDiet ? disease.diet.length : 3)
              .map((diet, index) => (
                <li
                  key={index}
                  className="text-[14px] text-[#64748B] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#4318D1]"></span>
                  {diet}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default DiseaseProfile;
