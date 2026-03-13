'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] px-4 sm:px-6 py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 255, 47, 0.16) 0%, transparent 70%)', filter: 'blur(55px)' }} />
      </div>
      
      <div className="site-container max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-4 sm:mb-6">
            Let&apos;s Build Together
          </h2>
          <p className="section-subtitle text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
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
              className="group relative flex items-center gap-3 px-8 py-4 surface-card rounded-xl border border-white/10 hover:border-[#d9ff2f]/40 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-[#d9ff2f]/0 group-hover:bg-[#d9ff2f]/10 transition-all duration-500" />
              <Github className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-[#ecff63] transition-all" />
              <span className="relative z-10 font-medium">GitHub</span>
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 surface-card rounded-xl border border-white/10 hover:border-[#d9ff2f]/40 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-[#d9ff2f]/0 group-hover:bg-[#d9ff2f]/10 transition-all duration-500" />
              <Linkedin className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-[#ecff63] transition-all" />
              <span className="relative z-10 font-medium">LinkedIn</span>
            </motion.a>
            
            <motion.a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="group relative flex items-center gap-3 px-8 py-4 surface-card rounded-xl border border-white/10 hover:border-[#d9ff2f]/40 transition-all overflow-hidden"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-[#d9ff2f]/0 group-hover:bg-[#d9ff2f]/10 transition-all duration-500" />
              <Mail className="w-5 h-5 relative z-10 group-hover:scale-110 group-hover:text-[#ecff63] transition-all" />
              <span className="relative z-10 font-medium">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
