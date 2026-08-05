import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Breadcrum from '../Components/Common/Breadcrum';

const apiRoot = import.meta.env.VITE_API_URL || `${import.meta.env.VITE_API_BASE || 'http://localhost:3000'}/api`;
const apiBase = apiRoot.replace('/api', '');

const getFacultyImage = (f) => {
  if (f?.facultyImage) {
    const cleanPath = f.facultyImage.replace(/\\/g, '/');
    const fullPath = cleanPath.startsWith('public/') ? cleanPath : `public/uploads/${cleanPath}`;
    return `${apiBase}/${fullPath}`;
  }
  return "https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360";
};

const CenterDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [assignedFaculty, setAssignedFaculty] = useState([]);
  const [assignedStudents, setAssignedStudents] = useState([]);

  useEffect(() => {
    const fetchCenterAndFaculty = async () => {
      try {
        const res = await fetch(`${apiRoot}/research/${id}`);
        if (res.status === 404) return setError('Not found');
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const json = await res.json();
        setData(json);

        // Fetch research faculty assignments, faculty list, and student members
        const [assignmentsRes, facultyRes, studentRes] = await Promise.all([
          fetch(`${apiRoot}/research/faculty-members`),
          fetch(`${apiRoot}/faculty/getfaculty`),
          fetch(`${apiRoot}/research/student-members`)
        ]);

        let assignments = [];
        let facultyList = [];
        let studentMembers = [];

        if (assignmentsRes.ok) {
          assignments = await assignmentsRes.json();
        }
        if (facultyRes.ok) {
          facultyList = await facultyRes.json();
        }
        if (studentRes.ok) {
          studentMembers = await studentRes.json();
        }

        // Filter assignments for this research center
        const matchedAssignments = Array.isArray(assignments) 
          ? assignments.filter(item => {
              const centerId = typeof item.researchCenterId === 'object' && item.researchCenterId !== null
                ? item.researchCenterId._id
                : item.researchCenterId;
              return centerId === id;
            })
          : [];

        // Resolve faculty details for matched assignments
        const resolvedFaculty = matchedAssignments.map(item => {
          const facId = typeof item.facultyId === 'object' && item.facultyId !== null
            ? item.facultyId._id
            : item.facultyId;
          return facultyList.find(f => f._id === facId);
        }).filter(Boolean);

        // Filter student members for this research center
        const matchedStudents = Array.isArray(studentMembers)
          ? studentMembers.filter(item => {
              const centerId = typeof item.researchCenterId === 'object' && item.researchCenterId !== null
                ? item.researchCenterId._id
                : item.researchCenterId;
              return centerId === id;
            })
          : [];

        setAssignedFaculty(resolvedFaculty);
        setAssignedStudents(matchedStudents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCenterAndFaculty();
  }, [id]);

  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
  if (error) return <Navigate to="/research" />;
  if (!data) return <Navigate to="/research" />;

  // Normalize fields from backend
  const title = data.centerName || data.title || 'Research Center';
  const mission = data.centerMission || '';
  const roles = data.centerRolesResponsibility ? [data.centerRolesResponsibility] : (data.roles || []);
  const publications = data.publicationAndProjectOutcomes || data.publications || '';
  const training = data.studentTrainingAndDevelopment || data.training || '';

  const renderTraining = (text) => {
    if (!text) return null;
    return text.split('\n\n').map((paragraph, idx) => (
      <p key={idx} style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
        {paragraph}
      </p>
    ));
  };

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      <Breadcrum
        title={title}
        paths={[
          { name: 'Home', link: '/' },
          { name: 'Research', link: '/research' },
          { name: title }
        ]}
      />

      <div className="wrap" style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px 0 20px' }}>

        {mission && mission.toString().trim() && (
          <div style={{ marginBottom: '40px' }}>
            <span className="s-tag">OUR PURPOSE</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}><em>Mission</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
              {mission}
            </p>
          </div>
        )}

        {(roles && Array.isArray(roles) && roles.length > 0 && roles.some(r => r && r.toString().trim())) && (
          <div style={{ marginBottom: '40px' }}>
            <span className="s-tag">RESPONSIBILITIES</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}>Roles and <em>Responsibilities</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            {roles.map((role, idx) => (
              role && role.toString().trim() && (
                <p key={idx} style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', marginBottom: '15px' }}>
                  {role}
                </p>
              )
            ))}
          </div>
        )}

        {publications && publications.toString().trim() && (
          <div style={{ marginBottom: '40px' }}>
            <span className="s-tag">ACHIEVEMENTS</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}>Publication and Project <em>Outcomes</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            <p style={{ color: '#4a4a4a', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
              {publications}
            </p>
          </div>
        )}

        {training && training.toString().trim() && (
          <div style={{ marginBottom: '40px' }}>
            <span className="s-tag">DEVELOPMENT</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}>Student Training and <em>Development</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            {renderTraining(training)}
          </div>
        )}

        {assignedFaculty.length > 0 && (
          <div style={{ marginTop: '50px', marginBottom: '40px' }}>
            <span className="s-tag">OUR EXPERTS</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}>Research <em>Faculty Members</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '30px', 
              marginTop: '25px' 
            }}>
              {assignedFaculty.map((fac) => (
                <div key={fac._id} style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  <div style={{ height: '240px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                    <img 
                      src={getFacultyImage(fac)} 
                      alt={fac.facultyName} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: '#0f172a', lineHeight: '1.4' }}>
                      {fac.facultyName}
                    </h4>
                    <p style={{ margin: '0 0 10px 0', fontSize: '13px', color: '#4f46e5', fontWeight: '600' }}>
                      {fac.designation || 'Faculty Member'}
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: '#64748b', wordBreak: 'break-word', fontWeight: '500' }}>
                      {fac.facultyEmail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {assignedStudents.length > 0 && (
          <div style={{ marginTop: '50px', marginBottom: '40px' }}>
            <span className="s-tag">OUR LEARNERS</span>
            <h2 className="s-title" style={{ marginTop: '5px' }}>Research <em>Student Members</em></h2>
            <div className="gold-bar" style={{ margin: '15px 0 20px 0' }}></div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
              gap: '24px', 
              marginTop: '25px' 
            }}>
              {assignedStudents.map((student) => (
                <div key={student._id} style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  backgroundColor: '#fff',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: '28px 20px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    fontWeight: '700',
                    margin: '0 auto 16px auto',
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    {student.studentName ? student.studentName.charAt(0).toUpperCase() : 'S'}
                  </div>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700', color: '#0f172a', lineHeight: '1.4' }}>
                    {student.studentName}
                  </h4>
                  <p style={{ margin: '0', fontSize: '13px', color: '#4f46e5', fontWeight: '600' }}>
                    Student Researcher
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CenterDetails;
