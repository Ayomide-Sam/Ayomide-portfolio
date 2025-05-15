import React from 'react';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Internships from './Components/Internships';
import Projects from './Components/Project';
import LeadershipAndVolunteer from './Components/LeadershipAndVolunteering';
import Skills from './Components/Skills';
import HobbiesAndInterests from './Components/Hobbies';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';

// import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Education />
      <Internships />
      <Projects />
      <LeadershipAndVolunteer />
      <Skills />
      <HobbiesAndInterests />
      <Contact />
    </div>
  );
}

export default App;
