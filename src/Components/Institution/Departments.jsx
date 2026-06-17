import { useNavigate } from 'react-router-dom';

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
    <section className="ac-section" id="departments" style={{ backgroundColor: "var(--cream)" }}>
      <div className="wrap">
        <div>
          <span className="s-tag">Academic Schools</span>
          <h2 className="s-title">
            Explore Our <em>Schools</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        <div style={{ marginTop: '40px', display: 'grid', gap: '28px' }}>
          <div className="dept-list" style={{ gap: '15px' }}>
            {schools.map((school) => (
              <button
                key={school._id}
                onClick={() => openDepartment(school)}
                type="button"
                className="dept-tile"
                title={school.about || school.name}
                style={{ padding: '16px 24px', fontSize: '15px' }}
              >
                {school.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
