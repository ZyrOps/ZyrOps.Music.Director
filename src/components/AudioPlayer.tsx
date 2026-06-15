import { Pause, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { songs } from '../data/content';
import { useMusicStore } from '../store/useMusicStore';
import { SongDisc } from './SongDisc';

export function AudioPlayer() {
  const currentSong = useMusicStore((state) => state.currentSong);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const progress = useMusicStore((state) => state.progress);
  const volume = useMusicStore((state) => state.volume);
  const startSong = useMusicStore((state) => state.startSong);
  const togglePlayback = useMusicStore((state) => state.togglePlayback);
  const setProgress = useMusicStore((state) => state.setProgress);
  const setVolume = useMusicStore((state) => state.setVolume);

  const song = currentSong ?? songs[0];

  return (
    <motion.aside
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: currentSong ? 0 : 120, opacity: currentSong ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed bottom-5 left-1/2 z-50 grid w-[calc(100%-40px)] max-w-[920px] -translate-x-1/2 gap-4 border border-[#7df4ff]/60 bg-[#050311]/90 p-4 text-white shadow-[10px_10px_0_rgba(255,93,190,0.24)] backdrop-blur-xl lg:grid-cols-[minmax(0,1fr)_auto_minmax(220px,0.5fr)] lg:items-center"
      aria-label="Global audio player"
    >
      <div className="grid min-w-0 grid-cols-[70px_minmax(0,1fr)] items-center gap-4">
        <SongDisc song={song} active playing={isPlaying} size="mini" />
        <div className="min-w-0">
          <div className="retro-display-title truncate font-display text-4xl uppercase leading-none">{song.title}</div>
          <div className="truncate font-mono text-xs font-bold uppercase tracking-[0.1em] text-[#7df4ff]/70">
            {song.tone} / {song.year}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button className="grid h-11 w-11 place-items-center border border-[#7df4ff]/55 bg-black/65 text-[#7df4ff] shadow-[4px_4px_0_rgba(255,93,190,0.26)]" type="button" aria-label="Previous">
          <SkipBack size={16} />
        </button>
        <button
          className="grid h-12 w-12 place-items-center border border-[#ffe87c] bg-[#ffe87c] text-[#050311] shadow-[4px_4px_0_rgba(255,93,190,0.32)]"
          type="button"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          onClick={() => {
            if (!currentSong) startSong(songs[0]);
            else togglePlayback();
          }}
        >
          {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
        </button>
        <button className="grid h-11 w-11 place-items-center border border-[#7df4ff]/55 bg-black/65 text-[#7df4ff] shadow-[4px_4px_0_rgba(255,93,190,0.26)]" type="button" aria-label="Next">
          <SkipForward size={16} />
        </button>
      </div>

      <label className="grid gap-1">
        <span className="sr-only">Progress</span>
        <input
          className="audio-range w-full"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={progress}
          onChange={(event) => setProgress(Number(event.currentTarget.value))}
        />
      </label>

      <label className="flex items-center justify-center gap-2 lg:col-start-3">
        <Volume2 size={16} className="text-[#7df4ff]/70" />
        <span className="sr-only">Volume</span>
        <input
          className="audio-range w-24"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => setVolume(Number(event.currentTarget.value))}
        />
      </label>
    </motion.aside>
  );
}
