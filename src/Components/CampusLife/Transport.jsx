import React from 'react';

const Transport = () => {
  return (
    <div className="dept-research" id="transport" style={{ background: '#f3f4f6' }}>
      <div className="dept-research-inner">
        <span className="s-tag">COMMUTE</span>
        <h2 className="s-title">Campus <em>Transport</em></h2>
        <div className="gold-bar"></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div className="overview-text" style={{ flex: '1 1 500px', margin: 0 }}>
            The college is easily accessible from Tiruchirappalli and other parts of the state through state-operated transport services. In addition, the institution operates its own fleet of buses for the convenience of students and staff from nearby areas. To ensure punctuality and safety, the college runs 150 buses covering various locations including Tiruchirappalli City, Perambalur, Ariyalur, Dalmiapuram, Thuraiyur, Thanjavur, Karur, Musiri, Thirukattupalli, Viralimalai, and Pudukkottai. These well-organized transport facilities enable students and staff to commute comfortably and reach the campus on time with ease.
          </div>
          <button className="btn-gold" onClick={() => alert('Transport Details feature coming soon!')}>
            Transport Details
          </button>
        </div>

        <div className="facilities-grid">
          <div className="facility-card">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Campus Bus Fleet" 
              loading="lazy"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="facility-card">
            <img 
              src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="University Transport" 
              loading="lazy"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="facility-card">
            <img 
              src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Transport Services" 
              loading="lazy"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
