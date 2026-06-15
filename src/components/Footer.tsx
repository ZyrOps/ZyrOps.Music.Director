import { Link } from 'react-router-dom';

const socials = [
  ['IG', 'https://www.instagram.com/'],
  ['Spotify', 'https://open.spotify.com/'],
  ['Apple Music', 'https://music.apple.com/'],
  ['YouTube', 'https://www.youtube.com/'],
  ['LinkedIn', 'https://www.linkedin.com/'],
];

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
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/who-made-this">Who made this?</Link>
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/stats">Stats</Link>
          <Link className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45 hover:text-[#ffe87c]" to="/privacy">Privacy</Link>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {socials.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="border border-[#7df4ff]/20 px-2 py-1 font-mono text-[10px] text-white/45 transition-colors hover:border-[#7df4ff] hover:text-[#7df4ff]"
            >
              {label}
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
