import React from "react";

function HomeFeaturesSection() {
  const features = [
    {
      icon: "📊",
      title: "Real-time Vitals Tracking",
      description:
        "Monitor your blood pressure, heart rate, blood sugar, and other vital signs in real-time with easy-to-read displays.",
    },
    {
      icon: "🗓️",
      title: "Appointment Management",
      description:
        "Schedule, track, and manage your medical appointments effortlessly with our intuitive calendar system.",
    },
    {
      icon: "💊",
      title: "Medication Reminders",
      description:
        "Never miss a dose with personalized medication reminders and tracking features.",
    },
  ];

  return (
    <section id="features" className="py-[80px]">
      <div className="max-w-[1272px] mx-auto px-6">
        <h2 className="text-[36px] font-bold text-[#1E293B] text-center mb-[48px]">
          Comprehensive Health Monitoring
        </h2>
        <div className="grid lg:grid-cols-3 gap-[32px]">
          {features.map((feature, index) => (
            <article className="bg-white p-[32px] rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
            <div className="text-[24px] mb-[16px]">{feature.icon}</div>
            <h3 className="text-[20px] font-medium text-[#1E293B] mb-[16px]">
              {feature.title}
            </h3>
            <p className="text-[15px] text-[#64748B]">{feature.description}</p>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturesSection;
