import React from "react";
import MedicationCard from "./MedicationCard";
import OrderCard from "./OrderCard";
import SearchResults from "./SearchResults";

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
  return (
      <div className="flex flex-col w-full gap-[32px]">
        <section className="">
          <h1 className="text-[32px] max-sm:text-[24px] font-[600] text-[#1E293B]">
            Medications
          </h1>
          <p className="text-[16px] text-[#64748B]">
            Manage your medications and orders
          </p>
        </section>

        <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex items-center justify-center gap-2"
          >
            <span>Add Medication</span>
            <span className="text-[20px]">💊</span>
          </button>

          <div className="relative flex-1 max-sm:w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                performSearch();
              }}
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
      </div>
  );
}

export default MedicationContent;
