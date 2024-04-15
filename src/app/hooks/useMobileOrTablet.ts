"use client"
import { useState, useEffect } from 'react';

const useMobileOrTablet = (breakpoint = 768) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= breakpoint);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobileOrTablet;
};

export default useMobileOrTablet;
