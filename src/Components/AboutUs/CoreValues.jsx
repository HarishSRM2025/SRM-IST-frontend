import React from 'react';

const CoreValues = () => {
  const values = [
    {
      title: "Excellence & Integrity",
      desc: "Through high-quality teaching, impactful research, and strong ethical values"
    },
    {
      title: "Academic Freedom",
      desc: "By encouraging open thinking and independent learning"
    },
    {
      title: "Global Vision & Local Commitment",
      desc: "With a focus on achieving international recognition and impact, dedicated to societal growth and community development"
    },
    {
      title: "Inclusiveness",
      desc: "By embracing diversity and fostering an equitable environment campus"
    }
  ];

  return (
    <div className="dept-highlights">
      <div className="dept-highlights-inner">
        {values.map((val, index) => (
          <div key={index} className="highlight-item">
            <div className="highlight-dot"></div>
            <div className="highlight-title">{val.title}</div>
            <div className="highlight-desc">{val.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
