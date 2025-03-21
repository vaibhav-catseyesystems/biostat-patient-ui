import React from "react";

const MessageDetail = ({ message, onClose }) => {
  if (!message) return null;

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
        return "✉️";
    }
  };

  return (
    <div className="fixed inset-0 bg-[#000000] bg-[rgba(0,0,0,0.4)] flex items-center justify-center z-50">
    <aside className="w-[400px] bg-white border-l-[0.8px] border-[#E9ECEF] p-6">
      <header className="flex justify-between items-center mb-6">
        <button
          onClick={onClose}
          className="text-[#64748B] flex items-center gap-1"
        >
          <span>←</span>
          <span>Back</span>
        </button>
        <button className="text-[#64748B]">⋮</button>
      </header>

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={message.avatar}
            alt={message.sender}
            className="w-[48px] h-[48px] rounded-full"
          />
          <div>
            <h3 className="text-[16px] font-semibold text-[#1E293B]">
              {message.sender}
            </h3>
            <p className="text-[14px] text-[#64748B]">
              {message.date} at {message.time}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-[18px]">{getTypeIcon(message.type)}</span>
          <h2 className="text-[18px] font-semibold text-[#1E293B]">
            {message.title}
          </h2>
        </div>

        <p className="text-[15px] text-[#1E293B] leading-relaxed">
          {message.message}
        </p>
      </div>

      <div className="pt-6 border-t-[0.8px] border-[#E9ECEF]">
        <h3 className="text-[16px] font-medium text-[#1E293B] mb-4">Reply</h3>
        <textarea
          className="w-full h-[120px] p-4 border-[1px] border-[#E9ECEF] rounded-[8px] text-[15px] text-[#1E293B] resize-none mb-4"
          placeholder="Type your reply here..."
        ></textarea>
        <div className="flex justify-end">
          <button className="px-6 py-3 bg-[#4318D1] text-white rounded-[8px]" onClick={onClose} >
            Send Reply
          </button>
        </div>
      </div>
    </aside>
    </div>
  );
};

export default MessageDetail;
