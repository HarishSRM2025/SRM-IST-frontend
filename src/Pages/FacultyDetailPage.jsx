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

const hasItems = (items) => Array.isArray(items) && items.length > 0;

const formatDateRange = (startDate, endDate) => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";
  if (start === "-" && end === "Present") return "-";
  return `${start} - ${end}`;
};

/* ─── Reusable sub-components ────────────────────────────────────── */

const FacultyResearchTable = ({ columns, rows }) => (
  <div className="faculty-research-table-wrap">
    <table className="faculty-research-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row._id || index}>
            {columns.map((column) => (
              <td key={column.key}>{column.render ? column.render(row) : row[column.key] || "-"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FacultyResearchCards = ({ rows, getTitle, getMeta, getDescription }) => (
  <div className="faculty-research-card-grid">
    {rows.map((row, index) => (
      <div className="faculty-research-card" key={row._id || index}>
        <div className="faculty-research-card-title">{getTitle(row)}</div>
        <div className="faculty-research-card-meta">{getMeta(row)}</div>
        {getDescription && getDescription(row) && (
          <div className="faculty-research-card-desc">{getDescription(row)}</div>
        )}
      </div>
    ))}
  </div>
);

const FacultyResearchSections = ({ research, loading }) => {
  const [activeTab, setActiveTab] = useState("");

  const tabs = research
    ? [
      hasItems(research.awards_and_achievements) && {
        key: "awards", label: "Awards", count: research.awards_and_achievements.length,
        content: (
          <FacultyResearchCards rows={research.awards_and_achievements}
            getTitle={(item) => item.awardName || "-"}
            getMeta={(item) => [formatDate(item.awardDate), item.awardBy].filter(Boolean).join(" | ")}
            getDescription={(item) => item.awardLocation} />
        ),
      },
      hasItems(research.publications) && {
        key: "publications", label: "Publications", count: research.publications.length,
        content: (
          <FacultyResearchTable rows={research.publications} columns={[
            { key: "title", label: "Title" }, { key: "journal", label: "Journal" },
            { key: "year", label: "Year" }, { key: "coAuthors", label: "Co-Authors" },
          ]} />
        ),
      },
      hasItems(research.patents) && {
        key: "patents", label: "Patents", count: research.patents.length,
        content: (
          <FacultyResearchTable rows={research.patents} columns={[
            { key: "patentName", label: "Name" }, { key: "patentNumber", label: "Number" },
            { key: "country", label: "Country" }, { key: "year", label: "Year" }, { key: "status", label: "Status" },
          ]} />
        ),
      },
      hasItems(research.grants) && {
        key: "grants", label: "Grants", count: research.grants.length,
        content: (
          <FacultyResearchTable rows={research.grants} columns={[
            { key: "grantTitle", label: "Title" }, { key: "fundingAgency", label: "Agency" },
            { key: "amount", label: "Amount", render: (item) => formatAmount(item.amount) },
            { key: "year", label: "Year" }, { key: "status", label: "Status" },
          ]} />
        ),
      },
      hasItems(research.conferences) && {
        key: "conferences", label: "Conferences", count: research.conferences.length,
        content: (
          <FacultyResearchCards rows={research.conferences}
            getTitle={(item) => item.conferenceName || "-"}
            getMeta={(item) => [item.conferenceLocation, formatDate(item.conferenceDate)].filter(Boolean).join(" | ")}
            getDescription={(item) => item.paperPresented} />
        ),
      },
      hasItems(research.workshop) && {
        key: "workshop", label: "Workshops", count: research.workshop.length,
        content: (
          <FacultyResearchCards rows={research.workshop}
            getTitle={(item) => item.workshopName || "-"}
            getMeta={(item) => [item.workshopLocation, formatDate(item.workshopDate)].filter(Boolean).join(" | ")} />
        ),
      },
      hasItems(research.fundedProject) && {
        key: "fundedProject", label: "Funded Projects", count: research.fundedProject.length,
        content: (
          <FacultyResearchTable rows={research.fundedProject} columns={[
            { key: "projectName", label: "Name" }, { key: "fundingAgency", label: "Agency" },
            { key: "amount", label: "Amount", render: (item) => formatAmount(item.amount) },
            { key: "year", label: "Year" }, { key: "status", label: "Status" },
          ]} />
        ),
      },
    ].filter(Boolean)
    : [];

  useEffect(() => {
    if (tabs.length > 0 && !tabs.some((tab) => tab.key === activeTab)) {
      setActiveTab(tabs[0].key);
    }
  }, [activeTab, research]);

  if (loading) {
    return (
      <div className="faculty-modal-section">
        <div className="fms-label">Research</div>
        <div className="faculty-research-empty">Loading research details...</div>
      </div>
    );
  }

  if (!research || tabs.length === 0) return null;

  const currentTab = tabs.find((tab) => tab.key === activeTab) || tabs[0];

  return (
    <div className="faculty-modal-section">
      <div className="fms-label">Research</div>
      <div className="faculty-research-tabs">
        {tabs.map((tab) => (
          <button type="button" className={`faculty-research-tab ${currentTab.key === tab.key ? "active" : ""}`}
            key={tab.key} onClick={() => setActiveTab(tab.key)}>
            {tab.label}<span>{tab.count}</span>
          </button>
        ))}
      </div>
      <div className="faculty-research-panel">{currentTab.content}</div>
    </div>
  );
};

const FacultyExperienceSection = ({ experience, loading }) => {
  if (loading) {
    return (
      <div className="faculty-modal-section">
        <div className="fms-label">Industry Experience</div>
        <div className="faculty-research-empty">Loading experience details...</div>
      </div>
    );
  }

  const rows = Array.isArray(experience)
    ? experience.flatMap((record) => record.industryExperience || [])
    : [];

  if (rows.length === 0) return null;

  return (
    <div className="faculty-modal-section">
      <div className="fms-label">Industry Experience</div>
      <div className="faculty-research-card-grid">
        {rows.map((item, index) => (
          <div className="faculty-research-card" key={item._id || index}>
            <div className="faculty-research-card-title">{item.role || "-"}</div>
            <div className="faculty-research-card-meta">
              {[item.companyName, formatDateRange(item.startDate, item.endDate)].filter(Boolean).join(" | ")}
            </div>
          </div>
        ))}
      </div>
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
      return `${API_BASE}/${f.facultyImage.replace(/\\/g, "/")}`;
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

            {/* Research Stats */}
            <div className="faculty-detail-stats">
              <div className="faculty-detail-stat">
                <div className="faculty-detail-stat-value">
                  {facultyResearch?.publications?.length ?? 0}
                </div>
                <div className="faculty-detail-stat-label">Publications</div>
              </div>
              <div className="faculty-detail-stat">
                <div className="faculty-detail-stat-value">
                  {(facultyResearch?.conferences?.length ?? 0) + (facultyResearch?.workshop?.length ?? 0)}
                </div>
                <div className="faculty-detail-stat-label">Workshops</div>
              </div>
              <div className="faculty-detail-stat">
                <div className="faculty-detail-stat-value">
                  {facultyResearch?.fundedProject?.length ?? 0}
                </div>
                <div className="faculty-detail-stat-label">Funded Projects</div>
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
                  <div className="fms-chip" key={i}>{s.subject}</div>
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

          {/* Experience */}
          <FacultyExperienceSection experience={facultyExperience} loading={experienceLoading} />

          {/* Research */}
          <FacultyResearchSections research={facultyResearch} loading={researchLoading} />
        </div>
      </div>
    </div>
  );
}
