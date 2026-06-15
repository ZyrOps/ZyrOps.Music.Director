import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const credits = [
  ['Design reference', 'Ausify portrait campaign flow, VHS texture, punched-card navigation'],
  ['Build stack', 'Vite, React, TypeScript, Tailwind, Framer Motion, React Three Fiber, Zustand'],
  ['Music source', 'NCS release names and creator-safe music direction'],
  ['Site concept', 'Music director portfolio remixed into a search-listen-defy microsite'],
];

export default function CreditsPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen text-white">
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 pb-12 pt-14 text-center">
        <p className="eyebrow justify-center">Who made this?</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">Credits</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          An original implementation inspired by Ausify, rebuilt for an NCS-forward music director site.
        </p>
      </section>

      <section className="relative z-10 grid gap-4 px-4 pb-24 md:grid-cols-2">
        {credits.map(([label, body]) => (
          <article key={label} className="cassette-card p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">{label}</p>
            <h2 className="mt-3 font-mono text-lg font-bold uppercase leading-7 tracking-[0.08em]">{body}</h2>
          </article>
        ))}
        <Link
          to="/about"
          className="mx-auto mt-4 border border-[#7df4ff]/45 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#7df4ff] hover:bg-[#7df4ff] hover:text-[#050311] md:col-span-2"
        >
          Read the manifesto
        </Link>
      </section>
    </motion.main>
  );
}
