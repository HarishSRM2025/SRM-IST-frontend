import React from 'react';

const StatsSection = () => {
  return (
    <section className="pl-section pl-bg-white">
      <div className="wrap">
        <span className="s-tag">GLOBAL SKILLS FOR GLOBAL PLACEMENTS</span>
        <h2 className="s-title">Job Offers <em>14,030+</em></h2>
        <div className="gold-bar"></div>

        <div className="pl-stats-grid">
            <div className="pl-stat-col">
                <h4>Dream Offers</h4>
                <p>2100</p>
            </div>
            <div className="pl-stat-col">
                <h4>Highest Salary</h4>
                <p>52 LPA</p>
            </div>
            <div className="pl-stat-col">
                <h4>Super Dream</h4>
                <p>1</p>
            </div>
            <div className="pl-stat-col">
                <h4>Marquee Dream</h4>
                <p>1</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
