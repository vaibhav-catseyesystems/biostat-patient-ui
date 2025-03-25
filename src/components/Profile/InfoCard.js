import React from "react";

const InfoCard = ({ title, icon, items, isEditing, setItems }) => {
  const handleChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index].value = value;
    setItems(updatedItems); // Update state
  };

  return (
    <article className="bg-white p-6 rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] transform hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
      <h3 className="text-[18px] font-medium text-[#1E293B] mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="flex flex-col gap-[16px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 rounded-[8px] hover:bg-[#F8F9FA]"
          >
            <span className="text-[#64748B]">{item.label}</span>
            {isEditing ? (
              item.label === "Blood Type" ? (
                <select
                  value={item.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border border-gray-300 rounded p-1 text-[#1E293B] w-[150px] max-sm:w-[100px]"
                >
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              ) : item.label === "Gender" ? (
                <select
                  value={item.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border border-gray-300 rounded p-1 text-[#1E293B] w-[150px] max-sm:w-[100px]"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : item.label === "Date of Birth" ? (
                <input
                  type="date"
                  value={item.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border border-gray-300 rounded p-1 text-[#1E293B] w-[150px] max-sm:w-[100px]"
                />
              ) : (
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border border-gray-300 rounded p-1 text-[#1E293B] w-[150px] max-sm:w-[100px]"
                />
              )
            ) : (
              <span
                className={`text-[#1E293B] ${item.isBold ? "font-medium" : ""
                  } max-sm:text-[13px]`}
              >
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

export default InfoCard;
