import { AnimatePresence, motion, type PanInfo } from 'framer-motion';
import {
  Disc3,
  Heart,
  ListMusic,
  Music2,
  Pause,
  Play,
  Radio,
  SkipForward,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Song } from '../types/site';
import { getTrackGradientTheme } from '../data/trackThemes';
import { useMusicStore } from '../store/useMusicStore';
import { SongDisc } from './SongDisc';

type DiscDetailStageProps = {
  mode: 'music' | 'podcast';
  items: Song[];
  defaultDiscImage?: string;
};

export function DiscDetailStage({ mode, items, defaultDiscImage }: DiscDetailStageProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [artworkIds, setArtworkIds] = useState<number[]>(() => (items[0] ? [items[0].id] : []));
  const [queueOpen, setQueueOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const currentSong = useMusicStore((state) => state.currentSong);
  const isPlaying = useMusicStore((state) => state.isPlaying);
  const startSong = useMusicStore((state) => state.startSong);
  const togglePlayback = useMusicStore((state) => state.togglePlayback);

  const currentItemIndex = useMemo(() => {
    if (!currentSong) return -1;

    return items.findIndex((item) => item.id === currentSong.id);
  }, [currentSong, items]);
  const activeIndex = isPlaying && currentItemIndex >= 0 ? currentItemIndex : selectedIndex;
  const selected = items[activeIndex] ?? items[0];
  const playingSelected = currentSong?.id === selected.id && isPlaying;
  const selectedLiked = likedIds.includes(selected.id);
  const isPodcast = mode === 'podcast';
  const discStep = isMobileViewport ? 190 : 326;
  const waveBars = useMemo(() => Array.from({ length: 52 }, (_, index) => 16 + ((index * 13) % 46)), []);

  const visibleArtworkIds = useMemo(() => {
    if (!currentSong) return artworkIds;

    return artworkIds.includes(currentSong.id) ? artworkIds : [...artworkIds, currentSong.id];
  }, [artworkIds, currentSong]);

  const carouselItems = useMemo(() => {
    if (!items.length) return [];

    return items.map((item, index) => {
      return { item, index, offset: index - activeIndex };
    });
  }, [activeIndex, items]);

  const markArtworkPlayed = useCallback((id: number) => {
    setArtworkIds((ids) => (ids.includes(id) ? ids : [...ids, id]));
  }, []);

  useEffect(() => {
    const firstItem = items[0];
    if (!firstItem) return;

    startSong(firstItem);
  }, [items, startSong]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);

    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  const playSelected = () => {
    if (currentSong?.id === selected.id) {
      markArtworkPlayed(selected.id);
      togglePlayback();
      return;
    }

    markArtworkPlayed(selected.id);
    startSong(selected);
  };

  const playAt = (index: number) => {
    const item = items[index];
    if (!item) return;
    setSelectedIndex(index);
    markArtworkPlayed(item.id);
    startSong(item);
  };

  const showNext = useCallback((autoplay = false) => {
    if (!items.length) return;
    const baseIndex = isPlaying && currentItemIndex >= 0 ? currentItemIndex : selectedIndex;
    const nextIndex = Math.min(baseIndex + 1, items.length - 1);
    const nextItem = items[nextIndex];
    setSelectedIndex(nextIndex);
    if (autoplay && nextItem) {
      markArtworkPlayed(nextItem.id);
      startSong(nextItem);
    }
  }, [currentItemIndex, isPlaying, items, markArtworkPlayed, selectedIndex, startSong]);

  const showPrevious = useCallback((autoplay = false) => {
    if (!items.length) return;
    const baseIndex = isPlaying && currentItemIndex >= 0 ? currentItemIndex : selectedIndex;
    const previousIndex = Math.max(baseIndex - 1, 0);
    const previousItem = items[previousIndex];
    setSelectedIndex(previousIndex);
    if (autoplay && previousItem) {
      markArtworkPlayed(previousItem.id);
      startSong(previousItem);
    }
  }, [currentItemIndex, isPlaying, items, markArtworkPlayed, selectedIndex, startSong]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (queueOpen) return;

    const swipeDistance = isMobileViewport ? 44 : 90;
    const swipeVelocity = isMobileViewport ? 360 : 520;
    const shouldAutoplaySwipe = isMobileViewport && Boolean(currentSong && isPlaying);

    if (info.offset.x < -swipeDistance || info.velocity.x < -swipeVelocity) {
      showNext(shouldAutoplaySwipe);
      return;
    }

    if (info.offset.x > swipeDistance || info.velocity.x > swipeVelocity) {
      showPrevious(shouldAutoplaySwipe);
    }
  };

  const toggleLike = () => {
    setLikedIds((ids) => (ids.includes(selected.id) ? ids.filter((id) => id !== selected.id) : [...ids, selected.id]));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`neo-detail-stage ${isPodcast ? 'neo-detail-stage-podcast' : 'neo-detail-stage-music'} ${
        queueOpen ? 'is-queue-open' : ''
      } relative h-screen overflow-hidden px-4 pb-24 pt-8 text-[#ff7be2]`}
    >
      <Link to="/home" className="neo-detail-home-logo fixed z-50" aria-label="Go to Arjun Nair home">
        <span>Arjun</span>
        <strong>Nair</strong>
      </Link>

      <div className="neo-detail-library fixed z-50">
        <button
          className={`neo-library-toggle ${queueOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={queueOpen}
          aria-label={queueOpen ? 'Close music queue' : 'Open music queue'}
          onClick={() => setQueueOpen((open) => !open)}
        >
          {queueOpen ? <X size={18} /> : <ListMusic size={18} />}
          <span>{isPodcast ? 'Episodes' : 'Music'}</span>
        </button>
      </div>

      <AnimatePresence>
        {queueOpen ? (
          <motion.div
            className="neo-queue-modal fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setQueueOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 22, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="neo-queue-panel"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="neo-queue-close"
                type="button"
                aria-label="Close music list"
                onClick={() => setQueueOpen(false)}
              >
                <X size={16} />
              </button>
              <div className="neo-queue-feature">
                <button
                  className="neo-queue-play"
                  type="button"
                  aria-label={playingSelected ? 'Pause current track' : `Play ${selected.title}`}
                  onClick={playSelected}
                >
                  {playingSelected ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
                </button>
                <div className="neo-queue-now">
                  <span>{isPodcast ? 'Latest podcast list' : 'Latest music list'}</span>
                  <strong>{selected.title}</strong>
                </div>
                <div className="neo-queue-wave" aria-hidden="true">
                  {waveBars.map((height, index) => (
                    <span key={index} style={{ '--bar-height': `${height}px` } as CSSProperties} />
                  ))}
                </div>
                <span className="neo-queue-duration">{selected.duration}</span>
              </div>

              <div className="neo-queue-list">
                {items.map((item, index) => (
                  <button
                    key={item.id}
                    className={`neo-queue-row ${selected.id === item.id ? 'is-active' : ''}`}
                    type="button"
                    onClick={() => playAt(index)}
                  >
                    <img src={item.artwork} alt="" />
                    <span>{item.title}</span>
                    <small>
                      <Play size={13} fill="currentColor" />
                      {item.plays}
                    </small>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section className="neo-detail-core relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1380px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="neo-detail-heading text-center"
        >
          <div className="neo-latest-header">{isPodcast ? 'Latest Podcast' : 'Latest Music'}</div>
          <p className="font-mono text-[clamp(1.2rem,1.38vw,1.55rem)] font-bold leading-tight">
            {selected.title}
          </p>
          <h1 className="mt-1 font-mono text-[clamp(1.2rem,1.42vw,1.6rem)] font-bold leading-tight">
            {isPodcast ? `EP ${selected.year}` : selected.tone}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-4 text-[#ff7be2]">
            <Music2 size={22} />
            <Disc3 size={20} fill="currentColor" />
            <span className="font-mono text-[10px] font-bold uppercase">qobuz</span>
            <Radio size={19} fill="currentColor" />
            <span className="grid h-5 w-5 place-items-center rotate-45 border-2 border-current">
              <span className="h-1.5 w-1.5 bg-current" />
            </span>
            <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-current text-[9px] font-bold">
              p
            </span>
          </div>
        </motion.div>

        <div className="neo-disc-window mt-10 w-full">
          <motion.div
            className="neo-disc-belt"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.13}
            dragDirectionLock
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            style={{ touchAction: 'pan-y' }}
          >
            {carouselItems.map(({ item, index, offset }) => {
              const selectedSlot = item.id === selected.id;
              const playedSlot = visibleArtworkIds.includes(item.id);
              const currentSlot = currentSong?.id === item.id;
              const itemPlaying = currentSong?.id === item.id && isPlaying;
              const distance = Math.abs(offset);
              const glowTheme = getTrackGradientTheme(index);
              const slotStyle = {
                zIndex: 20 - distance,
                opacity: distance > 3 ? 0 : selectedSlot || playedSlot ? 1 : 0.66,
                transform: `translateX(${offset * discStep}px)`,
                '--disc-glow-a': glowTheme[0],
                '--disc-glow-b': glowTheme[1],
                '--disc-glow-c': glowTheme[2],
              } as CSSProperties;

              return (
                <div className="neo-disc-anchor" key={item.id}>
                  <div
                    className={`neo-disc-slot ${selectedSlot ? 'is-active' : ''} ${playedSlot ? 'is-played' : ''}`}
                    style={slotStyle}
                  >
                    <SongDisc
                      song={item}
                      active={playedSlot}
                      current={currentSlot}
                      defaultDiscImage={defaultDiscImage}
                      playing={itemPlaying}
                      muted={!selectedSlot && !playedSlot}
                      size="hero"
                      onClick={() => playAt(index)}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="neo-player-controls mt-8 flex items-center justify-center gap-3">
          <button
            className={`neo-player-button ${selectedLiked ? 'is-liked' : ''}`}
            type="button"
            aria-label={selectedLiked ? 'Unlike current track' : 'Like current track'}
            onClick={toggleLike}
          >
            <Heart size={29} fill="currentColor" />
          </button>
          <button
            className="neo-player-button"
            type="button"
            aria-label={playingSelected ? 'Pause current track' : 'Play current track'}
            onClick={playSelected}
          >
            {playingSelected ? <Pause size={30} fill="currentColor" /> : <Play size={30} fill="currentColor" />}
          </button>
          <button
            className="neo-player-button"
            type="button"
            aria-label="Show next track"
            onClick={() => showNext(Boolean(currentSong && isPlaying))}
          >
            <SkipForward size={32} fill="currentColor" />
          </button>
        </div>
      </section>

      <div className="neo-detail-bottom pointer-events-none fixed inset-x-4 bottom-3 z-20 grid items-end gap-4 lg:grid-cols-[minmax(180px,0.8fr)_minmax(240px,0.8fr)]">
        <Link
          to="/about"
          className="neo-detail-defy pointer-events-auto hidden items-center gap-3 border border-[#7df4ff] bg-black/80 px-4 font-mono font-bold uppercase text-[#7df4ff] shadow-[5px_5px_0_rgba(255,93,190,0.34)] transition-transform hover:-translate-y-1 lg:inline-flex"
        >
          <ListMusic size={20} />
          How to Defy
        </Link>

        <aside className="neo-likes-card pointer-events-auto hidden justify-self-end rotate-2 border border-[#ff5dbe] bg-black/85 text-center text-white shadow-[7px_7px_0_rgba(125,244,255,0.28)] lg:flex lg:flex-col">
          <div className="grid h-[54px] place-items-center border-b border-[#ff5dbe] bg-[#050311] px-6 font-serif text-[2.1rem] uppercase italic leading-none text-[#ffe87c]">
            My Likes
          </div>
          <div className="grid flex-1 place-items-center px-4 font-mono text-[12px] font-bold uppercase leading-tight text-[#bafcff]">
            {likedIds.length
              ? `${likedIds.length} liked ${likedIds.length === 1 ? 'track' : 'tracks'} saved.`
              : "You haven't liked any tracks yet!"}
          </div>
        </aside>
      </div>
    </motion.main>
  );
}
