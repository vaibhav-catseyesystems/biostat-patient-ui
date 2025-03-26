"use client";
import React, { useState } from "react";
import PharmacistCard from "./PharmacistCard";
import { locationOptions, specialtyOptions } from "../../utils/data";
import SearchBar from "../common/SearchBar";
import FilterSelect from "../common/FilterSelect";

const PharmacistSearch = ({ pharmacists, openMedicationModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const filteredPharmacists = pharmacists.filter((pharmacist) => {
    // Filter by search query
    const matchesSearch =
      pharmacist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pharmacist.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by location
    const matchesLocation =
      selectedLocation === "all" ||
      pharmacist.location.toLowerCase().replace(" ", "-") === selectedLocation;

    // Filter by specialty
    const matchesSpecialty =
      selectedSpecialty === "all" ||
      pharmacist.specialty
        .toLowerCase()
        .includes(selectedSpecialty.replace("-", " "));

    return matchesSearch && matchesLocation && matchesSpecialty;
  });

  return (
    <section className="bg-white rounded-[13px] p-6 max-lg:p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <div className="flex gap-4 mb-6 max-lg:flex-col">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search pharmacists by name or specialty"
        />
        <div className="flex gap-4 max-lg:flex-col">
          <FilterSelect
            value={selectedLocation}
            onChange={setSelectedLocation}
            options={locationOptions}
            placeholder="All Locations"
          />
          <FilterSelect
            value={selectedSpecialty}
            onChange={setSelectedSpecialty}
            options={specialtyOptions}
            placeholder="All Specialties"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {filteredPharmacists.map((pharmacist) => (
          <PharmacistCard
            key={pharmacist.id}
            pharmacist={pharmacist}
            openMedicationModal={() => openMedicationModal(pharmacist)}
          />
        ))}
        {filteredPharmacists.length === 0 && (
          <p className="text-center py-8 text-[#64748B]">
            No pharmacists found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default PharmacistSearch;
