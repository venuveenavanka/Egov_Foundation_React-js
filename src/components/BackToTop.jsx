import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a 
      href="#" 
      className={`back-to-top ${isVisible ? 'show' : ''}`} 
      onClick={(e) => { e.preventDefault(); scrollToTop(); }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  );
};

export default BackToTop;
