import React, { useState } from "react";
import { locationOptions, ratingOptions } from "../../utils/data";
import FilterSelect from "../common/FilterSelect";
import DoctorCard from "./DoctorCard";
import SearchBar from "../common/SearchBar";

const DoctorSearch = ({ doctors, openBookingModal }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const filteredDoctors = doctors.filter((doctor) => {
    // Filter by search query
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by location
    const matchesLocation =
      selectedLocation === "all" ||
      doctor.location.toLowerCase().replace(" ", "-") === selectedLocation;

    // Filter by rating
    const matchesRating =
      selectedRating === "all" || doctor.rating >= parseFloat(selectedRating);

    return matchesSearch && matchesLocation && matchesRating;
  });

  return (
    <section className="">
      <div className="flex gap-4 mb-6 max-lg:flex-col">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search doctors by name or specialty"
        />
        <div className="flex gap-4 max-lg:flex-col">
          <FilterSelect
            value={selectedLocation}
            onChange={setSelectedLocation}
            options={locationOptions}
            placeholder="All Locations"
          />
          <FilterSelect
            value={selectedRating}
            onChange={setSelectedRating}
            options={ratingOptions}
            placeholder="All Ratings"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {filteredDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            openBookingModal={() => openBookingModal(doctor)}
          />
        ))}
        {filteredDoctors.length === 0 && (
          <p className="text-center py-8 text-[#64748B]">
            No doctors found matching your criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default DoctorSearch;
