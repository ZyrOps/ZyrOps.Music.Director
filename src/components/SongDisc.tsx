import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import defaultCd from '../../assets/images/default-cd.png';
import type { Song } from '../types/site';

type SongDiscProps = {
  song: Song;
  active?: boolean;
  current?: boolean;
  defaultDiscImage?: string;
  playing?: boolean;
  muted?: boolean;
  size?: 'hero' | 'card' | 'mini';
  onClick?: () => void;
};

export function SongDisc({
  song,
  active = false,
  current = active,
  defaultDiscImage,
  playing = false,
  muted = false,
  size = 'card',
  onClick,
}: SongDiscProps) {
  const discImage = active ? song.artwork : (defaultDiscImage ?? defaultCd);
  const style = { '--disc-image': `url(${discImage})` } as CSSProperties;

  return (
    <button
      type="button"
      aria-label={`${current ? 'Current song' : active ? 'Played song' : 'Select'} ${song.title}`}
      onClick={onClick}
      className={`song-disc-button ${size === 'hero' ? 'song-disc-button-hero' : ''} ${muted ? 'opacity-45' : ''}`}
    >
      <motion.span
        className={`song-disc ${active ? 'song-disc-active' : 'song-disc-metal'} ${
          size === 'hero' ? 'song-disc-hero' : size === 'mini' ? 'song-disc-mini' : 'song-disc-card'
        } ${active && playing ? 'song-disc-spinning' : ''}`}
        style={style}
      >
        <span className="song-disc-art" />
        <span className="song-disc-shine" />
        <span className="song-disc-ring" />
        <span className="song-disc-hole" />
        <span className="song-disc-label">{song.title}</span>
      </motion.span>
    </button>
  );
}
