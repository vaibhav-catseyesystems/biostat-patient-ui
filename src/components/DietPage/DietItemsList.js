import React, { useState } from "react";
import CardBase from "../common/CardBase";
import { toast } from "react-toastify";
import SearchBar from "../common/SearchBar";
import { useDispatch, useSelector } from 'react-redux'
import { getDietPlanList } from "../../actions/dietActions";

const DietItemsList = () => {

  const dispatch = useDispatch()
  const dietPlanR = useSelector((state) => state.dietPlansReducer)
  const { dietPlans, loading, pagination } = dietPlanR;

  const [searchQuery, setSearchQuery] = useState("")
  const filteredDiet = dietPlans.filter((diet) => {
    const matchesSearch =
      diet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diet.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div>
      <div className="flex flex-col gap-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search diets"
        />
        {
          filteredDiet.map((item, index) => (
            <CardBase
              image={item.image}
              title={item.name}
              subtitle={item.description}
              children={<>
                <p className="text-[14px] text-[#64748B]">{item.notes}</p>
                <p className="text-[14px] text-[black]"><b>Goal: </b>{item.goal}</p>
              </>}
              actionButton={
                <button
                  onClick={() => {
                    toast.success("Subscribed")
                  }}
                  className="bg-[#4318D1] text-white px-4 py-2 rounded-[8px] text-[14px] max-lg:w-full cursor-pointer"
                >
                  Subscribe
                </button>
              }

            />
          ))
        }
        {filteredDiet.length === 0 && (
          <p className="text-center py-8 text-[#64748B]">
            No diets found.
          </p>
        )}

        <div className="flex justify-center gap-4 mt-4">
          <button
            disabled={pagination.page <= 1 || loading}
            onClick={() => dispatch(getDietPlanList(pagination.page - 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-700 py-2 ">
            Page {pagination.page} of {pagination.totalPages}
          </span>

          <button
            disabled={pagination.page >= pagination.totalPages || loading}
            onClick={() => dispatch(getDietPlanList(pagination.page + 1))}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default DietItemsList;
