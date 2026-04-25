import React from 'react';
import historybg from '../../assets/images/about/history-bg.png'
const History = () => {
  const timelineGroups = [
    {
      period: '1968-2003',
      subtitle: 'Pioneering the first steps in higher education',
      events: [
        { year: '1968', event: 'Founded Florence Nightingale School of Nursing, Chennai.' },
        { year: '1969', event: 'Started Florence Nightingale School of Nursing, Valliammai Polytechnic College' },
        { year: '1984', event: 'Valliammai Society is born.' },
        { year: '1985', event: 'SRM Engineering College, Kattankulathur is founded.' },
        { year: '1992', event: 'SRM Arts and Science College is established.' },
        { year: '1993', event: 'SRM College of Pharmacy and SRM College of Nursing are started.' },
        { year: '1996', event: 'SRM Institute of Management Studies is launched.' },
        { year: '1997', event: 'Valliammai Engineering College is formed.' },
        { year: '2003', event: 'Deemed to be University status granted.' }
      ]
    },
    {
      period: '2004-2015',
      subtitle: 'A period of rapid expansion and global recognition',
      events: [
        { year: '2004', event: 'SRM Medical College Hospital and Research Centre is established.' },
        { year: '2005', event: 'SRM Institute of Science and Technology (SRMIST) is formed under section 3 of UGC Act 1956.' },
        { year: '2007', event: 'SRM University, Delhi-NCR, Sonepat is established.' },
        { year: '2012', event: 'SRM Institute of Science and Technology, Ramapuram Campus, Chennai is established.' },
        { year: '2013', event: 'SRM University, Sikkim is established.' },
        { year: '2014', event: 'SRM Institute of Science and Technology, Vadapalani Campus, Chennai is established.' },
        { year: '2015', event: 'SRM University, AP, Amaravati is established.' }
      ]
    },
    {
      period: '2016-2023',
      subtitle: 'Continuous innovation and global reach',
      events: [
        { year: '2016', event: 'SRM Institute of Science and Technology, Tiruchirappalli Campus is established.' },
        { year: '2017', event: 'SRM Institute of Science and Technology (Deemed to be University) name changed.' },
        { year: '2020', event: 'SRM College of Agricultural Sciences is established.' },
        { year: '2021', event: 'SRM Institute of Science and Technology, NCR Campus, Modinagar is established.' },
        { year: '2023', event: 'SRM University, Delhi-NCR, Sonepat is recognized as a Private University.' }
      ]
    }
  ];

  return (
    <div className="dept-research" style={{ backgroundImage: `linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url(${historybg})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed' }}>
      <div className="dept-research-inner">
        <span className="s-tag">TIMELINE</span>
        <h2 className="s-title">Our <em>History</em></h2>
        <div className="gold-bar"></div>
        
        <div className="timeline-container" style={{ padding: '40px 0 0 0' }}>
          {timelineGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="timeline-group" style={{ marginBottom: '80px' }}>
              <div className="timeline-group-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', color: '#0b1d35', marginBottom: '10px' }}>{group.period}</h3>
                <p style={{ color: '#6b7280', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>{group.subtitle}</p>
              </div>
              
              <div className="timeline" style={{ paddingBottom: '40px' }}>
                {group.events.map((item, index) => (
                  <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content" style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
