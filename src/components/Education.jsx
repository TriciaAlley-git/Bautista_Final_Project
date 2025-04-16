import React from 'react';

const Education = () => {
  return (
    <section className="education-section animate-fadeIn">
      {/* Title placed outside the box */}
      <h2 className="section-title">Education</h2>

      <div className="luxury-card">
        <div className="timeline">
          {/* Timeline Item 1 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="institution">Irisan National High School</h3>
              <p className="degree">High School</p>
              <p className="duration">2015 – 2019</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="institution">University of the Cordilleras</h3>
              <p className="degree">Senior High - STEM</p>
              <p className="duration">2019 – 2021</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="institution">University of Baguio</h3>
              <p className="degree">College - Bachelor of Science in Computer Science</p>
              <p className="duration">2022 – 2023</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="institution">University of the Cordilleras</h3>
              <p className="degree">College - Bachelor of Science in Information Technology</p>
              <p className="duration">2023 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
