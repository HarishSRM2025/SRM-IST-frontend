import React from 'react';
import dean from '../../assets/placement_dean.jpeg';
import { Link } from 'react-router-dom';

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
                 <Link to="/placement/captapulating-careers">Captapulating Careers</Link>
              </li>
              <li>
                  <Link to="/placement/captapulating-careers#activities">Latest Activities</Link>
              </li>
              <li>
                 <Link to="/research#mous">Industrial Collaborations</Link>
              </li>
              <li>
                 <Link to="/placement/captapulating-careers#staff">Meet Our Staff</Link>
              </li>
              <li>
                <Link to="/placement/career-development-centre">Career Development Centre</Link>
              </li>
              <li>
                  <Link to='/placement/captapulating-careers#cdc-team'>The CDC Team</Link>
              </li>
              <li>
                  <Link to="/placement/captapulating-careers#contact">Contact Us</Link>
              </li>
            </ul>
        </div>

      </div>
    </section>
  );
};

export default DeansMessage;
