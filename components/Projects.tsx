'use client';

import { motion } from 'framer-motion';
import { Github, ChevronDown } from 'lucide-react';
import { PROJECTS } from '@/constants';
import ProjectImage from './ProjectImage';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const moreProjects = PROJECTS.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const renderProjectCard = (project: typeof PROJECTS[0]) => (
    <motion.div
      key={project.id}
      variants={itemVariants}
      className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border border-white/5 hover:border-white/20"
      whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20 overflow-hidden">
        {/* Project Image */}
        <ProjectImage 
          src={project.image}
          alt={project.title}
        />
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Glow Effect on Hover - Disabled on mobile */}
        {!isMobile && (
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
        )}
        
        {/* Work in Progress Badge */}
        {!project.githubUrl && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-500/90 backdrop-blur-md rounded-full border border-orange-400/50 z-10">
            <span className="text-xs font-semibold text-white">Work in Progress</span>
          </div>
        )}
        
        {/* GitHub Link - Only show if URL exists */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-7 relative">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-white/90 group-hover:translate-x-1 transition-all duration-300 bg-gradient-to-r from-white to-white/80 bg-clip-text">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base mb-5 leading-relaxed group-hover:text-white/70 transition-colors">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-3 py-1.5 text-xs bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-purple-500/50 rounded-full text-text-secondary hover:text-white/90 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">Projects</h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12">
            Building intelligent solutions across software and hardware
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredProjects.map(renderProjectCard)}
        </motion.div>

        {/* See More Projects Section */}
        {moreProjects.length > 0 && (
          <div className="mt-12">
            <motion.button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 mx-auto px-5 sm:px-6 py-2.5 sm:py-3 glass-effect rounded-lg hover:bg-white/10 transition-all group touch-manipulation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-base sm:text-lg font-medium">See More Projects</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} 
              />
            </motion.button>

            {showMore && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                {moreProjects.map(renderProjectCard)}
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
