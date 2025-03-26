import React from "react";

const CardBase = ({
  image,
  title,
  subtitle,
  rating,
  location,
  availability,
  actionButton,
  children,
}) => {
  return (
    <article className="bg-white rounded-[12px] p-6 border-[0.8px] border-[#E9ECEF] hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center max-lg:flex-col max-lg:items-start max-lg:gap-4">
      <div className="flex gap-4 items-center">
        <img
          src={image}
          alt={title}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-[18px] font-medium text-[#1E293B]">{title}</h2>
          <p className="text-[14px] text-[#64748B]">{subtitle}</p>
          {(rating || location) && (
            <div className="flex items-center gap-2 mt-1">
              {rating && (
                <>
                  <span className="text-[14px] text-[#F59E0B]">★</span>
                  <span className="text-[14px] text-[#1E293B]">{rating}</span>
                </>
              )}
              {location && (
                <span className="text-[14px] text-[#64748B]">
                  {rating ? "• " : ""}
                  {location}
                </span>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 max-lg:w-full max-lg:items-start">
        {availability && (
          <p className="text-[14px] text-[#10B981] font-medium">
            {availability}
          </p>
        )}
        {actionButton}
      </div>
    </article>
  );
};

export default CardBase;
