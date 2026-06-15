import { Link } from 'react-router-dom';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'Spotify', href: 'https://open.spotify.com/', icon: 'spotify' },
  { label: 'Apple Music', href: 'https://music.apple.com/', icon: 'appleMusic' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
] as const;

type SocialIconName = (typeof socials)[number]['icon'];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === 'instagram') {
    return (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4.4" />
        <circle cx="12" cy="12" r="3.45" />
        <circle cx="16.9" cy="7.15" r="0.85" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === 'spotify') {
    return (
      <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8.25" />
        <path d="M7.55 9.65c3.2-1.05 7.15-.72 9.52.76" />
        <path d="M8.2 12.1c2.58-.78 5.8-.54 7.83.64" />
        <path d="M8.95 14.45c1.95-.55 4.2-.38 5.76.48" />
      </svg>
    );
  }

  if (name === 'appleMusic') {
    return (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.9 5.25v10.1a2.45 2.45 0 1 1-1.25-2.14V8.05l-6.2 1.14v7.05A2.45 2.45 0 1 1 8.2 14.1V7.3l8.7-1.6Z" />
      </svg>
    );
  }

  if (name === 'youtube') {
    return (
      <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.45" aria-hidden="true">
        <path d="M4.2 8.25c.2-1.16 1.1-2.06 2.26-2.2 1.8-.23 3.67-.3 5.54-.3s3.74.07 5.54.3c1.16.14 2.06 1.04 2.26 2.2.2 1.2.3 2.45.3 3.75s-.1 2.55-.3 3.75c-.2 1.16-1.1 2.06-2.26 2.2-1.8.23-3.67.3-5.54.3s-3.74-.07-5.54-.3c-1.16-.14-2.06-1.04-2.26-2.2A22.6 22.6 0 0 1 3.9 12c0-1.3.1-2.55.3-3.75Z" />
        <path d="m10.45 9 4.55 3-4.55 3Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.2 9.35h3.05v9.45H5.2Zm1.52-4.55a1.74 1.74 0 1 1 0 3.48 1.74 1.74 0 0 1 0-3.48ZM10.1 9.35h2.93v1.28h.04c.41-.76 1.42-1.56 2.92-1.56 3.12 0 3.7 2.05 3.7 4.72v5.01h-3.05v-4.45c0-1.06-.02-2.43-1.48-2.43-1.49 0-1.72 1.16-1.72 2.36v4.52H10.1Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#7df4ff]/25 bg-[#050311] px-4 py-12 text-center">
      <div className="mx-auto grid justify-items-center gap-5">
        <Link to="/watch" className="retro-display-title font-mono text-sm font-bold uppercase tracking-[0.16em] hover:text-white">
          Watch Transmission
        </Link>
        <h3 className="retro-display-title font-display text-5xl uppercase leading-none">NCS Your Algo</h3>
        <Link
          to="/contact"
          className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#ffe87c]/60 px-5 font-mono text-xs font-bold uppercase leading-none tracking-[0.12em] text-[#ffe87c] transition-colors hover:bg-[#ffe87c] hover:text-[#050311]"
        >
          Request Music &rarr;
        </Link>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/home">Home</Link>
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/stats">Stats</Link>
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/privacy">Privacy</Link>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-[#7df4ff]/20 bg-white/[0.03] text-white/50 transition-colors hover:border-[#7df4ff] hover:bg-[#7df4ff]/10 hover:text-[#7df4ff] focus:outline-none focus-visible:border-[#ffe87c] focus-visible:text-[#ffe87c]"
            >
              <SocialIcon name={icon} />
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase text-white/35">
          Inspired by Ausify. NCS links use official creator-safe sources.
        </p>
      </div>
    </footer>
  );
}
