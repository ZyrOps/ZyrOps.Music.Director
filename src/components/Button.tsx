import { motion } from 'framer-motion';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { clsx } from 'clsx';

type ButtonProps = ComponentPropsWithoutRef<typeof motion.button> & {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
};

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ x: 2, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-5 font-display text-sm font-bold leading-none transition-colors',
        variant === 'primary' && 'border border-white bg-white text-[#121212] hover:bg-[#f2f2f2]',
        variant === 'outline' && 'border border-[#333333] text-[#f0a64f] hover:border-white hover:bg-white hover:text-[#000000]',
        variant === 'ghost' && 'text-[#999999] hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
