import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    'home',
    'about',
    'education',
    'experience',
    'projects',
    'leadership',
    'skills',
    'hobbies',
    'contact',
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-lg z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left spacer to keep desktop nav centered */}
        <div className="flex-1 md:hidden">
          <div className="text-white font-semibold text-lg">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
          </div>
        </div>

        {/* Desktop nav center */}
        <ul className="hidden md:flex flex-wrap justify-center gap-6 font-medium text-gray-100 text-[1.1rem] flex-1">
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer transition-colors duration-200 ${
                activeSection === section ? 'text-teal-400' : 'hover:text-teal-400'
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded bg-[#0a192f] text-teal-400"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 text-white text-center text-base font-medium bg-gray-800 rounded-lg py-4">
          {sections.map((section) => (
            <li
              key={section}
              className={`cursor-pointer px-4 py-2 ${
                activeSection === section ? 'text-teal-400 font-semibold' : 'hover:text-teal-400'
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
