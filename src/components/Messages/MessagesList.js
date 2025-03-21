import React from "react";
import MessageItem from "./MessageItem";

const MessagesList = ({ messages, onMessageSelect }) => {
  if (messages.length === 0) {
    return (
      <section className="bg-white rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-8 text-center">
        <p className="text-[#64748B]">No messages found</p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          onClick={() => onMessageSelect(message)}
        />
      ))}
    </section>
  );
};

export default MessagesList;
