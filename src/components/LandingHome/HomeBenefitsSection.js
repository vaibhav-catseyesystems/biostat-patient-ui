import React from "react";

function HomeBenefitsSection() {
    const benefits = [
        {
            title: "Comprehensive Monitoring",
            description:
                "Track all your vital health metrics in one centralized dashboard.",
        },
        {
            title: "Easy Communication",
            description:
                "Direct messaging with your healthcare providers for quick consultations.",
        },
        {
            title: "Secure Data Storage",
            description:
                "Your health data is encrypted and stored securely following HIPAA guidelines.",
        },
    ];

    return (
        <section id="benefits" className="py-[80px] bg-[#F8F9FA]">
            <div className="max-w-[1272px] mx-auto px-6">
                <div className="flex max-lg:flex-col items-center gap-[48px]">
                    <div className="flex-1">
                        <img
                            src="https://placehold.co/600x400"
                            alt="Benefits"
                            className="w-full rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-[36px] font-bold text-[#1E293B] mb-[32px]">
                            Why Choose HealthDash?
                        </h2>
                        <div className="flex flex-col gap-[24px]">
                            {benefits.map((benefit, index) => (
                                <div className="flex gap-[16px] items-start">
                                    <div className="w-[32px] h-[32px] rounded-full bg-[#4318D1] text-white flex items-center justify-center flex-shrink-0">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-[18px] font-medium text-[#1E293B] mb-[8px]">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-[15px] text-[#64748B]">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeBenefitsSection;
