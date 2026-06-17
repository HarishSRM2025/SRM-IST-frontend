import React from 'react';

const WhyChooseSRM = () => {
  return (
    <section className="pl-section pl-bg-navy">
      <div className="wrap">
        <span className="s-tag" style={{color: 'var(--white)', opacity: '0.7'}}>EXCELLENCE</span>
        <h2 className="s-title light">Why Choose <em>SRM?</em></h2>
        <div className="gold-bar"></div>
        
        <ul className="pl-text-list dark">
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Centralized placement team with dedicated coordinators
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Strong alumni network across Fortune 500 companies
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Proven track record of successful placements
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Personalized mentoring and career guidance
            </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSRM;
