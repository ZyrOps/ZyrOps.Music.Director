import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { SiteLayout } from './layouts/SiteLayout';

const IntroPage = lazy(() => import('./pages/IntroPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const SongsPage = lazy(() => import('./pages/SongsPage'));
const PodcastsPage = lazy(() => import('./pages/PodcastsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const LatestMusicPage = lazy(() => import('./pages/LatestMusicPage'));
const LatestPodcastPage = lazy(() => import('./pages/LatestPodcastPage'));
const WatchPage = lazy(() => import('./pages/WatchPage'));
const StatsPage = lazy(() => import('./pages/StatsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));

export default function App() {
  const location = useLocation();
  const [showBootLoader, setShowBootLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowBootLoader(false), 2300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<IntroPage />} />
            <Route element={<SiteLayout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="/music/latest" element={<LatestMusicPage />} />
              <Route path="/podcast/latest" element={<LatestPodcastPage />} />
              <Route path="/songs" element={<SongsPage />} />
              <Route path="/podcasts" element={<PodcastsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/stats" element={<StatsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>

      <AnimatePresence>
        {showBootLoader ? <LoadingScreen key="music-loading-overlay" /> : null}
      </AnimatePresence>
    </>
  );
}
