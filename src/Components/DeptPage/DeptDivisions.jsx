import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLayerGroup, FaArrowRight } from "react-icons/fa";

const toArray = (json) => {
  if (Array.isArray(json)) return json;
  if (!json?.data) return [];
  return Array.isArray(json.data) ? json.data : [json.data];
};

export default function DeptDivisions({ id, onVisibilityChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const schoolId = location.state?.schoolId;
  const isElectricalAndElectronics = /electrical and electronics engineering/i.test(location.state?.deptName || '');
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
      <section id={id} className="school-div-section">
        <div className="school-div-inner">
          <div style={{ textAlign: "center", padding: "40px 0", color: "var(--gray)" }}>
            Loading divisions...
          </div>
        </div>
      </section>
    );
  }

  if (divisions.length === 0) return null;

  return (
    <section id={id} className="school-div-section">
      <div className="school-div-inner">
        <div className="school-div-header">
          <span className="s-tag">{isElectricalAndElectronics ? 'Academic Departments' : 'Academic Divisions'}</span>
          <h2 className="s-title">
            Explore Our <em>{isElectricalAndElectronics ? 'Department' : 'Divisions'}</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="school-div-grid">
          {divisions.map((division, index) => (
            <div
              key={division._id || index}
              className="school-div-card"
              onClick={() => openDivision(division)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openDivision(division)}
            >
              <div className="school-div-card-top">
                <div className="school-div-icon-box">
                  <FaLayerGroup className="school-div-icon" />
                </div>
                <span className="school-div-tag">{isElectricalAndElectronics ? 'Department' : 'Division'}</span>
              </div>

              <div className="school-div-card-body">
                <h3 className="school-div-name">{division.name}</h3>
                <p className="school-div-about">
                  {division.about || 'Specialized academic division offering focused curricula and hands-on learning.'}
                </p>
              </div>

              <div className="school-div-card-footer">
                <span className="school-div-cta">View {isElectricalAndElectronics ? 'Department' : 'Division'} Details</span>
                <div className="school-div-arrow-box">
                  <FaArrowRight className="school-div-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
