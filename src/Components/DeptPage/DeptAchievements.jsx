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

const PAGE_SIZE = 4;

function usePaginator(list) {
  const [page, setPage] = useState(0);
  useEffect(() => { setPage(0); }, [list]);
  const totalPages = Math.ceil(list.length / PAGE_SIZE);
  const items = list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  return {
    items,
    page,
    totalPages,
    total: list.length,
    prev: () => setPage(p => Math.max(0, p - 1)),
    next: () => setPage(p => Math.min(totalPages - 1, p + 1)),
    goto: setPage,
  };
}

function Pagination({ page, totalPages, onPrev, onNext, onDot }) {
  if (totalPages <= 1) return null;
  return (
    <div className="achieve-pagination">
      <button className="pg-btn" onClick={onPrev} disabled={page === 0}>
        &#8592; Prev
      </button>
      <div className="pg-center">
        <div className="pg-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`pg-dot${i === page ? ' active' : ''}`}
              onClick={() => onDot(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span className="pg-counter"> {page + 1} of {totalPages}</span>
      </div>
      <button className="pg-btn" onClick={onNext} disabled={page === totalPages - 1}>
        Next &#8594;
      </button>
    </div>
  );
}

export default function DeptAchievements({ id, onVisibilityChange }) {
  const location = useLocation();
  const deptName = location.state?.deptName || "Computer Science Engineering";
  const deptSlug = location.state?.deptSlug;

  const [facultyList, setFacultyList] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fa = usePaginator(facultyList);
  const sa = usePaginator(studentList);

  useEffect(() => {
    const fetchAchievements = async () => {
      setLoading(true);
      try {
        const schoolRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
        if (!schoolRes.ok) throw new Error("Failed to fetch schools");
        const schools = await schoolRes.json();

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
          const achievementsRes = await fetch(
            `${import.meta.env.VITE_API_URL}/${isDivision ? 'school-division' : 'schools'}/achievements/getall`
          );
          if (achievementsRes.ok) {
            const achievementsJson = await achievementsRes.json();
            const allAchievements = Array.isArray(achievementsJson)
              ? achievementsJson
              : (achievementsJson.data
                ? (Array.isArray(achievementsJson.data) ? achievementsJson.data : [achievementsJson.data])
                : []);

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

          {/* Faculty */}
          {facultyList.length > 0 && (
            <div className="achieve-section">
              <div className="achieve-col-title">Faculty Achievements</div>

              <div className="achieve-grid">
                {fa.items.map((a, i) => (
                  <div className="fa-card" key={i}>
                    <div className="fa-card-top">
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
                        className="achieve-img"
                      />
                    )}
                    {a.desc && <div className="fa-desc">{a.desc}</div>}
                  </div>
                ))}
              </div>

              <Pagination
                page={fa.page}
                totalPages={fa.totalPages}
                onPrev={fa.prev}
                onNext={fa.next}
                onDot={fa.goto}
              />
            </div>
          )}

          {/* Students */}
          {studentList.length > 0 && (
            <div className="achieve-section">
              <div className="achieve-col-title">Student Achievements</div>

              <div className="achieve-grid">
                {sa.items.map((s, i) => (
                  <div className="sa-card" key={i}>
                    <div className="sa-card-top">
                      <div className="sa-medal">{s.icon}</div>
                      <div className="sa-content">
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
                        className="achieve-img"
                      />
                    )}
                  </div>
                ))}
              </div>

              <Pagination
                page={sa.page}
                totalPages={sa.totalPages}
                onPrev={sa.prev}
                onNext={sa.next}
                onDot={sa.goto}
              />
            </div>
          )}

        </div>
      </section>
    </>
  );
}