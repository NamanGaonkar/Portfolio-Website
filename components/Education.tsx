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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Education</h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12">
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
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-purple-500/20 to-transparent hidden md:block" />

          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group relative glass-effect rounded-2xl p-5 sm:p-8 hover:bg-white/5 border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 md:ml-20 overflow-hidden"
              whileHover={{ x: 8, scale: 1.01 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 via-purple-600/0 to-blue-600/0 group-hover:from-cyan-600/5 group-hover:via-purple-600/5 group-hover:to-blue-600/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Enhanced Timeline Dot */}
              <div className="absolute -left-12 top-10 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/50 hidden md:flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white/90 group-hover:translate-x-1 transition-all duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-base sm:text-lg text-white/80 group-hover:text-white/90 mb-1 transition-colors">
                      {edu.degree}
                    </p>
                    {edu.field && (
                      <p className="text-sm sm:text-base text-text-secondary group-hover:text-white/70 mb-1 transition-colors">
                        {edu.field}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-xs sm:text-sm text-text-tertiary mt-2 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/50"></span>
                        Grade: {edu.grade}
                      </p>
                    )}
                  </div>
                  <span className="text-text-secondary text-xs sm:text-sm md:text-base inline-block px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/10 group-hover:border-cyan-400/50 whitespace-nowrap group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
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
