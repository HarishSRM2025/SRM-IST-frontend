import React from 'react';
import logo1 from '../../assets/images/internationAffair/1.jpg';
import logo2 from '../../assets/images/internationAffair/2.jpg';
import logo3 from '../../assets/images/internationAffair/3.jpg';
import logo4 from '../../assets/images/internationAffair/4.jpg';
import logo5 from '../../assets/images/internationAffair/5.jpg';
import logo6 from '../../assets/images/internationAffair/6.jpg';
import logo7 from '../../assets/images/internationAffair/7.jpg';
import logo8 from '../../assets/images/internationAffair/8.jpg';
import logo9 from '../../assets/images/internationAffair/9.jpg';
import logo10 from '../../assets/images/internationAffair/10.jpg';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10
];

const IRLogos = () => {
  return (
    <section style={{ background: '#f8f6f1', padding: '80px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div className="dept-section-header" style={{ marginBottom: '50px' }}>
          <div>
            <div className="section-label">Partnerships</div>
            <h2 className="section-title">Global <em>Collaborations</em></h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '30px', justifyItems: 'center' }}>
          {logos.map((logo, idx) => (
            <div key={idx} style={{ 
              padding: '15px', 
              background: '#fff', 
              border: '1px solid #eaeaea', 
              borderRadius: '8px',
              width: '100%',
              maxWidth: '180px',
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)'; }}
            >
              <img src={logo} alt={`Partner ${idx + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IRLogos;
