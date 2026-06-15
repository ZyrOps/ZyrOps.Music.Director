import { motion } from 'framer-motion';
import { songs } from '../data/content';

const stats = [
  ['06', 'Featured NCS releases in the launch playlist'],
  ['04', 'Podcast-style creator sessions'],
  ['05', 'Algorithm filters for discovery'],
  ['250M+', 'Videos have used NCS music across creator platforms'],
];

export default function StatsPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen text-white">
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 pb-12 pt-14 text-center">
        <p className="eyebrow justify-center">Stats</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">Signal</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          A quick pulse check on the music, formats, and NCS creator ecosystem powering this build.
        </p>
      </section>

      <section className="relative z-10 grid grid-cols-2 gap-3 px-4 pb-10">
        {stats.map(([value, label]) => (
          <article key={label} className="cassette-card p-4 text-center">
            <div className="retro-display-title font-display text-5xl">{value}</div>
            <p className="mt-3 font-mono text-[10px] uppercase leading-5 text-white/50">{label}</p>
          </article>
        ))}
      </section>

      <section className="relative z-10 px-4 pb-24">
        <div className="cassette-card p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">Current card</p>
          <div className="mt-5 grid gap-3">
            {songs.map((song) => (
              <div key={song.id} className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 font-mono text-xs uppercase">
                <span className="truncate text-white/75">{song.title}</span>
                <span className="shrink-0 text-[#7df4ff]">{song.tone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
