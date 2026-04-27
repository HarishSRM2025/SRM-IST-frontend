import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaGraduationCap, FaHandshake  } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const Stats = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 🔥 Intersection Observer (fixed)
  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.unobserve(current);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  // 🔥 Smooth Counter Animation
  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      setCount1(Math.floor(percent * 900));
      setCount2(Math.floor(percent * 6000));

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="s-title" style={{ color: '#fff', fontSize: '32px', marginTop: '10px', marginBottom: 0 }}>What Defines  <em>SRM</em></h2>
          <div className="gold-bar" style={{ margin: '15px auto 0' }}></div>
        </div>
        <div className="stats-row">

          {/* Stat 1 */}
          <div className="stat-box">
            <div className="stat-ico"><FaHandshake style={{ fontSize: '36px', color: 'var(--gold)', border:"0px solid "}} /></div>
            <div className="stat-num">60+</div>
            <div className="stat-lbl">Industry Partnerships</div>
          </div>

          {/* Stat 2 */}
          <div className="stat-box">
            <div className="stat-ico"><FaGraduationCap style={{ fontSize: '36px', color: 'var(--gold)', border:"0px solid "}} /></div>
            <div className="stat-num">6000+</div>
            <div className="stat-lbl">Annual Students</div>
          </div>

          {/* Stat 3 */}
          <div className="stat-box">
            <div className="stat-ico"><FaBuilding style={{ fontSize: '36px', color: 'var(--gold)', border:"0px solid "}} /></div>
            <div className="stat-num">
              30+
            </div>
            <div className="stat-lbl">Number of departments</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;