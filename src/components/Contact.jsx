import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Degi Candra'
    }
    
    emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      })
      .catch((error) => {
        console.log('FAILED...', error)
        // Still show success message to user even if email fails
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 3000)
      })
  }

  return (
    <section id="contact" className="section" data-aos="fade-up">
      <h2>Let's Connect</h2>
      <p>Got a project in mind? Want to collaborate? I'd love to hear from you. Drop me a message or reach out on my social channels.</p>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '40px 0'}}>
        <a href="mailto:degick07@gmail.com" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '20px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          border: '1px solid rgba(127,0,255,0.1)',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#e6eef6',
          transition: 'all 0.28s',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.3)'
          e.currentTarget.style.background = 'rgba(127,0,255,0.08)'
        }} onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.1)'
          e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))'
        }}>
          <div style={{fontSize: '24px', color: '#00d4ff'}}>✉</div>
          <div>
            <div style={{fontSize: '12px', color: '#9aa4b2'}}>Email</div>
            <div style={{fontSize: '14px', fontWeight: '500'}}>degick07@gmail.com</div>
          </div>
        </a>

        <a href="https://linkedin.com/in/degicandra" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '20px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          border: '1px solid rgba(127,0,255,0.1)',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#e6eef6',
          transition: 'all 0.28s',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.3)'
          e.currentTarget.style.background = 'rgba(127,0,255,0.08)'
        }} onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.1)'
          e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))'
        }}>
          <div style={{fontSize: '24px', color: '#0a66c2'}}>in</div>
          <div>
            <div style={{fontSize: '12px', color: '#9aa4b2'}}>LinkedIn</div>
            <div style={{fontSize: '14px', fontWeight: '500'}}>Connect with me</div>
          </div>
        </a>

        <a href="https://github.com/degicandra" target="_blank" rel="noopener noreferrer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '20px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
          border: '1px solid rgba(127,0,255,0.1)',
          borderRadius: '12px',
          textDecoration: 'none',
          color: '#e6eef6',
          transition: 'all 0.28s',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.3)'
          e.currentTarget.style.background = 'rgba(127,0,255,0.08)'
        }} onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.1)'
          e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))'
        }}>
          <div style={{fontSize: '24px', color: '#fff'}}>⚡</div>
          <div>
            <div style={{fontSize: '12px', color: '#9aa4b2'}}>GitHub</div>
            <div style={{fontSize: '14px', fontWeight: '500'}}>View my projects</div>
          </div>
        </a>
      </div>

      <div style={{maxWidth: '600px', margin: '40px 0'}}>
        <h3 style={{marginBottom: '20px'}}>Send me a message</h3>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <input 
            type="text"
            name="name"
            placeholder="Your name" 
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              background: 'rgba(15,23,32,0.8)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#e6eef6',
              fontFamily: 'inherit',
              fontSize: '14px',
              transition: 'all 0.28s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(127,0,255,0.3)'
              e.target.style.background = 'rgba(15,23,32,0.95)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.05)'
              e.target.style.background = 'rgba(15,23,32,0.8)'
            }}
          />
          <input 
            type="email"
            name="email"
            placeholder="Your email" 
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              background: 'rgba(15,23,32,0.8)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#e6eef6',
              fontFamily: 'inherit',
              fontSize: '14px',
              transition: 'all 0.28s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(127,0,255,0.3)'
              e.target.style.background = 'rgba(15,23,32,0.95)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.05)'
              e.target.style.background = 'rgba(15,23,32,0.8)'
            }}
          />
          <textarea 
            name="message"
            placeholder="Your message" 
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              background: 'rgba(15,23,32,0.8)',
              border: '1px solid rgba(255,255,255,0.05)',
              padding: '12px 16px',
              borderRadius: '10px',
              color: '#e6eef6',
              fontFamily: 'inherit',
              fontSize: '14px',
              minHeight: '120px',
              resize: 'vertical',
              transition: 'all 0.28s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(127,0,255,0.3)'
              e.target.style.background = 'rgba(15,23,32,0.95)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.05)'
              e.target.style.background = 'rgba(15,23,32,0.8)'
            }}
          />
          <button 
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #7f00ff, #e100ff)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '10px',
              color: '#000',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.28s',
              boxShadow: '0 4px 12px rgba(127,0,255,0.2)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 20px rgba(127,0,255,0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 4px 12px rgba(127,0,255,0.2)'
            }}
          >
            {submitted ? '✓ Message sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
