import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'
import BackToTop from './BackToTop'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const project = projects.find(p => p.id === id)
  
  // Scroll to projects section when navigating back
  const goToProjects = () => {
    navigate('/')
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const offset = 120
        const top = projectsSection.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
  }
  
  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="not-found">
          <h1>Project Not Found</h1>
          <button onClick={goToProjects} className="back-btn">
            ← Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <button onClick={goToProjects} className="back-button">
        ← Back to Projects
      </button>
      
      <div className="project-detail-content">
        <div className="project-detail-image">
          <img 
            src={project.image} 
            alt={project.title}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.background = `linear-gradient(135deg, ${project.colorA}, ${project.colorB})`
            }}
          />
        </div>
        
        <div className="project-detail-info">
          <h1>{project.title}</h1>
          
          <div className="project-links">
            {project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="detail-btn primary">
                View Live Project →
              </a>
            )}
            {project.repo && project.repo !== '#' && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="detail-btn secondary">
                View Repository →
              </a>
            )}
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-tags">
            <h3>Technologies Used:</h3>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </div>
  )
}
