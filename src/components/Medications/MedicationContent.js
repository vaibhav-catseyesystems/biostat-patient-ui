import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "./OrderCard";
import { getMedicationsList } from "../../actions/medicationAction"; import CardBase from "../common/CardBase";
import { BioStatButton } from "../common/BioStatButton";
;

function MedicationContent({ recentOrders, searchQuery }) {
  const dispatch = useDispatch();
  const { medicationList, loading, pagination } = useSelector((state) => state.medicationReducer);
  const [activeTab, setActiveTab] = useState("current");

  const filteredRecords = medicationList?.filter((record) => {
    const matchesSearch = record?.medication_name?.toLowerCase().includes(searchQuery?.toLowerCase())
    return matchesSearch;
  });

  return (
    <div className="flex flex-col w-full gap-[32px]">
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
          {filteredRecords.map((medicine) => (
            <>
              <CardBase title={medicine.medication_name}
                subtitle={medicine.description}
                image={medicine?.medication_type[0]?.medication_image_url ? medicine?.medication_type[0]?.medication_image_url : "https://placehold.co/100x100"}
                actionButton={
                  <div className="flex gap-1">
                  {/* <BioStatButton title={'Details'} variant="secondary"/> */}
                  <BioStatButton title={'Order now'}/>
                  </div>
                }
                children={
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#64748B]">Medication Type:</span>
                      <span className="text-[14px] text-[#1E293B] capitalize">
                        {medicine?.medication_type[0]?.medication_type || "NA"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#64748B]">Dosage:</span>
                      <span className="text-[14px] text-[#1E293B]">{medicine?.medication_type[0]?.unit_value + medicine?.medication_type[0]?.unit_type || "NA"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#64748B]">Code:</span>
                      <span className="text-[14px] text-[#1E293B]">{medicine.medication_code}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[14px] text-[#64748B]">Cost:</span>
                      <span className="text-[14px] text-[#1E293B]">{medicine?.medication_type[0]?.medication_cost || "NA"}</span>
                    </div>
                  </div>
                }
              />
            </>
          ))}
          <div className="flex justify-center gap-4 mt-4">
            <button
              disabled={pagination.page <= 1 || loading}
              onClick={() => dispatch(getMedicationsList(pagination.page - 1))}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Previous</button>

            <span className="text-gray-700 py-2 ">
              Page {pagination.page} of {pagination.totalPages}
            </span>

            <button
              disabled={pagination.page >= pagination.totalPages || loading}
              onClick={() => dispatch(getMedicationsList(pagination.page + 1))}
              className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">Next</button>
          </div>
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
