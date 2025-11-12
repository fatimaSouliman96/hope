import React from "react";
import "./VisionMissionSection.css";

const VisionMissionSection = () => {
  return (
    // Main wrapper for the Vision & Mission section
    <div className="vision-mission-section">
      {/* Inner content container */}
      <div className="vision-mission-content">
        {/* Title of the section */}
        <h2 className="vision-mission-title">Our Vision & Mission</h2>

        {/* Cards wrapper */}
        <div className="vision-mission-cards">
          {/* Left card - Vision */}
          <div className="vision-card">
            {/* Icon placeholder */}
            <div className="icon-placeholder">{/* icon goes here */}</div>

            {/* Card title */}
            <h3 className="card-title">Our Vision</h3>

            {/* Card text */}
            <p className="card-text">
              To create a world where every child with a disability is empowered
              to reach their full potential, living a life of dignity, inclusion,
              and opportunity.
            </p>
          </div>

          {/* Right card - Mission */}
          <div className="mission-card">
            {/* Icon placeholder */}
            <div className="icon-placeholder">{/* icon goes here */}</div>

            {/* Card title */}
            <h3 className="card-title">Our Mission</h3>

            {/* Card text */}
            <p className="card-text">
              To provide exceptional and free education, therapy, and medical
              support to children with disabilities, fostering their growth and
              independence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;