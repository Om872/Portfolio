import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'AutoExamGen - NLP Generator',
      description: 'Built an NLP-based system to generate exam-oriented questions from raw text. Implemented text preprocessing and keyword extraction to identify concepts, and designed rule-based logic to generate difficulty-controlled questions.',
      techStack: ['Python', 'NLP'],
      status: 'Completed',
      glowColor: 'neon-purple'
    },
    {
      title: 'Skill Test AI Web App',
      description: 'Developed an AI-powered web application for skill-based assessments with dynamic question generation. Implemented timer-based quizzes and real-time score analysis with visual summaries.',
      techStack: ['Python', 'Flask', 'AI', 'React'],
      status: 'Completed',
      glowColor: 'neon-blue'
    },
    {
      title: 'IoT Smart Street Light',
      description: 'Designed an IoT-based smart street lighting system with automatic brightness control. Used sensors and a microcontroller to adjust lighting and improved energy efficiency through real-time monitoring.',
      techStack: ['IoT', 'Sensors', 'Microcontroller'],
      status: 'Completed',
      glowColor: 'neon-green'
    }
  ];

  return (
    <section id="projects" className="relative py-24 min-h-screen bg-dark-bg flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-rajdhani text-neon-blue text-sm tracking-[0.25em] mb-2 uppercase">
            // Architecture Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-glow-blue flex items-center gap-4">
            FEATURED PROJECTS
            <div className="h-[2px] w-32 bg-neon-blue/30 hidden md:block"></div>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
              }}
              className={`glass-card group flex flex-col h-full overflow-hidden border-t-2 border-t-${project.glowColor}/50 relative`}
            >
              {/* Abstract decorative top image placeholder */}
              <div className="h-40 w-full bg-dark-surface/50 border-b border-gray-800 flex items-center justify-center overflow-hidden">
                <div className={`w-full h-full opacity-20 transition-transform duration-700 group-hover:scale-110`}
                     style={{
                       backgroundImage: `radial-gradient(circle at center, var(--color-${project.glowColor}) 0%, transparent 70%)`
                     }}
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                {/* Status Badge */}
                <span className={`inline-block px-3 py-1 text-xs font-rajdhani tracking-widest uppercase mb-4 w-max border rounded-full
                  ${project.status === 'Completed' 
                    ? `text-${project.glowColor} border-${project.glowColor}/40 bg-${project.glowColor}/10` 
                    : 'text-orange-400 border-orange-400/40 bg-orange-400/10'}`}>
                  {project.status}
                </span>

                <h3 className="text-2xl font-orbitron text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="font-space text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-space text-gray-500 bg-gray-900/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <a href="#" className={`text-gray-400 hover:text-${project.glowColor} transition-colors flex items-center gap-2 text-sm font-rajdhani uppercase tracking-wider`}>
                    <FiGithub size={18} /> Code
                  </a>
                  <a href="#" className={`text-gray-400 hover:text-${project.glowColor} transition-colors flex items-center gap-2 text-sm font-rajdhani uppercase tracking-wider`}>
                    <FiExternalLink size={18} /> Live view
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
