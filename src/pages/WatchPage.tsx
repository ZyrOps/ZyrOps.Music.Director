import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WatchPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen text-white">
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 pb-12 pt-14 text-center">
        <p className="eyebrow justify-center">Watch Ausify Video</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">Watch</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          A video-style landing point for the campaign trailer, rebuilt here as an NCS creator-safe signal.
        </p>
      </section>

      <section className="relative z-10 px-4 pb-24">
        <div className="cassette-card grid aspect-video place-items-center text-center">
          <div className="grid justify-items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[#ffe87c] text-[#050311] shadow-[0_0_36px_rgba(255,232,124,0.28)]">
              <Play size={32} fill="currentColor" />
            </div>
            <p className="retro-display-title font-mono text-sm font-bold uppercase tracking-[0.14em]">Search. Listen. Defy.</p>
          </div>
        </div>
        <Link
          to="/songs"
          className="mx-auto mt-8 flex w-max border border-[#ffe87c]/70 px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#ffe87c] hover:bg-[#ffe87c] hover:text-[#050311]"
        >
          Start with NCS songs
        </Link>
      </section>
    </motion.main>
  );
}
