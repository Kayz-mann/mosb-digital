import { useState, useEffect } from 'react';

const useMobileOrTablet = (breakpoint = 768) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= breakpoint);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]); // Re-run effect if breakpoint changes

  return isMobileOrTablet;
};

export default useMobileOrTablet;
