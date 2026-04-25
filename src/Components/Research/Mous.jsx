import React from 'react';

// Use Vite's glob import to bundle all images from the folder synchronously
const modules = import.meta.glob('../../assets/images/mous/*.{png,webp}', { eager: true });

const getImageUrl = (index) => {
  const fileNum = index + 1; // Files are named 1.png, 2.png, ..., 36.webp
  const pngPath = `../../assets/images/mous/${fileNum}.png`;
  const webpPath = `../../assets/images/mous/${fileNum}.webp`;
  
  if (modules[pngPath]) return modules[pngPath].default;
  if (modules[webpPath]) return modules[webpPath].default;
  return null;
};

const companies = [
  "Corporate Gurukul", "MIT Square", "AATSEA", "Dassault Systemes", "BEAUROI", "EMEDLOGIX",
  "GUVI", "Drone Hub", "Vijay Dairy", "CubeNsquare", "KALVI", "HITACEY",
  "Edunet", "DSCI", "Startup Payanam", "Fortinet", "Vectra", "ASEM",
  "ICAR", "PI", "DIA", "MongoDB", "L&T EduTech", "Quantiphi",
  "VISIONET", "Nichi-In", "ICAR-RCER", "Microsoft", "TVS", "Snowflake",
  "Airports Authority of India", "TICEL BIO PARK", "BASE", "R.K. DEWAN & CO.", "NIELIT", "EVEL S"
];

const Mous = () => {
  return (
    <section style={{ background: '#fff' }}>
      {/* Grid of Logos */}
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* Standard Template Title */}
        <div style={{ marginBottom: "50px", textAlign: "left" }}>
           <span className="s-tag">PARTNERSHIPS</span>
           <h2 className="s-title"><em>MoUs</em> & Collaborations</h2>
           <div className="gold-bar"></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {companies.map((company, index) => {
            const logoUrl = getImageUrl(index);
            return (
              <div 
                key={index}
                title={company}
                style={{
                  width: '100%',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  padding: '10px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textAlign: 'center',
                 background:'#fff',
                 border:'1px solid #ccc',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(200, 149, 42, 0.4)';
                  e.currentTarget.style.color = 'var(--navy)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#ccc';
                  e.currentTarget.style.color = 'var(--gray)';
                }}
              >
                {logoUrl ? (
                  <img src={logoUrl} alt={company} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                  <span style={{ display: 'block', padding: '5px' }}>{company}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mous;
