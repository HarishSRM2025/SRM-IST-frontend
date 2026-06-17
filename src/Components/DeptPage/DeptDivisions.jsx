import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const toArray = (json) => {
  if (Array.isArray(json)) return json;
  if (!json?.data) return [];
  return Array.isArray(json.data) ? json.data : [json.data];
};

export default function DeptDivisions({ id, onVisibilityChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const schoolId = location.state?.schoolId;
  const sourceType = location.state?.sourceType;
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDivisions = async () => {
      if (!schoolId || sourceType === "schoolDivision") {
        setDivisions([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/school-division/getall`);
        if (!response.ok) throw new Error("Failed to fetch school divisions");

        const list = toArray(await response.json());
        setDivisions(list.filter((division) => {
          const divisionSchoolId = typeof division.schoolId === "object" ? division.schoolId?._id : division.schoolId;
          return divisionSchoolId === schoolId;
        }));
      } catch (error) {
        console.error("Error fetching school divisions:", error);
        setDivisions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDivisions();
  }, [schoolId, sourceType]);

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(divisions.length > 0);
    }
  }, [divisions.length, loading, onVisibilityChange]);

  const openDivision = (division) => {
    navigate("/division-details", {
      state: {
        deptName: division.name,
        deptSlug: division.slug,
        deptCode: division.code || division.slug,
        sourceType: "schoolDivision",
        schoolId,
        schoolDivisionId: division._id
      }
    });
  };

  if (loading) {
    return (
      <section id={id} className="dept-programmes">
        <div className="dept-programmes-inner">
          <div style={{ textAlign: "center", padding: "40px 0", color: "var(--gray)" }}>
            Loading divisions...
          </div>
        </div>
      </section>
    );
  }

  if (divisions.length === 0) return null;

  return (
    <section id={id} className="dept-programmes" style={{ background: "var(--cream)" }}>
      <div className="dept-programmes-inner">
        <div className="dept-section-header">
          <div>
            <div className="section-label">Academic Divisions</div>
            <h2 className="section-title">
              Explore Our <em>Divisions</em>
            </h2>
          </div>
        </div>

        <div className="dept-list" style={{ gap: "15px", marginTop: "28px" }}>
          {divisions.map((division) => (
            <button
              key={division._id}
              onClick={() => openDivision(division)}
              type="button"
              className="dept-tile"
              title={division.about || division.name}
              style={{ padding: "16px 24px", fontSize: "15px" }}
            >
              {division.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
