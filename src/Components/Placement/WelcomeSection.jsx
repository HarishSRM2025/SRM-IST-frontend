import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="pl-section pl-bg-cream">
      <div className="wrap">
        <span className="s-tag">ABOUT US</span>
        <h2 className="s-title">Welcome to Our <em>Career & Placement</em> Centre</h2>
        <div className="gold-bar"></div>
        
        <p className="pl-welcome-desc">
            The mission of the Placement & Training office at SRM is to empower students with career readiness,
            professional skills, and excellent placement opportunities. We provide continuous support, 
            connecting our students to global leaders and industry pioneers to kickstart their professional journeys.
        </p>

        <div className="pl-cards-row">
            <div className="pl-card-box">
                <div className="pl-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M5 22h14M12 15v7M8 3h8a2 2 0 0 1 2 2v5a7 7 0 0 1-14 0V5a2 2 0 0 1 2-2z"></path></svg>
                </div>
                <div className="pl-card-val">144+</div>
                <div className="pl-card-lbl">Placement Awards</div>
            </div>
            <div className="pl-card-box">
                <div className="pl-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16h16V8l-6-6z"></path><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"></path></svg>
                </div>
                <div className="pl-card-val">1000+</div>
                <div className="pl-card-lbl">Offers</div>
            </div>
            <div className="pl-card-box">
                <div className="pl-card-icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <div className="pl-card-val">24+</div>
                <div className="pl-card-lbl">Global Placements</div>
            </div>
            <div className="pl-card-box">
                <div className="pl-card-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                <div className="pl-card-val">52 LPA</div>
                <div className="pl-card-lbl">Highest Salary</div>
            </div>
        </div>

        <h2 className="s-title" style={{fontSize: '28px'}}>Placement <em>Highlights</em></h2>
        <ul className="pl-hl-list">
            <li className="pl-hl-item">
                <svg viewBox="0 0 16 16"><path d="M13,2H3A1,1 0 0,0 2,3V6A4,4 0 0,0 6,10V12H4V14H12V12H10V10A4,4 0 0,0 14,6V3A1,1 0 0,0 13,2M12,6A2,2 0 0,1 10,8H6A2,2 0 0,1 4,6V4H12V6Z"/></svg> 
                <span>230+ Recruiters visiting the campus every year</span>
            </li>
            <li className="pl-hl-item">
                <svg viewBox="0 0 16 16"><path d="M13,2H3A1,1 0 0,0 2,3V6A4,4 0 0,0 6,10V12H4V14H12V12H10V10A4,4 0 0,0 14,6V3A1,1 0 0,0 13,2M12,6A2,2 0 0,1 10,8H6A2,2 0 0,1 4,6V4H12V6Z"/></svg> 
                <span>1000+ Offers offering Rs. 5 Lakhs or more per annum</span>
            </li>
            <li className="pl-hl-item">
                <svg viewBox="0 0 16 16"><path d="M13,2H3A1,1 0 0,0 2,3V6A4,4 0 0,0 6,10V12H4V14H12V12H10V10A4,4 0 0,0 14,6V3A1,1 0 0,0 13,2M12,6A2,2 0 0,1 10,8H6A2,2 0 0,1 4,6V4H12V6Z"/></svg> 
                <span>Exclusive Dream and Super Dream opportunities</span>
            </li>
            <li className="pl-hl-item">
                <svg viewBox="0 0 16 16"><path d="M13,2H3A1,1 0 0,0 2,3V6A4,4 0 0,0 6,10V12H4V14H12V12H10V10A4,4 0 0,0 14,6V3A1,1 0 0,0 13,2M12,6A2,2 0 0,1 10,8H6A2,2 0 0,1 4,6V4H12V6Z"/></svg> 
                <span>Dedicated training and assessment units for students</span>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default WelcomeSection;
