import albumArt from '../../assets/images/album-art.svg';
import artistPortrait from '../../assets/images/artist-portrait.svg';
import musicArt1 from '../../assets/images/sound/music-1.jpg';
import musicArt2 from '../../assets/images/sound/music-2.jpg';
import musicArt3 from '../../assets/images/sound/music-3.jpg';
import musicArt4 from '../../assets/images/sound/music-4.jpg';
import musicArt5 from '../../assets/images/sound/music-5.jpg';
import podcastArt1 from '../../assets/images/sound/podcast-1.jpg';
import podcastArt2 from '../../assets/images/sound/podcast-2.jpg';
import podcastArt3 from '../../assets/images/sound/podcast-3.jpg';
import podcastArt4 from '../../assets/images/sound/podcast-4.jpg';
import reelFilm from '../../assets/images/reel-film.svg';
import reelLive from '../../assets/images/reel-live.svg';
import reelStudio from '../../assets/images/reel-studio.svg';
import reelTour from '../../assets/images/reel-tour.svg';
import type { Podcast, ReelPanel, Song, TimelineItem } from '../types/site';

export const artist = {
  name: 'Arjun Nair',
  role: 'Music Director',
  email: 'studio@arjunnair.example',
  phone: '+91 00000 00000',
  studio: 'Mumbai / Remote Worldwide',
  portrait: artistPortrait,
  albumArt,
};

export const songs: Song[] = [
  {
    id: 1,
    title: 'LOVESICK',
    duration: 'NCS',
    year: 2026,
    category: 'singles',
    artwork: musicArt1,
    tone: 'DJ PUMA',
    plays: 'Recent release',
  },
  {
    id: 2,
    title: 'IN MY HEAD',
    duration: 'Deep House',
    year: 2026,
    category: 'instrumentals',
    artwork: musicArt2,
    tone: 'SFRNG, Aizu, SOVAGI',
    plays: 'Recent release',
  },
  {
    id: 3,
    title: 'BadBoyHeaven',
    duration: 'Anti-Pop',
    year: 2026,
    category: 'collabs',
    artwork: musicArt3,
    tone: "it's different, STAARZ",
    plays: 'Recent release',
  },
  {
    id: 4,
    title: 'EYES ON US',
    duration: 'NCS',
    year: 2026,
    category: 'singles',
    artwork: musicArt4,
    tone: '2frers',
    plays: 'Recent release',
  },
  {
    id: 5,
    title: 'FALLEN ANGEL',
    duration: 'House',
    year: 2026,
    category: 'collabs',
    artwork: musicArt5,
    tone: 'NAVARA',
    plays: 'Recent release',
  },
  {
    id: 6,
    title: 'SET ME FREE',
    duration: 'Drum & Bass',
    year: 2026,
    category: 'film-scores',
    artwork: musicArt1,
    tone: 'Sano',
    plays: 'Recent release',
  },
];

export const podcasts: Podcast[] = [
  {
    episode: 50,
    title: 'NCS Creator Radio: Stream Safe Sounds',
    duration: '42:00',
    date: 'NCS Mix',
    artwork: podcastArt1,
    description:
      'A creator-facing listening session about building edits, streams, reels, and intros around copyright-free electronic tracks.',
  },
  {
    episode: 49,
    title: 'Deep House Dispatch',
    duration: '36:18',
    date: 'NCS Selects',
    artwork: podcastArt2,
    description:
      'A fictional podcast-style episode curated around recent NCS deep house and melodic releases.',
  },
  {
    episode: 48,
    title: 'Bass Room Notes',
    duration: '31:44',
    date: 'NCS Selects',
    artwork: podcastArt3,
    description:
      'A punchy rundown of high-energy NCS tracks for trailers, edits, and gameplay cuts.',
  },
  {
    episode: 47,
    title: 'Algorithm Defiers',
    duration: '45:09',
    date: 'NCS Stories',
    artwork: podcastArt4,
    description:
      'How creators can discover new electronic artists without letting the feed choose every sound.',
  },
];

export const reelPanels: ReelPanel[] = [
  { title: 'Film Scoring', image: reelFilm, kicker: 'Narrative cue craft' },
  { title: 'Live Direction', image: reelLive, kicker: 'Stage and orchestra' },
  { title: 'Studio Sessions', image: reelStudio, kicker: 'Recording room work' },
  { title: 'World Tours', image: reelTour, kicker: 'Performance systems' },
];

export const timeline: TimelineItem[] = [
  {
    year: '1998',
    title: 'First Lesson',
    body: 'The first formal step into rhythm, notation, and performance.',
  },
  {
    year: '2003',
    title: 'First Film',
    body: 'A short score opens the door to cinema and collaborative direction.',
  },
  {
    year: '2008',
    title: 'Award Win',
    body: 'A breakout soundtrack brings national attention.',
  },
  {
    year: '2012',
    title: 'International Tour',
    body: 'Live direction expands across stages, ensembles, and languages.',
  },
  {
    year: '2018',
    title: '50th Episode',
    body: 'The podcast studio becomes a second home for long-form sound.',
  },
  {
    year: '2025',
    title: 'New Era',
    body: 'A slate of films, sessions, and live collaborations moves into release.',
  },
];
