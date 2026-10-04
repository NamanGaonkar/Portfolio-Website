'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/constants';
import ProjectImage from './ProjectImage';
import { useCallback, useEffect, useRef, useState } from 'react';

/* -------------------------------------------------------------------------- */
/*                                  BADGES                                    */
/* -------------------------------------------------------------------------- */
/* Collapsed from ~90 lines of inline JSX. `label` is the short tile chip,
   `title` keeps the original full wording on hover. */

const S = {
  wip: 'bg-[#f59e0b]/95 border-[#fbbf24]/70 text-black',
  internship: 'bg-[#3b82f6]/95 border-[#60a5fa]/70 text-black',
  beta: 'bg-[#a78bfa]/95 border-[#c4b5fd]/70 text-black',
  betaLive: 'bg-[#e11d48]/95 border-[#fb7185]/70 text-white',
  version: 'bg-[#22c55e]/95 border-[#86efac]/70 text-black',
  legacy: 'bg-[#94a3b8]/95 border-[#cbd5e1]/70 text-black',
  hardware: 'bg-[#3b82f6]/95 border-[#60a5fa]/70 text-black',
  discontinued: 'bg-[#ff6b1a]/95 border-[#ffc247]/70 text-black',
} as const;

interface Badge {
  label: string;
  title: string;
  style: string;
}

const BADGES: Record<string, Badge> = {
  thirdeye: { label: 'In Progress', title: 'Work in Progress', style: S.wip },
  trackify: { label: 'In Progress', title: 'Work in Progress', style: S.wip },
  clipstack: { label: 'In Progress', title: 'Work in Progress', style: S.wip },
  'nrg-industries': { label: 'Internship', title: 'Internship Project', style: S.internship },
  baristahub: { label: 'Internship', title: 'Internship Project', style: S.internship },
  'utsavdesk-ai': { label: 'Internship', title: 'Internship Project', style: S.internship },
  'stratos-f1': { label: 'Beta', title: 'Beta v1.0.0', style: S.betaLive },
  'cypher-wav': { label: 'Beta', title: 'Beta v1.0.0', style: S.beta },
  'vortex-holomap': { label: 'v1.0.0', title: 'Vortex HoloMap v1.0.0', style: S.version },
  'chatbot-jarvis': { label: 'Legacy', title: 'Legacy Build (No Active Updates)', style: S.legacy },
  'expense-tracker': { label: 'Legacy', title: 'Legacy Build (No Active Updates)', style: S.legacy },
  'smoke-detector': { label: 'Hardware', title: 'Hardware Project', style: S.hardware },
  'mindcare-ai': {
    label: 'Discontinued',
    title: 'Discontinued — Source Code Available on GitHub',
    style: S.discontinued,
  },
  vitemate: {
    label: 'Discontinued',
    title: 'Discontinued — Source Code Available on GitHub',
    style: S.discontinued,
  },
};

/* -------------------------------------------------------------------------- */
/*                             MOTION VARIANTS                                */
/* -------------------------------------------------------------------------- */

const railVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

/* -------------------------------------------------------------------------- */
/*                                  TILE                                      */
/* -------------------------------------------------------------------------- */

const TILE_WIDTHS =
  '(max-width: 640px) 170px, (max-width: 1024px) 220px, (max-width: 1280px) 250px, 280px';
const MAX_TECHS = 3;

function ProjectTile({ project }: { project: Project }) {
  const badge = BADGES[project.id];
  const isDownload = project.id === 'cypher-wav';
  const techs = project.technologies.slice(0, MAX_TECHS);
  const overflow = project.technologies.length - techs.length;
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <motion.article
      variants={tileVariants}
      className="group relative w-[170px] shrink-0 snap-start sm:w-[220px] lg:w-[250px] xl:w-[280px]"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
    >
      {/* h-full + flex-col lets the rail's default align-items:stretch equalise
          every tile to the tallest one, so shapes stay uniform regardless of how
          long a title or tech chip happens to be. */}
      <div className="surface-card relative flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 group-hover:border-[#ff6b1a]/50 group-hover:shadow-[0_0_34px_rgba(255,107,26,0.18)]">
        {/* Artwork */}
        <div className="relative aspect-[16/9] shrink-0 overflow-hidden bg-gradient-to-br from-[#140f0a] to-black">
          <ProjectImage src={project.image} alt={project.title} sizes={TILE_WIDTHS} />

          {/* Base gradient — always on so the chip stays readable over any art */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {badge && (
            <span
              title={badge.title}
              className={`absolute left-2 top-2 z-10 max-w-[calc(100%_-_1rem)] truncate rounded-full border px-2 py-0.5 text-[10px] font-semibold leading-tight backdrop-blur-sm ${badge.style}`}
            >
              {badge.label}
            </span>
          )}

          {/* Hover description — pointer-events hidden so the tile stays tappable */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
            <p className="line-clamp-3 bg-gradient-to-t from-black via-black/92 to-transparent p-3 text-[11px] leading-snug text-white/85">
              {project.description}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="relative flex flex-1 flex-col p-3">
          <div className="absolute left-0 right-0 top-0 h-px accent-line opacity-70" />

          {/* Fixed 2-line box: keeps titles from changing tile height */}
          <h3 className="display-font line-clamp-2 h-[2.4em] text-sm leading-tight text-white transition-colors duration-300 group-hover:text-[#ff6b1a]">
            {project.title}
          </h3>

          {/* Single line only — chips are the main cause of ragged heights */}
          <div className="mt-2 flex flex-nowrap gap-1 overflow-hidden">
            {techs.map((tech) => (
              <span
                key={tech}
                className="max-w-[7.5rem] shrink-0 truncate rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white/60 ring-1 ring-inset ring-white/10"
              >
                {tech}
              </span>
            ))}
            {overflow > 0 && (
              <span className="shrink-0 rounded bg-[#ff6b1a]/12 px-1.5 py-0.5 text-[10px] font-semibold text-[#ffc247]">
                +{overflow}
              </span>
            )}
          </div>

          {/* mt-auto pins the link row to the bottom so it aligns across tiles */}
          <div className="mt-auto flex items-center gap-1.5 pt-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="rounded-md border border-white/15 bg-black/60 p-1.5 text-white/75 transition-colors hover:border-[#ff6b1a]/50 hover:text-[#ff6b1a]"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  isDownload
                    ? `Download ${project.title}`
                    : `Open ${project.title} live site`
                }
                className={`flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-[10px] font-bold uppercase tracking-wide transition-colors ${
                  isDownload
                    ? 'border border-[#67e8f9]/80 bg-[#06b6d4]/95 text-black hover:bg-[#22d3ee]'
                    : 'bg-[#ff6b1a] text-black hover:bg-[#ffc247]'
                }`}
              >
                {isDownload ? (
                  <Download className="h-3 w-3" />
                ) : (
                  <ExternalLink className="h-3 w-3" />
                )}
                {isDownload ? 'Get' : 'Live'}
              </a>
            )}

            {!hasLinks && (
              <span className="px-1 text-[10px] text-white/35">No public link</span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  SHELF                                     */
/* -------------------------------------------------------------------------- */

function Shelf({
  label,
  sublabel,
  projects,
}: {
  label: string;
  sublabel: string;
  projects: Project[];
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(max <= 4 || el.scrollLeft >= max - 4);
  }, []);

  useEffect(() => {
    syncEdges();
    const el = railRef.current;
    // Tile widths + artwork loading both change scrollWidth after mount.
    const ro = el && typeof ResizeObserver !== 'undefined' ? new ResizeObserver(syncEdges) : null;
    if (el && ro) ro.observe(el);
    window.addEventListener('resize', syncEdges);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', syncEdges);
    };
  }, [syncEdges]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.75), behavior: 'smooth' });
  };

  if (projects.length === 0) return null;

  const arrowClass =
    'p-2 rounded-lg border border-white/15 bg-black/70 text-white/80 transition-all enabled:hover:border-[#ff6b1a]/50 enabled:hover:text-[#ff6b1a] disabled:opacity-30 disabled:cursor-not-allowed';

  return (
    <div className="mb-11 last:mb-0">
      {/* Shelf header */}
      <div className="mb-4 flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
        <div className="flex min-w-0 items-baseline gap-3">
          <h3 className="display-font text-xl text-white sm:text-2xl">{label}</h3>
          <span className="text-xs tabular-nums text-white/40">{projects.length}</span>
          <span className="hidden truncate text-sm text-white/45 lg:inline">{sublabel}</span>
        </div>

        {/* Arrows are desktop-only; mobile relies on swipe + snap */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label={`Scroll ${label} left`}
            className={arrowClass}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label={`Scroll ${label} right`}
            className={arrowClass}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Rail — bleeds to the viewport edges like a real shelf */}
      <div className="relative -mx-4 sm:-mx-6 md:-mx-8">
        <motion.div
          ref={railRef}
          onScroll={syncEdges}
          tabIndex={0}
          role="group"
          aria-label={`${label} projects`}
          variants={railVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b1a] sm:px-6 md:px-8"
        >
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  PAGE                                      */
/* -------------------------------------------------------------------------- */

const featuredPriority: Record<string, number> = {
  thirdeye: 0,
  whis: 1,
  cerebro: 2,
  'nrg-industries': 3,
  baristahub: 4,
  terrapulse: 5,
  'utsavdesk-ai': 6,
  genosha: 7,
  'civiclens-ai': 8,
  trackify: 9,
  'vortex-holomap': 10,
  clipstack: 11,
  unipass: 12,
  'mindcare-ai': 13,
};

export default function Projects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).sort((a, b) => {
    const aRank = featuredPriority[a.id] ?? 999;
    const bRank = featuredPriority[b.id] ?? 999;
    return aRank - bRank;
  });

  const archiveProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="min-h-screen px-4 py-16 sm:px-6 sm:py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="section-title mb-3 sm:mb-4">Projects</h2>
          <p className="section-subtitle">
            Building intelligent solutions across software and hardware
          </p>
        </motion.div>

        <Shelf
          label="Featured"
          sublabel="Priority builds — swipe or use the arrows"
          projects={featuredProjects}
        />

        <Shelf label="Archive" sublabel="Older builds and side projects" projects={archiveProjects} />
      </div>
    </section>
  );
}