import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Podcast } from '../types/site';
import { Waveform } from './Waveform';

type PodcastCardProps = {
  podcast: Podcast;
  index?: number;
  landscape?: boolean;
};

export function PodcastCard({ podcast, index = 0, landscape = false }: PodcastCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className={`group overflow-hidden border border-[#7df4ff]/35 bg-black/70 shadow-[8px_8px_0_rgba(255,93,190,0.22)] ${
        landscape ? 'min-w-[330px] md:min-w-[430px]' : ''
      }`}
    >
      <img
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={podcast.artwork}
        alt={`${podcast.title} artwork`}
      />
      <div className="grid gap-3 p-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#7df4ff]/65">
          <span>EP {podcast.episode}</span>
          <span className="text-[#ffe87c]">{podcast.duration}</span>
        </div>
        <h3 className="retro-display-title font-mono text-lg uppercase leading-tight">{podcast.title}</h3>
        <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.06em] text-white/55">{podcast.description}</p>
        <div className="flex flex-wrap gap-2">
          <a
            className="inline-flex items-center gap-2 border border-[#ffe87c]/60 px-3 py-2 font-mono text-[10px] font-bold uppercase text-[#ffe87c] hover:bg-[#ffe87c] hover:text-[#050311]"
            href="https://ncs.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Play size={13} fill="currentColor" /> Listen
          </a>
          <a
            className="border border-[#7df4ff]/45 px-3 py-2 font-mono text-[10px] font-bold uppercase text-[#7df4ff] hover:bg-[#7df4ff] hover:text-[#050311]"
            href="https://www.youtube.com/nocopyrightsounds"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </div>
        <Waveform active={false} />
      </div>
    </motion.article>
  );
}
