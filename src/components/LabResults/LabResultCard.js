"use client";
import React from "react";

function LabResultCard({ result }) {
  const { testName, status, statusColor, lab, date, category } = result;

  const statusStyles = {
    green: "text-green-800 bg-green-100",
    red: "text-red-600 bg-red-100",
  };

  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <header className="flex justify-between items-start mb-4">
        <div className="flex gap-3.5 items-center">
          <span className="text-2xl">🔬</span>
          <h2 className="text-lg font-medium leading-7 text-slate-800">
            {testName}
          </h2>
        </div>
        <span
          className={`px-3 py-1 text-sm leading-5 rounded-full ${statusStyles[statusColor]}`}
        >
          {status}
        </span>
      </header>

      <div className="flex flex-col gap-1 mb-4">
        <p className="text-sm leading-5 text-slate-500">Lab: {lab}</p>
        <p className="text-sm leading-5 text-slate-500">Date: {date}</p>
        <p className="text-sm leading-5 text-slate-500">Category: {category}</p>
      </div>

      <div className="flex gap-2 max-sm:flex-col">
        <button className="px-4 py-2 text-base leading-6 text-white bg-indigo-700 rounded-lg">
          View Report
        </button>
        <button className="gap-2 px-4 py-2 text-base leading-6 rounded-lg bg-slate-100 text-slate-500">
          Download PDF 📥
        </button>
      </div>
    </article>
  );
}

export default LabResultCard;
