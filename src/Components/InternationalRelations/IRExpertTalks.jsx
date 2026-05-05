import React from 'react';

const talks = [
  {
    title: "IoT-Driven Green Energy Architectures: Edge Electronics for Sustainable Smart Buildings",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Modern Neural Network Architecture",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Your Pathway to the USA: Exploring Education Opportunities at Northeastern University",
    img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "5-day Micro-Credential Course on Technology and Practice of 5G/B5G Core Networks",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Enhancing the Quality and Impact of Research Proposals",
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60"
  },
  {
    title: "Hybrid Intelligence for Mobile Robots and Manipulators",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60"
  }
];

const IRExpertTalks = () => {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="dept-programmes-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="dept-section-header" style={{ marginBottom: '40px' }}>
          <div>
            <div className="section-label">Events & Seminars</div>
            <h2 className="section-title">Global <em>Expert Talks</em></h2>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {talks.map((talk, idx) => (
            <div key={idx} style={{ 
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.1)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)'; }}
            >
              <div style={{ height: '220px', position: 'relative' }}>
                <img src={talk.img} alt={talk.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--gold)', color: 'var(--navy)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                  Expert Talk
                </div>
              </div>
              <div style={{ padding: '30px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h4 style={{ color: 'var(--navy)', fontSize: '1.2rem', fontWeight: 'bold', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                  {talk.title}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gold)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Read More <span style={{ marginLeft: '8px', transition: 'transform 0.2s ease' }} className="read-more-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IRExpertTalks;
