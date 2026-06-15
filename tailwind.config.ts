import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1ed760',
        'signal-red': '#b85850',
        'void-black': '#000000',
        carbon: '#121212',
        graphite: '#1f1f1f',
        smoke: '#292929',
        iron: '#333333',
        steel: '#535353',
        fog: '#73777c',
        mist: '#b3b3b3',
        bone: '#c5c5c5',
        'pure-white': '#ffffff',
        'promo-gradient': '#509bf5',
        'magenta-glow': '#af2896',
        ink: '#000000',
        gold: '#1ed760',
        crimson: '#b85850',
      },
      fontFamily: {
        spotifymixui: ['SpotifyMixUI', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        spotifymixuititle: ['SpotifyMixUITitle', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['SpotifyMixUITitle', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['SpotifyMixUI', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['SpotifyMixUI', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        caption: ['11px', { lineHeight: '1.2' }],
        'body-lg': ['14px', { lineHeight: '1.33' }],
        link: ['16px', { lineHeight: '1.2' }],
        heading: ['24px', { lineHeight: '1.2' }],
      },
      spacing: {
        'spotify-4': '4px',
        'spotify-8': '8px',
        'spotify-12': '12px',
        'spotify-16': '16px',
        'spotify-20': '20px',
        'spotify-24': '24px',
        'spotify-28': '28px',
        'spotify-32': '32px',
        'spotify-36': '36px',
        'spotify-40': '40px',
        'spotify-48': '48px',
        'spotify-172': '172px',
      },
      borderRadius: {
        sm: '2px',
        md: '6px',
        '2xl': '16px',
        full: '500px',
        pill: '9999px',
      },
      boxShadow: {
        lg: 'rgba(0, 0, 0, 0.5) 0px 8px 24px 0px',
        subtle: 'rgb(18, 18, 18) 0px 1px 0px 0px, rgb(124, 124, 124) 0px 0px 0px 1px inset',
        gold: '0 0 44px rgba(30, 215, 96, 0.18)',
        crimson: '0 0 54px rgba(184, 88, 80, 0.2)',
      },
      backgroundImage: {
        'promo-gradient': 'linear-gradient(90deg, rgb(175, 40, 150), rgb(80, 155, 245))',
        'magenta-glow': 'linear-gradient(90deg, rgb(175, 40, 150), rgb(80, 155, 245))',
        'stage-grid':
          'linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.024) 1px, transparent 1px)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
