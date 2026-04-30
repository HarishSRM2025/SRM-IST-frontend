import React, { useEffect, useRef, useState } from "react";
import { FaBook, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const Stats = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      setCount1(Math.floor(percent * 150));
      setCount2(Math.floor(percent * 50));
      setCount3(Math.floor(percent * 3500));

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
          <h2 className="s-title" style={{ color: '#fff', fontSize: '32px', marginTop: '10px', marginBottom: 0 }}>
            Institution <em>Highlights</em>
          </h2>
          <div className="gold-bar" style={{ margin: '15px auto 0' }}></div>
        </div>
        <div className="stats-row">

          {/* Stat 1 */}
          <div className="stat-box">
            <div className="stat-ico"><FaChalkboardTeacher style={{ fontSize: '36px', color: 'var(--gold)' }} /></div>
            <div className="stat-num">{count1}+</div>
            <div className="stat-lbl">Expert Faculty</div>
          </div>

          {/* Stat 2 */}
          <div className="stat-box">
            <div className="stat-ico"><FaBook style={{ fontSize: '36px', color: 'var(--gold)' }} /></div>
            <div className="stat-num">{count2}+</div>
            <div className="stat-lbl">Programs Offered</div>
          </div>

          {/* Stat 3 */}
          <div className="stat-box">
            <div className="stat-ico"><FaUserGraduate style={{ fontSize: '36px', color: 'var(--gold)' }} /></div>
            <div className="stat-num">{count3}+</div>
            <div className="stat-lbl">Successful Alumni</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
