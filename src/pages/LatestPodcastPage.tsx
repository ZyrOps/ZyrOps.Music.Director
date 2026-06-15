import defaultPodcastCd from '../../assets/images/default-podcast-cd.png';
import { DiscDetailStage } from '../components/DiscDetailStage';
import { podcasts } from '../data/content';
import type { Song } from '../types/site';

const podcastDiscs: Song[] = podcasts.map((podcast) => ({
  id: 1000 + podcast.episode,
  title: podcast.title,
  duration: podcast.duration,
  year: podcast.episode,
  category: 'collabs',
  artwork: podcast.artwork,
  tone: podcast.date,
  plays: 'NCS podcast',
}));

export default function LatestPodcastPage() {
  return (
    <DiscDetailStage
      mode="podcast"
      items={podcastDiscs}
      defaultDiscImage={defaultPodcastCd}
    />
  );
}
