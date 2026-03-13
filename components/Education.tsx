'use client';

import { motion } from 'framer-motion';
import { EDUCATION } from '@/constants';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="site-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-3 sm:mb-4">Education</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            Academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          className="relative space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d9ff2f]/50 via-[#d9ff2f]/20 to-transparent hidden md:block" />

          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group relative surface-card rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-[#d9ff2f]/35 transition-all duration-300 md:ml-20 overflow-hidden"
              whileHover={{ x: 8, scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px accent-line" />
              
              <div className="absolute -left-12 top-10 w-8 h-8 rounded-full bg-[#d9ff2f]/12 border-2 border-[#d9ff2f]/55 hidden md:flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                <GraduationCap className="w-4 h-4 text-[#ecff63]" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="display-font text-2xl sm:text-3xl mb-2 group-hover:text-[#d9ff2f] transition-all duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-base sm:text-lg text-white/80 group-hover:text-white mb-1 transition-colors">
                      {edu.degree}
                    </p>
                    {edu.field && (
                      <p className="text-sm sm:text-base text-white/62 group-hover:text-white/75 mb-1 transition-colors">
                        {edu.field}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-xs sm:text-sm text-white/52 mt-2 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#d9ff2f]/65"></span>
                        Grade: {edu.grade}
                      </p>
                    )}
                  </div>
                  <span className="text-white/65 text-xs sm:text-sm md:text-base inline-block px-4 py-2 bg-black/55 rounded-full border border-white/15 group-hover:border-[#d9ff2f]/35 whitespace-nowrap transition-all">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
