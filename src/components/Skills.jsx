import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', level: 75 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'Java', level: 65 },
    { name: 'Python', level: 70 }
  ];

  return (
    <section className="skills-section animate-barAnimation">
      {/* Title with adjusted margin-bottom to match Education spacing */}
      <h2>Skills</h2>
      <div className="skills-grid">
        {/* Technical Skills */}
        <div className="skill-category">
          {technicalSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
          padding-bottom: 4rem; /* Added bottom padding */
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-barAnimation {
          animation: fadeInUp 1s ease-out forwards;
        }

        /* Adjusted margin-bottom to 2.5rem to match Education spacing */
        h2 {
          font-size: 2.8rem;
          color: #ffffff;
          margin-bottom: 2.5rem; /* Set margin-bottom to 2.5rem */
          font-weight: 600;
          text-align: left;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: #252525;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .skill-item {
          margin-bottom: 1rem;
        }

        .skill-name {
          color: #7b64ff;
          font-size: 1.2rem;
        }

        .skill-bar {
          height: 8px;
          background: #333333;
          border-radius: 4px;
          margin-top: 0.5rem;
        }

        .skill-level {
          height: 100%;
          background: #7b64ff;
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;
