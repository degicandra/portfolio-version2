import React from 'react'
import experience from '../data/experience'
import education from '../data/education'

function getStartYear(period) {
  const m = String(period).match(/(\d{4})/)
  return m ? parseInt(m[0], 10) : 0
}

export default function Experience() {
  // Merge experience and education into a single timeline list
  const combined = [
    ...experience.map((it) => ({ ...it, kind: 'work', sort: getStartYear(it.period) })),
    ...education.map((it) => ({ ...it, kind: 'education', sort: getStartYear(it.period) }))
  ]

  // sort descending (most recent first)
  combined.sort((a, b) => b.sort - a.sort)

  return (
    <section id="experience" className="section" data-aos="fade-left">
      <h2>Experience & Education</h2>
      <div className="timeline timeline-vertical">
        {combined.map((it, i) => (
          <div className="item" key={it.id} data-aos="fade-up" data-aos-delay={i * 60}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h3>
                {it.kind === 'work' ? `${it.title} — ${it.company}` : `${it.degree} — ${it.institution}`}
              </h3>
              <div className={`type-badge ${it.kind}`}>{it.kind === 'work' ? 'Work' : 'Education'}</div>
            </div>

            <p className="muted">
              {it.period} {it.location ? `· ${it.location}` : ''} {it.employmentType ? `· ${it.employmentType}` : ''}
            </p>

            <ul>
              {(it.bullets || []).map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
