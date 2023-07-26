import React, { useState, useEffect } from 'react';
import "../styles/Footer.sass";
import logoFooterDesktop from '../assets/logo_footer_desktop.png';
import logoFooterMobile from '../assets/logo_footer_mobile.png';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.screen.width <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='footer'>
      {isMobile ? (
        <img src={logoFooterMobile} alt="Mobile Logo" />
      ) : (
        <img src={logoFooterDesktop} alt="Desktop Logo" />
      )}
    </div>
  );
};

export default Footer;
