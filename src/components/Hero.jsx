import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

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
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:pt-16">
        
        {/* ── LEFT SIDE: Text & System Animation ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
          
          {/* Animated Machine / Core System */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-28 h-28 mb-8 pointer-events-none flex items-center justify-center self-center lg:self-start ml-0 lg:-ml-4"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute w-28 h-28 border-[1px] border-neon-blue/40 rounded-full border-t-neon-blue" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute w-20 h-20 border-[1px] border-purple-500/40 rounded-full border-b-purple-500" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-12 h-12 border-[1px] border-cyan-400/40 rounded-full border-r-cyan-400" />
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute w-3 h-3 bg-neon-blue rounded-full blur-[8px]" />
            <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_15px_#00F3FF]" />
          </motion.div>

          {/* Terminal badge */}
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-rajdhani text-neon-blue text-sm tracking-[0.25em] mb-4"
          >
            {'// WELCOME TO MY WORLD'}
          </motion.p>

          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-white tracking-wide mb-3"
          >
            Om Namdev
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
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
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
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6"
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

        {/* ── RIGHT SIDE: Profile Image ── */}
        <div className="flex-1 flex justify-center lg:justify-end lg:pr-8 w-full max-w-md lg:max-w-none mx-auto mb-10 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group mt-10 lg:mt-0"
          >
            {/* Decorative Glowing Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-purple-500 to-cyan-400 rounded-3xl blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Image Container with White Background */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-[22rem] lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden border-2 border-neon-blue/50 bg-white shadow-[0_0_30px_rgba(0,243,255,0.3)]">
              {/* Overlay styling for extra premium feel (optional, keeps image clear) */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-bg/80 to-transparent z-10 pointer-events-none"></div>
              
              <img 
                src={heroImage} 
                alt="Om Namdev" 
                className="w-full h-full object-cover object-top relative z-0 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating tech nodes */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -top-6 -right-6 w-16 h-16 bg-dark-bg/80 border border-neon-blue/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,243,255,0.2)] backdrop-blur-md z-20"
            >
              <span className="text-neon-blue font-orbitron font-bold text-sm tracking-wider">AI</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-dark-bg/80 border border-purple-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)] backdrop-blur-md z-20"
            >
              <span className="text-purple-400 font-orbitron font-bold text-xs tracking-widest">DATA</span>
            </motion.div>
          </motion.div>
        </div>
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
