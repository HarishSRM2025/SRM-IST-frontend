import React from 'react';

const ReachUs = () => {
  return (
    <section className="pl-section pl-bg-white">
      <div className="wrap">
        <span className="s-tag">CONTACT US</span>
        <h2 className="s-title">We'd Love to <em>Hear From You</em></h2>
        <div className="gold-bar"></div>
        
        <div className="pl-reach-container">
            <div className="pl-reach-info">
                <h4>Campus Address</h4>
                <p>
                    SRM Institute of Science and Technology <br/>
                    Tiruchirappalli Campus <br/>
                    SRM Nagar, Trichy - Madurai Highway <br/>
                    Irungalur, Tiruchirappalli 621 105 <br/>
                    Tamil Nadu, India
                </p>

                <h4>General Enquiries</h4>
                <p>
                    Phone: 0431 3501 111<br/>
                    Email: placement@srmist.edu.in
                </p>
            </div>
            <div className="pl-reach-map">
                {/* Fallback image/div for map. Ensure sharp corners and editorial layout. */}
                <img 
                    src="https://via.placeholder.com/600x400?text=Map+View" 
                    alt="Map Location" 
                    className="pl-reach-map-img" 
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
