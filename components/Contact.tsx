'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-purple-600/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Let&apos;s Build Together
          </h2>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating on projects or discussing opportunities? 
            Feel free to reach out through any of these channels.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 glass-effect rounded-xl border border-white/5 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />
              <Github className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-purple-400 transition-all" />
              <span className="relative z-10 font-medium">GitHub</span>
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 glass-effect rounded-xl border border-white/5 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all duration-500" />
              <Linkedin className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-blue-400 transition-all" />
              <span className="relative z-10 font-medium">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group relative flex items-center gap-3 px-8 py-4 glass-effect rounded-xl border border-white/5 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 to-cyan-600/0 group-hover:from-cyan-600/10 group-hover:to-purple-600/10 transition-all duration-500" />
              <Mail className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-cyan-400 transition-all" />
              <span className="relative z-10 font-medium">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
