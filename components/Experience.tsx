'use client';

import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/constants';
import { Briefcase } from 'lucide-react';

export default function Experience() {
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
    <section id="experience" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="site-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-3 sm:mb-4">Experience</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            Professional journey and key roles
          </p>
        </motion.div>

        <motion.div
          className="relative space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d9ff2f]/50 via-[#d9ff2f]/20 to-transparent hidden md:block" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative surface-card rounded-2xl p-5 sm:p-8 border border-white/10 hover:border-[#d9ff2f]/35 transition-all duration-300 md:ml-20 overflow-hidden"
              whileHover={{ x: 8, scale: 1.01 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px accent-line" />
              
              <div className="absolute -left-12 top-10 w-8 h-8 rounded-full bg-[#d9ff2f]/12 border-2 border-[#d9ff2f]/55 hidden md:flex items-center justify-center group-hover:scale-125 transition-all duration-300">
                <Briefcase className="w-4 h-4 text-[#ecff63]" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div>
                    <h3 className="display-font text-2xl sm:text-3xl mb-2 group-hover:text-[#d9ff2f] transition-all duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-base sm:text-lg text-white/80 group-hover:text-white transition-colors">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-xs sm:text-sm text-white/50 mt-1 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#d9ff2f]/60"></span>
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <span className="text-white/65 text-xs sm:text-sm md:text-base inline-block px-4 py-2 bg-black/55 rounded-full border border-white/15 group-hover:border-[#d9ff2f]/35 whitespace-nowrap transition-all">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-white/62 text-sm sm:text-base leading-relaxed group-hover:text-white/78 transition-colors">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
