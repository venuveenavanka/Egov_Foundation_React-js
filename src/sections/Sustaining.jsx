import React from 'react';
import speaker1 from '../assets/images/speaker-1.png';
import speaker2 from '../assets/images/speaker-2.png';

const Sustaining = () => {
  return (
    <section className="sustaining-section py-5 bg-white">
      <div className="container text-center py-5">
        <h3 className="text-muted mb-2" style={{ fontWeight: 400, fontSize: '1.5rem' }}>
          20 years of reimagining for citizens and
        </h3>
        <h2 className="display-4 fw-bold mb-4">
          <span className="highlight-blue-marker">sustaining change</span>
        </h2>
        
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local problems needs to be tapped into.
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="testimonial-card-new shadow-sm">
              <div className="quote-side p-3 flex-grow-1">
                <div className="quote-icon-blue mb-3">
                  <i className="fas fa-quote-left" style={{ fontSize: '1.2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-4" style={{ color: '#002b5c', lineHeight: '1.4', fontSize: '1.1rem' }}>
                  Leveraging technology for sustainable development
                </h4>
                <div className="play-button-wrapper">
                  <button className="btn-play-red">
                    <i className="fas fa-play" style={{ fontSize: '0.8rem' }}></i>
                  </button>
                </div>
              </div>
              <div className="speaker-img-side">
                <img src={speaker1} alt="Speaker" className="speaker-img-grayscale" />
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="testimonial-card-new shadow-sm">
              <div className="quote-side p-3 flex-grow-1">
                <div className="quote-icon-blue mb-3">
                  <i className="fas fa-quote-left" style={{ fontSize: '1.2rem' }}></i>
                </div>
                <h4 className="fw-bold mb-4" style={{ color: '#002b5c', lineHeight: '1.4', fontSize: '1.1rem' }}>
                  Digitising civic services for better life
                </h4>
                <div className="play-button-wrapper">
                  <button className="btn-play-red">
                    <i className="fas fa-play" style={{ fontSize: '0.8rem' }}></i>
                  </button>
                </div>
              </div>
              <div className="speaker-img-side">
                <img src={speaker2} alt="Speaker" className="speaker-img-grayscale" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4">
          <a href="#" className="btn btn-outline-dark-blue-pill">About Us</a>
        </div>
      </div>
    </section>
  );
};

export default Sustaining;
