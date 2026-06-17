import React from 'react'
import {MdOutlineSchool} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import member1 from '../../assets/images/placement/cdcteam/1.jpeg';
import member2 from '../../assets/images/placement/cdcteam/2.jpeg';
import member3 from '../../assets/images/placement/cdcteam/3.jpg';
import member4 from '../../assets/images/placement/cdcteam/4.jpeg';
import member5 from '../../assets/images/placement/cdcteam/5.png';
const STAFF = [
  {
    name: 'Jenifer Therasal A, M.A English',
    role: 'Soft Skill Trainer , SRM IST',
    initial: 'RS',
    img:member1
  },
  {
    name: 'Iswarya S, MSc',
    role: 'Aptitude Trainer, SRM IST',
    initial: 'SP',
    img:member2
  },
  {
    name: 'Arjun Sarathy J, MBA',
    role: 'Soft Skill Trainer, SRM IST',
    initial: 'AB',
    img:member3
  },
  {
    name: 'Jansi S, B.E',
    role: 'Aptitude Trainer, SRM IST',
    initial: 'AB',
    img:member4
  },
  {
    name: 'Sujatha R, M.E',
    role: 'Aptitude Trainer, SRM IST',
    initial: 'AB',
    img:member5
  }
];

const CDCTeam = () => {
    return(
        <section className="pl-section pl-bg-cream" id='cdc-team' style={{ padding: '80px 0' }}>
        <div className="wrap">
          <span className="s-tag">Our Team</span>
          <h2 className="s-title">Meet Our <em>CDC Team</em></h2>
          <div className="gold-bar"></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8", maxWidth: "800px", marginBottom: "48px" }}>
            Dedicated placement professionals committed to bridging the gap between talented students and industry opportunities.
          </p>

          <div className="pl-staff-grid">
            {STAFF.map((s, i) => (
              <div className="pl-staff-card" key={i}>
                <div className="pl-staff-avatar-wrap">
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

export default CDCTeam