import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import DietDashboard from "../components/DietPage/DietDashboard";
import DietItemsList from "../components/DietPage/DietItemsList";
import ProductList from "../components/DietPage/ProductList";
import PageHeader from "../components/common/PageHeader"
import { getDietPlanList } from "../actions/dietActions";

const DietPage = () => {
  const dispatch = useDispatch()
  const dietPlanR = useSelector((state) => state.dietPlansReducer)
  const { dietPlans, loading } = dietPlanR
  useEffect(() => {
    dispatch(getDietPlanList())
    console.log(dietPlans);
  }, [])


  return (
    <div>
      <PageHeader heading={"Diet"} subheading={"Search and manage your diet plans"} />
      {loading ? <>Loading</> :
        <>
          <DietItemsList dietItems={dietPlans} />
        </>
      }
    </div>
  );
};

export default DietPage;
