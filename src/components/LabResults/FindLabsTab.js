"use client";
import React, { useState, useEffect } from "react";
import { getLabsList } from "../../actions/findLabActions"
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../common/SearchBar";

const availableLabs = [
  {
    name: "City Diagnostics",
    address: "123 Main St, Anytown, USA",
    rating: 4.8,
    distance: "1.2 miles",
    tests: ["Blood Tests", "Urine Analysis", "Imaging", "Cardiac Tests"],
  },
  {
    name: "HealthLab Plus",
    address: "456 Oak Ave, Anytown, USA",
    rating: 4.5,
    distance: "2.4 miles",
    tests: ["Blood Tests", "Hormone Tests", "Allergy Tests", "Genetic Testing"],
  },
  {
    name: "MedLife Diagnostics",
    address: "789 Pine Blvd, Anytown, USA",
    rating: 4.7,
    distance: "3.0 miles",
    tests: [
      "Full Body Checkup",
      "Cancer Screening",
      "Diabetes Tests",
      "Thyroid Tests",
    ],
  },
];

function FindLabsTab() {

  const dispatch = useDispatch();
  const { labList, loading, error, pagination = {}} = useSelector((state) => state.labReducer);

  useEffect(() => {
    dispatch(getLabsList());
    console.log(labList);
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLabs = labList.filter(
    (lab) =>
      lab.lab_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.tests.some((test) =>
        test.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search labs by name or test type..."
        />
      </div>

      {filteredLabs.map((lab, index) => (
        <article key={index} className="p-6 bg-white rounded-xl shadow-sm">
          <header className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-medium leading-7 text-slate-800">
                {lab.lab_name || "NA"}
              </h2>
              <p className="text-sm text-slate-500">{lab.lab_address || "NA"}</p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 rounded-lg">
              <span className="text-sm">⭐</span>
              <span className="text-sm font-medium text-slate-800">
                {lab.rating || "NA"}
              </span>
            </div>
          </header>

          <div className="mb-4">
            <p className="text-sm text-slate-500 mb-2">
              <span className="font-medium">Distance: </span>
              {lab.distance || "NA"}
            </p>
            <p className="text-sm text-slate-500 mb-2">
              <span className="font-medium">Email ID: </span>
              {lab.lab_email || "NA"}
            </p>
            <p className="text-sm text-slate-500 mb-2">
              <span className="font-medium">Contact No: </span>
              {lab.lab_contact_number || "NA"}
            </p>
            {/* <div className="flex flex-wrap gap-2">
              {lab.tests.map((test, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs bg-gray-100 text-slate-600 rounded-full"
                >
                  {test}
                </span>
              ))}
            </div> */}
          </div>

          <div className="flex gap-2 max-sm:flex-col">
            <button className="px-4 py-2 text-base leading-6 text-white bg-indigo-700 rounded-lg">
              Book Test
            </button>
            <button className="gap-2 px-4 py-2 text-base leading-6 rounded-lg bg-slate-100 text-slate-500">
              View Details
            </button>
          </div>

          
        </article>

        

      ))}
      <div className="flex justify-center gap-4 mt-4">
                <button
                    disabled={pagination.page <= 1 || loading}
                    onClick={() => dispatch(getLabsList(pagination.page - 1))}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="text-gray-700 py-2 ">
                    Page {pagination.page || 1} of {pagination.totalPages || 1}
                </span>

                <button
                    disabled={pagination.page >= pagination.totalPages || loading}
                    onClick={() => dispatch(getLabsList(pagination.page + 1))}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
    </div>
  );
}

export default FindLabsTab;
