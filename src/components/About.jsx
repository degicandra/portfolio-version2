import React from 'react'
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
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName]
    return IconComponent ? <IconComponent /> : <span>●</span>
  }

  return (
    <section id="about" className="section" data-aos="fade-right">
      <h2>About</h2>
      <p>
        I'm an IT professional with over 5 years of hands-on experience in business application management, technical support, data analysis, and web development. My career has been driven by a passion for solving complex problems and delivering robust solutions that drive business value.
      </p>
      <p>
        Throughout my career, I've demonstrated strong expertise in troubleshooting critical system issues, managing large-scale system migrations, and collaborating across departments to translate business needs into technical requirements. I have a proven track record of ensuring optimal application performance, data integrity, and compliance with security protocols.
      </p>
      <p>
        My technical skill set spans across multiple domains: from infrastructure management (networking, system administration) and end-user support, to full-stack web development and data analytics. I'm proficient in technologies including JavaScript, React, MySQL, VBA, MikroTik, and various enterprise systems like ERP platforms.
      </p>
      <p>
        Beyond technical expertise, I'm passionate about creating intuitive user experiences and building elegant solutions that solve real problems. Whether designing UI mockups in Figma, developing internal web applications, or managing complex IT infrastructure projects, I consistently focus on quality, user satisfaction, and continuous improvement.
      </p>

      <h3 className="skills-heading">Skills & Expertise</h3>
      <div className="skills-container">
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="skill-group" data-aos="fade-up" data-aos-delay={idx * 100}>
            <h4>{skillGroup.category}</h4>
            <div className="skill-items">
              {skillGroup.items.map((skill, i) => (
                <div className="skill-item" key={i} title={skill.name}>
                  <div className="skill-icon" style={{color: skill.color}}>
                    {getIcon(skill.icon)}
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
