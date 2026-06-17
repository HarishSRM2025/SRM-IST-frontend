import React, { useState, useEffect } from "react";
import Breadcrum from "../Common/Breadcrum";
import { useLocation } from "react-router-dom";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy: #0c4da2;
    --gold: #c8952a;
    --gold2: #e0aa45;
    --cream: #f8f6f1;
    --white: #fff;
    --gray: #6b7280;
    --lgray: #f3f4f6;
    --border: #e5e7eb;
    --text: #1a2332;
    --TB: 38px;
    --NB: 68px;
  }

  .dept-hero {
    background: var(--navy);
    padding: 80px var(--NB) 0;
    position: relative;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .dept-hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .dept-breadcrumb {
    display: flex;
    gap: 8px;
    font-size: 12px;
    color: rgba(255,255,255,0.45);
    margin-bottom: 20px;
  }

  .dept-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--white);
  }

  .dept-hero-desc {
    color: rgba(255,255,255,0.65);
    margin-bottom: 25px;
  }

  .btn-gold {
    background: var(--gold);
    color: var(--navy);
    border: none;
    padding: 12px 24px;
    cursor: pointer;
  }

  .btn-outline {
    border: 1px solid #fff;
    color: #fff;
    background: transparent;
    padding: 12px 24px;
    cursor: pointer;
  }

  .dept-hero-img-wrap {
    position: relative;
  }

  .dept-hero-img,
  .dept-hero-img-placeholder {
    width: 100%;
    height: 320px;
    border-radius: 6px 6px 0 0;
  }

  .dept-hero-img {
    object-fit: cover;
  }

  .dept-hero-img-placeholder {
    background: linear-gradient(135deg, rgba(200,149,42,0.2), rgba(11,29,53,0.8));
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dept-hero-badge {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: white;
    padding: 10px 16px;
    border-radius: 6px;
    font-size: 14px;
  }

  /* Highlights */
  .dept-highlights-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .highlight-item {
    padding: 20px;
    border-right: 1px solid var(--border);
  }

  /* HOD */
  .dept-hod-inner {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    align-items: start;
  }

  .hod-card {
    background: var(--white);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #eee;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
  }

  .hod-card:hover {
    transform: translateY(-5px);
  }

  .hod-img-placeholder {
    height: 350px;
    width: 100%;
    background: #eee;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    .dept-hero-inner {
      grid-template-columns: 1fr;
    }

    .dept-highlights-inner {
      grid-template-columns: 1fr 1fr;
    }

    .dept-hod-inner {
      grid-template-columns: 1fr;
    }

    .dept-hero {
      padding: 60px 20px 0;
    }
  }
`;

const highlights = [
  { title: "NAAC A++ Accredited", desc: "Recognized for excellence." },
  { title: "Industry Curriculum", desc: "Built with industry partners." },
  { title: "Research Labs", desc: "Modern facilities." },
  { title: "Placement Support", desc: "Career-focused training." },
];

export default function DeptHero({ id, onVisibilityChange }) {
  const location = useLocation();
  const deptName = location.state?.deptName || "Computer Science Engineering";
  const deptCode = location.state?.deptCode || "CSE";

  const [hodData, setHodData] = useState(null);
  const [schoolData, setSchoolData] = useState(null);
  const [divisionData, setDivisionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchHOD = async () => {
      setLoading(true);
      setSchoolData(null);
      setDivisionData(null);
      setHodData(null);
      try {
        const sourceType = location.state?.sourceType;
        const schoolDivisionId = location.state?.schoolDivisionId;

        // Fetch all schools
        const schoolRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
        if (!schoolRes.ok) throw new Error("Failed to fetch schools");
        const schools = await schoolRes.json();
        
        // Find matching school
        const deptSlug = location.state?.deptSlug;
        let matchedSchool = null;

        if (Array.isArray(schools)) {
          if (location.state?.schoolId) {
            matchedSchool = schools.find(s => s._id === location.state.schoolId);
          }
          // 1. Try slug exact match
          if (!matchedSchool && deptSlug) {
            matchedSchool = schools.find(s => s.slug && s.slug.toLowerCase() === deptSlug.toLowerCase());
          }
          // 2. Try exact name match
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase() === deptName.toLowerCase());
          }
          // 3. Try inclusion match: database school name in deptName (e.g., School of Computing in Computer Science Engineering)
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && (
              deptName.toLowerCase().includes(s.name.toLowerCase()) || 
              (s.name.toLowerCase().includes("computing") && deptName.toLowerCase().includes("computer")) ||
              (s.name.toLowerCase().includes("management") && deptName.toLowerCase().includes("business"))
            ));
          }
          // 4. Try reverse inclusion match: deptName in database school name
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase().includes(deptName.toLowerCase()));
          }
          // 5. Try first word keyword match
          if (!matchedSchool) {
            const firstWord = deptName.split(" ")[0].toLowerCase();
            if (firstWord.length > 2) {
              matchedSchool = schools.find(s => s.name && s.name.toLowerCase().includes(firstWord));
            }
          }
        }

        if (sourceType === 'schoolDivision' && schoolDivisionId) {
          const divisionRes = await fetch(`${import.meta.env.VITE_API_URL}/school-division/get/${schoolDivisionId}`);
          if (divisionRes.ok) {
            const division = await divisionRes.json();
            if (division?._id) {
              setDivisionData(division);
            }
          }
        }

        if (matchedSchool) {
          setSchoolData(matchedSchool);
        }

        if (sourceType === 'schoolDivision' && schoolDivisionId) {
          const msgRes = await fetch(`${import.meta.env.VITE_API_URL}/school-division/hod-message/getall`);
          if (msgRes.ok) {
            const msgJson = await msgRes.json();
            const msgList = Array.isArray(msgJson)
              ? msgJson
              : (msgJson.data ? (Array.isArray(msgJson.data) ? msgJson.data : [msgJson.data]) : []);

            const match = msgList.find((m) => {
              const messageDivisionId = typeof m.schoolDivisionId === "object" ? m.schoolDivisionId?._id : m.schoolDivisionId;
              return messageDivisionId === schoolDivisionId;
            });
            if (match) {
              setHodData(match);
            }
          }
        } else if (matchedSchool) {
          const msgRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/hod-message/getall`);
          if (msgRes.ok) {
            const msgJson = await msgRes.json();
            const msgList = Array.isArray(msgJson) 
              ? msgJson 
              : (msgJson.data ? (Array.isArray(msgJson.data) ? msgJson.data : [msgJson.data]) : []);
            
            const match = msgList.find((m) => {
              const messageSchoolId = typeof m.school === "object" ? m.school?._id : m.school;
              return messageSchoolId === matchedSchool._id;
            });
            if (match) {
              setHodData(match);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching HOD message data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHOD();
  }, [deptName, location.state?.deptSlug, location.state?.schoolId, location.state?.schoolDivisionId, location.state?.sourceType]);

  const hodName = hodData?.hodName || "";
  const hodDesignation = hodData?.hodDesignation || "";
  const message = hodData?.message || hodData?.hodMessage || "";
  const hodImageFile = hodData?.hodImage?.split("\\").pop().split("/").pop();
  const imageUrl = hodData?.hodImage
    ? `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/uploads/${hodImageFile}`
    : "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360";

  const MAX_LENGTH = 850;
  const isLongMessage = message && message.length > MAX_LENGTH;
  const displayMessage = isLongMessage && !isExpanded 
    ? `${message.substring(0, MAX_LENGTH)}...` 
    : message;
  const aboutDepartment = divisionData?.about?.trim() || schoolData?.about?.trim() || "";

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(Boolean(aboutDepartment));
    }
  }, [aboutDepartment, loading, onVisibilityChange]);

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <Breadcrum
        title={deptName}
        paths={[{ name: 'Home', link: '/' }, { name: 'Schools', link: '/' }, { name: deptCode }]}
        bgImage="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop&q=80"
      />

      {/* Overview */}
      {aboutDepartment && (
        <section id={id} style={{ margin: "60px 0" }}>
          <div className="dept-programmes-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div className="dept-section-header" style={{ marginBottom: '30px' }}>
              <div>
                <div className="section-label" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Overview</div>
                <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '700', color: 'var(--navy)', margin: 0 }}>About the <em>{deptName.split(' ')[0]}</em></h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "start" }}>
              <div style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--gray)", textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                {aboutDepartment}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HOD */}

      {hodData && <section style={{ margin: "60px 0 0", backgroundColor: '#f8f6f1', padding: '50px 0' }}>
        <div className="dept-programmes-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="dept-section-header">
            <div>
              <div className="section-label">Message from Head</div>
              <h2 className="section-title">Our <em>Head of Department</em></h2>
            </div>
          </div>

          <div className="dept-hod-inner">
            <div className="hod-card">
              <div className="hod-img-placeholder">
                <img
                  src={imageUrl}
                  alt={hodName}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block"
                  }}
                />
              </div>
              <div className="hod-body-content">
                <strong>{hodName}</strong>
                <p>{hodDesignation}</p>
              </div>
            </div>

            <div>
              <h2 className="section-title"><em>Welcome</em> Message</h2>
              <p style={{ textAlign: 'justify', whiteSpace: 'pre-wrap' }}>
                {displayMessage}
                {isLongMessage && (
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--navy)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      padding: '0',
                      marginLeft: '8px',
                      fontStyle: 'normal',
                      fontSize: '14px',
                      textDecoration: 'underline',
                      fontFamily: 'inherit'
                    }}
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>}
      
    </>
  );
}
