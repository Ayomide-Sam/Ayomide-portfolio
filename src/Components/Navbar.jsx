import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll smoothly to the section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track scroll position to set active section
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'internship', 'projects', 'leadership', 'skills', 'hobbies', 'contact'];

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
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-lg z-50 px-6 py-5">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-medium text-gray-100 text-lg md:text-[1.1rem]">
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'home' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'about' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'education' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('education')}
        >
          Education
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'internship' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('internship')}
        >
          Internship
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'projects' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'leadership' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('leadership')}
        >
          Leadership
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'skills' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'hobbies' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('hobbies')}
        >
          Hobbies
        </li>
        <li
          className={`cursor-pointer transition-colors duration-200 ${
            activeSection === 'contact' ? 'text-teal-400' : 'hover:text-teal-400'
          }`}
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
