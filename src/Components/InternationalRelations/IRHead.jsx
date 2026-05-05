import React from 'react';

const IRHead = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--navy)', marginTop: '60px' }}>
      <div className="dept-programmes-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="dept-section-header" style={{ marginBottom: '40px' }}>
          <div>
            <div className="section-label" style={{ color: 'var(--gold)' }}>Leadership</div>
            <h2 className="section-title"> <span style={{ color: '#fff' }}>Head of</span> <em style={{ color: 'var(--gold)' }}>International Affairs</em></h2>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          
          <div style={{ textAlign: 'center', width: '280px', background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div style={{ width: '100%', height: '240px', background: '#f3f4f6', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
              <img 
                src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360" 
                alt="Dr. R. Sanmugasundaram" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <h4 style={{ color: 'var(--navy)', margin: '0 0 5px 0', fontSize: '1.2rem', fontWeight: 'bold' }}>Dr. R. Sanmugasundaram</h4>
            <p style={{ color: 'var(--gray)', margin: 0, fontSize: '0.95rem' }}>Head International Affairs</p>
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '25px', fontWeight: 'bold', fontFamily: '"Playfair Display", serif' }}><em style={{ color: 'var(--gold)' }}>Welcome</em> Message</h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', textAlign: 'justify', fontSize: '1.1rem', margin: 0 }}>
              The Office of International Relations centralizes, coordinates and handles international cooperation activities at SRM Institute of Science and Technology, Tiruchirappalli. SRMIST's global standing is driven by its vast number of alumni as well as its alliances, MoUs and Exchange of Students & Faculty Members. We are committed to realizing the Leadership Vision to Internationalize SRMIST so as to support our Learners and Faculty Members access best of the world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IRHead;
