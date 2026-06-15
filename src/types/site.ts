export type SongCategory = 'film-scores' | 'singles' | 'collabs' | 'instrumentals';

export type Song = {
  id: number;
  title: string;
  duration: string;
  year: number;
  category: SongCategory;
  artwork: string;
  tone: string;
  plays: string;
};

export type Podcast = {
  episode: number;
  title: string;
  duration: string;
  date: string;
  artwork: string;
  description: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  body: string;
};

export type ReelPanel = {
  title: string;
  image: string;
  kicker: string;
};
