import React from 'react';
import heroImg from '../assets/images/hero-image.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container py-lg-0">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0 order-2 order-lg-1">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#002b5c', lineHeight: '1.2' }}>
              20 years of digital <br />
              transformation in public <br />
              service delivery <br />
              <span className="highlight-it mt-2">It's possible.</span>
            </h1>
            <div className="description-container mb-5">
              <p className="fw-bold text-muted mb-1" style={{ fontSize: '0.9rem' }}>
                Catalysts. Ecosystem enablers. Problem Solvers.
              </p>
              <p className="text-muted" style={{ fontSize: '0.85rem', maxWidth: '450px', lineHeight: '1.6' }}>
                At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="btn btn-teal-pill px-4 py-2 shadow-sm">Our Approach</a>
              <a href="#" className="btn btn-outline-blue-pill px-4 py-2 border-2">Our Impact</a>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2 text-center">
            <img src={heroImg} alt="Digital Transformation" className="img-fluid hero-composite-img reveal fade-right delay-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
