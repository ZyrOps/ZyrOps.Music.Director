export type TrackGradientTheme = readonly [string, string, string];

export const trackGradientThemes = [
  ['rgba(255, 142, 67, 0.66)', 'rgba(255, 65, 120, 0.42)', 'rgba(255, 216, 137, 0.34)'],
  ['rgba(78, 204, 255, 0.54)', 'rgba(255, 190, 94, 0.36)', 'rgba(154, 98, 255, 0.32)'],
  ['rgba(255, 90, 198, 0.52)', 'rgba(99, 113, 255, 0.34)', 'rgba(255, 226, 160, 0.28)'],
  ['rgba(255, 209, 102, 0.56)', 'rgba(255, 113, 67, 0.36)', 'rgba(103, 232, 249, 0.25)'],
  ['rgba(188, 117, 255, 0.52)', 'rgba(255, 155, 92, 0.34)', 'rgba(255, 234, 190, 0.28)'],
  ['rgba(255, 122, 89, 0.56)', 'rgba(245, 196, 102, 0.34)', 'rgba(94, 184, 255, 0.24)'],
] as const satisfies readonly TrackGradientTheme[];

export function getTrackGradientTheme(index: number): TrackGradientTheme {
  const safeIndex = ((index % trackGradientThemes.length) + trackGradientThemes.length) % trackGradientThemes.length;

  return trackGradientThemes[safeIndex];
}
