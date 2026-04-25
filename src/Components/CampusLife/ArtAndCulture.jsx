import React from 'react';

const ArtAndCulture = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1621516087569-450bd847d04e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Traditional Dance" },
    { src: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Cultural Performance" },
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Stage Event" },
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Live Music" },
    { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Festival Crowd" },
    { src: "https://images.unsplash.com/photo-1533174000255-a6360520a1eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", alt: "Dance Performance" }
  ];

  return (
    <div className="dept-research" id="art-culture" style={{ background: '#f3f4f6' }}>
      <div className="dept-research-inner">
        <span className="s-tag">EVENTS</span>
        <h2 className="s-title">Art & <em>Culture</em></h2>
        <div className="gold-bar"></div>
        
        <div className="overview-text" style={{ marginBottom: '60px' }}>
          SRM Institute of Science and Technology, Tiruchirappalli, is a vibrant hub of art and cultural life, enriched by the presence of students from diverse regions of India and abroad. This beautiful diversity transforms the campus into a living mosaic of traditions, languages, and creative expressions, where students come together to celebrate and share their unique cultural identities. Through annual cultural festivals, performing arts events, and student-led clubs, the institute fosters an atmosphere of creativity and mutual appreciation. The blend of different backgrounds not only enlivens campus life but also instills in every student a deep sense of cross-cultural respect and a broader world view, making SRM Trichy much more than just an academic institution — it is a community where art and culture truly thrive.
        </div>

        <div className="facilities-grid">
          {images.map((img, index) => (
            <div key={index} className="facility-card">
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtAndCulture;
