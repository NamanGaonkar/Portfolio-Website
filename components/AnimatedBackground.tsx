'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Site-wide ambient background video.
 *
 * Mounted by `app/page.tsx` inside a `fixed inset-0 -z-10` slot, so this is the
 * single background layer for the whole page. The asset is served locally from
 * `public/` rather than a third-party host.
 *
 * Overlay order matters: video first, then the readability gradients, then the
 * ember grid. The gradients are deliberately light — stacking heavy scrims over
 * the video renders it effectively invisible.
 */
export default function AnimatedBackground() {
  const [reduced, setReduced] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Reduced motion pauses on the first frame rather than unmounting, so the
  // background is still present (just static).
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (reduced) {
      el.pause();
      return;
    }
    const attempt = el.play();
    if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
  }, [reduced]);

  return (
    <div className="absolute inset-0 h-screen w-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/untitled-design.mp4"
        autoPlay={!reduced}
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        className="absolute top-1/2 left-1/2 h-[110%] w-[110%] min-h-[110%] min-w-[110%] -translate-x-1/2 -translate-y-1/2 scale-110 object-cover opacity-60 brightness-[1.15]"
      />

      {/* Readability gradients.
          Opacity modifiers MUST be multiples of 5 (Tailwind's scale) — values
          like /32 or /18 emit no CSS at all and silently do nothing.
          The source clip is dark (mean luminance ~21/255) and only reaches 255
          in sparse highlights, so these scrims dim it without crushing it back
          to black. Measured result: mean ~4.8, highlights ~42. */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

      {/* Ember grid overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,107,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,26,0.04) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}