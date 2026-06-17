import React from 'react';
import img1 from '../../assets/images/internationalAffairs/expertsTalk/1.jpg';
import img2 from '../../assets/images/internationalAffairs/expertsTalk/2.jpg';
import img3 from '../../assets/images/internationalAffairs/expertsTalk/3.jpg';
import img4 from '../../assets/images/internationalAffairs/expertsTalk/4.jpg';
import img5 from '../../assets/images/internationalAffairs/expertsTalk/5.jpg';
import img6 from '../../assets/images/internationalAffairs/expertsTalk/6.jpg';

import pdf1 from '../../assets/images/internationalAffairs/pdf-expertTalk/1.pdf';
import pdf2 from '../../assets/images/internationalAffairs/pdf-expertTalk/2.pdf';
import pdf3 from '../../assets/images/internationalAffairs/pdf-expertTalk/3.pdf';
import pdf4 from '../../assets/images/internationalAffairs/pdf-expertTalk/4.pdf';
import pdf5 from '../../assets/images/internationalAffairs/pdf-expertTalk/5.pdf';
import pdf6 from '../../assets/images/internationalAffairs/pdf-expertTalk/6.pdf';

const talks = [
  {
    title: "IoT-Driven Green Energy Architectures: Edge Electronics for Sustainable Smart Buildings",
    img: img1,
    pdf: pdf1
  },
  {
    title: "Modern Neural Network Architecture",
    img: img2,
    pdf: pdf2
  },
  {
    title: "Your Pathway to the USA: Exploring Education Opportunities at Northeastern University",
    img: img3,
    pdf: pdf3
  },
  {
    title: "5-day Micro-Credential Course on Technology and Practice of 5G/B5G Core Networks",
    img: img4,
    pdf: pdf4
  },
  {
    title: "Enhancing the Quality and Impact of Research Proposals",
    img: img5,
    pdf: pdf5
  },
  {
    title: "Hybrid Intelligence for Mobile Robots and Manipulators",
    img: img6,
    pdf: pdf6
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
            onClick={() => window.open(talk.pdf, '_blank')}
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
