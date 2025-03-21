import React from "react";

function OrderCard({ order }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return {
          bg: "bg-[#DCFCE7]",
          text: "text-[#166534]",
        };
      case "In Transit":
        return {
          bg: "bg-[#FEF9C3]",
          text: "text-[#854D0E]",
        };
      default:
        return {
          bg: "bg-[#F1F5F9]",
          text: "text-[#64748B]",
        };
    }
  };

  const statusColors = getStatusColor(order.status);

  return (
    <article className="bg-white rounded-[12px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-[18px] font-[600] text-[#1E293B]">
            {order.name}
          </h2>
          <p className="text-[14px] text-[#64748B]">
            {order.dosage} • {order.quantity}
          </p>
        </div>
        <span
          className={`px-3 py-1 ${statusColors.bg} ${statusColors.text} text-[12px] font-[500] rounded-full`}
        >
          {order.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Order date</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {order.orderDate}
          </p>
        </div>
        <div>
          <p className="text-[12px] text-[#64748B] mb-1">Tracking number</p>
          <p className="text-[14px] text-[#1E293B] font-[500]">
            {order.trackingNo}
          </p>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#F1F5F9] text-[#64748B] rounded-[8px] text-[14px] font-[500]">
            Track Order
          </button>
          <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]">
            Reorder
          </button>
        </div>
      </div>
    </article>
  );
}

export default OrderCard;
