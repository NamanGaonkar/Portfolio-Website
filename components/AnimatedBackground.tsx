'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Static background on mobile for better performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#060606]">
        <div className="absolute inset-0 opacity-65" style={{ backgroundImage: 'linear-gradient(rgba(217,255,47,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,47,0.06) 1px, transparent 1px)', backgroundSize: '78px 78px' }} />
        <div className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 255, 47, 0.26) 0%, rgba(217, 255, 47, 0.08) 44%, transparent 72%)', filter: 'blur(62px)' }} />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 255, 47, 0.22) 0%, rgba(217, 255, 47, 0.06) 42%, transparent 70%)', filter: 'blur(62px)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#060606]">
      <div className="absolute inset-0 opacity-70" style={{ backgroundImage: 'linear-gradient(rgba(217,255,47,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,47,0.055) 1px, transparent 1px)', backgroundSize: '92px 92px' }} />

      <motion.div
        className="absolute -top-28 -left-24 w-[680px] h-[680px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217, 255, 47, 0.2) 0%, rgba(217, 255, 47, 0.08) 42%, transparent 72%)',
          filter: 'blur(78px)',
        }}
        animate={{ x: [0, 70, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -bottom-28 -right-24 w-[620px] h-[620px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(217, 255, 47, 0.18) 0%, rgba(217, 255, 47, 0.06) 40%, transparent 70%)',
          filter: 'blur(74px)',
        }}
        animate={{ x: [0, -90, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-0 top-[36%] mx-auto w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 255, 47, 0.14) 0%, transparent 72%)', filter: 'blur(70px)' }} />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
    </div>
  );
}
