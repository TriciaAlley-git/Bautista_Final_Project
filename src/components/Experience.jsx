import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section animate-fadeIn">
      <h2 className="section-title">Experience</h2>

      <div className="experience-grid">
        {/* Timeline Item 1 */}
        <div className="experience-item">
          <div className="timeline-icon">
            <span className="icon">🍰</span>
          </div>
          <div className="timeline-content">
            <h3 className="role">Self Employed (Pastry Business Owner)</h3>
            <p className="company">Sweet Angel</p>
            <p className="duration">2019 – 2022</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="experience-item">
          <div className="timeline-icon">
            <span className="icon">📚</span>
          </div>
          <div className="timeline-content">
            <h3 className="role">ESL Teacher</h3>
            <p className="company">Mint Center for Language Acquisition, Inc.</p>
            <p className="duration">2024</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease-out forwards;
          padding: 4rem 0; /* Added top and bottom padding */
        }

        .section-title {
          font-size: 2.8rem;
          color: #ffffff;
          margin-bottom: 2rem;
          font-weight: 600;
          text-align: left;
        }

        .experience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .experience-item {
          background-color: #252525;
          padding: .5rem;
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .timeline-icon {
          background-color: #ffb400;
          border-radius: 50%;
          padding: 1rem;
          color: #fff;
          font-size: 2rem;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-content {
          color: #ccc;
        }

        .role {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .company {
          font-size: 1.2rem;
          color: #aaa;
        }

        .duration {
          font-size: 1.1rem;
          color: #aaa;
        }

        @media (max-width: 768px) {
          .experience-section {
            padding: 2rem 1rem; /* Adjusted for mobile */
          }

          .experience-item {
            flex-direction: column;
            align-items: flex-start;
            padding: 1.5rem;
          }

          .timeline-icon {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;