import { useMediaQuery } from 'react-responsive';

const useMobileOrTablet = (breakpoint = 768) => {
  
  const isMobileOrTabletQuery = `(max-width: ${breakpoint}px)`;
  const isMobileOrTablet = useMediaQuery({ query: isMobileOrTabletQuery });

  return isMobileOrTablet;
};

export default useMobileOrTablet;
