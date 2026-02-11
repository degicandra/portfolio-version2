import React from 'react'
import profileImg from '../assets/images/profile2.png'
import downloadCV from '../assets/doc/CV-Degi-Candra-Kamarullah.pdf'

export default function Home({ onSeeProjects }) {
  return (
    <section id="home" className="section landing" data-aos="fade-up">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Degi Candra</h1>
          <p className="subtitle">I am an IT Application Staff and IT Support Specialist with 6 years experience in managing business applications, providing technical support, and ensuring systems run smoothly.</p>
          <div className="cta">
            <button onClick={onSeeProjects}>See projects</button>
            <a
              className="secondary-btn"
              href={downloadCV}
              download="CV-Degi-Candra-Kamarullah.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={profileImg}
            alt="Profile" 
            className="profile-img"
          />
        </div>
      </div>
    </section>
  )
}
