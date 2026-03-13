'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';
import { Code2, Brain, Cpu } from 'lucide-react';

const categoryIcons = {
  'Software': Code2,
  'Intelligence & Logic': Brain,
  'Systems': Cpu,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title mb-3 sm:mb-4">
            Technical Arsenal
          </h2>
          <p className="section-subtitle mb-8 sm:mb-16 max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skillGroup, groupIndex) => {
            const Icon = categoryIcons[skillGroup.category as keyof typeof categoryIcons];
            
            return (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="group relative surface-card rounded-2xl p-8 border border-white/10 hover:border-[#d9ff2f]/40 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px accent-line" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#d9ff2f]/12 border border-[#d9ff2f]/35 mb-5">
                    <Icon className="w-7 h-7 text-[#ecff63] transition-colors duration-500" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="display-font text-3xl mb-6 text-white group-hover:text-[#d9ff2f] transition-colors">
                    {skillGroup.category}
                  </h3>
                  
                  <ul className="space-y-3.5">
                    {skillGroup.items.map((skill, index) => (
                      <motion.li
                        key={skill}
                        className="text-white/62 group-hover:text-white/85 hover:text-white transition-all duration-300 flex items-center gap-3 group/item cursor-default"
                        whileHover={{ x: 8 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d9ff2f]/80 group-hover/item:scale-150 transition-all duration-300" />
                        <span className="group-hover/item:font-medium text-sm sm:text-base">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
