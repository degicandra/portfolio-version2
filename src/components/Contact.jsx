import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs' // Setting KEY ada di file ini

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [modalOpen, setModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
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
        setIsLoading(false)
        setIsSuccess(true)
        setModalOpen(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setModalOpen(false), 4000)
      })
      .catch((error) => {
        console.log('FAILED...', error)
        setIsLoading(false)
        setIsSuccess(false)
        setModalOpen(true)
        setTimeout(() => setModalOpen(false), 4000)
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
            disabled={isLoading}
            style={{
              background: isLoading ? 'rgba(127,0,255,0.5)' : 'linear-gradient(90deg, #7f00ff, #e100ff)',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '10px',
              color: '#000',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              transition: 'all 0.28s',
              boxShadow: '0 4px 12px rgba(127,0,255,0.2)',
              opacity: isLoading ? 0.7 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 20px rgba(127,0,255,0.3)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 4px 12px rgba(127,0,255,0.2)'
              }
            }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Modal Notification */}
      {modalOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease'
        }}>
          {/* Backdrop */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(4px)',
              animation: 'fadeIn 0.3s ease'
            }}
            onClick={() => setModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(15,23,32,0.95), rgba(31,41,55,0.95))',
            border: '1px solid rgba(127,0,255,0.2)',
            borderRadius: '16px',
            padding: '40px 32px',
            maxWidth: '400px',
            width: '90%',
            boxShadow: '0 20px 60px rgba(127,0,255,0.2)',
            animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            textAlign: 'center'
          }}>
            {/* Icon Container */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              {isSuccess ? (
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(34,197,94,0.5)',
                  animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <svg
                    style={{
                      width: '48px',
                      height: '48px',
                      color: '#22c55e',
                      animation: 'checkmark 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'rgba(239,68,68,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(239,68,68,0.5)',
                  animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <svg
                    style={{
                      width: '48px',
                      height: '48px',
                      color: '#ef4444',
                      animation: 'shake 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both'
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
                    <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>

            {/* Title */}
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '22px',
              fontWeight: '700',
              color: isSuccess ? '#22c55e' : '#ef4444'
            }}>
              {isSuccess ? 'Message Sent!' : 'Oops! Failed'}
            </h3>

            {/* Description */}
            <p style={{
              margin: '0 0 24px 0',
              color: '#9aa4b2',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              {isSuccess 
                ? "Thank you for reaching out! I'll get back to you as soon as possible." 
                : 'There was an issue sending your message. Please try again or reach out directly.'}
            </p>

            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              style={{
                background: isSuccess ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
                border: `1px solid ${isSuccess ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'}`,
                color: isSuccess ? '#22c55e' : '#ef4444',
                padding: '10px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = isSuccess ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = isSuccess ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
