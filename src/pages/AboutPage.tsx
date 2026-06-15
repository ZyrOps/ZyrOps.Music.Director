import { motion } from 'framer-motion';
import { Play, RotateCcw, Share2, SignalHigh } from 'lucide-react';
import { Link } from 'react-router-dom';
import { songs } from '../data/content';

const ncsArtists = [
  'DJ PUMA',
  'SFRNG',
  'Aizu',
  'SOVAGI',
  "it's different",
  'STAARZ',
  '2frers',
  'Jey Vazz',
  'NAVARA',
  'Sano',
  'Invex',
  'MXZI',
  'Deno',
  'Elektronomia',
  'Tobu',
  'Different Heaven',
  'Cartoon',
  'Janji',
  'Syn Cole',
  'Jim Yosef',
  'Rival',
  'Diamond Eyes',
  'Lost Sky',
  'Egzod',
  'Sub Urban',
  'Koven',
  'NEFFEX',
  'Alan Walker',
  'Spektrem',
  'JJD',
];

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="retro-page min-h-screen text-white"
    >
      <div className="vhs-border pt-24" />

      <section className="relative z-10 mx-auto grid max-w-[1180px] gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="retro-terminal-strip">Signal guide / creator-safe sounds / NCS</p>
          <h1 className="retro-display-title mt-8 font-display text-[clamp(4.2rem,9vw,9rem)] uppercase leading-[0.78]">
            Take Back
            <br />
            The Feed
          </h1>
          <p className="mt-8 max-w-[560px] font-mono text-sm font-bold uppercase leading-7 tracking-[0.1em] text-[#bafcff]/72">
            We are calling on creators to discover and support NCS artists, then build videos, podcasts, streams,
            trailers, and edits with music that does not sound like the same old algorithm.
          </p>
        </div>

        <div className="cassette-card grid gap-5 p-5">
          <div className="grid aspect-video place-items-center border border-[#7df4ff]/45 bg-black/60">
            <button className="inline-flex h-28 w-48 items-center justify-center gap-3 border border-[#ffe87c] bg-[#ffe87c] font-mono text-xs font-bold uppercase text-[#050311]">
              <Play size={16} fill="currentColor" /> Play Video
            </button>
          </div>
          <div className="grid gap-3 font-mono text-xs font-bold uppercase leading-6 tracking-[0.08em] text-white/65">
            <p>Search. Listen. Defy.</p>
            <p>The more you explore creator-safe music, the more it gives back to artists and creators.</p>
            <p>Start here, keep digging, and let your next favorite act arrive from outside the feed.</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1180px] gap-4 px-5 py-10 md:grid-cols-4">
        {[
          ['500B+', 'NCS plays globally'],
          ['250M+', 'videos using NCS music'],
          [`${songs.length}`, 'featured tracks'],
          ['100%', 'creator-safe links'],
        ].map(([value, label]) => (
          <div key={label} className="retro-stat-tile">
            <span>{value}</span>
            <strong>{label}</strong>
          </div>
        ))}
      </section>

      <section className="relative z-10 mx-auto max-w-[1180px] px-5 py-16">
        <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#ffe87c]">
          <SignalHigh size={16} />
          Artist signal index
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5">
          {ncsArtists.map((artistName) => (
            <div key={artistName} className="border border-[#7df4ff]/25 bg-black/40 px-3 py-2 font-mono text-[11px] font-bold uppercase leading-tight text-white/62">
              {artistName}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[760px] gap-8 px-5 pb-24 text-center">
        <div className="cassette-card py-12">
          <p className="retro-display-title font-mono text-lg font-bold uppercase tracking-[0.12em]">
            Punch your card, share it with others, and inspire them to listen.
          </p>
          <button className="mx-auto mt-8 inline-flex items-center gap-2 border border-[#7df4ff] px-4 py-2 font-mono text-xs font-bold uppercase text-[#7df4ff]">
            <Share2 size={13} /> Share your card
          </button>
        </div>
        <Link
          to="/home"
          className="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/45 hover:text-[#ffe87c]"
        >
          <RotateCcw size={13} /> restart transmission
        </Link>
      </section>
    </motion.main>
  );
}
