import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-custom position-fixed ${
        visible ? 'd-inline' : 'd-none'
      }`}
      style={{
        bottom: '50px',
        left: '30px', // سمت چپ
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: visible ? 'inline-flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <i className="bi bi-arrow-up-short" style={{ fontSize: '1.5rem' }}></i>

    </button>
  );
};

export default BackToTop;
