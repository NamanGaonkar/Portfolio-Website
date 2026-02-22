'use client';

import { motion } from 'framer-motion';
import { Github, ChevronDown } from 'lucide-react';
import { PROJECTS } from '@/constants';
import ProjectImage from './ProjectImage';
import { useState } from 'react';

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  
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
      className="group glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/5 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        {/* Project Image */}
        <ProjectImage 
          src={project.image}
          alt={project.title}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* GitHub Link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm sm:text-base mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-text-secondary"
            >
              {tech}
            </span>
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
