import React from 'react';

const NewsSidebar = ({ years, departments, activeYear, activeDepartment, handleYearFilter, handleDeptFilter }) => {
  return (
    <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid var(--border)', position: 'sticky', top: '100px' }}>
      <h3 style={{ color: 'var(--navy)', margin: '0 0 20px 0', fontSize: '18px', borderBottom: '2px solid var(--border)', paddingBottom: '12px' }}>Filter Events</h3>
      
      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray)', margin: '0 0 15px 0' }}>By Year</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '30px' }}>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearFilter(year)}
            style={{ 
              textAlign: 'left',
              padding: '10px 15px',
              border: '1px solid',
              borderColor: activeYear === year ? 'var(--gold)' : 'transparent',
              background: activeYear === year ? 'rgba(200, 149, 42, 0.1)' : 'var(--lgray)',
              color: activeYear === year ? 'var(--navy)' : 'var(--text)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: activeYear === year ? '600' : '500',
              transition: 'all 0.2s'
            }}
          >
            {year}
          </button>
        ))}
      </div>

      <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--gray)', margin: '0 0 15px 0' }}>By Department</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => handleDeptFilter(dept)}
            style={{ 
              textAlign: 'left',
              padding: '10px 15px',
              border: '1px solid',
              borderColor: activeDepartment === dept ? 'var(--gold)' : 'transparent',
              background: activeDepartment === dept ? 'rgba(200, 149, 42, 0.1)' : 'var(--lgray)',
              color: activeDepartment === dept ? 'var(--navy)' : 'var(--text)',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: activeDepartment === dept ? '600' : '500',
              transition: 'all 0.2s'
            }}
          >
            {dept}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsSidebar;
