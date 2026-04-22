import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-orbitron font-semibold text-white tracking-widest hover:text-neon-blue transition-colors duration-300 select-none flex items-center"
        >
          Om Namdev
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-rajdhani text-gray-300 hover:text-neon-blue transition-colors duration-300 uppercase tracking-[0.15em] text-sm font-medium"
              >
                // {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-neon-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-dark-bg/95 backdrop-blur-xl border-b border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-72 opacity-100 py-6' : 'max-h-0 opacity-0 py-0 text-transparent'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-rajdhani text-gray-300 hover:text-neon-blue transition-colors duration-300 uppercase tracking-[0.2em] text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
