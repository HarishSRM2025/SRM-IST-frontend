import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE = API_URL.replace("/api", "");

const PAGE_SIZE = 8;

function Pagination({ page, totalPages, onPrev, onNext, onDot }) {
  if (totalPages <= 1) return null;
  return (
    <div className="faculty-pagination">
      <button className="faculty-pg-btn" onClick={onPrev} disabled={page === 0}>
        &#8592; Prev
      </button>
      <div className="faculty-pg-center">
        <div className="faculty-pg-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`faculty-pg-dot${i === page ? " active" : ""}`}
              onClick={() => onDot(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <span className="faculty-pg-counter"> {page + 1} of {totalPages}</span>
      </div>
      <button className="faculty-pg-btn" onClick={onNext} disabled={page === totalPages - 1}>
        Next &#8594;
      </button>
    </div>
  );
}

export default function InstituteFaculty({ institutionId }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!institutionId) return;
    const fetchFaculty = async () => {
      setLoading(true);
      try {
        const facRes = await fetch(
          `${API_URL}/faculty/getfacultybyinstitution/${institutionId}`
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
          setFaculty(list);
        }
      } catch (error) {
        console.error("Error fetching institute faculty:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [institutionId]);

  // Reset to page 0 when faculty list changes
  useEffect(() => { setCurrentPage(0); }, [faculty]);

  const totalPages = Math.ceil(faculty.length / PAGE_SIZE);
  const paginatedFaculty = faculty.slice(currentPage * PAGE_SIZE, currentPage * PAGE_SIZE + PAGE_SIZE);

  const getFacultyImage = (f) => {
    if (f?.facultyImage) {
      const cleanPath = f.facultyImage.replace(/\\/g, "/");
      const fullPath = cleanPath.startsWith("public/") ? cleanPath : `public/uploads/${cleanPath}`;
      return `${API_BASE}/${fullPath}`;
    }
    return "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360";
  };

  const handleFacultyClick = (f) => {
    navigate("/faculty-detail", {
      state: {
        facultyId: f._id,
        backPath: location.pathname,
        backLabel: "Back to Institution",
      },
    });
  };

  if (loading) {
    return (
      <section className="dept-faculty">
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
    <section className="dept-faculty">
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
          {paginatedFaculty.map((f) => (
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
                style={{ height: "260px", objectFit: "contain" }}
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

        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage(p => Math.max(0, p - 1))}
          onNext={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
          onDot={setCurrentPage}
        />
      </div>
    </section>
  );
}
