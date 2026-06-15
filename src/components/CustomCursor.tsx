import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hovering, setHovering] = useState(false);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setHasPointer(true);
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const onOver = (event: Event) => {
      if ((event.target as HTMLElement).closest('a, button, input, textarea, select')) {
        setHovering(true);
      }
    };
    const onOut = () => setHovering(false);

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerover', onOver);
    document.addEventListener('pointerout', onOut);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
    };
  }, [x, y]);

  if (!hasPointer) return null;

  return (
    <>
      <motion.div
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[110] h-3 w-3 rounded-full bg-gold mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovering ? 0 : 1 }}
      />
      <motion.div
        className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[109] h-10 w-10 rounded-full border border-gold mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovering ? 2.5 : 1 }}
      />
    </>
  );
}
