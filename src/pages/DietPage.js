import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DietItemsList from "../components/DietPage/DietItemsList";
import PageHeader from "../components/common/PageHeader"
import { getDietPlanList } from "../actions/dietActions";
import Loader from "../components/common/Loader";

const DietPage = () => {
  const dispatch = useDispatch()
  const dietPlanR = useSelector((state) => state.dietPlansReducer)
  const { dietPlans, loading, error } = dietPlanR
  
  useEffect(() => {
    dispatch(getDietPlanList())
    console.log(dietPlans);
  }, [])


  return (
    <div>
      <PageHeader heading={"Diet"} subheading={"Search and manage your diet plans"} />
      {loading && <Loader />}
      {error ? (
        <p className="text-center text-red-500 py-8">Failed to load diet plans. Please try again.</p>
      ) : (
        <DietItemsList dietItems={dietPlans} />
      )}
    </div>
  );
};

export default DietPage;
