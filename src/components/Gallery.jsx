import React, { useState } from 'react'
import galleryImages from '../data/gallery'

function ImageTile({ image, index, onImageClick }) {
  const [imageError, setImageError] = useState(false)
  
  const handleError = () => {
    setImageError(true)
  }
  
  if (imageError) {
    return (
      <div 
        className="tile enhanced-tile" 
        key={index} 
        style={{
          backgroundImage: 'linear-gradient(135deg, #7F00FF, #00DBDE)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }} 
        data-aos="zoom-in" 
        data-aos-delay={index*80}
        onClick={() => onImageClick(image, index)}
      >
        {image.title || 'Image Unavailable'}
      </div>
    )
  }
  
  return (
    <div 
      className="tile enhanced-tile" 
      key={index} 
      style={{backgroundImage: `url(${image.url})`}} 
      data-aos="zoom-in" 
      data-aos-delay={index*80}
      onClick={() => onImageClick(image, index)}
    >
      <div className="tile-overlay">
        <div className="tile-content">
          <div className="view-icon">👁️</div>
        </div>
      </div>
      <img 
        src={image.url} 
        alt={image.title || `Gallery item ${index + 1}`} 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'none'
        }}
        onError={handleError}
      />
    </div>
  )
}

function ImageViewer({ image, currentIndex, total, onClose, onNext, onPrev }) {
  if (!image) return null;
  
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content" onClick={e => e.stopPropagation()}>
        <button className="viewer-close" onClick={onClose}>×</button>
        <button className="viewer-nav viewer-prev" onClick={onPrev} disabled={currentIndex === 0}>‹</button>
        <button className="viewer-nav viewer-next" onClick={onNext} disabled={currentIndex === total - 1}>›</button>
        
        <div className="viewer-image-container">
          <img src={image.url} alt={image.title} className="viewer-image" />
        </div>
        
        <div className="viewer-info">
          <p className="viewer-counter">{currentIndex + 1} of {total}</p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  const handleNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(galleryImages[currentIndex + 1]);
    }
  };
  
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(galleryImages[currentIndex - 1]);
    }
  };
  
  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);
  
  return (
    <section id="gallery" className="section" data-aos="fade-up">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px'}}>
        <h2 style={{margin: 0}}>Gallery</h2>
        <a href="/gallery.html" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)', textDecoration: 'none', fontSize: '14px', fontWeight: '600'}}>More Photos →</a>
      </div>
      <p className="muted">Photography is one of my hobbies. Here's a curated selection of visual work, UI experiments, and photography shots.</p>
      <div className="gallery-grid">
        {galleryImages.map((image, i) => (
          <ImageTile 
            image={image} 
            index={i} 
            key={image.id} 
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      
      <ImageViewer 
        image={selectedImage}
        currentIndex={currentIndex}
        total={galleryImages.length}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  )
}
