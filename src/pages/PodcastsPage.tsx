import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { PodcastCard } from '../components/PodcastCard';
import { Waveform } from '../components/Waveform';
import { podcasts } from '../data/content';

export default function PodcastsPage() {
  const [featured, ...episodes] = podcasts;

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen text-white">
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 py-14 text-center">
        <p className="eyebrow justify-center">Choose A Signal</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">NCS Radio</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          Podcast-style listening sessions built from NCS creator-safe music themes.
        </p>
      </section>

      <section className="relative z-10 px-4 py-8">
        <article className="cassette-card cassette-card-pink mx-auto grid max-w-[980px] gap-4 p-4">
          <img className="aspect-video w-full rounded-sm object-cover" src={featured.artwork} alt={`${featured.title} artwork`} />
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">
            EP {featured.episode} / {featured.duration}
          </div>
          <h2 className="retro-display-title font-display text-5xl uppercase leading-none">{featured.title}</h2>
          <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.08em] text-white/65">
            {featured.description}
          </p>
          <a
            className="inline-flex w-max items-center gap-2 border border-[#ffe87c] bg-[#ffe87c] px-4 py-2 font-mono text-xs font-bold uppercase text-[#050311]"
            href="https://ncs.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Play size={13} fill="currentColor" /> Listen at NCS
          </a>
          <Waveform active />
        </article>
      </section>

      <section className="relative z-10 grid gap-4 px-4 pb-24 pt-8 md:grid-cols-2 xl:grid-cols-3">
        {episodes.map((podcast, index) => (
          <PodcastCard key={podcast.episode} podcast={podcast} index={index} />
        ))}
      </section>
    </motion.main>
  );
}
