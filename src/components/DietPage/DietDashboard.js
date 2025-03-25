import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const nutrientData = [
  { name: "Proteins", value: 40,color: "#4CAF50" },
  { name: "Carbs", value: 50, color: "#FF9800" },
  { name: "Fats", value: 30, color: "#F44336" },
  { name: "Vitamins", value: 20, color: "#2196F3" },
];

const DietDashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex flex-col items-center">
      <h3 className="text-2xl font-semibold mb-4">Diet Proportion</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={nutrientData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {nutrientData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Legend below the chart */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        {nutrientData.map((nutrient, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: nutrient.color }}></div>
            <span className="text-gray-700 font-medium">
              {nutrient.name} 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietDashboard;
