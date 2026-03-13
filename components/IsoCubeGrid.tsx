'use client';
import { useEffect, useRef } from 'react';

const DESKTOP_GRID = 8;
const MOBILE_GRID = 6;

export default function IsoCubeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isInView = true;
    let isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startTime = performance.now();
    let lastDraw = 0;

    function resize() {
      if (!canvas) return;
      isMobile = window.innerWidth < 768;
      const maxDpr = isMobile ? 1.25 : 1.5;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    }

    resize();
    window.addEventListener('resize', resize);

    const observer = new IntersectionObserver(
      (entries) => {
        isInView = Boolean(entries[0]?.isIntersecting);
      },
      { threshold: 0.08 }
    );

    observer.observe(canvas);

    function drawCube(
      sx: number,
      sy: number,
      h: number,
      tw: number,
      th: number,
      alpha: number
    ) {
      if (!ctx) return;

      if (h < 1.5) {
        // Flat wireframe rhombus
        ctx.save();
        ctx.globalAlpha = Math.max(0.1, alpha * 0.45);
        ctx.shadowBlur = 3;
        ctx.shadowColor = '#d9ff2f';
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + tw / 2, sy + th / 2);
        ctx.lineTo(sx, sy + th);
        ctx.lineTo(sx - tw / 2, sy + th / 2);
        ctx.closePath();
        ctx.strokeStyle = '#d9ff2f';
        ctx.lineWidth = 0.7;
        ctx.setLineDash([3, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
        return;
      }

      ctx.save();
      ctx.globalAlpha = alpha;

      // Top face — bright yellow with glow
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(217, 255, 47, 0.7)';
      ctx.beginPath();
      ctx.moveTo(sx, sy - h);
      ctx.lineTo(sx + tw / 2, sy + th / 2 - h);
      ctx.lineTo(sx, sy + th - h);
      ctx.lineTo(sx - tw / 2, sy + th / 2 - h);
      ctx.closePath();
      ctx.fillStyle = '#d9ff2f';
      ctx.fill();

      // Top face edge stroke
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(230, 255, 80, 0.6)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Left face — olive yellow
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(sx - tw / 2, sy + th / 2 - h);
      ctx.lineTo(sx, sy + th - h);
      ctx.lineTo(sx, sy + th);
      ctx.lineTo(sx - tw / 2, sy + th / 2);
      ctx.closePath();
      ctx.fillStyle = 'rgba(160, 198, 18, 1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(100, 140, 5, 0.5)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Right face — dark olive
      ctx.beginPath();
      ctx.moveTo(sx + tw / 2, sy + th / 2 - h);
      ctx.lineTo(sx, sy + th - h);
      ctx.lineTo(sx, sy + th);
      ctx.lineTo(sx + tw / 2, sy + th / 2);
      ctx.closePath();
      ctx.fillStyle = 'rgba(75, 108, 5, 1)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(40, 70, 2, 0.5)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    }

    function draw(t: number) {
      if (!canvas || !ctx) return;
      const targetFps = prefersReducedMotion ? 20 : isMobile ? 30 : 60;
      const minFrame = 1000 / targetFps;

      if (!isInView || t - lastDraw < minFrame) {
        animId = requestAnimationFrame(draw);
        return;
      }
      lastDraw = t;

      const cssW = canvas.offsetWidth;
      const cssH = canvas.offsetHeight;
      const dpr = cssW > 0 ? canvas.width / cssW : 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cssW, cssH);

      const elapsed = (t - startTime) / 1000;
      const grid = isMobile ? MOBILE_GRID : DESKTOP_GRID;

      // Tile size responsive to container
      const TW = Math.min(isMobile ? 46 : 58, (cssW * (isMobile ? 0.9 : 0.82)) / grid);
      const TH = TW / 2;
      const MAX_H = TW * 0.72;

      // Origin: horizontally centered, vertically leaves room for cube height
      const originX = cssW / 2;
      const originY = (cssH / 2) - ((grid - 1) * TH) / 2 + MAX_H * (isMobile ? 0.22 : 0.3);

      // Draw in painter's order: back to front (low sum to high sum)
      for (let sum = 0; sum < grid * 2 - 1; sum++) {
        for (let row = 0; row < grid; row++) {
          const col = sum - row;
          if (col < 0 || col >= grid) continue;

          const sx = originX + (col - row) * (TW / 2);
          const sy = originY + (col + row) * (TH / 2);

          // Distance from grid center
          const dx = col - (grid - 1) / 2;
          const dy = row - (grid - 1) / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Sine ripple wave from center outward
          const wave = elapsed * (prefersReducedMotion ? 0.8 : isMobile ? 1.1 : 1.4) - dist * 0.55;
          const rawH = (Math.sin(wave) + 1) / 2; // 0–1

          // Outer tiles are shorter (falloff from center)
          const falloff = Math.max(0, 1 - dist / (grid * 0.68));
          const h = rawH * falloff * MAX_H;

          const alpha = 0.12 + falloff * 0.88;

          drawCube(sx, sy, h, TW, TH, alpha);
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full max-w-[540px] mx-auto h-[260px] sm:h-[320px] lg:h-[440px] rounded-2xl border border-[#d9ff2f]/20 bg-black/45 overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
