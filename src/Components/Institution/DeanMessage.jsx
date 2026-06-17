import React, { useState } from "react";

const DeanMessage = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!data?.deanName || !data?.deanImage || !data?.message) return null;

  const MAX_LENGTH = 850;
  const isLongMessage = data.message && data.message.length > MAX_LENGTH;
  const displayMessage = isLongMessage && !isExpanded 
    ? `${data.message.substring(0, MAX_LENGTH)}...` 
    : data.message;

  const deanImageFile = data.deanImage.split("\\").pop().split("/").pop();
  const imageUrl = `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/uploads/${deanImageFile}`;

  return (
    <section style={{ 
      padding: '80px 0', 
      backgroundColor: '#164e96', // Deep blue for the entire section 
      position: 'relative',
      overflow: 'hidden'
    }} id="dean-message">
      
      {/* Subtle background gradient overlay for the whole section */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.1) 100%)',
        pointerEvents: 'none'
      }} />

      <div className="wrap" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          color: '#ffffff',
          flexWrap: 'wrap' // for responsiveness
        }}>
          
          {/* Left Avatar & Info Container */}
          <div style={{ 
            flex: '0 0 280px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '20px',
            textAlign: 'center'
          }}>
            <img
              src={imageUrl}
              alt={data.deanName || "Dean Profile"}
              style={{
                width: '280px',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid #facc15', // Gold border matching screenshot
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
                backgroundColor: '#ffffff',
                marginBottom: '24px'
              }}
              loading="lazy"
            />
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              margin: '0 0 8px 0',
              fontFamily: 'serif',
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}>
              {data.deanName}
            </h3>
            <div style={{ 
              color: '#facc15', // Yellow/Gold
              fontSize: '13px', 
              fontWeight: '600', 
              letterSpacing: '2px', 
              textTransform: 'uppercase',
              fontFamily: 'sans-serif'
            }}>
              DEAN OF INSTITUTION
            </div>
          </div>

          {/* Right Content Container */}
          <div style={{ 
            flex: '1 1 500px', 
            borderLeft: '2px solid #facc15', // Gold vertical line
            paddingLeft: '40px' 
          }}>
            <h2 className="s-title" style={{ 
              color: '#ffffffff',
            }}>
              Message from <em>Dean</em> 
            </h2>
            <div style={{ 
              fontSize: '16px', 
              lineHeight: '1.8', 
              color: 'rgba(255,255,255,0.85)',
              fontStyle: 'italic',
              whiteSpace: 'pre-wrap',
              fontFamily: 'sans-serif',
              fontWeight: '300'
            }}>
              {displayMessage}
              
              {isLongMessage && (
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#facc15',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '0',
                    marginLeft: '8px',
                    fontStyle: 'normal',
                    fontSize: '14px',
                    textDecoration: 'underline'
                  }}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanMessage;
