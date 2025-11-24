"use client";

import { useState } from "react";
import Image from "next/image";
import "./tabs.css";

const Tabs = () => {
  const options = [
    "Free Education",
    "Physical Therapy",
    "Medical Supervision",
    "Ambulance Service",
  ];

  const [currentTab, setCurrentTab] = useState(options[0]);

  return (
    <div className="tabs-home">
      {/* أزرار التابات */}
      <div className="tabs-option mb-3" role="group">
        {options.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`option ${currentTab === tab ? "active-option" : ""}`}
          >
            {index + 1}. {tab}
          </button>
        ))}
      </div>

      {/* محتوى التاب */}
      <div className="tab-content">

        {currentTab === "Free Education" && (
          <div className="tab-pane fade show active">
            <Image
              src={"/tabHome1.jpg"}
              alt="service"
              fill
              style={{ objectFit: "cover" }}
            />
            <h3>
              Tailored educational programs designed to meet the unique learning
              needs of each child.
            </h3>
          </div>
        )}

        {currentTab === "Physical Therapy" && (
          <div className="tab-pane fade show active">
            <Image
              src={"/tabHome4.jpg"}
              alt="service"
              fill
              style={{ objectFit: "cover" }}
            />
            <h3>
              Tailored educational programs designed to meet the unique learning
              needs of each child.
            </h3>
          </div>
        )}

        {currentTab === "Medical Supervision" && (
          <div className="tab-pane fade show active">
            <Image
              src={"/tabHome2.jpg"}
              alt="service"
              fill
              style={{ objectFit: "cover" }}
            />
            <h3>
              Tailored educational programs designed to meet the unique learning
              needs of each child.
            </h3>
          </div>
        )}

        {currentTab === "Ambulance Service" && (
          <div className="tab-pane fade show active">
            <Image
              src={"/tabHome3.jpg"}
              alt="service"
              fill
              style={{ objectFit: "cover" }}
            />
            <h3>
              Tailored educational programs designed to meet the unique learning
              needs of each child.
            </h3>
          </div>
        )}

      </div>
    </div>
  );
};

export default Tabs;


