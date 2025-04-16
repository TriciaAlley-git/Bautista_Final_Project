// AboutMe.js
import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me-section animate-fadeIn">
      <h2>About Me</h2>
      <div className="about-me-content">
        {/* Image Section */}
        <img 
          src="/img.jpeg" 
          alt="Your name or description" 
          className="about-me-image"
        />
        <p>
          Hi, I am <span className="highlighted-name">Tricia Alley Bautista</span>, a 2nd-year Bachelor of Information Technology student learning web application development this semester, creating artistic and interactive websites. This portfolio showcases my growth and creative projects.
        </p>
      </div>

      <style jsx>{`
        .about-me-section {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
          padding-bottom: 2rem; /* Added bottom padding */
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeInUp 1s ease-out forwards;
        }

        .about-me-content {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-me-image {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        h2 {
          font-size: 2.5rem;
          color: #ffffff;
        }

        p {
          color: #cccccc;
          max-width: 1000px;
          font-size: 1.1rem;
        }

        .highlighted-name {
          color: #7b64ff; /* Purple color */
          font-weight: 700; /* Bold to make the name stand out */
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
