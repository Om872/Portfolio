import React from 'react';
import { FaPython, FaReact, FaRobot, FaDatabase, FaChartBar } from 'react-icons/fa';
import { SiScikitlearn, SiFlask, SiTensorflow, SiPandas, SiMysql, SiPostgresql, SiJupyter } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Python & C', icon: <FaPython />, color: 'group-hover:text-yellow-400 group-hover:border-yellow-400/50' },
    { name: 'Machine Learning', icon: <SiScikitlearn />, color: 'group-hover:text-neon-blue group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]' },
    { name: 'Deep Learning', icon: <FaRobot />, color: 'group-hover:text-neon-purple group-hover:border-neon-purple/50 group-hover:shadow-[0_0_15px_rgba(188,19,254,0.2)]' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: 'group-hover:text-orange-500 group-hover:border-orange-500/50' },
    { name: 'Pandas & NumPy', icon: <SiPandas />, color: 'group-hover:text-indigo-400 group-hover:border-indigo-400/50' },
    { name: 'Power BI & Excel', icon: <FaChartBar />, color: 'group-hover:text-yellow-500 group-hover:border-yellow-500/50' },
    { name: 'PostgreSQL & MySQL', icon: <SiPostgresql />, color: 'group-hover:text-cyan-400 group-hover:border-cyan-400/50' },
    { name: 'Jupyter & VS Code', icon: <SiJupyter />, color: 'group-hover:text-orange-400 group-hover:border-orange-400/50' },
  ];

  return (
    <section id="skills" className="relative py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-rajdhani text-neon-green text-sm tracking-[0.25em] mb-2 uppercase">
            // Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white text-glow-green">
            SKILLS &amp; TECHNOLOGIES
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
              }}
              className={`group flex flex-col items-center justify-center gap-4 p-8 glass-card border-gray-800 transition-all duration-300 cursor-default ${skill.color}`}
            >
              <div className="text-4xl text-gray-500 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="font-rajdhani font-semibold tracking-wider text-gray-300 transition-colors duration-300 text-center uppercase">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
