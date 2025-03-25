import React from "react";

const BuyProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-[12px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-[18px] font-[600] text-[#1E293B]">
            {product.name}
          </h2>
          <p className="text-[14px] text-[#64748B]">{product.description}</p>
        </div>
        <span className="px-3 py-1 bg-[#DCFCE7] text-[#166534] text-[12px] font-[500] rounded-full">
          ${product.price}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Calories</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {product.calories} kcal
          </p>
        </div>
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Category</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {product.category}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Ingredients</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {product.ingredients}
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] text-[14px] font-[500]">
            Details
          </button>
          <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyProductCard;
