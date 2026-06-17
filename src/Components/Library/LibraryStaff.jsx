import React from 'react';
import l1 from '../../assets/librarian/1.webp';
import l2 from '../../assets/librarian/2.webp';
import l3 from '../../assets/librarian/3.webp';

const staff = [
  {
    name: 'Dr. M.Ebenezer Selvakumar',
    role: 'Librarian',
    education: 'M.L.I.Sc., M.Phil., PGDCA., (Ph.D)',
    img: l1
  },
  {
    name: 'Mr. P.Muthukumar',
    role: 'Assistant Librarian',
    education: 'M.L.I.Sc., M.Phil., PGDCA., (Ph.D)',
    img: l2
  },
  {
    name: 'Mr. P.Ramachandran',
    role: 'Assistant Librarian',
    education: 'M.L.I.Sc., M.Phil., PGDCA., (Ph.D)',
    img: l3
  }
];

const LibraryStaff = () => (
  <section className="exam-section exam-light" id="staff">
    <div className="wrap">
      <div className="staff-header">
        <span className="s-tag">Our Team</span>
        <h2 className="s-title">
          Library <em>Staff</em>
        </h2>
        <div className="gold-bar staff-gold-bar"></div>
      </div>

      <div className="staff-grid">
        {staff.map((member, index) => (
          <div key={index} className="staff-card">
            <div className="staff-image-wrapper">
              <img
                src={member.img}
                alt={member.name}
                className="staff-image"
              />
            </div>

            <div className="staff-content">
              <h4 className="staff-name">{member.name}</h4>

              <p className="staff-role">
                {member.role}
              </p>

              <p className="staff-education">
                {member.education}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LibraryStaff;