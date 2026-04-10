import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-dark-bg min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-rajdhani text-neon-blue text-sm tracking-[0.25em] mb-2 uppercase">
            // Establish Connection
          </p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-glow-blue">
            CONTACT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-orbitron text-white mb-6">Let's build something together</h3>
            <p className="font-space text-gray-400 leading-relaxed mb-10">
              I am actively looking for internship or entry-level opportunities to apply my skills in Python, Machine Learning, and Data Analysis. Feel free to reach out.
            </p>

            <div className="space-y-6">
              <a href="mailto:omnamdev565@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-dark-surface border border-gray-800 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue/10 transition-colors">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="font-rajdhani text-sm text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="font-space text-white group-hover:text-neon-blue transition-colors">omnamdev565@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918720854235" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-dark-surface border border-gray-800 flex items-center justify-center text-neon-green group-hover:bg-neon-green/10 transition-colors">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="font-rajdhani text-sm text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="font-space text-white group-hover:text-neon-green transition-colors">+91 8720854235</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-dark-surface border border-gray-800 flex items-center justify-center text-neon-purple">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="font-rajdhani text-sm text-gray-500 uppercase tracking-wider">Location</p>
                  <p className="font-space text-white">Satna, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-6 border-t border-gray-800">
              <a 
                href="https://github.com/Om872" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-dark-surface border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all group hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <FiGithub size={22} className="group-hover:scale-110 transition-transform" />
                <span className="font-rajdhani uppercase tracking-wider text-sm font-semibold text-gray-300 group-hover:text-white">GitHub Profile</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/omnamdev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full p-4 bg-dark-surface border border-gray-800 rounded-lg text-gray-400 hover:text-neon-blue hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all group hover:shadow-[0_0_15px_rgba(0,243,255,0.15)]"
              >
                <FiLinkedin size={22} className="group-hover:scale-110 transition-transform" />
                <span className="font-rajdhani uppercase tracking-wider text-sm font-semibold text-gray-300 group-hover:text-neon-blue">LinkedIn Network</span>
              </a>
            </div>
          </motion.div>

          {/* Holographic Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 relative"
          >
            <div className="absolute top-0 right-8 w-24 h-[1px] bg-neon-blue/50"></div>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-sm text-gray-400 tracking-wider">Name</label>
                <input 
                  type="text" 
                  className="bg-dark-bg/50 border border-gray-800 rounded-lg p-3 text-white font-space focus:outline-none focus:border-neon-blue/50 transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-sm text-gray-400 tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="bg-dark-bg/50 border border-gray-800 rounded-lg p-3 text-white font-space focus:outline-none focus:border-neon-blue/50 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-rajdhani text-sm text-gray-400 tracking-wider">Message</label>
                <textarea 
                  rows="4"
                  className="bg-dark-bg/50 border border-gray-800 rounded-lg p-3 text-white font-space focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                  placeholder="Initiate transmission..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-neon-blue/10 border border-neon-blue/50 rounded-lg font-rajdhani uppercase tracking-widest text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.15)] hover:shadow-[0_0_25px_rgba(0,243,255,0.4)]"
              >
                <span>Send Message</span>
                <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
