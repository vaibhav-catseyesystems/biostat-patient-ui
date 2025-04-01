import React, { useState } from "react";
import WelcomeSection from "../components/DashboardHome/WelcomeSection";
import QuickLinkCard from "../components/DashboardHome/QuickLinkCard";
import HealthMetricCard from "../components/DashboardHome/HealthMetricCard";
import useHealthData from "../utils/useHealthData";
import Modal from "../components/common/Modal";

function HealthDash() {
  const { healthData, quickLinks } = useHealthData();
  const [selectedMetric, setSelectedMetric] = useState(null);

  const onCloseModal = () => {
    setSelectedMetric(null)
  }


  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <WelcomeSection />

        <div className="grid grid-cols-4 gap-[24px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {quickLinks.map((link, index) => (
            <QuickLinkCard key={index} link={link} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {Object.entries(healthData.metrics).map(([key, metric]) => (
            <HealthMetricCard
              key={key}
              title={metric.title}
              value={metric.value}
              unit={metric.unit}
              trend={metric.trend}
              lastChecked={metric.lastChecked}
              onClick={() => setSelectedMetric(key)}
              isSelected={selectedMetric === key}
            />
          ))}

          {selectedMetric && <Modal title={healthData.metrics[selectedMetric].title} isOpen={true} onClose={onCloseModal}
            children={
              <>
                <div className="space-y-2">
                  <p className="text-[16px] text-[#1e293b] "><span className="font-bold">Value: </span> {healthData.metrics[selectedMetric].value} {healthData.metrics[selectedMetric].unit} <span className="font-bold">Trend: </span>{healthData.metrics[selectedMetric].trend}</p>
                  <p className="text-[16px] text-[#1e293b]"><span className="font-bold">Last Checked:</span> {healthData.metrics[selectedMetric].lastChecked}</p>
                </div>
                <div class="relative overflow-x-auto">
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                        </th>
                        <td class="px-6 py-4">
                          Silver
                        </td>
                        <td class="px-6 py-4">
                          Laptop
                        </td>
                        <td class="px-6 py-4">
                          $2999
                        </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                          White
                        </td>
                        <td class="px-6 py-4">
                          Laptop PC
                        </td>
                        <td class="px-6 py-4">
                          $1999
                        </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                          Black
                        </td>
                        <td class="px-6 py-4">
                          Accessories
                        </td>
                        <td class="px-6 py-4">
                          $99
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            }
          />}
        </div>
      </div>
    </>
  );
}

export default HealthDash;
