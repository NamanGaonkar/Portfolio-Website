'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import spideyMask from '../design/spidey.png';

export default function FloatingAstronaut() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintsRef} className="fixed inset-0 z-[60] pointer-events-none">
      <motion.div
        className="absolute right-2 bottom-8 sm:right-4 sm:bottom-20 cursor-grab active:cursor-grabbing select-none pointer-events-auto"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.45}
        dragMomentum
        dragTransition={{
          power: 0.9,
          timeConstant: 220,
          bounceStiffness: 260,
          bounceDamping: 18,
        }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        whileDrag={{ scale: 1.08 }}
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.35 },
          scale: { duration: 0.35 },
          y: { duration: 0.4, ease: 'easeOut' },
        }}
        style={{ touchAction: 'none' }}
      >
        <div className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
          <Image
            src={spideyMask}
            alt="Floating spidey mask"
            sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 80px"
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_24px_rgba(217,255,47,0.2)]"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}
