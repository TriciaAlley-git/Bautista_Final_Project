import './App.css';
import React from "react";

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Content */}
      <main className="luxury-portfolio">
        {/* Header with animated entrance */}
        <header className="portfolio-header animate-slideDown">
          <h1 className="gradient-text">My Portfolio</h1>
        </header>

        {/* About Me Section with transition */}
        <section className="about-me-section animate-fadeIn">
          <AboutMe />
        </section>

        {/* Education Section with transition */}
        <section className="education-section animate-fadeIn">
          <Education />
        </section>

        {/* Experience Section with transition */}
        <section className="experience-section animate-fadeIn">
          <Experience />
        </section>

        {/* Skills Section with transition */}
        <section className="skills-section animate-fadeIn">
          <Skills />
        </section>

        {/* Contact Section with transition */}
        <section className="contact-section animate-fadeIn">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
