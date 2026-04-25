import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const researchAreas = [
  { title: "Physics", content: "Research in theoretical and experimental Physics, covering quantum mechanics, nanomaterials, and astrophysics." },
  { title: "Mathematics", content: "Advanced study in algebra, applied mathematics, computational fluid dynamics, and mathematical modeling." },
  { title: "Chemistry", content: "Exploring organic, inorganic, and physical chemistry, with focuses on green chemistry and material science." },
  { title: "Computer Science and Engineering", content: "Innovating in artificial intelligence, machine learning, cyber security, and data science." },
  { title: "Electrical and Electronics Engineering", content: "Research in power systems, renewable energy, electric vehicles, and smart grids." },
  { title: "Electronics and Communication Engineering", content: "Advancing 5G/6G technologies, IoT, signal processing, and VLSI design." },
  { title: "Mechanical Engineering", content: "Focusing on thermal engineering, robotics, advanced manufacturing, and automotive design." }
];

const AcademicResearch = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="dept-programmes" style={{ background: 'var(--cream)', padding: '60px 0' }}>
      <div className="dept-programmes-inner" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div className="prog-layout" style={{ gridTemplateColumns: '1fr', border: 'none' }}>
          
          {/* Main UI Widget Wrapped Card */}
          <div className="prog-detail" style={{ border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', padding: '40px', background: '#fff' }}>
            
            <div className="prog-detail-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
              <div>
                <span className="s-tag">OPPORTUNITIES</span>
                <h2 className="s-title" style={{ marginTop: '5px' }}>Academic <em>Research</em></h2>
                <div className="gold-bar" style={{ margin: '15px 0 0 0' }}></div>
              </div>
              <button className="btn-gold" style={{ padding: '10px 24px', border: 'none', background: 'var(--gold)', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Explore Research</button>
            </div>
            
            <p className="prog-desc" style={{ fontSize: "16px", lineHeight: '1.8', color: 'var(--gray)', marginBottom: '25px' }}>
              SRM Institute of Science and Technology, Tiruchirappalli organizes Conferences, Seminars and Workshops periodically. These
              activities and forums help expose young minds to the latest innovations and scientific trends, thereby generating an interest in
              research.
            </p>
            
            <div className="prog-eligibility" style={{ marginBottom: "40px", display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ width: "4px", height: "40px", background: "var(--gold)", borderRadius: "2px" }}></div>
                <p style={{ margin: 0, fontSize: "16px", color: 'var(--text)', lineHeight: '1.6' }}>
                    Students are also encouraged to take up innovative, socially relevant research projects. Such projects are funded by SRM Institute
                    of Science and Technology, Tiruchirappalli.
                </p>
            </div>

            {/* Injected Accordion Widget */}
            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--navy)", marginBottom: "20px", fontFamily: "'Playfair Display', serif", borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
              Research Areas
            </h3>

            <div style={{ textAlign: "left" }}>
              {researchAreas.map((area, index) => (
                <div 
                  key={index} 
                  style={{ 
                    border: '1px solid var(--border)',
                    borderBottom: index === researchAreas.length - 1 ? '1px solid var(--border)' : 'none',
                    background: openIndex === index ? 'rgba(200, 149, 42, 0.03)' : '#fff',
                    transition: 'all 0.3s'
                  }}
                >
                  <button 
                    onClick={() => toggleAccordion(index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '16px 20px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: openIndex === index ? 'var(--gold)' : 'var(--navy)',
                      outline: 'none',
                      textAlign: 'left',
                      transition: 'color 0.3s'
                    }}
                  >
                    {openIndex === index ? <FaMinus style={{ flexShrink: 0, color: 'var(--gold)' }} /> : <FaPlus style={{ flexShrink: 0, color: 'var(--gold)' }} />}
                    {area.title}
                  </button>
                  
                  <div 
                    style={{ 
                      maxHeight: openIndex === index ? '200px' : '0', 
                      overflow: 'hidden', 
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      padding: openIndex === index ? '0 20px 20px 48px' : '0 20px 0 48px',
                      opacity: openIndex === index ? 1 : 0
                    }}
                  >
                    <p style={{ color: 'var(--gray)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                      {area.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicResearch;
