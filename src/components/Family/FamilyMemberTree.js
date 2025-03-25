
import React, { useState } from "react";
import FamilyMemberCard from "./FamilyMemberCard";

const FamilyTree = () => {
  const [family] = useState([
    {
      id: "1",
      name: "John",
      role: "Grandfather",
      health: "Good",
      record: "Updated",
      improvement: "Average",
      children: [
        {
          id: "2",
          name: "Mary",
          role: "Grandmother",
          health: "Bad",
          record: "Updated",
          improvement: "Good",
          children: [
            {
              id: "3",
              name: "Robert",
              role: "Father",
              health: "Average",
              record: "Pending",
              improvement: "Good",
              children: [
                {
                  id: "4",
                  name: " Susan",
                  role: "Mother",
                  health: "Average",
                  record: "Updated",
                  improvement: "Good",
                  children: [
                    {
                      id: "5",
                      name: "Emily",
                      role: "Sister",
                      health: "Good",
                      record: "Updated",
                      improvement: "Average",
                      children: [],
                    },
                    {
                      id: "6",
                      name: "Michael",
                      role: "Self",
                      health: "Good",
                      record: "Updated",
                      improvement: "Good",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: "7",
              name: " David",
              role: "Uncle",
              health: "Average",
              record: "Pending",
              improvement: "Good",
              children: [
                {
                  id: "8",
                  name: "Laura",
                  role: "Aunt",
                  health: "Average",
                  record: "Updated",
                  improvement: "Bad",
                  children: [
                    {
                      id: "9",
                      name: "Jake",
                      role: "Cousin",
                      health: "Good",
                      record: "Updated",
                      improvement: "Average",
                      children: [],
                    },
                    {
                      id: "10",
                      name: "Lily",
                      role: "Cousin",
                      health: "Good",
                      record: "Updated",
                      improvement: "Good",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="p-6 flex flex-col items-center bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Family Health Tree</h2>
      <div className="w-full max-w-6xl p-4 bg-white shadow-lg rounded-lg flex flex-col items-center overflow-hidden">
        <TreeNode node={family[0]} />
      </div>
    </div>
  );
};

const TreeNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center">
      <FamilyMemberCard member={node} />
      {node.children.length > 0 && (
        <div className="flex flex-wrap justify-center mt-6 border-t-2 border-gray-300 pt-4 w-full">
          {node.children.map((child) => (
            <div key={child.id} className="p-4">
              <TreeNode node={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FamilyTree;