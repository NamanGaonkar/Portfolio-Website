'use client';

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

  return (
    <div className="absolute inset-0 w-screen h-screen overflow-hidden bg-black">
      {/* Video Background - force cover entire viewport, no black bars */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 opacity-90"
        style={{ 
          minWidth: '110%',
          minHeight: '110%',
          width: '110%',
          height: '110%',
          objectFit: 'cover',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(1.1)'
        }}
      >
        <source src="https://videotourl.com/videos/1783588664632-650297a9-9fff-44a3-89f3-764de6839a68.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/65" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'linear-gradient(rgba(217,255,47,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(217,255,47,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
    </div>
  );
}
