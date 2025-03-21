import React, { useState } from "react";
import MessagesHeader from "../components/Messages/MessagesHeader";
import MessagesTabs from "../components/Messages/MessagesTab";
import MessageDetail from "../components/Messages/MessageDetail";
import MessagesList from "../components/Messages/MessagesList";


const MessagesDashboard = () => {

  const initialMessages = [
    {
      id: 1,
      type: "reminder",
      sender: "Dr. Smith",
      avatar: "https://placehold.co/40x40",
      time: "10:30 AM",
      date: "Today",
      title: "Medication Reminder",
      message: "Remember to take your blood pressure medication with breakfast",
      unread: true,
    },
    {
      id: 2,
      type: "test",
      sender: "Lab Services",
      avatar: "https://placehold.co/40x40",
      time: "9:15 AM",
      date: "Today",
      title: "Test Results Available",
      message:
        "Your recent blood work results are now available. Please review them in the Lab Results section.",
      unread: true,
    },
    {
      id: 3,
      type: "appointment",
      sender: "Nurse Johnson",
      avatar: "https://placehold.co/40x40",
      time: "Yesterday",
      date: "Jan 15",
      title: "Appointment Confirmation",
      message:
        "Your follow-up appointment is confirmed for January 20th at 2:30 PM",
      unread: false,
    },
    {
      id: 4,
      type: "general",
      sender: "Dr. Williams",
      avatar: "https://placehold.co/40x40",
      time: "2 days ago",
      date: "Jan 14",
      title: "Treatment Update",
      message:
        "Based on your latest vitals, we're adjusting your treatment plan. Please check the updated instructions.",
      unread: false,
    },
  ];

  // State management
  const [messages, setMessages] = useState(initialMessages);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageDetail, setShowMessageDetail] = useState(false);

  // Filter messages based on active tab
  const filteredMessages =
    activeTab === "all"
      ? messages
      : messages.filter((message) => message.type === activeTab);

  // Mark message as read
  const markAsRead = (id) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, unread: false } : msg)),
    );
  };

  // Handle message selection
  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
    markAsRead(message.id);
  };

  return (
    <div className="">

      <main className="flex-1">
        <MessagesHeader />

        <MessagesTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <MessagesList
          messages={filteredMessages}
          onMessageSelect={handleMessageSelect}
        />
      </main>

      {showMessageDetail && (
        <MessageDetail
          message={selectedMessage}
          onClose={() => setShowMessageDetail(false)}
        />
      )}
    </div>
  );
};

export default MessagesDashboard;
