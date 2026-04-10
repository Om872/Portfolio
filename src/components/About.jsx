import React from 'react';
import { HiOutlineTerminal } from 'react-icons/hi';
import { BsLightningCharge } from 'react-icons/bs';
import { TbBrain } from 'react-icons/tb';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-rajdhani text-neon-purple text-sm tracking-[0.25em] mb-2">
            // WHO AM I
          </p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-glow-purple">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Terminal Description (Left 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-1 border-t-neon-purple/50 border-t-2 relative"
          >
            <div className="bg-dark-surface/80 rounded-xl p-6 md:p-8 h-full relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-neon-green/80"></div>
                <p className="ml-4 font-rajdhani text-gray-500 text-xs tracking-widest hidden sm:block">
                  bash /home/om/about.sh
                </p>
              </div>

              <div className="font-space text-gray-300 leading-relaxed space-y-4">
                <p>
                  <span className="text-neon-green mr-2">➜ ~</span>
                  Hello. I am <span className="text-white font-bold">Om Namdev</span>, a motivated B.Tech student specializing in <span className="text-white font-bold">Artificial Intelligence and Data Science</span> at AKS University. 
                </p>
                <p>
                  <span className="text-neon-green mr-2">➜ ~</span>
                  I am actively seeking an opportunity to apply my skills in <span className="text-white font-bold">Python, Machine Learning, and Data Analysis</span> to architect and build practical, data-driven solutions.
                </p>
                <p>
                  <span className="text-neon-green mr-2">➜ ~</span>
                  From building NLP-oriented exam generators to IoT smart systems, I am deeply focused on turning theoretical models into impactful real-world applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats/Focus Cards (Right 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6 justify-center"
          >
            
            <div className="glass-card p-6 flex items-start gap-4 hover:border-neon-blue/40 hover:shadow-[0_0_15px_rgba(0,243,255,0.15)]">
              <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                <TbBrain size={24} />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-medium text-white mb-1">Machine Learning</h3>
                <p className="text-sm font-space text-gray-400">Linear/Logistic Regression, Random Forest, Gradient Boosting, ANN/CNN/RNN architectures.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:border-neon-purple/40 hover:shadow-[0_0_15px_rgba(188,19,254,0.15)]">
              <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                <HiOutlineTerminal size={24} />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-medium text-white mb-1">Software Dev</h3>
                <p className="text-sm font-space text-gray-400">Python, C, and SQL. Building backend APIs and deploying smart systems.</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4 hover:border-neon-green/40 hover:shadow-[0_0_15px_rgba(12,245,116,0.15)]">
              <div className="p-3 rounded-lg bg-neon-green/10 text-neon-green border border-neon-green/20">
                <BsLightningCharge size={24} />
              </div>
              <div>
                <h3 className="text-xl font-orbitron font-medium text-white mb-1">Data Analysis</h3>
                <p className="text-sm font-space text-gray-400">Pandas, NumPy, Matplotlib & Seaborn. Visualization through Power BI & Excel.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
