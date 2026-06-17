import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaChevronUp } from "react-icons/fa";
import AcademicsImage from '../../assets/images/home/academic-program.JPG';

const getArrayPayload = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (payload?.data) return [payload.data];
  return [];
};

const getId = (value) => {
  if (!value) return '';
  if (typeof value === 'object') return value._id || value.id || '';
  return value;
};

const getSchoolInstitutionId = (school) => (
  getId(school.institutionId) ||
  getId(school.institution) ||
  getId(school.institute)
);

const getProgrammeSchoolId = (programme) => (
  getId(programme.school) ||
  getId(programme.schoolId)
);

const getProgrammeName = (programme) => (
  programme.shortName ||
  programme.name ||
  programme.programmeName ||
  'Untitled Programme'
);

const Academics = () => {
  const [institutions, setInstitutions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    const fetchAcademics = async () => {
      setLoading(true);
      setError(null);
      try {
        const [institutionRes, schoolsRes, programmesRes] = await Promise.all([
          fetch(`${apiUrl}/institution/getall`),
          fetch(`${apiUrl}/schools/getall`),
          fetch(`${apiUrl}/schools/programmes/getall`),
        ]);

        if (!institutionRes.ok || !schoolsRes.ok || !programmesRes.ok) {
          throw new Error('Unable to fetch academics data');
        }

        const [institutionJson, schoolsJson, programmesJson] = await Promise.all([
          institutionRes.json(),
          schoolsRes.json(),
          programmesRes.json(),
        ]);

        const institutionList = getArrayPayload(institutionJson);
        const schoolList = getArrayPayload(schoolsJson);
        const programmeList = getArrayPayload(programmesJson);

        const schoolsByInstitution = schoolList.reduce((acc, school) => {
          const institutionId = getSchoolInstitutionId(school);
          if (!institutionId) return acc;
          if (!acc[institutionId]) acc[institutionId] = [];
          acc[institutionId].push(school);
          return acc;
        }, {});

        const programmesBySchool = programmeList.reduce((acc, programme) => {
          const schoolId = getProgrammeSchoolId(programme);
          if (!schoolId) return acc;
          if (!acc[schoolId]) acc[schoolId] = [];
          acc[schoolId].push(programme);
          return acc;
        }, {});

        const groupedInstitutions = institutionList.map((institution) => {
          const institutionId = getId(institution);
          const schools = (schoolsByInstitution[institutionId] || []).map((school) => ({
            ...school,
            programmes: programmesBySchool[getId(school)] || [],
          }));

          return {
            ...institution,
            schools,
          };
        });

        setInstitutions(groupedInstitutions);
      } catch (err) {
        console.error('Failed to load academics data:', err);
        setError('Could not load academic programmes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAcademics();
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ac-section" id="academics">
      <div className="wrap">

        {/* Header */}
        <div className="rev">
          <span className="s-tag">Academic Programs</span>
          <h2 className="s-title">
            Programs Designed for <em>Tomorrow's Leaders</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="ac-grid">

          {/* Programmes List */}
          <div className="prog-list rev">
            {loading && <div className="prog-panel ac-status">Loading academic programmes...</div>}
            {error && <div className="prog-panel ac-status ac-error">{error}</div>}
            {!loading && !error && institutions.length === 0 && (
              <div className="prog-panel ac-status">No academic programmes available at the moment.</div>
            )}

            {!loading && !error && institutions.map((institution, index) => (
              <div key={institution._id || institution.id || index} className="prog-panel">
                <button
                  type="button"
                  className={`prog-item ${activeIndex === index ? 'on' : ''}`}
                  onClick={() => handleToggle(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="prog-l">
                    <span className="prog-dot"></span>
                    <span className="prog-name">{institution.name || 'Untitled Institution'}</span>
                  </div>
                  <div className="prog-r">
                    <span className="prog-ct">View Programs</span>
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronRight />}
                  </div>
                </button>

                {activeIndex === index && (
                  <div className={`prog-content ac-institution-content ${activeIndex === index ? 'open' : ''}`}>
                    {institution.description && <p>{institution.description}</p>}

                    {institution.schools.length > 0 ? (
                      <div className="ac-school-list">
                        {institution.schools.map((school) => (
                          <div className="ac-school-block" key={school._id || school.id || school.name}>
                            <h3>{school.name || 'Untitled School'}</h3>
                            {school.programmes.length > 0 ? (
                              <div className="dept-list ac-programme-list">
                                {school.programmes.map((programme, programmeIndex) => (
                                  <span className="dept-tile ac-programme-chip" key={programme._id || programme.id || programmeIndex}>
                                    {getProgrammeName(programme)}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <p className="ac-empty-text">Programmes will be updated soon.</p>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="ac-empty-text">Schools and programmes will be updated soon.</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Side */}
          <div className="ac-img-side rev d2">
            <img src={AcademicsImage} alt="Students in an academic lab" />

            <div className="ac-hl">
              <div className="ac-hl-title">
                Industry-Integrated Curriculum
              </div>
              <p>
                Programs developed with industry partners - real-world projects
                and internships embedded in every course.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Academics;
