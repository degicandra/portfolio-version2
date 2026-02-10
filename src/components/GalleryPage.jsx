import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

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

// Gallery images data
const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1697257378991-b57497dddc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwMjkxNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Abstract Art Installation",
    category: "Design",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzA3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Architecture",
    category: "Architecture",
    size: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzAyNTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Creative Studio Space",
    category: "Interior",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzcwMjkwODYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Code & Development",
    category: "Technology",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzcwMzA1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Creative Workspace",
    category: "Workspace",
    size: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1697257378991-b57497dddc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwMjkxNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Gallery Exhibition",
    category: "Art",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzA3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Architectural Design",
    category: "Architecture",
    size: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzAyNTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Studio Design",
    category: "Design",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzcwMzA1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Workspace Setup",
    category: "Workspace",
    size: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1697257378991-b57497dddc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwMjkxNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Abstract Art Installation",
    category: "Design",
    size: "large",
  },
  {
    url: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzA3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Modern Architecture",
    category: "Architecture",
    size: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzAyNTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Creative Studio Space",
    category: "Interior",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzcwMjkwODYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Code & Development",
    category: "Technology",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzcwMzA1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Creative Workspace",
    category: "Workspace",
    size: "wide",
  },
  {
    url: "https://images.unsplash.com/photo-1697257378991-b57497dddc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFydCUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwMjkxNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Gallery Exhibition",
    category: "Art",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzcwMzA3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Architectural Design",
    category: "Architecture",
    size: "tall",
  },
  {
    url: "https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzAyNTM4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Studio Design",
    category: "Design",
    size: "medium",
  },
  {
    url: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzcwMzA1MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Workspace Setup",
    category: "Workspace",
    size: "wide",
  },
]

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
    margin: 0
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
  return (
    <div
      key={index}
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

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header Section */}
        <div style={styles.header}>
          <h1 style={styles.title}>Gallery</h1>
          <p style={styles.description}>
            A visual showcase of my work, inspiration, and creative explorations across various mediums and disciplines.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={styles.grid}>
          {GALLERY_IMAGES.map((image, index) => (
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
          image={GALLERY_IMAGES[selectedImage]} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  )
}
