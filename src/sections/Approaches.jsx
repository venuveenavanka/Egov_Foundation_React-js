import React, { useState } from "react";
import hospitalBed from "../assets/images/hospital-bed.png";
import vaccineCert from "../assets/images/vaccine-cert.png";

const Approaches = () => {
  const [activeTab, setActiveTab] = useState("Public Health");

  const tabs = [
    "Public Health",
    "Public Finance",
    "Local Governance",
    "Water & Sanitation",
  ];

  return (
    <section className="approaches-overlap pb-5">
      <div className="container reveal fade-up">
        <div className="approaches-card border-0 bg-white">
          <div className="row g-4 align-items-center">
            {/* Sidebar Column */}
            <div className="col-lg-4 px-4 px-lg-5 py-4">
              <span
                className="text-muted mb-1 d-block text-uppercase fw-bold"
                style={{ fontSize: "12px", letterSpacing: "1px" }}
              >
                Big problems need
              </span>
              <h2
                className="fw-bold mb-4"
                style={{ color: "#002b5c", fontSize: "2.5rem" }}
              >
                bold approaches
              </h2>

              <div className="d-flex flex-column gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`btn sidebar-btn-new ${activeTab === tab ? "active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Metric Cards Column */}
            <div className="col-lg-8">
              <div className="row g-4">
                {/* Metric Card 1 */}
                <div className="col-6 col-md-6">
                  <div
                    className="approaches-inner-card-new shadow-sm"
                    style={{ backgroundColor: "#5bcabd" }}
                  >
                    <div className="card-top-content p-4 text-white">
                      <h3 className="display-5 fw-bold mb-1">210+</h3>
                      <p
                        className="small opacity-90 mb-4"
                        style={{ lineHeight: "1.4" }}
                      >
                        cities LIVE with 10BedICU across India
                      </p>
                      <a
                        href="#"
                        className="btn-read-more-new"
                        style={{ color: "#5bcabd" }}
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-img-wrapper-new">
                      <img
                        src={hospitalBed}
                        alt="Health"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Metric Card 2 */}
                <div className="col-6 col-md-6">
                  <div
                    className="approaches-inner-card-new shadow-sm"
                    style={{ backgroundColor: "#2196f3" }}
                  >
                    <div className="card-top-content p-4 text-white">
                      <h3 className="display-5 fw-bold mb-1">2 Bn</h3>
                      <p
                        className="small opacity-90 mb-4"
                        style={{ lineHeight: "1.4" }}
                      >
                        COVID-19 vaccination certificates issued
                      </p>
                      <a
                        href="#"
                        className="btn-read-more-new"
                        style={{ color: "#2196f3" }}
                      >
                        Read More
                      </a>
                    </div>
                    <div className="card-img-wrapper-new">
                      <img
                        src={vaccineCert}
                        alt="Vaccine"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approaches;
