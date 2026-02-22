'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/constants';

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
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Technical Arsenal</h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="glass-effect rounded-2xl p-8 hover:bg-white/5 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.li
                    key={skill}
                    className="text-text-secondary hover:text-white transition-colors flex items-center gap-3 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white transition-colors" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
