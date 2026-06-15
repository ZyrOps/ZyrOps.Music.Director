import { motion } from 'framer-motion';

const notes = [
  ['No accounts', 'This demo does not create user accounts or ask for passwords.'],
  ['No payment data', 'The contact form is staged locally and does not transmit payment details.'],
  ['External links', 'Music, social, and NCS links may open third-party platforms with their own policies.'],
  ['Future backend', 'Connect a real endpoint before collecting production contact messages.'],
];

export default function PrivacyPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="retro-page min-h-screen text-white">
      <div className="vhs-border pt-24" />
      <section className="relative z-10 px-4 pb-12 pt-14 text-center">
        <p className="eyebrow justify-center">Privacy</p>
        <h1 className="retro-display-title mt-6 font-display text-7xl uppercase leading-none">Policy</h1>
        <p className="mx-auto mt-5 max-w-[430px] font-mono text-xs font-bold uppercase leading-6 tracking-[0.1em] text-[#bafcff]/65">
          A clear placeholder privacy page for the cloned site structure.
        </p>
      </section>

      <section className="relative z-10 grid gap-4 px-4 pb-24 md:grid-cols-2">
        {notes.map(([label, body]) => (
          <article key={label} className="cassette-card p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffe87c]">{label}</p>
            <p className="mt-3 font-mono text-xs font-bold uppercase leading-6 tracking-[0.06em] text-white/58">{body}</p>
          </article>
        ))}
      </section>
    </motion.main>
  );
}
