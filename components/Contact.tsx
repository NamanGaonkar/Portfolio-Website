'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '@/constants';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">Let's Build Together</h2>
          <p className="text-text-secondary text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Interested in collaborating on projects or discussing opportunities? 
            Feel free to reach out through any of these channels.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-3 px-6 py-3 glass-effect rounded-lg hover:bg-white/10 transition-all group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
