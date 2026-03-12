import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'
import BackToTop from './BackToTop'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const project = projects.find(p => p.id === id)
  const relatedProjects = projects
    .filter(p => p.id !== id && p.tags.some(tag => project?.tags.includes(tag)))
    .slice(0, 3)
  
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
  
  const handleImageLoad = () => setImageLoaded(true)
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.parentElement.style.background = `linear-gradient(135deg, ${project.colorA}, ${project.colorB})`
    setImageLoaded(true)
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
      <div className="project-detail-wrapper">
        {/* Header with back button */}
        <header className="project-detail-header">
          <button onClick={goToProjects} className="back-button" aria-label="Back to Projects">
            ← Back to Projects
          </button>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span>Portfolio</span>
            <span className="separator">/</span>
            <span>{project.title}</span>
          </nav>
        </header>
        
        {/* Main content */}
        <main className="project-detail-main">
          <div className="project-detail-content">
            {/* Left side - Image */}
            <div className="project-detail-left">
              <div className="project-detail-image" style={{
                background: !imageLoaded ? `linear-gradient(135deg, ${project.colorA}, ${project.colorB})` : 'transparent'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Right side - Info */}
            <div className="project-detail-right">
              <div className="project-detail-info">
                <h1 className="project-title">{project.title}</h1>
                
                {/* Quick Links */}
                <div className="project-links" role="group" aria-label="Project Links">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="detail-btn primary">
                      <span>🚀</span> View Live Project
                    </a>
                  )}
                  {project.repo && project.repo !== '#' && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="detail-btn secondary">
                      <span>💻</span> View Repository
                    </a>
                  )}
                </div>
                
                {/* Description */}
                <p className="project-description">{project.description}</p>
                
                {/* Technologies */}
                <div className="project-tags">
                  <h3>🛠 Technologies Used</h3>
                  <div className="tags" role="list">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag" role="listitem">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Projects Section */}
          {relatedProjects.length > 0 && (
            <section className="related-projects">
              <h2>Similar Projects</h2>
              <div className="related-projects-grid">
                {relatedProjects.map((relProject) => (
                  <div
                    key={relProject.id}
                    className="related-project-card"
                    onClick={() => {
                      window.scrollTo(0, 0)
                      navigate(`/project/${relProject.id}`)
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        window.scrollTo(0, 0)
                        navigate(`/project/${relProject.id}`)
                      }
                    }}
                  >
                    <div className="related-project-image" style={{
                      background: `linear-gradient(135deg, ${relProject.colorA}, ${relProject.colorB})`
                    }}>
                      <img src={relProject.image} alt={relProject.title} loading="lazy" />
                    </div>
                    <h3>{relProject.title}</h3>
                    <p>{relProject.description.substring(0, 60)}...</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
      
      <BackToTop />
    </div>
  )
}
