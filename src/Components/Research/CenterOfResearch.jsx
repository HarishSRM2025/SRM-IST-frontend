import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaRobot, FaDna, FaIndustry, FaNetworkWired, FaMobileAlt, FaMicrochip } from 'react-icons/fa';

const centers = [
  { name: 'Center of Artificial Intelligence', icon: <FaRobot />, link: '/center/artificial-intelligence' },
  { name: 'Center of Computational Biology', icon: <FaDna />, link: '/center/computational-biology' },
  { name: 'Center of Industrial Robotics', icon: <FaIndustry />, link: '/center/industrial-robotics' },
  { name: 'Center of IoT and Industrial Automation', icon: <FaNetworkWired />, link: '/center/iot-and-industrial-automation' },
  { name: 'App Development Studio', icon: <FaMobileAlt />, link: '/center/app-development-studio' },
  { name: 'Center of Chip Design', icon: <FaMicrochip />, link: '/center/chip-design' }
];

const CenterOfResearch = () => {
  return (
    <section style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        
        <div style={{ marginBottom: "50px", textAlign: "left" }}>
          <span className="s-tag">FACILITIES</span>
          <h2 className="s-title">Centers of Excellence & <em>Research</em></h2>
          <div className="gold-bar"></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {centers.map((center, index) => (
            <Link 
              key={index} 
              to={center.link}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
                background: 'var(--lgray)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--navy)',
                transition: 'all 0.3s ease',
                border: '1px solid transparent',
                cursor: 'pointer',
                group: 'hover'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.06)';
                e.currentTarget.style.border = '1px solid rgba(200, 149, 42, 0.3)';
                e.currentTarget.querySelector('.icon-wrapper').style.background = 'var(--gold)';
                e.currentTarget.querySelector('.icon-wrapper').style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'var(--lgray)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.border = '1px solid transparent';
                e.currentTarget.querySelector('.icon-wrapper').style.background = 'var(--navy)';
                e.currentTarget.querySelector('.icon-wrapper').style.color = '#fff';
              }}
            >
              <div 
                className="icon-wrapper"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--navy)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                  transition: 'all 0.3s'
                }}
              >
                {center.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                lineHeight: '1.4',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '10px'
              }}>
                {center.name}
              </h3>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '5px', 
                color: 'var(--gold)', 
                fontSize: '13px', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginTop: '10px'
              }}>
                Explore <FaAngleRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterOfResearch;
