import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from './gtm';

export default function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const name = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    trackPageView(name);
  }, [location]);
}
