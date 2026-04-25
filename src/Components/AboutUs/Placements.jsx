import React from 'react';

const Placements = () => {
  const stats = [
    { value: '350+', label: 'Offers generated and counting' },
    { value: '625+', label: 'Companies visited Every year' },
    { value: '8,409+', label: 'Record Breaking Placement Event' },
    { value: '250+', label: 'Core Companies' }
  ];

  return (
    <div className="dept-research" style={{ background: '#ffffffff' }}>
      <div className="dept-research-inner">
        <span className="s-tag">CAREERS</span>
        <h2 className="s-title"><em>Placements</em></h2>
        <div className="gold-bar"></div>

        <div className="research-card-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map((stat, index) => (
            <div key={index} className="research-card" style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div className="amount" style={{ fontSize: '32px', marginBottom: '10px' }}>{stat.value}</div>
              <p className="muted" style={{ fontWeight: '500', margin: 0 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placements;
