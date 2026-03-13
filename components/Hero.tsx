'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/constants';

const IsoCubeGrid = dynamic(() => import('./IsoCubeGrid'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-[540px] mx-auto h-[260px] sm:h-[320px] lg:h-[440px] rounded-2xl border border-[#d9ff2f]/20 bg-black/45" />
  ),
});

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="site-container w-full relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-14 items-center">

        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {/* Main heading – Barlow Condensed ExtraBold, all-caps, huge */}
          <h1 className="display-font leading-[0.92] mb-5 sm:mb-7 text-center lg:text-left">
            <span className="block text-[clamp(3.2rem,8.5vw,7.5rem)] text-white">
              HELLO,
            </span>
            <span className="block text-[clamp(3.2rem,8.5vw,7.5rem)] text-[#d9ff2f]">
              I&apos;M NAMAN
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-sm sm:text-base max-w-lg leading-relaxed mb-5 sm:mb-7">
            {PERSONAL_INFO.headline}
          </p>

          {/* Role chips */}
          <div className="flex flex-wrap gap-2 mb-7 sm:mb-9">
            {PERSONAL_INFO.roles.map((role, index) => (
              <span
                key={role}
                className={`px-3 py-1 text-xs border transition-all duration-500 ${
                  index === currentRoleIndex
                    ? 'bg-[#d9ff2f]/15 border-[#d9ff2f]/55 text-[#d9ff2f]'
                    : 'bg-transparent border-white/15 text-white/50'
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-white/55 text-sm leading-relaxed max-w-lg mb-9 sm:mb-11">
            {PERSONAL_INFO.bio}
          </p>

          {/* CTA Buttons – matching reference exactly */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#d9ff2f] text-black font-bold text-sm sm:text-base rounded-xl hover:bg-[#ecff63] active:scale-[0.97] transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-[#161616] text-white font-medium text-sm sm:text-base rounded-xl border border-white/20 hover:border-[#d9ff2f]/45 hover:text-[#d9ff2f] active:scale-[0.97] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Isometric Cube Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="w-full mt-3 sm:mt-4 lg:mt-0"
        >
          <IsoCubeGrid />
        </motion.div>

      </div>
    </section>
  );
}
