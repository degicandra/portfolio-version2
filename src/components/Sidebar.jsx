import React from 'react'
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from 'react-icons/si'
import logo from '../assets/images/logo.png'

export default function Sidebar({ items = [], active, onNavigate, className = '' }) {
  return (
    <aside className={`sidebar ${className}`}>
      <div className="brand" onClick={() => onNavigate('home')}>
        <div className="brand-container">
          <div className="brand-logo">
            <img src={logo} alt="Logo" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px'}} />
          </div>
          <div className="brand-content">
            <div className="brand-name">Degi Candra</div>
            <div className="brand-title">Frontend Developer | IT Application Staff</div>
          </div>
        </div>
      </div>

      <nav>
        {items.map((it) => (
          <button
            key={it.id}
            className={it.id === active ? 'nav-item active' : 'nav-item'}
            onClick={() => onNavigate(it.id)}
          >
            <span className="dot" />
            {it.title}
          </button>
        ))}
      </nav>

      <div className="social-links">
        <a href="https://github.com/degicandra" target="_blank" rel="noopener noreferrer" className="social-link">
          <SiGithub />
        </a>
        <a href="https://linkedin.com/in/degicandra" target="_blank" rel="noopener noreferrer" className="social-link">
          <SiLinkedin />
        </a>
        <a href="https://instagram.com/dgcndr" target="_blank" rel="noopener noreferrer" className="social-link">
          <SiInstagram />
        </a>
      </div>

      <div className="sidebar-footer">All right reserved • by Degi Candra 2026</div>
    </aside>
  )
}
