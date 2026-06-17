import React from 'react'
import {MdOutlineSchool} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import staff1 from '../../assets/images/placement/staffs/1.jpg'
import staff2 from '../../assets/images/placement/staffs/2.jpeg'
import staff3 from '../../assets/images/placement/staffs/3.jpeg'
const STAFF = [
  {
    name: 'R. Edwin Samraj M.E; (Ph.D)',
    role: 'Placement Officer – SRMIST',
    initial: 'RS',
    img: staff1,
  },
  {
    name: 'U. Sanjay Pradeesan, M.C.A',
    role: 'Placement Executive, SRM IST',
    initial: 'SP',
    img: staff2,
  },
  {
    name: 'M. Aswin Balaji, B.E',
    role: 'Junior Placement Assistant, SRM IST',
    initial: 'AB',
    img: staff3,
  },
];

const Staff = () => {
    return(
        <section className="pl-section pl-bg-white" id='staff' style={{ padding: '80px 0' }}>
        <div className="wrap">
          <span className="s-tag">Our Team</span>
          <h2 className="s-title">Meet Our Staff</h2>
          <div className="gold-bar"></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8", maxWidth: "800px", marginBottom: "48px" }}>
            Dedicated placement professionals committed to bridging the gap between talented students and industry opportunities.
          </p>

          <div className="pl-staff-grid">
            {STAFF.map((s, i) => (
              <div className="pl-staff-card" key={i}>
                <div className="pl-staff-avatar-wrap" >
                  <div className="pl-staff-avatar-placeholder" style={{overflow:'hidden'}}>
                    <img src={s.img} alt={s.name} style={{objectFit:'cover',width:'100%',height:'100%'}} />
                  </div>
                  <div className="pl-staff-avatar-ring" />
                </div>
                <h3 className="pl-staff-name">{s.name}</h3>
                <p className="pl-staff-role">{s.role}</p>
                <div className="pl-staff-divider" />
                <a href="mailto:placements@srmist.edu.in" className="pl-staff-contact">
                  <FiMail size={14} />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Staff