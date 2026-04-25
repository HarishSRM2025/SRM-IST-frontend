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
                Excellent placement record with top-tier companies offering incredible super dream and dream packages.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Industry-aligned curriculum and modern infrastructure equipped with cutting edge technology.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Global tie-ups and international opportunities that foster a worldwide perspective for students.
            </li>
            <li>
                <div className="pl-list-ico">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                Personalized mentoring and career guidance available constantly on campus.
            </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseSRM;
