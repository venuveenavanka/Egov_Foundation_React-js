import React, { useState, useEffect } from "react";
import logo from "../assets/images/eGov-Foundation.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const aboutUsItems = [
    "Who We Are",
    "Our Impact",
    "Our Approach",
    "Our People",
    "News & Media",
    "Videos",
    "Newsletters",
  ];

  const areasOfWorkItems = [
    "Local Governance",
    "Water & Sanitation",
    "Public Health",
    "Public Finance",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header className={isScrolled ? "header-scrolled" : ""}>
      {/* Top Bar */}
      <div className="top-bar-custom py-1 d-none d-lg-block transition-all">
        <div className="container d-flex justify-content-end align-items-center">
          <div className="d-flex align-items-center small">
            <a
              href="#"
              className="text-dark text-decoration-none me-3"
              style={{ fontSize: "14px" }}
            >
              Events
            </a>
            <a
              href="#"
              className="text-dark text-decoration-none me-4"
              style={{ fontSize: "14px" }}
            >
              Contact us
            </a>
            <div
              className="language-switcher d-flex align-items-center cursor-pointer position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => setIsLangOpen(!isLangOpen)}
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English"
                className="me-2"
                style={{ width: "20px", height: "auto", borderRadius: "2px" }}
              />
              <span
                className="me-1 fw-bold text-dark"
                style={{ fontSize: "14px" }}
              >
                ENG
              </span>
              <i
                className="fas fa-chevron-down text-primary"
                style={{ fontSize: "10px" }}
              ></i>

              {/* Language Dropdown */}
              {isLangOpen && (
                <div
                  className="language-dropdown position-absolute bg-white shadow-lg border-0 rounded-4 p-3"
                  style={{
                    top: "100%",
                    right: 0,
                    zIndex: 1000000,
                    minWidth: "180px",
                    marginTop: "10px",
                  }}
                >
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2 mb-1">
                    <img
                      src="https://flagcdn.com/w20/za.png"
                      alt="Afrikaans"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-medium text-secondary">Afrikaans</span>
                  </div>
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2 mb-1">
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="English"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-bold text-primary">English</span>
                  </div>
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2 mb-1">
                    <img
                      src="https://flagcdn.com/w20/fr.png"
                      alt="French"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-medium text-secondary">French</span>
                  </div>
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2 mb-1">
                    <img
                      src="https://flagcdn.com/w20/de.png"
                      alt="German"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-medium text-secondary">German</span>
                  </div>
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2 mb-1">
                    <img
                      src="https://flagcdn.com/w20/pt.png"
                      alt="Portuguese"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-medium text-secondary">Portuguese</span>
                  </div>
                  <div className="d-flex align-items-center py-2 px-3 hover-bg-light cursor-pointer rounded-2">
                    <img
                      src="https://flagcdn.com/w20/ru.png"
                      alt="Russian"
                      className="me-3"
                      style={{ width: "24px" }}
                    />
                    <span className="fw-medium text-secondary">Russian</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white py-2">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              alt="eGov Foundation Logo"
              style={{ height: "55px", width: "auto" }}
            />
          </a>

          <div className="d-flex align-items-center ms-auto order-lg-3">
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars fs-4 text-dark-blue"></i>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <div className="d-lg-none d-flex justify-content-between align-items-center p-3 mb-4 border-bottom">
              <img src={logo} alt="eGov Logo" style={{ height: "40px" }} />
              <button
                className="btn btn-close-nav border-0 p-2"
                type="button"
                onClick={toggleMenu}
              >
                <i className="fas fa-times fs-4"></i>
              </button>
            </div>

            <ul className="navbar-nav mx-auto align-items-center fw-medium gap-3">
              <li
                className="nav-item position-relative custom-dropdown-hover"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  About Us{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>

                {/* Modern Hover Dropdown */}
                {isAboutOpen && (
                  <div className="nav-dropdown-menu-new">
                    <ul className="list-unstyled mb-0">
                      {aboutUsItems.map((item) => (
                        <li key={item} className="nav-dropdown-item-new">
                          <a href="#" className="text-decoration-none">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="nav-item position-relative custom-dropdown-hover"
                onMouseEnter={() => setIsAreasOpen(true)}
                onMouseLeave={() => setIsAreasOpen(false)}
              >
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  Areas of work{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>

                {/* Modern Hover Dropdown */}
                {isAreasOpen && (
                  <div className="nav-dropdown-menu-new">
                    <ul className="list-unstyled mb-0">
                      {areasOfWorkItems.map((item) => (
                        <li key={item} className="nav-dropdown-item-new">
                          <a href="#" className="text-decoration-none">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  Products & Solutions{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  Our Platform{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  Ecosystem{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark-blue d-flex align-items-center p-0"
                  href="#"
                  style={{ fontSize: "15px" }}
                >
                  Resources{" "}
                  <i
                    className="fas fa-chevron-down ms-1 opacity-50"
                    style={{ fontSize: "9px" }}
                  ></i>
                </a>
              </li>
            </ul>
            <div className="d-none d-lg-block ms-3">
              <a href="#" className="text-dark-blue">
                <i className="fas fa-search fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
