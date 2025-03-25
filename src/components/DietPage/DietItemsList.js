// import React, { useState } from "react";

// const DietItemsList = ({ dietItems, setDietItems }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [newItem, setNewItem] = useState({ name: "", weight: "", timesPerDay: "", image: "" });

//   const handleSave = () => {
//     setIsEditing(false);
//   };

//   const handleAddItem = () => {
//     if (newItem.name && newItem.weight && newItem.timesPerDay && newItem.image) {
//       setDietItems([...dietItems, newItem]);
//       setNewItem({ name: "", weight: "", timesPerDay: "", image: "" });
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-xl font-semibold">Your Diet Plan</h3>
//         <button
//           className={`px-4 py-2 ${isEditing ? "bg-[#4318D1] " : "bg-[#4318D1]"} text-white rounded-md`}
//           onClick={() => setIsEditing(!isEditing)}
//         >
//           {isEditing ? "Save" : "Edit Diet"}
//         </button>
//       </div>

//       <div className="space-y-4">
//         {dietItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center bg-gray-100 p-3 rounded-lg shadow-md"
//           >
//             <div className="ml-4 flex-1">
//               {isEditing ? (
//                 <>
//                   <input
//                     type="text"
//                     value={item.name}
//                     onChange={(e) => {
//                       const newItems = [...dietItems];
//                       newItems[index].name = e.target.value;
//                       setDietItems(newItems);
//                     }}
//                     className="border p-1 rounded-md w-full"
//                   />
//                   <input
//                     type="text"
//                     value={item.weight}
//                     onChange={(e) => {
//                       const newItems = [...dietItems];
//                       newItems[index].weight = e.target.value;
//                       setDietItems(newItems);
//                     }}
//                     className="border p-1 rounded-md w-full mt-1"
//                   />
//                   <input
//                     type="number"
//                     value={item.timesPerDay}
//                     onChange={(e) => {
//                       const newItems = [...dietItems];
//                       newItems[index].timesPerDay = e.target.value;
//                       setDietItems(newItems);
//                     }}
//                     className="border p-1 rounded-md w-full mt-1"
//                   />
//                 </>
//               ) : (
//                 <>
//                   <h4 className="text-lg font-semibold">{item.name}</h4>
//                   <p className="text-gray-600">Weight: {item.weight}</p>
//                   <p className="text-gray-600">Times Per Day: {item.timesPerDay}</p>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add New Item Section - Only Show When Editing */}
//       {isEditing && (
//         <div className="mt-6 p-4 border rounded-lg bg-gray-50">
//           <h4 className="text-lg font-semibold">Add New Diet Item</h4>
//           <input
//             type="text"
//             placeholder="Food Name"
//             value={newItem.name}
//             onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//             className="border p-2 rounded-md w-full mt-2"
//           />
//           <input
//             type="text"
//             placeholder="Weight"
//             value={newItem.weight}
//             onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
//             className="border p-2 rounded-md w-full mt-2"
//           />
//           <input
//             type="number"
//             placeholder="Times Per Day"
//             value={newItem.timesPerDay}
//             onChange={(e) => setNewItem({ ...newItem, timesPerDay: e.target.value })}
//             className="border p-2 rounded-md w-full mt-2"
//           />
//           <button
//             className="mt-3 px-4 py-2 bg-[#4318D1] text-white rounded-md w-full"
//             onClick={handleAddItem}
//           >
//             Add Item
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DietItemsList;


import React, { useState } from "react";

const DietItemsList = ({ dietItems, setDietItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", weight: "", timesPerDay: "", image: "" });

  const handleAddItem = () => {
    if (newItem.name && newItem.weight && newItem.timesPerDay) {
      setDietItems([...dietItems, newItem]);
      setNewItem({ name: "", weight: "", timesPerDay: "", image: "" });
    }
  };

  return (
    <div className="bg-white rounded-[12px] p-6 mb-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[18px] font-[600] text-[#1E293B]">Your Diet Plan</h3>
        <button
          className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Save" : "Edit Diet"}
        </button>
      </div>

      {/* Diet Items List */}
      <div className="space-y-4">
        {dietItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-[12px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
            <div className="grid grid-cols-2 gap-4">
              {/* Editable Fields */}
              <div>
                <p className="text-[12px] text-[#64748B] mb-1">Food Name</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => {
                      const newItems = [...dietItems];
                      newItems[index].name = e.target.value;
                      setDietItems(newItems);
                    }}
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B]"
                  />
                ) : (
                  <p className="text-[14px] font-[500] text-[#1E293B]">{item.name}</p>
                )}
              </div>

              <div>
                <p className="text-[12px] text-[#64748B] mb-1">Weight</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.weight}
                    onChange={(e) => {
                      const newItems = [...dietItems];
                      newItems[index].weight = e.target.value;
                      setDietItems(newItems);
                    }}
                    className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B]"
                  />
                ) : (
                  <p className="text-[14px] font-[500] text-[#1E293B]">{item.weight}</p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <p className="text-[12px] text-[#64748B] mb-1">Times Per Day</p>
              {isEditing ? (
                <input
                  type="number"
                  value={item.timesPerDay}
                  onChange={(e) => {
                    const newItems = [...dietItems];
                    newItems[index].timesPerDay = e.target.value;
                    setDietItems(newItems);
                  }}
                  className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B]"
                />
              ) : (
                <p className="text-[14px] font-[500] text-[#1E293B]">{item.timesPerDay}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add New Item Section (Only Show When Editing) */}
      {isEditing && (
        <div className="mt-6 p-4 bg-[#F8FAFC] rounded-[12px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
          <h4 className="text-[16px] font-[600] text-[#1E293B] mb-3">Add New Diet Item</h4>

          <input
            type="text"
            placeholder="Food Name"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B] mb-2"
          />
          <input
            type="text"
            placeholder="Weight"
            value={newItem.weight}
            onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
            className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B] mb-2"
          />
          <input
            type="number"
            placeholder="Times Per Day"
            value={newItem.timesPerDay}
            onChange={(e) => setNewItem({ ...newItem, timesPerDay: e.target.value })}
            className="w-full bg-white border border-gray-300 p-2 rounded-md text-[14px] text-[#1E293B] mb-3"
          />
          <button
            className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500] w-full"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      )}
    </div>
  );
};

export default DietItemsList;
