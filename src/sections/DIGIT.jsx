import React from "react";
import digitPerson from "../assets/images/digit-person.png";
import digitLogo from "../assets/images/digit-n.png";

const DIGIT = () => {
  return (
    <section className="digit-section-new">
      <div className="digit-person-wrapper d-none d-lg-flex">
        <img src={digitPerson} alt="DIGIT User" className="digit-person-img" />
      </div>

      <div className="container digit-inner-container">
        <div className="digit-tablet-row d-none d-md-flex d-lg-none align-items-center">
          <div className="digit-text-col">
            <img
              src={digitLogo}
              alt="DIGIT Logo"
              className="digit-logo-official mb-3"
            />
            <h2 className="digit-heading text-white fw-bold mb-3">
              Our open source <br />
              technology-for-good <br />
              platform
            </h2>
            <p className="text-white digit-para mb-4">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion
              and Transformation is eGov's open-source platform with reusable
              building blocks and shared data registries that can be used to
              build solutions in multiple sectors.
            </p>
            <a href="#" className="btn-explore-platform-new">
              Explore the platform
            </a>
          </div>
          <div className="digit-tablet-img-col">
            <img
              src={digitPerson}
              alt="DIGIT User"
              className="digit-tablet-img"
            />
          </div>
        </div>

        <div className="d-flex d-md-none flex-column align-items-center digit-mobile-wrap">
          <img
            src={digitPerson}
            alt="DIGIT User"
            className="digit-mobile-img mb-4"
          />
          <div className="text-center px-2">
            <img
              src={digitLogo}
              alt="DIGIT Logo"
              className="digit-logo-official mb-3"
            />
            <h2 className="digit-heading text-white fw-bold mb-3">
              Our open source <br />
              technology-for-good <br />
              platform
            </h2>
            <p className="text-white digit-para mb-4">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion
              and Transformation is eGov's open-source platform with reusable
              building blocks and shared data registries that can be used to
              build solutions in multiple sectors.
            </p>
            <a href="#" className="btn-explore-platform-new">
              Explore the platform
            </a>
          </div>
        </div>

        <div className="digit-desktop-row d-none d-lg-flex align-items-center">
          <div className="digit-text-col z-index-2">
            <img
              src={digitLogo}
              alt="DIGIT Logo"
              className="digit-logo-official mb-3"
            />
            <h2 className="digit-heading text-white fw-bold mb-3">
              Our open source <br />
              technology-for-good <br />
              platform
            </h2>
            <p className="text-white digit-para mb-4">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion
              and Transformation is eGov's open-source platform with reusable
              building blocks and shared data registries that can be used to
              build solutions in multiple sectors.
            </p>
            <a href="#" className="btn-explore-platform-new">
              Explore the platform
            </a>
          </div>
          <div className="col-lg-5" />
        </div>
      </div>
    </section>
  );
};

export default DIGIT;
