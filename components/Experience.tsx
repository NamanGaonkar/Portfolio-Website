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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Experience</h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12">
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
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden md:block" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative glass-effect rounded-2xl p-5 sm:p-8 hover:bg-white/5 transition-all duration-300 md:ml-20"
              whileHover={{ x: 5 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-10 w-6 h-6 rounded-full bg-white/10 border-2 border-white/30 hidden md:flex items-center justify-center">
                <Briefcase className="w-3 h-3" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-base sm:text-lg text-white/80">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs sm:text-sm text-text-tertiary mt-1">{exp.location}</p>
                  )}
                </div>
                <span className="text-text-secondary text-xs sm:text-sm md:text-base mt-2 md:mt-0 inline-block px-3 py-1 bg-white/5 rounded-full border border-white/10 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
