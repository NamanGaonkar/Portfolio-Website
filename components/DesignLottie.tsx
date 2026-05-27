'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function DesignLottie() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const data = (await import('../design/f14ef05c-1d3d-11ee-919c-c76a6174511f.json')).default;
        if (!mounted || !containerRef.current) return;
        animRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
          },
        });
      } catch (err) {
        // fail silently — render nothing if Lottie fails
        // console.error('Lottie load error', err);
      }
    };

    load();

    return () => {
      mounted = false;
      if (animRef.current) {
        try { animRef.current.destroy(); } catch (e) {}
        animRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[540px] mx-auto h-[260px] sm:h-[320px] lg:h-[440px] rounded-2xl border border-[#d9ff2f]/20 bg-black/45 overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
