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
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-white/50 text-base sm:text-lg mb-8 sm:mb-16 max-w-2xl mx-auto">
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
                className="group relative glass-effect rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10, scale: 1.03 }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Top gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 group-hover:from-purple-500/30 group-hover:via-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 mb-5">
                    <Icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-500" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500">
                    {skillGroup.category}
                  </h3>
                  
                  <ul className="space-y-3.5">
                    {skillGroup.items.map((skill, index) => (
                      <motion.li
                        key={skill}
                        className="text-white/60 group-hover:text-white/90 hover:text-white transition-all duration-300 flex items-center gap-3 group/item cursor-default"
                        whileHover={{ x: 8 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 bg-gradient-to-r group-hover/item:from-purple-400 group-hover/item:to-blue-400 group-hover/item:scale-150 group-hover/item:shadow-lg transition-all duration-300" />
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
