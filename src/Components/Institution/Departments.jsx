import { useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const Departments = ({ schools = [] }) => {
  const navigate = useNavigate();

  const openDepartment = (school) => {
    navigate('/departments', {
      state: {
        deptName: school.name,
        deptSlug: school.slug,
        deptCode: school.code || school.slug,
        sourceType: 'school',
        schoolId: school._id,
        schoolDivisionId: null
      }
    });
  };

  if (schools.length === 0) {
    return null;
  }

  return (
    <section className="inst-schools-section" id="departments">
      <div className="wrap">
        <div className="inst-schools-header">
          <span className="s-tag">Academic Schools</span>
          <h2 className="s-title">
            Explore Our <em>Schools</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div className="inst-school-grid">
          {schools.map((school, index) => (
            <div
              key={school._id || index}
              className="inst-school-card"
              onClick={() => openDepartment(school)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openDepartment(school)}
            >
              <div className="inst-school-card-top">
                <div className="inst-school-icon-wrapper">
                  <FaGraduationCap className="inst-school-icon" />
                </div>
                <span className="inst-school-badge">School</span>
              </div>

              <div className="inst-school-card-body">
                <h3 className="inst-school-name">{school.name}</h3>
                <p className="inst-school-about">
                  {school.about || 'Explore degree programmes, faculty experts, and research initiatives within this school.'}
                </p>
              </div>

              <div className="inst-school-card-footer">
                <span className="inst-school-cta">Explore School</span>
                <div className="inst-school-arrow-box">
                  <FaArrowRight className="inst-school-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
