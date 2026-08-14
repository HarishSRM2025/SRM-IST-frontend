import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE = API_URL.replace("/api", "");

const formatDate = (value) => {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatAmount = (value) => {
  if (value === undefined || value === null || value === "") return "-";
  const amount = Number(value);
  if (Number.isNaN(amount)) return value;
  return amount.toLocaleString("en-IN");
};

const formatItemToString = (item) => {
  if (!item) return "";
  if (typeof item === "string") return item.trim();
  if (item.title) {
    return [item.title, item.journal, item.year, item.coAuthors].filter(Boolean).join(" - ");
  }
  if (item.awardName) {
    return [item.awardName, item.awardBy, item.awardDate ? formatDate(item.awardDate) : "", item.awardLocation].filter(Boolean).join(" - ");
  }
  if (item.projectName) {
    return [item.projectName, item.fundingAgency, item.amount ? `₹${formatAmount(item.amount)}` : "", item.year, item.status].filter(Boolean).join(" - ");
  }
  if (item.role || item.companyName) {
    return [item.role, item.companyName, item.startDate ? formatDate(item.startDate) : ""].filter(Boolean).join(" at ");
  }
  if (item.patentName) {
    return [item.patentName, item.patentNumber ? `Pat No: ${item.patentNumber}` : "", item.country, item.year, item.status].filter(Boolean).join(" - ");
  }
  if (item.conferenceName) {
    return [item.conferenceName, item.conferenceLocation, item.conferenceDate ? formatDate(item.conferenceDate) : "", item.paperPresented].filter(Boolean).join(" - ");
  }
  if (item.workshopName) {
    return [item.workshopName, item.workshopLocation, item.workshopDate ? formatDate(item.workshopDate) : ""].filter(Boolean).join(" - ");
  }
  if (item.grantTitle) {
    return [item.grantTitle, item.fundingAgency, item.amount ? `₹${formatAmount(item.amount)}` : "", item.year, item.status].filter(Boolean).join(" - ");
  }
  return Object.values(item).filter((v) => typeof v === "string" && v.trim() !== "").join(" - ");
};

const extractPoints = (arr) => {
  if (!Array.isArray(arr)) return [];
  return arr.map(formatItemToString).filter((s) => Boolean(s && s.trim()));
};

/* ─── List Component for Points ──────────────────────────────────── */

const FacultyPointsList = ({ points }) => {
  if (!points || points.length === 0) return null;

  return (
    <div className="faculty-points-list" style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
      {points.map((point, index) => (
        <div
          key={index}
          className="faculty-point-item"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderLeft: "4px solid #1e3a8a",
            borderRadius: "8px",
            padding: "12px 16px",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#334155",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            transition: "all 0.2s ease"
          }}
        >
          <span
            style={{
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "#eff6ff",
              color: "#1d4ed8",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontWeight: "700",
              flexShrink: 0,
              marginTop: "2px"
            }}
          >
            {index + 1}
          </span>
          <span style={{ flex: 1, wordBreak: "break-word" }}>{point}</span>
        </div>
      ))}
    </div>
  );
};

/* ─── Faculty Research Sections ──────────────────────────────────── */

const FacultyResearchSections = ({ research, loading }) => {
  const [activeTab, setActiveTab] = useState("");

  if (loading) {
    return (
      <div className="faculty-modal-section">
        <div className="fms-label">Research & Achievements</div>
        <div className="faculty-research-empty">Loading research details...</div>
      </div>
    );
  }

  if (!research) return null;

  const publications = extractPoints(research.publications);
  const awards = extractPoints(research.awards_and_achievements);
  const invitedLectures = extractPoints(research.invited_lectures || research.invitedLectures);
  const fundedProjects = extractPoints(research.fundedProject || research.fundedProjects);
  const memberships = extractPoints(research.professional_memberships || research.professionalMemberships);
  const patents = extractPoints(research.patents);
  const grants = extractPoints(research.grants);
  const conferences = extractPoints(research.conferences);
  const workshops = extractPoints(research.workshop);

  const tabs = [
    publications.length > 0 && {
      key: "publications",
      label: "Publications",
      count: publications.length,
      content: <FacultyPointsList points={publications} />,
    },
    awards.length > 0 && {
      key: "awards",
      label: "Awards / Achievements",
      count: awards.length,
      content: <FacultyPointsList points={awards} />,
    },
    invitedLectures.length > 0 && {
      key: "invited_lectures",
      label: "Invited Lectures",
      count: invitedLectures.length,
      content: <FacultyPointsList points={invitedLectures} />,
    },
    fundedProjects.length > 0 && {
      key: "funded_projects",
      label: "Funded Projects",
      count: fundedProjects.length,
      content: <FacultyPointsList points={fundedProjects} />,
    },
    memberships.length > 0 && {
      key: "memberships",
      label: "Professional Society Membership",
      count: memberships.length,
      content: <FacultyPointsList points={memberships} />,
    },
    patents.length > 0 && {
      key: "patents",
      label: "Patents",
      count: patents.length,
      content: <FacultyPointsList points={patents} />,
    },
    grants.length > 0 && {
      key: "grants",
      label: "Grants",
      count: grants.length,
      content: <FacultyPointsList points={grants} />,
    },
    conferences.length > 0 && {
      key: "conferences",
      label: "Conferences",
      count: conferences.length,
      content: <FacultyPointsList points={conferences} />,
    },
    workshops.length > 0 && {
      key: "workshops",
      label: "Workshops",
      count: workshops.length,
      content: <FacultyPointsList points={workshops} />,
    },
  ].filter(Boolean);

  useEffect(() => {
    if (tabs.length > 0 && !tabs.some((tab) => tab.key === activeTab)) {
      setActiveTab(tabs[0].key);
    }
  }, [activeTab, tabs]);

  if (tabs.length === 0) return null;

  const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  return (
    <div className="faculty-modal-section">
      <div className="fms-label">Research & Professional Activities</div>
      <div className="faculty-research-tabs" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        {tabs.map((tab) => (
          <button
            type="button"
            className={`faculty-research-tab ${currentTab.key === tab.key ? "active" : ""}`}
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            <span>{tab.count}</span>
          </button>
        ))}
      </div>
      <div className="faculty-research-panel">{currentTab.content}</div>
    </div>
  );
};

/* ─── Faculty Experience Section ─────────────────────────────────── */

const FacultyExperienceSection = ({ experience, loading }) => {
  if (loading) {
    return (
      <div className="faculty-modal-section">
        <div className="fms-label">Work Experience</div>
        <div className="faculty-research-empty">Loading experience details...</div>
      </div>
    );
  }

  const rawRows = Array.isArray(experience)
    ? experience.flatMap((record) => {
        const work = record.workExperience || [];
        const ind = record.industryExperience || [];
        return work.length > 0 ? work : ind;
      })
    : [];

  const points = extractPoints(rawRows);

  if (points.length === 0) return null;

  return (
    <div className="faculty-modal-section">
      <div className="fms-label">Work Experience</div>
      <FacultyPointsList points={points} />
    </div>
  );
};

/* ─── Main Page Component ────────────────────────────────────────── */

export default function FacultyDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const facultyId = location.state?.facultyId;
  const backPath = location.state?.backPath || -1;
  const backLabel = location.state?.backLabel || "Back";

  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [facultyResearch, setFacultyResearch] = useState(null);
  const [researchLoading, setResearchLoading] = useState(true);
  const [facultyExperience, setFacultyExperience] = useState([]);
  const [experienceLoading, setExperienceLoading] = useState(true);

  // Fetch faculty basic info
  useEffect(() => {
    if (!facultyId) {
      setLoading(false);
      return;
    }

    const fetchFaculty = async () => {
      try {
        const res = await fetch(`${API_URL}/faculty/getfacultybyid/${facultyId}`);
        if (res.ok) {
          const data = await res.json();
          setFaculty(data);
        }
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [facultyId]);

  // Fetch research + experience
  useEffect(() => {
    if (!facultyId) {
      setResearchLoading(false);
      setExperienceLoading(false);
      return;
    }

    const fetchDetails = async () => {
      try {
        const [researchRes, experienceRes] = await Promise.all([
          fetch(`${API_URL}/faculty/getfacultyresearchbyfaculty/${facultyId}`),
          fetch(`${API_URL}/faculty/getfacultyexperiencebyfaculty/${facultyId}`),
        ]);

        if (researchRes.ok) {
          setFacultyResearch(await researchRes.json());
        }
        if (experienceRes.ok) {
          const data = await experienceRes.json();
          setFacultyExperience(Array.isArray(data) ? data : data ? [data] : []);
        }
      } catch (error) {
        console.error("Error fetching faculty details:", error);
      } finally {
        setResearchLoading(false);
        setExperienceLoading(false);
      }
    };

    fetchDetails();
  }, [facultyId]);

  const getFacultyImage = (f) => {
    if (f?.facultyImage) {
      const cleanPath = f.facultyImage.replace(/\\/g, "/");
      const fullPath = cleanPath.startsWith("public/") ? cleanPath : `public/uploads/${cleanPath}`;
      return `${API_BASE}/${fullPath}`;
    }
    return "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360";
  };

  if (loading) {
    return (
      <div className="faculty-detail-page">
        <div className="faculty-detail-inner">
          <div style={{ textAlign: "center", padding: "120px 0", color: "var(--gray)", fontSize: "15px" }}>
            Loading faculty details...
          </div>
        </div>
      </div>
    );
  }

  if (!faculty) {
    return (
      <div className="faculty-detail-page">
        <div className="faculty-detail-inner">
          <div style={{ textAlign: "center", padding: "120px 0" }}>
            <div style={{ fontSize: "18px", fontWeight: "600", color: "var(--navy)", marginBottom: "12px" }}>
              Faculty Not Found
            </div>
            <div style={{ fontSize: "14px", color: "var(--gray)", marginBottom: "24px" }}>
              The faculty member you are looking for could not be found.
            </div>
            <button className="btn-gold" onClick={() => navigate(backPath, { state: location.state })}>
              ← {backLabel}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="faculty-detail-page">
      {/* Hero Header */}
      <div className="faculty-detail-hero">
        <div className="faculty-detail-hero-inner">
          <button
            className="faculty-detail-back"
            onClick={() => navigate(backPath, { state: location.state })}
          >
            ← {backLabel}
          </button>

          <div className="faculty-detail-hero-row">
            <div className="faculty-detail-hero-content">
              <div className="faculty-detail-photo-wrap">
                <img
                  src={getFacultyImage(faculty)}
                  alt={faculty.facultyName}
                  className="faculty-detail-photo"
                />
              </div>
              <div className="faculty-detail-hero-info">
                <h1 className="faculty-detail-name">{faculty.facultyName}</h1>
                <div className="faculty-detail-desig">{faculty.designation}</div>
                <div className="faculty-detail-exp">
                  {faculty.facultyExperience}+ Years Experience
                </div>
                <div className="faculty-detail-email">{faculty.facultyEmail}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="faculty-detail-body">
        <div className="faculty-detail-inner">

          {/* Area of Interest */}
          {faculty.areaOfInterest && (
            <div className="faculty-modal-section">
              <div className="fms-label">Area of Interest</div>
              <div style={{ fontSize: "14px", color: "var(--gray)", lineHeight: "1.7" }}>
                {faculty.areaOfInterest}
              </div>
            </div>
          )}

          {/* Subjects */}
          {faculty.subjects && faculty.subjects.length > 0 && (
            <div className="faculty-modal-section">
              <div className="fms-label">Subjects</div>
              <div className="fms-chips">
                {faculty.subjects.map((s, i) => (
                  <div className="fms-chip" key={i}>{s.subject || s}</div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {faculty.educationDetails && faculty.educationDetails.length > 0 && (
            <div className="faculty-modal-section">
              <div className="fms-label">Education</div>
              <div className="faculty-research-table-wrap">
                <table className="faculty-research-table">
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Specialization</th>
                      <th>Institution</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.educationDetails.map((edu, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: "600", color: "var(--navy)" }}>{edu.degree}</td>
                        <td>{edu.specialization || "-"}</td>
                        <td>{edu.institution || "-"}</td>
                        <td>{edu.year || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Work Experience */}
          <FacultyExperienceSection experience={facultyExperience} loading={experienceLoading} />

          {/* Research & Activities */}
          <FacultyResearchSections research={facultyResearch} loading={researchLoading} />
        </div>
      </div>
    </div>
  );
}
