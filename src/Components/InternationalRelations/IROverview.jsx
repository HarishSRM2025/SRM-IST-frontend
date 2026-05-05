import React from 'react';

const IROverview = () => {
  return (
    <section style={{ padding: '60px 0 0' }}>
      <div className="dept-programmes-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="dept-section-header" style={{ marginBottom: '30px' }}>
          <div>
            <div className="section-label">About Us</div>
            <h2 className="section-title">Department <em>Overview</em></h2>
          </div>
        </div>
        
        <div style={{ marginBottom: '60px' }}>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', textAlign: 'justify', fontSize: '1.05rem' }}>
            The <strong>Office of International Relations</strong> at SRMIST, Tiruchirappalli serves as a dedicated directorate committed to fostering global engagement and collaboration. It works towards integrating international best practices, creating global opportunities, and promoting academic exchange programs for the benefit of students, faculty, and staff. Through these focused initiatives, SRMIST has gained strong recognition in international forums, enabling many of our students and faculty members to collaborate with leading institutions worldwide through various structured programs and partnerships.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'start' }}>
          <div style={{ background: '#f8f6f1', padding: '30px', borderRadius: '8px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '15px', fontWeight: 'bold' }}>Our Vision</h3>
            <p style={{ color: 'var(--gray)', lineHeight: '1.8', textAlign: 'justify', margin: 0 }}>
              To make and sustain the SRM Institution to be one of the top leading educational and research institutions in the world and actively contribute to achieving a position within the top 500 QS (Quacquarelli Symonds) Ranking with stronger collaboration with leading International Universities and Research Laboratories for Academics and Research.
            </p>
          </div>
          <div style={{ background: '#f8f6f1', padding: '30px', borderRadius: '8px', borderLeft: '4px solid var(--gold)' }}>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: '15px', fontWeight: 'bold' }}>Our Mission</h3>
            <ul style={{ color: 'var(--gray)', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>Sign MoUs with top 500 Universities and Research Laboratories to support students and faculty in Academics and Research.</li>
              <li style={{ marginBottom: '10px' }}>Increase the number of Research and other Academic engagements for students and faculty.</li>
              <li>Bring Inclusiveness and Diversity by admitting more international students.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IROverview;
