import React from 'react';
import coDevelop from '../assets/images/logo-codevelop.png';
import gates from '../assets/images/logo-gates.png';
import tata from '../assets/images/logo-tata.png';
import globalFund from '../assets/images/logo-globalfund.png';
import nilekani from '../assets/images/logo-nilekani.png';

const Supporters = () => {
  const logos = [
    { src: coDevelop, alt: "Co-Develop" },
    { src: gates, alt: "Gates Foundation" },
    { src: tata, alt: "Tata Trusts" },
    { src: globalFund, alt: "The Global Fund" },
    { src: nilekani, alt: "Nilekani Philanthropies" }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <h2 className="mb-5 text-center text-lg-start reveal fade-left">
          <span style={{ fontWeight: 400, color: '#002b5c' }}>Our</span>
          <span style={{ fontWeight: 700, color: '#002b5c' }}>Supporters</span>
        </h2>
        <div className="supporters-grid">
          {logos.map((logo, index) => (
            <div key={index} className="supporter-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Supporters;
