import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section animate-fadeIn">
      <h2 className="section-title">Contact Information</h2>

      <div className="contact-card">
        <div className="contact-item">
          <div className="icon purple">📧</div>
          <div className="contact-details">
            <h3>Email</h3>
            <p>triciaalleybautista@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon purple">📞</div>
          <div className="contact-details">
            <h3>Phone</h3>
            <p>+63 9070 804 988</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon purple">📍</div>
          <div className="contact-details">
            <h3>Location</h3>
            <p>La Chesa 1 Subdivision, Irisan, Baguio City, Benguet, 2600</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          color: #fff;
          margin-bottom: 2rem;
          font-weight: 600;
          text-align: left;
        }

        .contact-card {
          background-color: #252525;
          padding: 4rem;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          margin-bottom: 1.8rem;
        }

        .icon.purple {
          font-size: 2rem;
          color: #a974ff; /* Purple */
          min-width: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-details h3 {
          margin: 0;
          color: #fff;
          font-size: 1.2rem;
        }

        .contact-details p {
          margin: 0.2rem 0 0;
          color: #ccc;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
