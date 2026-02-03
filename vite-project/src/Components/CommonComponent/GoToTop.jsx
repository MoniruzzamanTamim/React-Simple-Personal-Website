import React, { useEffect, useState } from 'react';

function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    show && (
      <button
        onClick={goTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          padding: '7px 20px',
          borderRadius: '50%',
          border: 'none',
          background: '#dc3545',
          color: '#fff',
          cursor: 'pointer',
          fontWeight:'bolder',
          fontSize:'25px'
        }}
      >
        ↑
      </button>
    )
  );
}

export default GoToTop;
