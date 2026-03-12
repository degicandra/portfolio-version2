import React from 'react'
import { 
  SiReact, SiJavascript, SiVuedotjs, SiTypescript,
  SiMysql, SiSupabase, SiPostgresql, SiLaravel,
  SiMikrotik, SiLinux, SiWindows, SiGit, 
  SiAdobephotoshop, SiObsstudio, SiFigma, SiAdobepremierepro
} from 'react-icons/si'

export default function SkillsShowcase() {
  const allSkills = [
    { name: 'React', icon: SiReact, category: 'Frontend' },
    { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'Frontend' },
    { name: 'Laravel', icon: SiLaravel, category: 'Backend' },
    { name: 'Supabase', icon: SiSupabase, category: 'Backend' },
    { name: 'MySQL', icon: SiMysql, category: 'Backend' },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Backend' },
    { name: 'Git', icon: SiGit, category: 'Tools' },
    { name: 'Linux', icon: SiLinux, category: 'Tools' },
    { name: 'Windows', icon: SiWindows, category: 'Tools' },
    { name: 'MikroTik', icon: SiMikrotik, category: 'Tools' },
    { name: 'Figma', icon: SiFigma, category: 'Design' },
    { name: 'Photoshop', icon: SiAdobephotoshop, category: 'Design' },
    { name: 'Premiere', icon: SiAdobepremierepro, category: 'Design' },
    { name: 'OBS Studio', icon: SiObsstudio, category: 'Design' }
  ]

  const scrollContainerStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    marginTop: '48px'
  }

  const scrollTrackStyle = {
    display: 'flex',
    gap: '24px',
    animation: 'scrollMarquee 40s linear infinite',
    width: 'fit-content'
  }

  const skillItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px 32px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    borderRadius: '8px',
    background: 'rgba(26, 32, 44, 0.5)',
    minWidth: '140px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  return (
    <section id="skills" style={{ padding: '80px 20px', background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.02) 100%)' }}>
      <style>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }
        
        @media (max-width: 768px) {
          @keyframes scrollMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% - 24px));
            }
          }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '32px', textAlign: 'center', width: '100%', overflowX: 'hidden' }}>
          <span style={{ color: '#3b82f6', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'JetBrains Mono', monospace" }}>
            Core Competencies
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 8vw, 48px)', fontWeight: '800', marginTop: '12px', marginBottom: '24px', marginLeft: 0, marginRight: 0, fontFamily: "'Syne', sans-serif", letterSpacing: '-0.01em', wordBreak: 'break-word', lineHeight: 1.1 }}>
            Technical Skills & Expertise
          </h2>
          <p style={{ color: '#a0aec0', maxWidth: '600px', margin: '0 auto', fontFamily: "'Urbanist', sans-serif", fontSize: 'clamp(14px, 4vw, 16px)', padding: '0 8px' }}>
            A comprehensive toolkit spanning frontend, backend, tools, and design technologies.
          </p>
        </div>

        {/* Marquee scroll container */}
        <div style={scrollContainerStyle}>
          <div style={scrollTrackStyle}>
            {/* Display skills twice for seamless loop */}
            {[...allSkills, ...allSkills].map((skill, idx) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={`${skill.name}-${idx}`}
                  style={skillItemStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.08)'
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.25)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.background = 'rgba(26, 32, 44, 0.5)'
                    e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.1)'
                  }}
                >
                  <IconComponent 
                    size={32} 
                    style={{ 
                      color: '#3b82f6',
                      marginBottom: '12px',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                  <span style={{ 
                    fontSize: '13px', 
                    fontWeight: '600', 
                    color: '#e0e5ec', 
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: 'center'
                  }}>
                    {skill.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
