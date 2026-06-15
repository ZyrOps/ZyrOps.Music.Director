import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export default function IntroPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const ready = progress >= 100;

  useEffect(() => {
    const start = performance.now();
    const duration = 2500;
    let frame = 0;

    const tick = (now: number) => {
      const next = Math.min(100, Math.round(((now - start) / duration) * 100));
      setProgress(next);
      if (next < 100) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.main
      exit={{ opacity: 0, y: -30 }}
      className="vhs-noise retro-page grid min-h-screen place-items-center px-5 text-center text-white"
    >
      <div className="grid w-full max-w-3xl justify-items-center gap-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="retro-display-title font-mono text-sm font-bold uppercase tracking-[0.18em]"
        >
          (( Booting Arjun/FM )) <span className="animate-pulse text-[#ffe87c]">__ __ __</span>
        </motion.div>
        <div className="h-px w-full max-w-md bg-[#7df4ff]/20">
          <motion.div
            className="h-full bg-[#ffe87c] shadow-[0_0_22px_rgba(255,232,124,0.45)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#7df4ff]/65">{progress}%</div>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-mono text-sm font-bold uppercase leading-8 tracking-[0.08em] text-white/72"
        >
          With respect for every stage, studio, street, and story that shaped the sound, this work
          is offered to the listeners who find memory inside rhythm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Button disabled={!ready} onClick={() => navigate('/home')} className="px-10 disabled:opacity-40">
            Proceed
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}
