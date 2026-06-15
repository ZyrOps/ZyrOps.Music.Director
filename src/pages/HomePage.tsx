import { motion } from 'framer-motion';
import { ArrowUpRight, Disc3, Music2, Radio, RadioTower, Sparkles, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroPerson from '../../assets/images/sound/music-2.jpg';
import heroVideo from '../../assets/videos/hero-person-loop.webm';
import { artist, podcasts, songs } from '../data/content';

function ChoiceCard({
  title,
  eyebrow,
  to,
  variant,
}: {
  title: string;
  eyebrow: string;
  to: string;
  variant: 'music' | 'podcast';
}) {
  const music = variant === 'music';

  return (
    <Link to={to} className="group relative block focus:outline-none">
      <motion.div
        whileHover={{ y: -12, rotateX: 4, rotateY: music ? -6 : 6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 190, damping: 18 }}
        className={`retro-choice-panel mayes-choice-card ${music ? 'retro-choice-panel-blue' : 'retro-choice-panel-pink'}`}
      >
        <div className="retro-panel-screen">
          <div className="retro-panel-raster" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase text-white/60">
              <span>{eyebrow}</span>
              <span>Online</span>
            </div>
            <div className="grid place-items-center">
              <div className="retro-orbit">
                <span />
                <span />
                <span />
                {music ? <Music2 size={34} fill="currentColor" /> : <Radio size={34} fill="currentColor" />}
              </div>
            </div>
            <div>
              <h3 className="mayes-choice-title uppercase">{title}</h3>
              <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase text-white/58">
                <Zap size={14} fill="currentColor" />
                <span>{music ? 'Open music deck' : 'Open podcast relay'}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

const biography = [
  'Arjun Nair is a fictional music director identity built for a browser-first listening world: part portfolio, part jukebox, part creator-safe radio console.',
  'The work moves through electronic cues, NCS-inspired releases, podcast sessions, and stage-ready direction with an emphasis on atmosphere, pace, and discoverability.',
  'This home page now behaves like an artist dossier first, then sends listeners into the interactive music and podcast decks at the end of the page.',
];

const credits = [
  ['Latest Track', songs[songs.length - 1].title],
  ['Current Podcast', podcasts[0].title],
  ['Studio Mode', 'NCS / creator-safe'],
  ['Location', artist.studio],
];

export default function HomePage() {
  const latestSong = songs[songs.length - 1];
  const latestPodcast = podcasts[0];
  const [showHeroVideo, setShowHeroVideo] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHeroVideo(true), 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mayes-home min-h-screen overflow-hidden text-white"
    >
      <section className="mayes-hero">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78 }}
          className="mayes-hero-copy"
        >
          <p className="mayes-eyebrow">Conductor | Music Director | Composer | Podcaster</p>
          <h1 className="mayes-title">{artist.name}</h1>
          <p className="mayes-role">
            A nocturnal portfolio for NCS tracks, creator-safe podcasts, live direction, and spinning disc interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, delay: 0.12 }}
          className="mayes-portrait-block"
        >
          <img src={heroPerson} alt={`${artist.name} portrait`} className="mayes-portrait" />
          {showHeroVideo ? (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.62, ease: [0.25, 0.1, 0.25, 1] }}
              className="mayes-hero-video-card"
            >
              <video src={heroVideo} poster={heroPerson} autoPlay muted loop playsInline className="mayes-hero-video" />
              <div className="mayes-hero-video-label">
                <span>Video signal</span>
                <strong>Starts after 1s</strong>
              </div>
            </motion.div>
          ) : null}
          <div className="mayes-portrait-caption">
            <span>Studio archive</span>
            <span>{artist.role}</span>
          </div>
        </motion.div>
      </section>

      <section className="mayes-bio-section">
        <div className="mayes-section-label">Biography</div>
        <div className="mayes-bio-copy">
          {biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mayes-credit-section">
        <div className="mayes-section-label">Selected Signals</div>
        <div className="mayes-credit-grid">
          {credits.map(([label, value]) => (
            <article key={label} className="mayes-credit-card">
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mayes-feature-section">
        <article className="mayes-feature-card">
          <img src={latestSong.artwork} alt={`${latestSong.title} artwork`} />
          <div>
            <p>Latest music upload</p>
            <h2>{latestSong.title}</h2>
            <span>{latestSong.tone}</span>
          </div>
          <Link to="/music/latest" aria-label="Open latest music">
            <ArrowUpRight size={22} />
          </Link>
        </article>

        <article className="mayes-feature-card mayes-feature-card-podcast">
          <img src={latestPodcast.artwork} alt={`${latestPodcast.title} artwork`} />
          <div>
            <p>Latest podcast upload</p>
            <h2>{latestPodcast.title}</h2>
            <span>{latestPodcast.date}</span>
          </div>
          <Link to="/podcast/latest" aria-label="Open latest podcast">
            <ArrowUpRight size={22} />
          </Link>
        </article>
      </section>

      <section className="mayes-choice-section">
        <div className="mayes-choice-copy">
          <p className="mayes-eyebrow">Listen now</p>
          <h2>Choose the signal</h2>
          <p>
            The original two-option entry point is here now, right before the footer: music for the CD carousel, podcast for the
            episode deck.
          </p>
        </div>

        <div className="mayes-choice-grid">
          <ChoiceCard title="Music" eyebrow="Deck 01" to="/music/latest" variant="music" />
          <ChoiceCard title="Podcast" eyebrow="Relay 02" to="/podcast/latest" variant="podcast" />
        </div>
      </section>

      <div className="pointer-events-none fixed bottom-5 left-5 z-20 hidden items-center gap-3 text-[10px] font-bold uppercase text-white/35 md:flex">
        <RadioTower size={16} />
        <span>Artist dossier / choose a channel below</span>
      </div>

      <Link
        to="/watch"
        className="mayes-watch-link fixed bottom-5 right-5 z-20 hidden items-center gap-3 text-[11px] font-bold uppercase md:inline-flex"
      >
        <Sparkles size={15} fill="currentColor" />
        Watch transmission
        <Disc3 size={16} />
      </Link>
    </motion.main>
  );
}
