import { Heart, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Song } from '../types/site';
import { useMusicStore } from '../store/useMusicStore';
import { SongDisc } from './SongDisc';
import { Waveform } from './Waveform';

type SongCardProps = {
  song: Song;
  index?: number;
};

export function SongCard({ song, index = 0 }: SongCardProps) {
  const currentSong = useMusicStore((state) => state.currentSong);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const startSong = useMusicStore((state) => state.startSong);
  const selected = currentSong?.id === song.id;
  const active = selected && isPlaying;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      whileHover={{ y: -10, rotate: -1 }}
      className={`neo-card group relative overflow-hidden ${selected ? 'border-[#ffe87c]' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,232,124,0.22),transparent_48%,rgba(125,244,255,0.2))]" />
      <div className="relative grid gap-5 p-5 md:grid-cols-[170px_minmax(0,1fr)]">
        <div className="grid place-items-center">
          <SongDisc song={song} active={selected} playing={false} onClick={() => startSong(song)} />
        </div>
        <div className="relative grid gap-4">
          <div className="flex items-center justify-between gap-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#7df4ff]/75">
            <span className="truncate">{song.tone}</span>
            <span className="text-[#ffe87c]">{song.duration}</span>
          </div>
          <h3 className="retro-display-title font-display text-5xl uppercase leading-none">{song.title}</h3>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-white/55">{song.plays} / {song.year}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                className="grid h-11 w-11 place-items-center border border-[#ffe87c] bg-[#ffe87c] text-[#050311] shadow-[4px_4px_0_rgba(255,93,190,0.32)] transition-transform hover:-translate-y-1"
                type="button"
                aria-label={`Play ${song.title}`}
                onClick={() => startSong(song)}
              >
                <Play size={16} fill="currentColor" />
              </button>
              <button
                className="grid h-11 w-11 place-items-center border border-[#7df4ff] bg-black/70 text-[#7df4ff] shadow-[4px_4px_0_rgba(255,93,190,0.32)] transition-transform hover:-translate-y-1"
                type="button"
                aria-label={`Save ${song.title}`}
              >
                <Heart size={16} />
              </button>
            </div>
            <Waveform active={active} compact />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
