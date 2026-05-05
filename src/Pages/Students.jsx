import React, { useEffect } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';

const Students = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrum title="Students" />
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', padding: '40px 20px' }}>
        <div style={{ textAlign: 'center', background: '#fff', padding: '60px 40px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', maxWidth: '800px', width: '100%' }}>
          <h2 style={{ color: 'var(--navy)', marginBottom: '20px', fontFamily: '"Playfair Display", serif', fontSize: '2.5rem' }}>Student Portal</h2>
          <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '0 auto 20px' }}></div>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Welcome to the Student Portal. Information regarding student services, clubs, academic resources, and extracurricular activities will be detailed here shortly.
          </p>
        </div>
      </div>
    </>
  );
};

export default Students;
