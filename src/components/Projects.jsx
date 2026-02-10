import React, { useState } from 'react'
import projects from '../data/projects'

function ImageWithFallback({ src, fallbackColorA, fallbackColorB, style }) {
  const [imageError, setImageError] = useState(false)
  
  const handleError = () => {
    setImageError(true)
  }
  
  if (imageError || !src) {
    return (
      <div 
        className="card-media"
        style={{
          ...style,
          backgroundImage: `linear-gradient(135deg, ${fallbackColorA}, ${fallbackColorB})`
        }}
      />
    )
  }
  
  return (
    <div
      className="card-media"
      style={style}
    >
      <img 
        src={src} 
        alt="" 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
        onError={handleError}
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects" data-aos="zoom-in-up">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <h2 style={{margin: 0}}>Selected Projects</h2>
        <a href="https://github.com/degicandra" target="_blank" style={{color: 'var(--accent)', textDecoration: 'none', fontSize: '14px', fontWeight: '600'}}>More Projects →</a>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="card" key={p.id} data-aos="flip-left" data-aos-delay={i * 80}>
            <div className="card-media-wrapper">
              <ImageWithFallback 
                src={p.image}
                fallbackColorA={p.colorA}
                fallbackColorB={p.colorB}
                style={{
                  height: '180px',
                  width: '100%'
                }}
              />
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                View Project
              </a>
            </div>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
