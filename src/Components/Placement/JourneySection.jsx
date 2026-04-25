import React from 'react';

const JourneySection = () => {
  return (
    <section className="pl-section pl-bg-navy">
      <div className="wrap">
        <span className="s-tag" style={{color: 'var(--white)', opacity: '0.7'}}>LIFE AT SRM</span>
        <h2 className="s-title light">Where Could Your Journey At University <em>Take You?</em></h2>
        <div className="gold-bar"></div>
        
        <div className="pl-journey-grid">
            <div className="pl-journey-card">
                <h4>Voices of Our Alumni</h4>
                <p>Read about the success paths our graduates have carved out across the globe and find out how their time at SRM prepared them.</p>
                <a href="#" className="pl-discover-btn">
                    Discover More
                    <svg viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
            <div className="pl-journey-card">
                <h4>Life Beyond the Classroom</h4>
                <p>Academics is only part of the journey. Explore the diverse extracurriculars, technical clubs, and student organizations on campus.</p>
                <a href="#" className="pl-discover-btn">
                    Discover More
                    <svg viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
            <div className="pl-journey-card">
                <h4>Purpose-Driven Excellence</h4>
                <p>Learn about our rigorous internship opportunities that build direct pipelines from graduation directly into high-level careers.</p>
                <a href="#" className="pl-discover-btn">
                    Discover More
                    <svg viewBox="0 0 24 24" fill="none"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
