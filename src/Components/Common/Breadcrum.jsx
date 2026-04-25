import React from 'react';
import { FaAngleRight } from "react-icons/fa";

const Breadcrum = ({ title, subtitle, bgImage, paths }) => {
  const breadcrumbPaths = paths || [{ name: 'Home', link: '/' }, { name: title }];

  return (
    <section className="breadcrum-hero" id="home" style={{ 
      position: 'relative', 
      height: '40vh', 
      minHeight: '350px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: '0' 
    }}>
      
      {/* Clean Background Image / Gradient */}
      <div 
        className="hero-bg" 
        style={{ 
          position: 'absolute',
          inset: 0,
          backgroundImage: bgImage ? `url(${bgImage})` : 'linear-gradient(135deg, #0b1d35 0%, #152d4a 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: bgImage ? 'overlay' : 'normal',
          backgroundColor: bgImage ? 'rgba(11,29,53,0.78)' : 'transparent',
          zIndex: 1
        }}
      ></div>

      <div className="hero-inner" style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', padding: '0 20px' }}>
        
        {/* Simple & Clean Breadcrumb Path Pill */}
        <div 
          className="breadcrumb-path" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            fontSize: '11px', 
            fontWeight: '600', 
            letterSpacing: '2px', 
            textTransform: 'uppercase', 
            marginBottom: '20px',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '8px 20px',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.12)'
          }}
        >
          {breadcrumbPaths.map((path, index) => (
            <React.Fragment key={index}>
              {path.link ? (
                <span 
                  style={{ color: 'rgba(255,255,255,0.85)', cursor: 'pointer', transition: 'all 0.3s' }} 
                  onClick={() => window.location.href = path.link}
                  onMouseOver={(e) => { e.target.style.color = 'var(--gold)'; }}
                  onMouseOut={(e) => { e.target.style.color = 'rgba(255,255,255,0.85)'; }}
                >
                  {path.name}
                </span>
              ) : (
                <span style={{ color: 'var(--gold)' }}>{path.name}</span>
              )}
              
              {index < breadcrumbPaths.length - 1 && (
                <FaAngleRight style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <h1 
          className="hero-title" 
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            color: '#ffffff', 
            fontWeight: '700', 
            marginBottom: subtitle ? '18px' : '0',
            lineHeight: '1.2'
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* Dynamic Subtitle */}
        {subtitle && (
          <p style={{ 
            color: 'rgba(255,255,255,0.75)', 
            fontSize: '16px', 
            maxWidth: '650px', 
            margin: '0 auto', 
            lineHeight: '1.6',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '400'
          }}>
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
};

export default Breadcrum;