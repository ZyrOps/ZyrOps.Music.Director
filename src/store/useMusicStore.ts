import { create } from 'zustand';
import { songs } from '../data/content';
import type { Song } from '../types/site';

type MusicState = {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
  menuOpen: boolean;
  startSong: (song: Song) => void;
  togglePlayback: () => void;
  setProgress: (progress: number) => void;
  setVolume: (volume: number) => void;
  setMenuOpen: (open: boolean) => void;
};

export const useMusicStore = create<MusicState>((set) => ({
  currentSong: null,
  isPlaying: false,
  progress: 0.28,
  volume: 0.72,
  menuOpen: false,
  startSong: (song) => set({ currentSong: song, isPlaying: true, progress: 0.08 }),
  togglePlayback: () =>
    set((state) => {
      if (!state.currentSong) {
        return { currentSong: songs[0], isPlaying: true };
      }

      return { isPlaying: !state.isPlaying };
    }),
  setProgress: (progress) => set({ progress: Math.max(0, Math.min(1, progress)) }),
  setVolume: (volume) => set({ volume: Math.max(0, Math.min(1, volume)) }),
  setMenuOpen: (open) => set({ menuOpen: open }),
}));
