import React, { useState } from 'react';

const CampusFacilities = () => {
  const [activeTab, setActiveTab] = useState('Campus');

  const tabs = {
    Campus: {
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
      text: 'SRM Institute of Science and Technology, Tiruchirappalli, known for its verdant surroundings, peaceful atmosphere, and striking infrastructure, stands as a vibrant hub for students from across the country. SRMIST Tiruchirappalli has established itself as a preferred choice for higher education, offering internationally acclaimed programs that expose students to advanced and emerging technologies used in modern industries. Our dedicated and proficient faculty members, with their vast knowledge and experience, create a dynamic learning environment and provide numerous opportunities for students and research scholars to grow and succeed with confidence in a competitive world. SRMIST emphasizes the importance of collaboration, considering it a means to broaden perspectives and incorporate diverse, high-quality academic experiences.'
    },
    Hostel: {
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800',
      text: 'The hostel facilities at SRMIST Tiruchirappalli are designed to provide a home away from home. With well-furnished rooms, modern amenities, and strict round-the-clock security, we ensure a comfortable and safe environment for all our residents. Nutritious multi-cuisine food, Wi-Fi connectivity, recreation rooms, and medical assistance are readily available to cater to the diverse needs of the student community, fostering a strong sense of camaraderie and personal growth.'
    },
    Transport: {
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800',
      text: 'Our comprehensive transport network ensures hassle-free commuting for students and staff. A fleet of modern, GPS-enabled buses covers extensive routes across the city and neighboring districts. Safety and punctuality are guaranteed, making the daily travel experience smooth and convenient for everyone. The transport system is regularly upgraded to accommodate the growing needs of our academic community.'
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
            <p className="muted" style={{ lineHeight: '1.8', fontSize: '16px' }}>
              {tabs[activeTab].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilities;
