import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MedicationCard from "./MedicationCard";
import OrderCard from "./OrderCard";
import SearchResults from "./SearchResults";
import SearchBar from "../common/SearchBar";
import { getMedicationsList } from "../../actions/medicationAction";

function MedicationContent({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  performSearch,
  searchResults,
  currentMedications,
  recentOrders,
  setShowAddModal,
  selectMedicine,

}) {
  const dispatch = useDispatch();
  const { medicationList, loading, pagination } = useSelector((state) => state.medicationReducer);
  {
    return (
      <div className="flex flex-col w-full gap-[32px]">

        <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex items-center justify-center gap-2"
          >
            <span>Add Medication</span>
            <span className="text-[20px]">💊</span>
          </button>

          <div className="relative flex-1 max-sm:w-full">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search medications..."
              className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
            />

            {searchQuery && searchResults.length > 0 && (
              <SearchResults
                searchResults={searchResults}
                selectMedicine={selectMedicine}
              />
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("current")}
            className={`
              px-6 py-3 rounded-[8px] font-[500] flex-1
              ${activeTab === "current" ? "bg-[#4318D1] text-white" : "bg-[#F1F5F9] text-[#64748B]"}
            `}
          >
            Current Medications
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`
              px-6 py-3 rounded-[8px] font-[500] flex-1
              ${activeTab === "recent" ? "bg-[#4318D1] text-white" : "bg-[#F1F5F9] text-[#64748B]"}
            `}
          >
            Recent Orders
          </button>
        </div>

        {activeTab === "current" && (
          <div className="grid gap-4 overflow-hidden">
            {currentMedications.map((medicine) => (
              <MedicationCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        )}

        {activeTab === "recent" && (
          <div className="grid gap-4">
            {recentOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={pagination.page <= 1 || loading}
            onClick={() => dispatch(getMedicationsList(pagination.page - 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-700 py-2 ">
            Page {pagination.page} of {pagination.totalPages}
          </span>

          <button
            disabled={pagination.page >= pagination.totalPages || loading}
            onClick={() => dispatch(getMedicationsList(pagination.page + 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default MedicationContent;
