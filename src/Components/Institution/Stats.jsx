import React, { useEffect, useMemo, useRef, useState } from "react";

const Stats = ({ institutionId }) => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);
  const [stats, setStats] = useState(null);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      if (!institutionId) {
        setStats(null);
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/institution/stats/getall`);
        const json = await res.json();

        if (json.success && json.data) {
          const records = Array.isArray(json.data) ? json.data : [json.data];
          const match = records.find((record) => {
            const recordInstituteId = typeof record.instituteId === "object"
              ? record.instituteId?._id
              : record.instituteId;
            return recordInstituteId === institutionId;
          });

          if (match?.instituteStats?.length) {
            setStats(match.instituteStats.filter((stat) => stat.name && Number.isFinite(Number(stat.value))));
          } else {
            setStats(null);
          }
        } else {
          setStats(null);
        }
      } catch (err) {
        console.error("Failed to fetch institute stats", err);
        setStats(null);
      }
    };

    fetchStats();
  }, [institutionId]);

  useEffect(() => {
    setCounts((stats || []).map(() => 0));
    setStart(false);
  }, [stats]);

  useEffect(() => {
    if (!stats?.length) return;

    const current = sectionRef.current;
    if (!current) return;

    const currentRect = current.getBoundingClientRect();
    const isAlreadyVisible = currentRect.top < window.innerHeight && currentRect.bottom > 0;

    if (isAlreadyVisible) {
      setStart(true);
      return;
    }

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
  }, [stats]);

  const targetValues = useMemo(
    () => (stats || []).map((stat) => Number(stat.value) || 0),
    [stats]
  );

  useEffect(() => {
    if (!start) return;

    const duration = 2000;
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      setCounts(targetValues.map((value) => Math.floor(percent * value)));

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, targetValues]);

  if (!stats?.length) {
    return null;
  }

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
          {stats.map((stat, index) => (
            <div className="stat-box" key={`${stat.name}-${index}`}>
              <div className="stat-num">{counts[index] || 0}+</div>
              <div className="stat-lbl">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
