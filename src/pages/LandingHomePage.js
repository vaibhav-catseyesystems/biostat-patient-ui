import React from "react";
import NavbarLanding from "../NavbarLanding";
import HomeHeroSection from "../components/LandingHome/HomeHeroSection";
import HomeFeaturesSection from "../components/LandingHome/HomeFeatureSection";
import HomeBenefitsSection from "../components/LandingHome/HomeBenefitsSection";

function LandingHomePage() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { text: "Features", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Security", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy", url: "#" },
        { text: "Terms", url: "#" },
        { text: "HIPAA", url: "#" },
      ],
    },
  ];



  return (
    <div className="min-h-screen font-[Comfortaa] bg-[#fff]">
      <NavbarLanding />
      <HomeHeroSection />
      <HomeFeaturesSection />

      <HomeBenefitsSection />

      {/* CTA Section */}
      <section className="py-[80px]">
        <div className="max-w-[1272px] mx-auto px-6 text-center">
          <h2 className="text-[36px] font-bold text-[#1E293B] mb-[24px]">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-[18px] text-[#64748B] mb-[32px] max-w-[600px] mx-auto">
            Join thousands of users who are already managing their health more
            effectively with HealthDash.
          </p>
          <div className="flex justify-center gap-[16px] max-sm:flex-col">
            <button className="px-[32px] py-[16px] text-[16px] text-white bg-[#4318D1] rounded-[8px] font-medium">
              Create Free Account
            </button>
            <button className="px-[32px] py-[16px] text-[16px] text-[#1E293B] bg-[#F1F5F9] rounded-[8px] font-medium">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      {/* CTA Section */}

      {/* Footer Section */}
      <footer className="bg-[#F8F9FA] py-[48px]">
        <div className="max-w-[1272px] mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-[48px]">
            <div>
              <a
                href="#"
                className="text-[24px] font-bold text-[#4318D1] mb-[16px] block"
              >
                <h2 className="text-[24px] font-bold text-[#4318D1]"><span className="text-green-500 font-bold">Bio</span>
                <span className="text-blue-500 font-bold">Stat</span></h2>
              </a>
              <p className="text-[14px] text-[#64748B]">
                Your complete health monitoring solution.
              </p>
            </div>

            {footerSections.map((section, index) => (
              <div>
                <h3 className="text-[16px] font-medium text-[#1E293B] mb-[16px]">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-[8px]">
                  {section.links.map((link, index) => (
                    <a key={index} href={link.url} className="text-[14px] text-[#64748B]">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>


            ))}
          </div>
        </div>
      </footer>
      {/* Footer Section */}

      {/* Font and styles */}
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">',
          }}
        />
      </div>
    </div>
  );
}

export default LandingHomePage;
