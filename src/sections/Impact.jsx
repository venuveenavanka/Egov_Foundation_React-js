import React from 'react';

const Impact = () => {
  return (
    <section className="impact-section reveal fade-up">
      <div className="impact-overlay"></div>
      <div className="container position-relative">
        <div className="row my-5 d-flex justify-content-center justify-content-lg-between align-items-center py-4 reveal fade-in delay-200">
          <div className="col-auto">
            <h2 className="display-1 fw-bold mb-0">1,000,000,100+</h2>
          </div>
          <div className="col-auto">
            <p className="small opacity-75 mb-0 text-center text-lg-end" style={{ maxWidth: '250px' }}>
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </p>
          </div>
        </div>

        <div className="row mt-5 mb-5 py-4 reveal fade-up delay-300">
          <div className="col-md-3 mb-4 mb-md-0">
            <h3 className="display-5 fw-bold">1.1 Billion+</h3>
            <p className="small opacity-75">Public services delivered</p>
          </div>
          <div className="col-md-3">
            <h3 className="display-5 fw-bold">50+ partners</h3>
            <p className="small opacity-75">
              From technology, governments and NGOs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
