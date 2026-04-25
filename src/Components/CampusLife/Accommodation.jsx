import React from 'react';

const Accommodation = () => {
  return (
    <div className="dept-research" id="accommodation" style={{ background: '#fff' }}>
      <div className="dept-research-inner">
        <span className="s-tag">HOUSING</span>
        <h2 className="s-title">Campus <em>Accommodation</em></h2>
        <div className="gold-bar"></div>
        
        <div className="overview-text" style={{ marginBottom: '60px' }}>
          Safe & student-friendly environment with a warm, secure atmosphere that feels like home. 
          Clean and peaceful surroundings that are well maintained and ideal for focused study. 
          Comfortable rooms with both AC and non-AC options to suit different preferences. 
          Spacious and well-ventilated living spaces designed for comfort and healthy living. 
          High hygiene standards ensuring cleanliness and a pleasant stay for all residents. 
          Supportive atmosphere that encourages academic focus, relaxation, and meaningful friendships.
        </div>

        <div className="facilities-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <div className="facility-card">
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Campus Accommodation View 1" 
              loading="lazy"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div className="facility-card">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Campus Accommodation View 2" 
              loading="lazy"
              style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
