import React from "react";

const MessageItem = ({ message, onClick }) => {
  // Function to get the appropriate icon based on message type
  const getTypeIcon = (type) => {
    switch (type) {
      case "reminder":
        return "⏰";
      case "test":
        return "🔬";
      case "appointment":
        return "🗓️";
      default:
        return "✉��";
    }
  };

  return (
    <article
      onClick={onClick}
      className={`p-6 border-b-[0.8px] border-[#E9ECEF] cursor-pointer hover:bg-[#F8F9FA] flex items-start gap-4 ${
        message.unread ? "bg-[#F8F9FA]" : "bg-white"
      }`}
    >
      <div className="flex-shrink-0">
        <img
          src={message.avatar}
          alt={message.sender}
          className="w-[48px] h-[48px] rounded-full"
        />
      </div>

      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[16px] font-semibold text-[#1E293B]">
            {message.sender}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#64748B]">{message.time}</span>
            {message.unread && (
              <span className="w-[10px] h-[10px] bg-[#4318D1] rounded-full"></span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span>{getTypeIcon(message.type)}</span>
          <h4 className="text-[15px] font-medium text-[#1E293B]">
            {message.title}
          </h4>
        </div>

        <p className="text-[14px] text-[#64748B] line-clamp-2">
          {message.message}
        </p>
      </div>
    </article>
  );
};

export default MessageItem;
