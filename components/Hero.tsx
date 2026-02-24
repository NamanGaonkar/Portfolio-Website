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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hey Its Me , Naman :)
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6 sm:mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {PERSONAL_INFO.headline}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {PERSONAL_INFO.roles.map((role, index) => (
              <motion.span
                key={role}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm border transition-all duration-500 ${
                  index === currentRoleIndex
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-white/5 border-white/10 text-text-secondary'
                }`}
                animate={{
                  scale: index === currentRoleIndex ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {PERSONAL_INFO.bio}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors text-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
