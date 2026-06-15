import { Outlet, useLocation } from 'react-router-dom';
import { CustomCursor } from '../components/CustomCursor';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';

export function SiteLayout() {
  const location = useLocation();
  const hideFooter = location.pathname === '/music/latest' || location.pathname === '/podcast/latest';
  const hideNavigation = hideFooter;

  return (
    <div className="min-h-screen bg-ink text-bone vhs-noise">
      <CustomCursor />
      <div className="app-shell">
        {hideNavigation ? null : <Navigation />}
        <Outlet />
        {hideFooter ? null : <Footer />}
      </div>
    </div>
  );
}
