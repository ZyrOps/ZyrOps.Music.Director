import { motion } from 'framer-motion';
import { Disc3, Music2, Radio } from 'lucide-react';
import type { CSSProperties } from 'react';
import { artist } from '../data/content';

const barHeights = [26, 42, 58, 35, 68, 47, 31, 55, 74, 39, 61, 45];
const staffNotes = [
  { left: '8%', top: '28%', delay: '0s' },
  { left: '18%', top: '62%', delay: '-0.7s' },
  { left: '74%', top: '24%', delay: '-1.4s' },
  { left: '84%', top: '66%', delay: '-2.1s' },
];

export function LoadingScreen() {
  return (
    <motion.section
      className="music-loading-page"
      aria-label={`Loading ${artist.name} ${artist.role}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="music-loading-staff" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {staffNotes.map((note, index) => (
        <Music2
          key={index}
          className="music-loading-note"
          size={index % 2 ? 18 : 22}
          style={{ left: note.left, top: note.top, animationDelay: note.delay }}
          aria-hidden="true"
        />
      ))}

      <motion.div
        className="music-loading-card"
        initial={{ y: 28, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="music-loading-disc" aria-hidden="true">
          <div className="music-loading-disc-face">
            <Disc3 size={38} />
          </div>
          <span />
        </div>

        <div className="music-loading-copy">
          <span className="music-loading-kicker">{artist.role}</span>
          <h1>{artist.name}</h1>
          <p>Syncing stems, cues, and creator-safe frequencies.</p>
        </div>

        <div className="music-loading-wave" aria-hidden="true">
          {barHeights.map((height, index) => (
            <span
              key={index}
              style={{ '--bar-height': `${height}px`, '--bar-delay': `${index * -0.085}s` } as CSSProperties}
            />
          ))}
        </div>

        <div className="music-loading-status">
          <Radio size={15} />
          <span>Loading transmission</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
