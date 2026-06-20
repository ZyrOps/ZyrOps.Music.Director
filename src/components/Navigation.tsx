import { AnimatePresence, motion } from 'framer-motion';
import { Airplay, Pause, Play, SkipBack, SkipForward, SlidersHorizontal, Volume2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { podcasts, songs } from '../data/content';
import { getTrackGradientTheme } from '../data/trackThemes';
import { useMusicStore } from '../store/useMusicStore';

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'Music', to: '/music/latest' },
  { label: 'Podcast', to: '/podcast/latest' },
  { label: 'Library', to: '/songs' },
  { label: 'About', to: '/about' },
  { label: 'Stats', to: '/stats' },
];

export function Navigation() {
  const menuOpen = useMusicStore((state) => state.menuOpen);
  const setMenuOpen = useMusicStore((state) => state.setMenuOpen);
  const currentSong = useMusicStore((state) => state.currentSong);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const progress = useMusicStore((state) => state.progress);
  const volume = useMusicStore((state) => state.volume);
  const startSong = useMusicStore((state) => state.startSong);
  const togglePlayback = useMusicStore((state) => state.togglePlayback);
  const setProgress = useMusicStore((state) => state.setProgress);
  const setVolume = useMusicStore((state) => state.setVolume);
  const islandSong = currentSong ?? songs[songs.length - 1];
  const showIsland = Boolean(currentSong);
  const currentIndex = Math.max(
    0,
    songs.findIndex((song) => song.id === islandSong.id),
  );
  const currentPodcastIndex = podcasts.findIndex((podcast) => 1000 + podcast.episode === islandSong.id);
  const themeIndex = currentPodcastIndex >= 0 ? songs.length + currentPodcastIndex : currentIndex;
  const dancePalette = getTrackGradientTheme(themeIndex);
  const danceIntensity = isPlaying ? Math.min(1, 0.38 + volume * 0.48 + progress * 0.14) : 0;
  const islandStyle = {
    '--dance-intensity': danceIntensity.toFixed(2),
    '--dance-a': dancePalette[0],
    '--dance-b': dancePalette[1],
    '--dance-c': dancePalette[2],
    '--dance-speed': `${Math.max(0.58, 0.95 - danceIntensity * 0.22).toFixed(2)}s`,
  } as CSSProperties;

  const playAtIndex = (index: number) => {
    const nextIndex = (index + songs.length) % songs.length;
    startSong(songs[nextIndex]);
  };

  const handleTogglePlayback = () => {
    if (!currentSong) {
      startSong(islandSong);
      return;
    }

    togglePlayback();
  };

  return (
    <>
      <AnimatePresence>
        {showIsland ? (
          <header
            key="dynamic-island-nav"
            className={`retro-nav dynamic-island-nav fixed inset-x-0 top-0 z-50 transition-colors ${
              menuOpen ? 'is-scrolled' : ''
            }`}
          >
            <motion.div
              className={`dynamic-island ${isPlaying ? 'is-dancing' : ''}`}
              style={islandStyle}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              aria-label="Now playing navigation"
            >
              <div className="dynamic-island-controls" aria-label="Playback controls">
                <button type="button" aria-label="Previous track" onClick={() => playAtIndex(currentIndex - 1)}>
                  <SkipBack size={16} fill="currentColor" />
                </button>
                <button
                  className="dynamic-island-play"
                  type="button"
                  aria-label={isPlaying ? 'Pause current track' : 'Play current track'}
                  onClick={handleTogglePlayback}
                >
                  {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                </button>
                <button type="button" aria-label="Next track" onClick={() => playAtIndex(currentIndex + 1)}>
                  <SkipForward size={16} fill="currentColor" />
                </button>
              </div>

              <NavLink to="/home" className="dynamic-island-art" aria-label="Go home">
                <img src={islandSong.artwork} alt={`${islandSong.title} artwork`} />
              </NavLink>

              <div className="dynamic-island-copy" style={{ '--nav-progress': `${progress * 100}%` } as CSSProperties}>
                <div className="dynamic-island-title">{islandSong.title}</div>
                <div className="dynamic-island-meta">{islandSong.tone}</div>
              </div>

              <div className="dynamic-island-eq" aria-hidden="true">
                {Array.from({ length: 6 }, (_, index) => (
                  <span key={index} style={{ '--eq-index': index } as CSSProperties} />
                ))}
              </div>

              <div className="dynamic-island-sliders">
                <div className="dynamic-island-mode-icons" aria-hidden="true">
                  <Airplay size={13} />
                  <SlidersHorizontal size={13} />
                </div>
                <label className="dynamic-island-range">
                  <span className="sr-only">Progress</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={progress}
                    onChange={(event) => setProgress(Number(event.currentTarget.value))}
                    style={{ '--range-value': `${progress * 100}%` } as CSSProperties}
                  />
                </label>
                <label className="dynamic-island-volume">
                  <Volume2 size={18} />
                  <span className="sr-only">Volume</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(event) => setVolume(Number(event.currentTarget.value))}
                    style={{ '--range-value': `${volume * 100}%` } as CSSProperties}
                  />
                </label>
              </div>

              <nav className="dynamic-island-links" aria-label="Primary">
                {navItems.slice(0, 4).map((item) => (
                  <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </header>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && showIsland ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 grid min-h-screen place-items-center bg-black/95 px-5 pt-24"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid gap-2 text-center"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.to}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-display text-5xl uppercase leading-none min-[390px]:text-6xl md:text-8xl ${
                        isActive ? 'text-[#ff8fda]' : 'text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
