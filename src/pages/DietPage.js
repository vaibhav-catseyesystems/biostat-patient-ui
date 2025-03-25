import React, { useState } from "react";
import DietDashboard from "../components/DietPage/DietDashboard";
import DietItemsList from "../components/DietPage/DietItemsList";
import ProductList from "../components/DietPage/ProductList";

const DietPage = () => {
  const [dietItems] = useState([
    { name: "Oats", weight: "50g", timesPerDay: 1, image: "https://source.unsplash.com/60x60/?oats" },
    { name: "Chicken", weight: "200g", timesPerDay: 2, image: "https://source.unsplash.com/60x60/?chicken" },
    { name: "Milk", weight: "250ml", timesPerDay: 1, image: "https://source.unsplash.com/60x60/?milk" },
  ]);

  const [products] = useState([
    { name: "Protein Powder", calories: 120, price: "20", image: "https://source.unsplash.com/200x150/?protein" },
    { name: "Almonds", calories: 180, price: "10", image: "https://source.unsplash.com/200x150/?almonds" },
    { name: "Brown Rice", calories: 220, price: "15", image: "https://source.unsplash.com/200x150/?brownrice" },
    { name: "Greek Yogurt", calories: 150, price: "8", image: "https://source.unsplash.com/200x150/?yogurt" },
  ]);

  return (
    <div className="p-6">
      <DietDashboard />
      <DietItemsList dietItems={dietItems} />
      <ProductList products={products} />
    </div>
  );
};

export default DietPage;
