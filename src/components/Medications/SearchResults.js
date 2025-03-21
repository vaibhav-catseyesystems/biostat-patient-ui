import React from "react";

function SearchResults({ searchResults, selectMedicine }) {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[8px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] z-10">
      <div className="p-2">
        {searchResults.map((result) => (
          <div
            key={result.id}
            onClick={() => {selectMedicine(result); console.log(result);}}
            className="p-3 hover:bg-[#F1F5F9] rounded-[6px] cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[16px] font-[500] text-[#1E293B]">
                  {result.name}
                </h3>
                <p className="text-[14px] text-[#64748B]">{result.dosage}</p>
              </div>
              <div className="text-right">
                <p className="text-[16px] font-[500] text-[#1E293B]">
                  {result.price}
                </p>
                <p className="text-[14px] text-[#22C55E]">
                  {result.availability}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
