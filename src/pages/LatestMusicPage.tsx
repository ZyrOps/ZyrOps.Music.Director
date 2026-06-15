import { DiscDetailStage } from '../components/DiscDetailStage';
import { songs } from '../data/content';

export default function LatestMusicPage() {
  return <DiscDetailStage mode="music" items={songs} />;
}
