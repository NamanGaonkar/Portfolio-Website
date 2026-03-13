'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-4 sm:px-6 py-6 sm:py-8 bg-black/60">
      <div className="site-container">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/65 text-xs sm:text-sm">
            © {currentYear} Naman. Crafted with precision and passion.
          </p>
          <p className="text-white/45 text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
