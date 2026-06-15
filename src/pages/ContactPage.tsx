import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/Button';
import { artist } from '../data/content';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="retro-page min-h-screen text-white"
    >
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 py-14 text-center">
        <p className="eyebrow justify-center">Request Music</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">Send Signal</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          For scoring, playlists, podcast cues, NCS-inspired edits, and creator-safe sound direction.
        </p>
      </section>

      <section className="relative z-10 px-4 pb-24">
        <div className="mb-10 grid gap-5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-white/55">
          <a href={`mailto:${artist.email}`} className="hover:text-[#ffe87c]">
            email: {artist.email}
          </a>
          <a href="tel:+910000000000" className="hover:text-[#ffe87c]">
            phone: {artist.phone}
          </a>
          <div>studio: {artist.studio}</div>
        </div>

        <form
          className="cassette-card grid gap-5 p-4"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {[
            ['Name', 'text'],
            ['Email', 'email'],
          ].map(([label, type]) => (
            <label key={label} className="grid gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">{label}</span>
              <input
                className="border-0 border-b border-[#7df4ff]/25 bg-transparent py-3 font-mono text-sm text-white outline-none focus:border-[#ffe87c]"
                type={type}
                required
              />
            </label>
          ))}
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">Project Type</span>
            <select className="border-0 border-b border-[#7df4ff]/25 bg-black py-3 font-mono text-sm text-white outline-none focus:border-[#ffe87c]">
              <option>NCS Playlist</option>
              <option>Podcast Theme</option>
              <option>Film Score</option>
              <option>Live Direction</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">Message</span>
            <textarea
              className="min-h-32 resize-y border-0 border-b border-[#7df4ff]/25 bg-transparent py-3 font-mono text-sm text-white outline-none focus:border-[#ffe87c]"
              required
            />
          </label>
          <Button className="justify-self-start bg-[#ffe87c] text-[#050311] hover:bg-[#7df4ff]" type="submit">
            Transmit &rarr;
          </Button>
          <div className="min-h-6 font-mono text-[10px] uppercase tracking-[0.14em] text-[#ffe87c]" aria-live="polite">
            {sent ? 'Signal staged. Connect a backend endpoint when ready.' : null}
          </div>
        </form>
      </section>
    </motion.main>
  );
}
