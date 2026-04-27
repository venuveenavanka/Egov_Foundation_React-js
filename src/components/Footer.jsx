import React from 'react';
import logo from '../assets/images/eGov-Foundation.png';

const Footer = () => {
  return (
    <footer className="footer-new pt-5 pb-0">
      <div className="container pt-5 pb-5">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4">
            <img src={logo} alt="eGov Logo" style={{ height: '55px' }} className="mb-4" />
            <p className="mb-5 mt-2" style={{ maxWidth: '350px' }}>
              Catalyzing digital transformation in public service delivery at speed & scale.
            </p>
            <div className="d-flex align-items-center gap-3">
              <a href="#" className="social-icon-pill"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon-pill"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-icon-pill"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon-pill"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4 fw-bold footer-heading">Useful Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">Home</a></li>
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">Our Impact</a></li>
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">DIGIT Sandbox</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">Our People</a></li>
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">Financials</a></li>
                  <li className="mb-3"><a href="#" className="text-secondary text-decoration-none small">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <h5 className="mb-4 fw-bold footer-heading">Subscribe Now</h5>
            <p className="small mb-4" style={{ color: '#455a64' }}>
              Receive regular updates of our monthly newsletter DOT – in your Inbox.
            </p>
            <div className="subscribe-box mb-3">
              <input type="email" placeholder="Enter Your Email" className="form-control border-0" />
              <button className="btn-orange-subscribe">
                <i className="fas fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Full Width */}
      <div className="bottom-bar-new py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="small mb-2 mb-md-0">
            &copy; {new Date().getFullYear()}. eGov. All Rights Reserved.
          </div>
          <div className="d-flex align-items-center small gap-3">
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
