import React from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-teal-500 to-teal-1000 text-white min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
        Ayomide Samuel Ojo
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl mt-4 font-semibold italic">
        Product Manager in Progress <span className="text-navy px-2">|</span> Growth-Focused <span className="text-navy px-2">|</span> Built to Serve
      </h2>

      <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed">
        I’m learning, building, and leading with intention. 
        I believe great products start with people, and I’m committed to solving real problems with empathy, structure, and a strong team mindset.
      </p>

      <a
        href="/Ayomide_Samuel_Ojo_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0a192f] hover:bg-[#0a192f]/90 text-teal-400 hover:text-white font-medium rounded-full shadow-md transition duration-300"
      >
        Download Resume
        <Download className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </section>
  );
};

export default Hero;
