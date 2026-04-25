import React from 'react';
import dean from '../../assets/placement_dean.jpeg';

const DeansMessage = () => {
  return (
    <section className="pl-section pl-bg-white">
      <div className="wrap pl-dean-container">
        
        <div className="pl-dean-img-wrap">
            <img 
              src={dean} 
              alt="Dean Profile" 
              className="pl-dean-img" 
            />
            <div className="pl-dean-meta">
              <h4>V. Madhavan</h4>
              <p>Dean - Placement</p>
            </div>
        </div>

        <div className="pl-dean-right">
            <span className="s-tag">LEADERSHIP</span>
            <h2 className="s-title">Dean's <em>Message</em></h2>
            <div className="gold-bar"></div>
            
            <p>
                At our Institute, we are dedicated to ensuring that our students are
                globally competitive and fully prepared for their future careers. 
                Our dedicated placement team works closely with major industries 
                to connect top-tier talent with excellent career opportunities.
            </p>
            
        </div>
        <div>
          <ul className="pl-dean-list">
                <li>
                    Skill enhancement & training
                </li>
                <li>
                    Industry interaction
                </li>
                <li>
                    Placement Assistance
                </li>
                <li>
                    Mock Interviews
                </li>
                <li>
                    Resume preparation
                </li>
                <li>
                    Alumni contact
                </li>
            </ul>
        </div>

      </div>
    </section>
  );
};

export default DeansMessage;
