import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Grid Effect ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,243,255,0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg" />
      </div>

      {/* ── Left side vertical text ── */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-10">
        <p
          className="hacker-text text-xs text-gray-600 tracking-[0.3em]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          PORTFOLIO // 2025
        </p>
      </div>

      {/* ── Right side social icons ── */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
        <a
          href="https://github.com/Om872"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-125"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/omnamdev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-neon-blue transition-all duration-300 hover:scale-125"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal badge */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-rajdhani text-neon-blue text-sm tracking-[0.25em] mb-6"
        >
          {'// WELCOME TO MY WORLD'}
        </motion.p>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-bold text-white text-glow-blue mb-4 leading-tight"
        >
          OM NAMDEV
        </motion.h1>

        {/* Role subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-space text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
        >
          AI &amp; Data Science Student
        </motion.p>

        {/* Tech tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {['Python', 'Machine Learning', 'React'].map((tag) => (
            <span
              key={tag}
              className="glass-card px-4 py-1.5 text-xs font-rajdhani tracking-widest uppercase text-neon-blue border-neon-blue/30"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="/Resume_Om_Namdev.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 font-rajdhani font-bold tracking-widest uppercase text-sm
                       bg-neon-blue/20 border border-neon-blue text-neon-blue rounded-lg
                       shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:bg-neon-blue hover:text-dark-bg 
                       hover:shadow-[0_0_25px_rgba(0,243,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>View Resume</span>
          </a>
          <a
            href="#projects"
            className="inline-block px-8 py-3 font-rajdhani font-semibold tracking-widest uppercase text-sm
                       border border-gray-600 text-gray-300 rounded-lg
                       hover:border-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/5 
                       transition-all duration-300 flex items-center justify-center"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll down">
          <HiChevronDoubleDown
            size={24}
            className="text-gray-500 animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
