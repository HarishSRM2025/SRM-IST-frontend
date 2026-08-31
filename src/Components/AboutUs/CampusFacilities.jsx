import React, { useState } from 'react';
import campusImage from '../../assets/images/about/campus.JPG';
import hostelImage from '../../assets/images/about/hostel.JPG';
import transportImage from '../../assets/images/about/transport.JPG';

const CampusFacilities = () => {
  const [activeTab, setActiveTab] = useState('Campus');

  const tabs = {
    Campus: {
      image: campusImage,
      text: 'SRM Institute of Science and Technology, Tiruchirappalli, known for its verdant surroundings, peaceful atmosphere, and striking infrastructure, stands as a vibrant hub for students from across the country. SRMIST Tiruchirappalli has established itself as a preferred choice for higher education, offering internationally acclaimed programs that expose students to advanced and emerging technologies used in modern industries.Our dedicated and proficient faculty members, with their vast knowledge and experience, create a dynamic learning environment and provide numerous opportunities for students and research scholars to grow and succeed with confidence in a competitive world. SRMIST emphasizes the importance of collaboration, considering it a means to broaden perspectives and incorporate diverse, high-quality academic experiences.'
    },
    Hostel: {
      image: hostelImage,
      text: 'Safe & student-friendly environment with a warm, secure atmosphere that feels likehome.Clean and peaceful surroundings that are well maintained and ideal for focused study.Comfortable rooms with both AC and non-AC options to suit different preferences.Spacious and well-ventilated living spaces designed for comfort and healthy living.High hygiene standards ensuring cleanliness and a pleasant stay for all residents.Supportive atmosphere that encourages academic focus, relaxation, and meaningful friendships'
    },
    Transport: {
      image: transportImage,
      text: 'The college is easily accessible from Tiruchirappalli and other parts of the state through state-operated transport services. In addition, the institution operates its own fleet of buses for the convenience of students and staff from nearby areas. To ensure punctuality and safety, the college runs 150 buses covering various locations including Tiruchirappalli City, Perambalur, Ariyalur, Dalmiapuram, Thuraiyur, Thanjavur, Karur, Musiri, Thirukattuppalli, Viralimalai, and Pudukkottai. These well-organized transport facilities enable students and staff to commute comfortably and reach the campus on time with ease.'
    }
  };

  return (
    <div className="dept-research" style={{background:"#f8f6f1"}}>
      <div className="dept-research-inner">
        <span className="s-tag">AMENITIES</span>
        <h2 className="s-title">Campus <em>Facilities</em></h2>
        <div className="gold-bar"></div>

        <div className="research-tabs">
          {Object.keys(tabs).map(tab => (
            <button 
              key={tab}
              className={`research-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <img 
              src={tabs[activeTab].image} 
              alt={activeTab} 
              style={{ width: '100%', height: '350px', objectFit: 'cover', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
            />
          </div>
          <div>
            <p className="muted" style={{ lineHeight: '1.8', fontSize: '16px' ,textAlign:'justify'}}>
              {tabs[activeTab].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;
