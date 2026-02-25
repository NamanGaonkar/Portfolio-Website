'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified version for mobile - optimized with CSS transforms
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-black">
        {/* Enhanced gradients for mobile - more visible */}
        <div className="absolute top-0 left-0 w-full h-full will-change-transform">
          <div 
            className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(255, 140, 50, 0.6) 0%, rgba(255, 140, 50, 0.3) 50%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translateZ(0)',
            }}
          />
          <div 
            className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(circle, rgba(255, 100, 30, 0.6) 0%, rgba(255, 100, 30, 0.3) 50%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translateZ(0)',
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background: 'radial-gradient(circle, rgba(255, 165, 0, 0.5) 0%, transparent 70%)',
              filter: 'blur(50px)',
              transform: 'translateZ(0)',
            }}
          />
        </div>
      </div>
    );
  }

  // Full animated version for desktop - optimized
  return (
    <div className="absolute inset-0 overflow-hidden bg-black will-change-transform">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 140, 50, 0.4) 0%, rgba(255, 140, 50, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateZ(0)',
        }}
        animate={{
          x: [0, 300, 100, 0],
          y: [0, 200, 300, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 100, 30, 0.4) 0%, rgba(255, 100, 30, 0.1) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -200, -100, 0],
          y: [0, -300, -150, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, rgba(255, 165, 0, 0.08) 40%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Moving particles */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 120, 40, 0.25) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 200, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
