import React, { useState, useEffect } from 'react'
import { 
  SiReact, SiJavascript, SiVuedotjs, SiTypescript,
  SiMysql, SiSupabase, SiPostgresql, SiLaravel,
  SiMikrotik, SiLinux, SiWindows, SiGit, 
  SiAdobephotoshop, SiObsstudio, SiFigma, SiAdobepremierepro
} from 'react-icons/si'
import { skills } from '../data/skills'

const iconMap = {
  SiReact, SiJavascript, SiVuedotjs, SiTypescript,
  SiMysql, SiSupabase, SiPostgresql, SiLaravel,
  SiMikrotik, SiLinux, SiWindows, SiGit,
  SiAdobephotoshop, SiObsstudio, SiFigma, SiAdobepremierepro
}

export default function About() {
  const [parallaxOffsets, setParallaxOffsets] = useState([0, 0, 0, 0])

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

  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent /> : <span>●</span>
  }

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about')
      if (!aboutSection) return

      const sectionTop = aboutSection.getBoundingClientRect().top
      const sectionBottom = aboutSection.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight

      // Calculate parallax only when section is visible
      if (sectionTop < windowHeight && sectionBottom > 0) {
        const paragraphs = aboutSection.querySelectorAll('p')
        const newOffsets = Array.from(paragraphs).map((p, i) => {
          const elementTop = p.getBoundingClientRect().top
          const progress = (windowHeight - elementTop) / (windowHeight + p.offsetHeight)
          return (progress * 20 - 10) // -10px to 10px parallax
        })
        setParallaxOffsets(newOffsets)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollContainerStyle = {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    marginTop: '40px'
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
    padding: '16px 24px',
    border: '1px solid rgba(59, 130, 246, 0.1)',
    borderRadius: '6px',
    background: 'rgba(26, 32, 44, 0.5)',
    minWidth: '120px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  return (
    <section id="about" className="section" data-aos="fade-right">
      <style>{`
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 24px));
          }
        }
      `}</style>
      <h2>About</h2>
      <p style={{ 
        transform: `translateX(${parallaxOffsets[0]}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        I'm an IT professional with over 6 years of hands-on experience in business application management, technical support, data analysis, and web development. My career has been driven by a passion for solving complex problems and delivering robust solutions that drive business value.
      </p>
      <p style={{ 
        transform: `translateX(${-parallaxOffsets[1]}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        Throughout my career, I've demonstrated strong expertise in troubleshooting critical system issues, managing large-scale system migrations, and collaborating across departments to translate business needs into technical requirements. I have a proven track record of ensuring optimal application performance, data integrity, and compliance with security protocols.
      </p>
      <p style={{ 
        transform: `translateX(${parallaxOffsets[2]}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        My technical skill set spans across multiple domains: from infrastructure management (networking, system administration) and end-user support, to full-stack web development and data analytics. I'm proficient in technologies including JavaScript, React, MySQL, VBA, MikroTik, and various enterprise systems like ERP platforms.
      </p>
      <p style={{ 
        transform: `translateX(${-parallaxOffsets[3]}px)`,
        transition: 'transform 0.1s ease-out'
      }}>
        Beyond technical expertise, I'm passionate about creating intuitive user experiences and building elegant solutions that solve real problems. Whether designing UI mockups in Figma, developing internal web applications, or managing complex IT infrastructure projects, I consistently focus on quality, user satisfaction, and continuous improvement.
      </p>

      {/* Technical Skills Section */}
      <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', fontFamily: "'Syne', sans-serif" }}>
          Technical Skills & Expertise
        </h3>
        
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
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)'
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
                    size={28} 
                    style={{ 
                      color: '#3b82f6',
                      marginBottom: '8px',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                  <span style={{ 
                    fontSize: '12px', 
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
