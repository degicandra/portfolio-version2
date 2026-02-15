import React, { useState } from 'react'
import { IoCloseOutline, IoArrowBack } from 'react-icons/io5' //icon tombol back dan close
import galleryPageImages from '../data/galleryPageImages' // Gallery images data - imported from ../data/galleryPageImages.js

// Add mobile responsive styles
const mobileStyles = `
  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr !important;
      auto-rows: 250px !important;
    }
    .gallery-card-large,
    .gallery-card-wide,
    .gallery-card-tall {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
    }
  }
`

// Color constants
const COLORS = {
  bg: '#0b0f14',
  panel: '#1a1f28',
  muted: '#9aa4b2',
  accent: '#7F00FF',
  text: '#e6eef6',
  gray: '#d1d5db'
}

// Image component with error fallback
function ImageWithFallback({ src, alt, style }) {
  const [error, setError] = useState(false)
  
  return (
    <img 
      src={error ? 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23333" width="400" height="300"/%3E%3C/svg%3E' : src} 
      alt={alt} 
      style={style}
      onError={() => setError(true)}
    />
  )
}



// Reusable style objects
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: COLORS.bg,
    background: `radial-gradient(ellipse 1400px 700px at 15% 20%, rgba(127,0,255,0.12), transparent 40%), radial-gradient(ellipse 1200px 600px at 85% 80%, rgba(0,219,222,0.08), transparent 40%), linear-gradient(180deg, rgba(127,0,255,0.03), transparent 50%, rgba(0,219,222,0.02))`,
    backgroundAttachment: 'fixed',
    color: COLORS.text,
    padding: '80px 0'
  },
  wrapper: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 16px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px'
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    margin: 0,
    marginBottom: '24px'
  },
  description: {
    fontSize: '18px',
    color: COLORS.muted,
    maxWidth: '48rem',
    margin: '0 auto 32px'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px'
  },
  filterButton: (isActive) => ({
    padding: '8px 24px',
    borderRadius: '24px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isActive ? COLORS.panel : 'rgba(255,255,255,0.05)',
    color: isActive ? COLORS.text : COLORS.muted,
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif'
  }),
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    autoRows: '280px',
    gap: '16px',
    marginBottom: '32px'
  },
  '@media (max-width: 768px)': {
    grid: {
      gridTemplateColumns: '1fr',
      autoRows: '250px'
    }
  },
  imageCard: (size) => {
    let gridColumn = 'span 1'
    let gridRow = 'span 1'
    
    switch (size) {
      case 'large':
        gridColumn = 'span 2'
        gridRow = 'span 2'
        break
      case 'wide':
        gridColumn = 'span 2'
        gridRow = 'span 1'
        break
      case 'tall':
        gridColumn = 'span 1'
        gridRow = 'span 2'
        break
      default:
        gridColumn = 'span 1'
        gridRow = 'span 1'
    }
    
    return {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      cursor: 'pointer',
      gridColumn,
      gridRow
    }
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  imageInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px',
    color: 'white'
  },
  imageTitle: {
    color: 'white',
    margin: 0,
    marginBottom: '4px',
    fontSize: '16px',
    fontWeight: '600'
  },
  imageCategory: {
    fontSize: '12px',
    color: COLORS.gray,
    margin: 0,
  },
  lightbox: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.95)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px'
  },
  closeButton: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    color: 'white',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    transition: 'color 0.2s ease'
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  },
  lightboxInfo: {
    position: 'absolute',
    bottom: '32px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white'
  },
  lightboxTitle: {
    color: 'white',
    margin: 0,
    marginBottom: '8px',
    fontSize: '18px',
    fontWeight: '600'
  },
  lightboxCategory: {
    color: COLORS.gray,
    margin: 0,
    fontSize: '14px'
  }
}

// Gallery card component
function GalleryCard({ image, index, onSelect, onImageHover }) {
  const sizeClass = `gallery-card-${image.size}`
  
  return (
    <div
      key={index}
      className={sizeClass}
      style={styles.imageCard(image.size)}
      onClick={() => onSelect(index)}
      onMouseEnter={(e) => {
        e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.querySelector('img').style.transform = 'scale(1)'
      }}
    >
      <ImageWithFallback
        src={image.url}
        alt={image.title}
        style={styles.image}
      />
      <div 
        style={styles.overlay}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0'
        }}
      >
        <div style={styles.imageInfo}>
          <h3 style={styles.imageTitle}>{image.title}</h3>
          <p style={styles.imageCategory}>{image.category}</p>
        </div>
      </div>
    </div>
  )
}

// Lightbox component
function Lightbox({ image, onClose }) {
  return (
    <div
      style={styles.lightbox}
      onClick={onClose}
    >
      <button
        style={styles.closeButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = COLORS.gray
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'white'
        }}
        onClick={onClose}
      >
        <IoCloseOutline />
      </button>
      <ImageWithFallback
        src={image.url}
        alt={image.title}
        style={styles.lightboxImage}
      />
      <div style={styles.lightboxInfo}>
        <h3 style={styles.lightboxTitle}>{image.title}</h3>
        <p style={styles.lightboxCategory}>{image.category}</p>
      </div>
    </div>
  )
}

// Main component
export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleBack = () => {
    window.history.back()
  }

  return (
    <div style={styles.container}>
      <style>{mobileStyles}</style>
      
      {/* Back Arrow Button */}
      <button
        onClick={handleBack}
        style={{
          position: 'fixed',
          top: '24px',
          left: '24px',
          zIndex: 100,
          background: 'linear-gradient(135deg, rgba(127,0,255,0.2), rgba(127,0,255,0.1))',
          border: '1px solid rgba(127,0,255,0.3)',
          borderRadius: '10px',
          padding: '12px 16px',
          color: '#e6eef6',
          cursor: 'pointer',
          display: selectedImage !== null ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          transition: 'all 0.28s ease',
          backdropFilter: 'blur(4px)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(127,0,255,0.4), rgba(127,0,255,0.2))'
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.6)'
          e.currentTarget.style.transform = 'translateX(-4px)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(127,0,255,0.2), rgba(127,0,255,0.1))'
          e.currentTarget.style.borderColor = 'rgba(127,0,255,0.3)'
          e.currentTarget.style.transform = 'translateX(0)'
        }}
        title="Back to home"
      >
        <IoArrowBack />
      </button>

      <div style={styles.wrapper}>
        {/* Header Section */}
        <div style={styles.header}>
          <h1 style={styles.title}>Gallery</h1>
          <p style={styles.description}>
            A visual showcase of my work, inspiration, and creative explorations across various mediums and disciplines.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid" style={styles.grid}>
          {galleryPageImages.map((image, index) => (
            <GalleryCard 
              key={index}
              image={image} 
              index={index} 
              onSelect={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <Lightbox 
          image={galleryPageImages[selectedImage]} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  )
}
