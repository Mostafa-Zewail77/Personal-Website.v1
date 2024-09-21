import  { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function ScrollRestore() {

    const { pathname } = useLocation();

    useEffect(() => {
      // Check if a saved scroll position exists for the current path
      const savedPosition = sessionStorage.getItem(pathname);
      if (savedPosition) {
        // Restore to saved scroll position
        window.scrollTo(0, parseInt(savedPosition));
      } else {
        // If no saved position, scroll to top
        window.scrollTo(0, 0);
      }
  
      // When leaving the page, save the current scroll position
      return () => {
        sessionStorage.setItem(pathname, window.scrollY);
      };
    }, [pathname]);
  
    return null;
  };


export default ScrollRestore