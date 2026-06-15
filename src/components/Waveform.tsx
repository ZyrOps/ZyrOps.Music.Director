import { motion } from 'framer-motion';

type WaveformProps = {
  bars?: number;
  active?: boolean;
  compact?: boolean;
};

export function Waveform({ bars = 24, active = false, compact = false }: WaveformProps) {
  return (
    <div className={`flex items-end gap-1 ${compact ? 'h-6' : 'h-10'}`} aria-hidden="true">
      {Array.from({ length: bars }, (_, index) => {
        const height = 22 + ((index * 17) % 48);
        return (
          <motion.span
            key={index}
            className={`w-1 rounded-full ${index % 3 === 0 ? 'bg-gold' : 'bg-white/35'}`}
            style={{ height: `${compact ? Math.max(8, height * 0.36) : height}%` }}
            animate={active ? { scaleY: [0.25, 1, 0.45] } : { scaleY: 1 }}
            transition={{
              duration: 0.35 + (index % 5) * 0.08,
              repeat: active ? Infinity : 0,
              repeatType: 'mirror',
              delay: index * 0.02,
            }}
          />
        );
      })}
    </div>
  );
}
