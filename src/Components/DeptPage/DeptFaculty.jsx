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

const FacultyResearchList = ({ rows, getTitle, getMeta }) => (
  <div className="faculty-research-list">
    {rows.map((row, index) => (
      <div className="faculty-research-item" key={row._id || index}>
        <div className="faculty-research-title">{getTitle(row)}</div>
        <div className="faculty-research-meta">{getMeta(row)}</div>
      </div>
    ))}
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

  const tabs = research ? [
    hasItems(research.awards_and_achievements) && {
      key: "awards",
      label: "Awards",
      count: research.awards_and_achievements.length,
      content: (
        <FacultyResearchCards
          rows={research.awards_and_achievements}
          getTitle={(item) => item.awardName || "-"}
          getMeta={(item) => [formatDate(item.awardDate), item.awardBy].filter(Boolean).join(" | ")}
          getDescription={(item) => item.awardLocation}
        />
      ),
    },
    hasItems(research.publications) && {
      key: "publications",
      label: "Publications",
      count: research.publications.length,
      content: (
        <FacultyResearchTable
          rows={research.publications}
          columns={[
            { key: "title", label: "Title" },
            { key: "journal", label: "Journal" },
            { key: "year", label: "Year" },
            { key: "coAuthors", label: "Co-Authors" },
          ]}
        />
      ),
    },
    hasItems(research.patents) && {
      key: "patents",
      label: "Patents",
      count: research.patents.length,
      content: (
        <FacultyResearchTable
          rows={research.patents}
          columns={[
            { key: "patentName", label: "Name" },
            { key: "patentNumber", label: "Number" },
            { key: "country", label: "Country" },
            { key: "year", label: "Year" },
            { key: "status", label: "Status" },
          ]}
        />
      ),
    },
    hasItems(research.grants) && {
      key: "grants",
      label: "Grants",
      count: research.grants.length,
      content: (
        <FacultyResearchTable
          rows={research.grants}
          columns={[
            { key: "grantTitle", label: "Title" },
            { key: "fundingAgency", label: "Agency" },
            { key: "amount", label: "Amount", render: (item) => formatAmount(item.amount) },
            { key: "year", label: "Year" },
            { key: "status", label: "Status" },
          ]}
        />
      ),
    },
    hasItems(research.conferences) && {
      key: "conferences",
      label: "Conferences",
      count: research.conferences.length,
      content: (
        <FacultyResearchCards
          rows={research.conferences}
          getTitle={(item) => item.conferenceName || "-"}
          getMeta={(item) => [item.conferenceLocation, formatDate(item.conferenceDate)].filter(Boolean).join(" | ")}
          getDescription={(item) => item.paperPresented}
        />
      ),
    },
    hasItems(research.workshop) && {
      key: "workshop",
      label: "Workshops",
      count: research.workshop.length,
      content: (
        <FacultyResearchCards
          rows={research.workshop}
          getTitle={(item) => item.workshopName || "-"}
          getMeta={(item) => [item.workshopLocation, formatDate(item.workshopDate)].filter(Boolean).join(" | ")}
        />
      ),
    },
    hasItems(research.fundedProject) && {
      key: "fundedProject",
      label: "Funded Projects",
      count: research.fundedProject.length,
      content: (
        <FacultyResearchTable
          rows={research.fundedProject}
          columns={[
            { key: "projectName", label: "Name" },
            { key: "fundingAgency", label: "Agency" },
            { key: "amount", label: "Amount", render: (item) => formatAmount(item.amount) },
            { key: "year", label: "Year" },
            { key: "status", label: "Status" },
          ]}
        />
      ),
    },
  ].filter(Boolean) : [];

  useEffect(() => {
    if (tabs.length > 0 && !tabs.some(tab => tab.key === activeTab)) {
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

  if (!research) return null;

  if (tabs.length === 0) return null;

  const currentTab = tabs.find(tab => tab.key === activeTab) || tabs[0];

  return (
    <div className="faculty-modal-section">
      <div className="fms-label">Research</div>
      <div className="faculty-research-tabs">
        {tabs.map(tab => (
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
      <div className="faculty-research-panel">
        {currentTab.content}
      </div>
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
    ? experience.flatMap(record => record.industryExperience || [])
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

export default function DeptFaculty({ id, onVisibilityChange, page }) {
  const location = useLocation();
  const navigate = useNavigate();
  const deptName = location.state?.deptName || "Computer Science Engineering";
  const deptSlug = location.state?.deptSlug;

  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      setLoading(true);
      try {
        // 1. Fetch all schools to find the matching one
        const schoolRes = await fetch(`${API_URL}/schools/getall`);
        if (!schoolRes.ok) throw new Error("Failed to fetch schools");
        const schools = await schoolRes.json();

        let matchedSchool = null;
        if (Array.isArray(schools)) {
          if (location.state?.schoolId) {
            matchedSchool = schools.find((s) => s._id === location.state.schoolId);
          }
          if (!matchedSchool && deptSlug) {
            matchedSchool = schools.find(
              (s) => s.slug && s.slug.toLowerCase() === deptSlug.toLowerCase()
            );
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(
              (s) => s.name && s.name.toLowerCase() === deptName.toLowerCase()
            );
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(
              (s) =>
                s.name &&
                (deptName.toLowerCase().includes(s.name.toLowerCase()) ||
                  (s.name.toLowerCase().includes("computing") &&
                    deptName.toLowerCase().includes("computer")) ||
                  (s.name.toLowerCase().includes("management") &&
                    deptName.toLowerCase().includes("business")))
            );
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(
              (s) =>
                s.name && s.name.toLowerCase().includes(deptName.toLowerCase())
            );
          }
          if (!matchedSchool) {
            const firstWord = deptName.split(" ")[0].toLowerCase();
            if (firstWord.length > 2) {
              matchedSchool = schools.find(
                (s) => s.name && s.name.toLowerCase().includes(firstWord)
              );
            }
          }
        }

        if (matchedSchool) {
          const facRes = await fetch(
            `${API_URL}/faculty/getfacultybyschool/${matchedSchool._id}`
          );
          if (facRes.ok) {
            const facJson = await facRes.json();
            const list = Array.isArray(facJson)
              ? facJson
              : facJson.data
              ? Array.isArray(facJson.data)
                ? facJson.data
                : [facJson.data]
              : [];

            if(page === "Division"){
              setFaculty(list);
            }else{
              const filteredFaculty = list.filter(
                (faculty) => faculty.schoolDivision == undefined
              );
              setFaculty(filteredFaculty);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching faculty:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [deptName, deptSlug, location.state?.schoolId]);

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(faculty.length > 0);
    }
  }, [faculty.length, loading, onVisibilityChange]);

  const getFacultyImage = (f) => {
    if (f.facultyImage) {
      return `${API_BASE}/${f.facultyImage.replace(/\\/g, "/")}`;
    }
    return "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360";
  };

  const handleFacultyClick = (f) => {
    navigate("/faculty-detail", {
      state: {
        facultyId: f._id,
        backPath: location.pathname,
        backLabel: "Back to Department",
        // Preserve current location state for back navigation
        deptName: location.state?.deptName,
        deptSlug: location.state?.deptSlug,
        schoolId: location.state?.schoolId,
        divisionId: location.state?.divisionId,
        divisionName: location.state?.divisionName,
        divisionSlug: location.state?.divisionSlug,
      },
    });
  };

  if (loading) {
    return (
      <section id={id} className="dept-faculty">
        <div className="dept-faculty-inner">
          <div className="dept-section-header">
            <div>
              <div className="dept-section-label">Our Team</div>
              <h2 className="dept-section-title">
                Meet Our <em>Faculty</em>
              </h2>
            </div>
          </div>
          <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>
            Loading faculty members...
          </div>
        </div>
      </section>
    );
  }

  if (!loading && faculty.length === 0) {
    return null;
  }

  return (
    <section id={id} className="dept-faculty">
      <div className="dept-faculty-inner">
        <div className="dept-section-header">
          <div>
            <div className="dept-section-label">Our Team</div>
            <h2 className="dept-section-title">
              Meet Our <em>Faculty</em>
            </h2>
          </div>
        </div>

        <div className="faculty-grid">
          {faculty.map((f) => (
            <div
              className="faculty-card"
              key={f._id}
              onClick={() => handleFacultyClick(f)}
            >
              <div className="faculty-photo" />
              <img
                src={getFacultyImage(f)}
                alt={f.facultyName}
                width={"100%"}
                style={{ height: "300px", objectFit: "fill" }}
              />
              <div className="faculty-card-body">
                <div className="faculty-name">{f.facultyName}</div>
                <div className="faculty-designation">{f.designation}</div>

                <div className="faculty-tags">
                  {(() => {
                    const tags = [];
                    for (let i = 0; i < Math.min((f.subjects || []).length, 3); i++) {
                      tags.push(
                        <div className="faculty-tag" key={i}>
                          {f.subjects[i].subject}
                        </div>
                      );
                    }
                    return tags;
                  })()}
                </div>

                <div className="faculty-exp">
                  <div className="faculty-exp-dot" />
                  {f.facultyExperience}+ Years Experience
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

