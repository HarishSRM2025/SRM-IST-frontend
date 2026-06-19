import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DeptProgrammes({ id, onVisibilityChange }) {
  const location = useLocation();
  const deptName = location.state?.deptName || "Computer Science Engineering";

  const [programmesList, setProgrammesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchProgrammes = async () => {
      setLoading(true);
      try {
        const sourceType = location.state?.sourceType;
        const schoolDivisionId = location.state?.schoolDivisionId;
        const isDivision = sourceType === 'schoolDivision' && schoolDivisionId;

        if (isDivision) {
          // Fetch school division programmes
          const progRes = await fetch(`${import.meta.env.VITE_API_URL}/school-division/programmes/getall`);
          if (progRes.ok) {
            const progJson = await progRes.json();
            const allProgrammes = Array.isArray(progJson) 
              ? progJson 
              : (progJson.data ? (Array.isArray(progJson.data) ? progJson.data : [progJson.data]) : []);
            
            // Filter programmes belonging to the division
            const filtered = allProgrammes.filter(p => {
              const pDivisionId = typeof p.schoolDivisionId === 'object' ? p.schoolDivisionId?._id : p.schoolDivisionId;
              return pDivisionId === schoolDivisionId;
            });
            
            setProgrammesList(filtered);
          } else {
            setProgrammesList([]);
          }
        } else {
          // Fetch all schools
          const schoolRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
          if (!schoolRes.ok) throw new Error("Failed to fetch schools");
          const schools = await schoolRes.json();
          
          // Find matching school (using cascading fuzzy matching)
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
            // 3. Try inclusion match
            if (!matchedSchool) {
              matchedSchool = schools.find(s => s.name && (
                deptName.toLowerCase().includes(s.name.toLowerCase()) || 
                s.name.toLowerCase().includes("computing") && deptName.toLowerCase().includes("computer") ||
                s.name.toLowerCase().includes("management") && deptName.toLowerCase().includes("business")
              ));
            }
            // 4. Try reverse inclusion match
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

          if (matchedSchool) {
            // Fetch all programmes
            const progRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/programmes/getall`);
            if (progRes.ok) {
              const progJson = await progRes.json();
              const allProgrammes = Array.isArray(progJson) 
                ? progJson 
                : (progJson.data ? (Array.isArray(progJson.data) ? progJson.data : [progJson.data]) : []);
              
              // Filter programmes belonging to the matched school
              const filtered = allProgrammes.filter(p => {
                const pSchoolId = typeof p.school === 'object' ? p.school?._id : p.school;
                return pSchoolId === matchedSchool._id;
              });
              
              setProgrammesList(filtered);
            } else {
              setProgrammesList([]);
            }
          } else {
            setProgrammesList([]);
          }
        }
      } catch (error) {
        console.error("Error fetching programmes:", error);
        setProgrammesList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProgrammes();
  }, [deptName, location.state?.deptSlug, location.state?.schoolId, location.state?.schoolDivisionId, location.state?.sourceType]);

  const activeProgrammes = programmesList;

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(activeProgrammes.length > 0);
    }
  }, [activeProgrammes.length, loading, onVisibilityChange]);
  
  // Safe bounds check
  const activeIndex = active >= activeProgrammes.length ? 0 : active;
  const prog = activeProgrammes[activeIndex] || activeProgrammes[0];

  const handleKey = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setActive(index);
    }
  };

  // Helper to extract a degree category from shortName (e.g. "B.Tech CSE" -> "B.Tech")
  const getDegree = (p) => {
    if (p.degree) return p.degree;
    if (p.shortName) {
      const parts = p.shortName.split(' ');
      return parts[0];
    }
    return "Degree";
  };

  const getIntake = (p) => {
    return p.intake || "Full-Time";
  };

  if (!loading && activeProgrammes.length === 0) {
    return null;
  }

  return (
    <section id={id} className="dept-programmes">
      <div className="dept-programmes-inner">

        <div className="dept-section-header">
          <div>
            <div className="section-label">Academic Offerings</div>
            <h2 className="section-title">Our <em>Programmes</em></h2>
          </div>
        </div>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'var(--navy)' }}>
            <span style={{ fontSize: '18px', fontWeight: '500' }}>Loading academic offerings...</span>
          </div>
        ) : (
          <div className="prog-layout">

            {/* LEFT LIST */}
            <div className="prog-list">
              {activeProgrammes.map((p, i) => (
                <div
                  key={p._id || p.id || i}
                  className={`prog-list-item ${activeIndex === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => handleKey(e, i)}
                  role="button"
                  tabIndex={0}
                >
                  <div>
                    <div className="prog-list-name">{p.name}</div>
                    <div className="prog-list-degree">
                      {p.shortName} · {p.duration}
                    </div>
                  </div>

                  <div className="prog-list-arrow">›</div>
                </div>
              ))}
            </div>

            {/* RIGHT DETAIL */}
            {prog && (
              <div className="prog-detail">

                <div className="prog-detail-header">
                  <div>
                    <h3 className="prog-detail-title">{prog.name}</h3>

                    <div className="prog-detail-meta">
                      <div className="prog-meta-chip">
                        <span>{getDegree(prog)}</span>
                      </div>
                      <div className="prog-meta-chip">
                        <span>{prog.duration}</span>
                      </div>
                      <div className="prog-meta-chip">
                        <span>{getIntake(prog)}</span>
                      </div>
                    </div>
                  </div>

                  <button className="btn-gold" type="button">
                    Apply Now
                  </button>
                </div>

                <p className="prog-desc">{prog.overview}</p>

                <div className="prog-sub-title">Eligibility</div>
                <div className="prog-eligibility">{prog.eligibility}</div>

                {Array.isArray(prog.careerPath) && prog.careerPath.length > 0 && (
                  <>
                    <div className="prog-sub-title">Careers</div>
                    <div className="prog-careers-grid">
                      {prog.careerPath.map((c, i) => (
                        <div className="career-chip" key={i}>{c}</div>
                      ))}
                    </div>
                  </>
                )}

                <button className="prog-download" type="button" style={{ marginTop: '24px' }}>
                  Download Curriculum
                </button>

              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
