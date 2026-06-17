import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaTrophy,
  FaMedal,
  FaFlask,
  FaStar,
  FaNewspaper,
  FaRocket,
  FaCogs
} from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const awards = [
  {
    title: "Best Department Award",
    recipient: "Department of CSE",
    org: "SRM Group · 2024"
  },
  {
    title: "NBA Accreditation",
    recipient: "B.E. CSE",
    org: "NBA India · 2023–2026"
  },
  {
    title: "Top 10 CSE Departments",
    recipient: "NIRF Ranking",
    org: "Ministry of Education"
  }
];

// eslint-disable-next-line no-unused-vars
const newsletters = [
  {
    title: "CSE Chronicle",
    edition: "Vol. 5 · Jan 2025",
    icon: <FaNewspaper />
  },
  {
    title: "Tech Horizons",
    edition: "Vol. 4 · Jul 2024",
    icon: <FaRocket />
  },
  {
    title: "The Algorithm",
    edition: "Vol. 3 · Jan 2024",
    icon: <FaCogs />
  }
];

const getCategoryIcon = (category) => {
  switch (category) {
    case 'academic':
      return <FaStar />;
    case 'sports':
      return <FaMedal />;
    case 'cultural':
      return <FaStar />;
    case 'science-and-technology':
      return <FaFlask />;
    case 'other':
    default:
      return <FaTrophy />;
  }
};

export default function DeptAchievements({ id, onVisibilityChange }) {
  const location = useLocation();
  const deptName = location.state?.deptName || "Computer Science Engineering";
  const deptSlug = location.state?.deptSlug;

  const [facultyList, setFacultyList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      setLoading(true);
      try {
        // Fetch all schools
        const schoolRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
        if (!schoolRes.ok) throw new Error("Failed to fetch schools");
        const schools = await schoolRes.json();

        // Find matching school (using cascading fuzzy matching)
        let matchedSchool = null;
        if (Array.isArray(schools)) {
          if (location.state?.schoolId) {
            matchedSchool = schools.find(s => s._id === location.state.schoolId);
          }
          if (!matchedSchool && deptSlug) {
            matchedSchool = schools.find(s => s.slug && s.slug.toLowerCase() === deptSlug.toLowerCase());
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase() === deptName.toLowerCase());
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && (
              deptName.toLowerCase().includes(s.name.toLowerCase()) ||
              s.name.toLowerCase().includes("computing") && deptName.toLowerCase().includes("computer") ||
              s.name.toLowerCase().includes("management") && deptName.toLowerCase().includes("business")
            ));
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase().includes(deptName.toLowerCase()));
          }
        }

        const sourceType = location.state?.sourceType;
        const schoolDivisionId = location.state?.schoolDivisionId;
        const isDivision = sourceType === 'schoolDivision' && schoolDivisionId;
        const entityId = isDivision ? schoolDivisionId : matchedSchool?._id;

        if (entityId) {
          const achievementsRes = await fetch(`${import.meta.env.VITE_API_URL}/${isDivision ? 'school-division' : 'schools'}/achievements/getall`);
          if (achievementsRes.ok) {
            const achievementsJson = await achievementsRes.json();
            const allAchievements = Array.isArray(achievementsJson)
              ? achievementsJson
              : (achievementsJson.data ? (Array.isArray(achievementsJson.data) ? achievementsJson.data : [achievementsJson.data]) : []);

            const activeAchievements = allAchievements.filter(item => {
              const itemEntity = isDivision ? item.schoolDivisionId : item.school;
              const itemEntityId = typeof itemEntity === 'object' ? itemEntity?._id : itemEntity;
              return itemEntityId === entityId && item.status === 'active';
            });

            const getAchievementImage = (item) => {
              if (!item.achievementImage) return null;
              const fileName = item.achievementImage.split('\\').pop().split('/').pop();
              return `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/uploads/${fileName}`;
            };

            // Map and separate faculty/student achievements
            const mappedFaculty = activeAchievements
              .filter(item => item.achieverDesignation === 'faculty')
              .map(item => ({
                icon: getCategoryIcon(item.achievementCategory),
                title: item.title,
                name: item.achieverName,
                org: `${item.awardOrRecognition} · ${item.achievementType ? item.achievementType.replace('-', ' ') : ''}`,
                desc: item.description,
                image: getAchievementImage(item)
              }));

            const mappedStudents = activeAchievements
              .filter(item => item.achieverDesignation === 'student')
              .map(item => ({
                icon: getCategoryIcon(item.achievementCategory),
                student: item.achieverName,
                title: item.title,
                event: `${item.awardOrRecognition} · ${item.achievementType ? item.achievementType.replace('-', ' ') : ''}`,
                date: item.achievementDate
                  ? new Date(item.achievementDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                  : '',
                image: getAchievementImage(item)
              }));

            setFacultyList(mappedFaculty);
            setStudentList(mappedStudents);
          } else {
            setFacultyList([]);
            setStudentList([]);
          }
        } else {
          setFacultyList([]);
          setStudentList([]);
        }
      } catch (error) {
        console.error("Error loading achievements:", error);
        setFacultyList([]);
        setStudentList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, [deptName, deptSlug, location.state?.schoolId, location.state?.schoolDivisionId, location.state?.sourceType]);

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(facultyList.length > 0 || studentList.length > 0);
    }
  }, [facultyList.length, loading, onVisibilityChange, studentList.length]);

  if (!loading && facultyList.length === 0 && studentList.length === 0) {
    return null;
  }

  return (
    <>
      <section id={id} className="dept-achievements">
        <div className="dept-achievements-inner">

          {/* Header */}
          <div className="dept-section-header">
            <div>
              <div className="section-label">Honours & Recognition</div>
              <h2 className="section-title">
                Achievements & <em>Newsletter</em>
              </h2>
            </div>
          </div>

          {/* Top Layout */}
          <div className="achieve-layout" style={{ gridTemplateColumns: (facultyList.length === 0 || studentList.length === 0) ? '1fr' : '1fr 1fr' }}>

            {/* Faculty */}
            {facultyList.length > 0 && (
              <div>
                <div className="achieve-col-title">Faculty Achievements</div>

                {facultyList.map((a, i) => (
                  <div className="fa-card" key={i} style={{ flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', gap: '14px', width: '100%' }}>
                      <div className="fa-icon">{a.icon}</div>
                      <div className="fa-content">
                        <div className="fa-title">{a.title}</div>
                        <div className="fa-name">{a.name}</div>
                        <div className="fa-org">{a.org}</div>
                      </div>
                    </div>
                    {a.image && (
                      <img
                        src={a.image}
                        alt={a.title}
                        style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)' }}
                      />
                    )}
                    <div className="fa-desc" style={{ width: '100%' }}>{a.desc}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Students */}
            {studentList.length > 0 && (
              <div>
                <div className="achieve-col-title">Student Achievements</div>

                {studentList.map((s, i) => (
                  <div className="sa-card" key={i} style={{ flexDirection: 'column', alignItems: 'stretch', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '100%' }}>
                      <div className="sa-medal">{s.icon}</div>
                      <div className="sa-content" style={{ flex: 1 }}>
                        <div className="sa-student">{s.student}</div>
                        <div className="sa-title">{s.title}</div>
                        <div className="sa-event">{s.event}</div>
                      </div>
                      <div className="sa-date">{s.date}</div>
                    </div>
                    {s.image && (
                      <img
                        src={s.image}
                        alt={s.title}
                        style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border)' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Bottom Layout */}
          {/* <div className="achieve-bottom"> */}

          {/* Awards */}
          {/* <div>
              <div className="achieve-col-title">Awards</div>

              {awards.map((a, i) => (
                <div className="award-card" key={i}>
                  <div className="award-star">
                    <FaStar />
                  </div>
                  <div>
                    <div className="award-title">{a.title}</div>
                    <div className="award-recipient">{a.recipient}</div>
                    <div className="award-org">{a.org}</div>
                  </div>
                </div>
              ))}
            </div> */}

          {/* Newsletter */}
          {/* <div>
              <div className="achieve-col-title">Newsletter</div>

              {newsletters.map((n, i) => (
                <div className="newsletter-card" key={i}>
                  <div className="newsletter-cover"><img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width="100%" height="100%" alt="" /></div>
                  <div style={{ flex: 1 }}>
                    <div className="newsletter-title">{n.title}</div>
                    <div className="newsletter-edition">{n.edition}</div>

                    <button className="newsletter-dl">
                      <FaDownload size={12} />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}

            </div> */}

          {/* </div> */}
        </div>
      </section>
    </>
  );
}
