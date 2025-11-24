"use client";

import { useState } from "react";
import Image from "next/image";
import "./tabs.css";

const TabsProjects = () => {
    const options = [
        "Psychosocial Support (PSS)",
        "Parenting Sessions",
        "Case Management",
        "GBV Awareness & Prevention",
        "Risk Education (RE)",
        "Community Behaviour Change (SBC)"
    ];

    const [currentTab, setCurrentTab] = useState(options[0]);

    return (
        <div className="tabs-projects">
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

                {currentTab === "Psychosocial Support (PSS)" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab1img2.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Activities that build children’s emotional resilience, confidence, and social skills in a safe environment.
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab1img1.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}


                {currentTab === "Parenting Sessions" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab2img1.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Practical guidance to help caregivers support their children with positive parenting and self-care.
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab2img2.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}

                {currentTab === "Case Management" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab3img1.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Supporting children at risk by connecting them with appropriate services through a trusted referral system.
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab3img2.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}


                {currentTab === "GBV Awareness & Prevention" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab4img1.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Promoting respect, equality, and safe behaviors for boys, girls, and caregivers.
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab4img2.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}

                {currentTab === "Risk Education (RE)" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab5img1.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Teaching children how to stay safe from harmful environment risks and remnants of war
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab5img2.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}

                {currentTab === "Community Behaviour Change (SBC)" && (
                    <div className="tab-pane fade show active">
                        <div className="top-side" >
                            <div className="image-containar" >
                                <Image
                                    src={"/tab6img1.jpg"}
                                    alt="service"
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <h3>
                                Awareness events and community activities encouraging positive social values that protect children’s rights.
                            </h3>
                        </div>
                        <div className="image-containar bootom-side" >
                            <Image
                                src={"/tab6img2.jpg"}
                                alt="service"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabsProjects;