'use client';

import { motion } from 'framer-motion';

export default function FloatingAstronaut() {
  return (
    <motion.div
      className="fixed right-4 bottom-20 z-[60] cursor-grab active:cursor-grabbing select-none"
      drag
      dragMomentum={false}
      dragElastic={0.12}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{ touchAction: 'none' }}
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
        <img
          src="/astro.gif"
          alt="Floating astronaut"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_24px_rgba(217,255,47,0.2)]"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
