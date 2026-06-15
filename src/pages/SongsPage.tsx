import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { SongCard } from '../components/SongCard';
import { songs } from '../data/content';
import type { SongCategory } from '../types/site';

const filters: Array<{ label: string; value: SongCategory | 'all' }> = [
  { label: 'All', value: 'all' },
  { label: 'House', value: 'film-scores' },
  { label: 'Singles', value: 'singles' },
  { label: 'Collabs', value: 'collabs' },
  { label: 'Vibes', value: 'instrumentals' },
];

export default function SongsPage() {
  const [filter, setFilter] = useState<SongCategory | 'all'>('all');
  const visibleSongs = useMemo(
    () => (filter === 'all' ? songs : songs.filter((song) => song.category === filter)),
    [filter],
  );

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen px-5 pb-20 pt-36 text-white lg:px-8">
      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-6 border border-[#7df4ff]/55 bg-black/60 p-6 shadow-[12px_12px_0_rgba(255,93,190,0.25)] lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-[#ffe87c]">Choose A Channel</p>
          <h1 className="retro-display-title font-display text-8xl uppercase leading-none lg:text-9xl">NCS Songs</h1>
        </div>
        <p className="max-w-[420px] font-mono text-sm font-bold uppercase leading-6 tracking-[0.08em] text-[#bafcff]/75">
          Recent creator-safe NCS releases, styled like a cassette terminal playlist.
        </p>
      </section>

      <section className="relative z-10 mx-auto mt-8 max-w-[1500px]">
        <div className="flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item.value}
              className={`shrink-0 border px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] shadow-[5px_5px_0_rgba(255,93,190,0.28)] transition-transform hover:-translate-y-1 ${
                filter === item.value
                  ? 'border-[#ffe87c] bg-[#ffe87c] text-[#050311]'
                  : 'border-[#7df4ff]/50 bg-black/70 text-[#f7fbff] hover:bg-[#7df4ff] hover:text-[#050311]'
              }`}
              type="button"
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-10 max-w-[1500px]">
        <motion.div layout className="grid gap-6 xl:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleSongs.map((song, index) => (
              <SongCard key={song.id} song={song} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </motion.main>
  );
}
