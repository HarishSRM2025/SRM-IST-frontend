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
  programme.name ||
  programme.programmeName ||
  programme.shortName ||
  'Untitled Programme'
);

const Academics = () => {
  const [institutions, setInstitutions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeInstitution, setActiveInstitution] = useState(null);
const [activeSchool, setActiveSchool] = useState({});

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    const fetchAcademics = async () => {
      setLoading(true);
      setError(null);
      try {
        const [institutionRes, schoolsRes, schoolProgrammesRes, institutionProgrammesRes, schoolDivisionsRes, schoolDivisionProgrammesRes] = await Promise.all([
          fetch(`${apiUrl}/institution/getall`),
          fetch(`${apiUrl}/schools/getall`),
          fetch(`${apiUrl}/schools/programmes/getall`),
          fetch(`${apiUrl}/institution/programmes/getall`),
          fetch(`${apiUrl}/school-division/getall`),
          fetch(`${apiUrl}/school-division/programmes/getall`),
        ]);

        if (!institutionRes.ok || !schoolsRes.ok || !schoolProgrammesRes.ok || !institutionProgrammesRes.ok || !schoolDivisionsRes.ok || !schoolDivisionProgrammesRes.ok) {
          throw new Error('Unable to fetch academics data');
        }

        const [institutionJson, schoolsJson, schoolProgrammesJson, institutionProgrammesJson, schoolDivisionsJson, schoolDivisionProgrammesJson] = await Promise.all([
          institutionRes.json(),
          schoolsRes.json(),
          schoolProgrammesRes.json(),
          institutionProgrammesRes.json(),
          schoolDivisionsRes.json(),
          schoolDivisionProgrammesRes.json(),
        ]);

        const institutionList = getArrayPayload(institutionJson);
        const schoolList = getArrayPayload(schoolsJson);
        const schoolProgrammeList = getArrayPayload(schoolProgrammesJson);
        const institutionProgrammeList = getArrayPayload(institutionProgrammesJson);
        const schoolDivisionList = getArrayPayload(schoolDivisionsJson);
        const schoolDivisionProgrammeList = getArrayPayload(schoolDivisionProgrammesJson);

        const schoolsByInstitution = schoolList.reduce((acc, school) => {
          const institutionId = getSchoolInstitutionId(school);
          if (!institutionId) return acc;
          if (!acc[institutionId]) acc[institutionId] = [];
          acc[institutionId].push(school);
          return acc;
        }, {});

        const schoolProgrammesBySchool = schoolProgrammeList.reduce((acc, programme) => {
          const schoolId = getProgrammeSchoolId(programme);
          if (!schoolId) return acc;
          if (!acc[schoolId]) acc[schoolId] = [];
          acc[schoolId].push(programme);
          return acc;
        }, {});

        const schoolDivisionsById = schoolDivisionList.reduce((acc, division) => {
          const divisionId = getId(division);
          if (divisionId) acc[divisionId] = division;
          return acc;
        }, {});

        const schoolDivisionProgrammesBySchool = schoolDivisionProgrammeList.reduce((acc, programme) => {
          const divisionId = getId(programme.schoolDivisionId);
          const division = schoolDivisionsById[divisionId];
          const schoolId = division ? getId(division.schoolId) || getId(division.school) : '';
          if (!schoolId) return acc;
          if (!acc[schoolId]) acc[schoolId] = [];
          acc[schoolId].push(programme);
          return acc;
        }, {});

        const institutionProgrammesByInstitution = institutionProgrammeList.reduce((acc, programme) => {
          const institutionId = getId(programme.institutionId) || getId(programme.institution) || getId(programme.instituteId);
          if (!institutionId) return acc;
          if (!acc[institutionId]) acc[institutionId] = [];
          acc[institutionId].push(programme);
          return acc;
        }, {});

        const groupedInstitutions = institutionList
          .map((institution) => {
            const institutionId = getId(institution);
            const schools = (schoolsByInstitution[institutionId] || [])
              .map((school) => {
                const schoolId = getId(school);
                const programmes = [
                  ...(schoolProgrammesBySchool[schoolId] || []),
                  ...(schoolDivisionProgrammesBySchool[schoolId] || []),
                ];

                return {
                  ...school,
                  programmes,
                };
              })
              .filter((school) => school.programmes.length > 0);

            const institutionProgrammes = institutionProgrammesByInstitution[institutionId] || [];
            const programmeCount = schools.reduce(
              (sum, school) => sum + school.programmes.length,
              0
            ) + institutionProgrammes.length;

            return { ...institution, schools, institutionProgrammes, programmeCount };
          })
          .filter((institution) => institution.schools.length > 0 || institution.institutionProgrammes.length > 0);

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
  const handleInstitutionToggle = (index) => {
    setActiveInstitution(activeInstitution === index ? null : index);
  };

  const handleSchoolToggle = (institutionIndex, schoolIndex) => {
    const key = `${institutionIndex}-${schoolIndex}`;

    setActiveSchool((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
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
            {loading && (
              <div className="ac-status ac-loading">
                <span className="ac-spinner" aria-hidden="true"></span>
                Loading academic programmes…
              </div>
            )}

            {!loading && error && (
              <div className="ac-status ac-error">{error}</div>
            )}

            {!loading && !error && institutions.length === 0 && (
              <div className="ac-status">
                Academic programmes will be published here soon.
              </div>
            )}

            {!loading && !error && institutions.map((institution, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={institution._id || institution.id || index} className="prog-panel">
                  <button
                    type="button"
                    className={`prog-item ${isOpen ? 'on' : ''}`}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="prog-l">
                      <span className="prog-dot"></span>
                      <span className="prog-name">{institution.name || 'Untitled Institution'}</span>
                    </div>
                    <div className="prog-r">
                      <span className="prog-ct">
                        {institution.programmeCount} program{institution.programmeCount === 1 ? '' : 's'}
                      </span>
                      {isOpen ? <FaChevronUp /> : <FaChevronRight />}
                    </div>
                  </button>

                  <div className={`ac-collapse ${isOpen ? 'open' : ''}`}>
                    <div className="ac-collapse-inner">
                      <div className="ac-institution-content">
                        {institution.description && <p className="ac-inst-desc">{institution.description}</p>}

                        <div className="ac-school-list">
                          {institution.institutionProgrammes.length > 0 && (
                            <div className="ac-school-block">
                              <div className="ac-school-head">
                                <h3>Institution Programmes</h3>
                                <span className="ac-school-count">{institution.institutionProgrammes.length}</span>
                              </div>
                              <div className="dept-list ac-programme-list">
                                {institution.institutionProgrammes.map((programme, programmeIndex) => (
                                  <span
                                    className="dept-tile ac-programme-chip"
                                    key={programme._id || programme.id || `institution-${programmeIndex}`}
                                  >
                                    {getProgrammeName(programme)}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {institution.schools.map((school, schoolIndex) => {
                          const key = `${index}-${schoolIndex}`;
                          const isSchoolOpen = activeSchool[key];                       

                          return (
                            <div className="ac-school-block" key={school._id || school.id}>
                              <button
                                type="button"
                                className={`ac-school-head ${isSchoolOpen ? "open" : ""}`}
                                onClick={() => handleSchoolToggle(index, schoolIndex)}
                              >
                                <h3>{school.name}</h3>
                                {isSchoolOpen ? <FaChevronUp /> : <FaChevronRight />}
                              </button>                       

                              {isSchoolOpen && (
                                <div className="dept-list ac-programme-list">
                                  {school.programmes.map((programme, programmeIndex) => (
                                    <span
                                      className="dept-tile ac-programme-chip"
                                      key={programme._id || programme.id || programmeIndex}
                                    >
                                      {getProgrammeName(programme)}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Side */}
          <div className="ac-img-side rev d2">
            <div className="ac-img-frame">
              <img src={AcademicsImage} alt="Students in an academic lab" />
              <span className="ac-corner ac-corner-tl" aria-hidden="true"></span>
              <span className="ac-corner ac-corner-br" aria-hidden="true"></span>
            </div>

            <div className="ac-hl">
              <div className="ac-hl-title">
                Industry-Integrated Curriculum
              </div>
              <p>
                Programs developed with industry partners — real-world projects
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