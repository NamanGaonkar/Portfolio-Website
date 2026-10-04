'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '@/constants';

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
      <div className="site-container w-full relative z-10">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-3xl"
        >
          {/* Main heading – Barlow Condensed ExtraBold, all-caps, huge */}
          <h1 className="display-font leading-[0.92] mb-5 sm:mb-7 text-center lg:text-left group">
            <span className="block text-[clamp(3.9rem,14vw,7.5rem)] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#f7f7f0]">
              HELLO,
            </span>
            <span className="block text-[clamp(3.9rem,14vw,7.5rem)] text-[#ff6b1a] transition-all duration-300 group-hover:translate-x-2 group-hover:drop-shadow-[0_0_20px_rgba(255,107,26,0.25)]">
              I&apos;M NAMAN
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-white/70 text-sm sm:text-base max-w-md lg:max-w-lg mx-auto lg:mx-0 text-center lg:text-left leading-relaxed mb-5 sm:mb-7">
            {PERSONAL_INFO.headline}
          </p>

          {/* CTA Buttons – matching reference exactly */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 bg-[#ff6b1a] text-black font-bold text-sm sm:text-base rounded-xl hover:bg-[#ffc247] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 bg-[#161616] text-white font-medium text-sm sm:text-base rounded-xl border border-white/20 hover:border-[#ff6b1a]/45 hover:text-[#ff6b1a] hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.97] transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* SubZero Studio Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-6 sm:mt-8"
          >
            <a
              href="https://sub-zero-studio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] border border-[#ff6b1a]/35 text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded-xl hover:border-[#ff6b1a]/70 hover:bg-gradient-to-r hover:from-[#0f0f0f] hover:to-[#252525] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,107,26,0.22)] active:scale-[0.97] transition-all duration-300"
            >
              <img
                src="/subzero-logo.png"
                alt="SubZero Studio"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <span>Go to SubZero Studio</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="relative z-20 mt-10 w-full max-w-2xl lg:mt-0 lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-[38vw] lg:max-w-[470px]">
          <div className="grid gap-4">
            <div className="surface-card rounded-2xl bg-black/35 backdrop-blur-md border-white/45 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-black/50 hover:border-[#ff6b1a]/70 hover:shadow-[0_0_55px_rgba(255,107,26,0.18)]">
              <p className="text-[#ff6b1a] text-[0.72rem] tracking-[0.32em] uppercase font-semibold mb-3">Great design should feel invisible.</p>
              <p className="text-white/85 text-sm leading-relaxed">I build interfaces that bridge software, hardware, and AI with a clean, cinematic feel.</p>
            </div>

            <div className="surface-card rounded-2xl bg-black/35 backdrop-blur-md border-white/45 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-black/50 hover:border-[#ff6b1a]/70 hover:shadow-[0_0_55px_rgba(255,107,26,0.18)]">
              <p className="text-[#ff6b1a] text-[0.72rem] tracking-[0.32em] uppercase font-semibold mb-3">What I do</p>
              <div className="grid gap-3">
                {PERSONAL_INFO.roles.map((role, index) => (
                  <span
                    key={role}
                    className={`w-full rounded-full border px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:border-[#ff6b1a]/75 hover:bg-[#ff6b1a]/10 hover:text-[#ff6b1a] ${
                      index === currentRoleIndex
                        ? 'bg-[#ff6b1a]/12 border-[#ff6b1a]/80 text-[#ff6b1a]'
                        : 'bg-white/5 border-white/35 text-white/70'
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-2xl bg-black/30 backdrop-blur-md border-white/35 p-5 shadow-[0_0_40px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-black/45 hover:border-[#ff6b1a]/65 hover:shadow-[0_0_55px_rgba(255,107,26,0.16)]">
              <p className="text-[#ff6b1a] text-[0.72rem] tracking-[0.32em] uppercase font-semibold mb-3">Creative direction</p>
              <p className="text-white/85 text-sm leading-relaxed">Building scalable web applications while exploring the depths of Data Structures, Artificial Intelligence, and Embedded Systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
