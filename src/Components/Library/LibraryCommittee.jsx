import React from 'react';

const committeeMembers = [
  { role: 'Chairperson', name: 'Dr. R. Shivakumar', designation: 'Chairman, SRM Group' },
  { role: 'Convener', name: 'Dr. N. Malmurugan', designation: 'Dean, SRM IST' },
  { role: 'Member Secretary', name: 'Dr. M. Prabakaran', designation: 'Librarian' },
  { role: 'Member', name: 'HODs of all Departments', designation: 'Academic Representatives' },
];

const LibraryCommittee = () => (
  <section className="exam-section exam-white" id="committee">
    <div className="wrap">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="s-tag">Governance</span>
        <h2 className="s-title">Library <em>Committee</em></h2>
        <div className="gold-bar" style={{ margin: '15px auto' }}></div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: 'var(--navy)', color: '#fff' }}>
              <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Sl.No</th>
              <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Designation in Committee</th>
              <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
              <th style={{ padding: '15px', textAlign: 'left', border: '1px solid #ddd' }}>Institutional Designation</th>
            </tr>
          </thead>
          <tbody>
            {committeeMembers.map((m, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={{ padding: '15px', border: '1px solid #ddd' }}>{i + 1}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd', fontWeight: '600' }}>{m.role}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd' }}>{m.name}</td>
                <td style={{ padding: '15px', border: '1px solid #ddd', color: 'var(--gray)' }}>{m.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--gray)', textAlign: 'center' }}>
        The committee meets quarterly to discuss library development, procurement of resources, and policy updates.
      </p>
    </div>
  </section>
);

export default LibraryCommittee;