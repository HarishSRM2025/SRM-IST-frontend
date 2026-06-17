import React from 'react'
import {FiMail} from 'react-icons/fi';
import { BsTelephone } from "react-icons/bs";
import member1 from '../../assets/images/placement/contact/1.jpeg'
import member2 from '../../assets/images/placement/staffs/1.jpg'
const STAFF = [
  {
    name: 'T. Madhavan',
    role: 'Dean Placement,SRM IST',
    initial: 'TM',
    img: member1,
    contactDetail:[
      {
        icon:<FiMail size={14} />,
        content: <a class="pl-contact-link" href='mailto:dean.placement.try@srmist.edu.in' target='_blank'>dean.placement.try@srmist.edu.in</a>
      },
      {
        icon:<FiMail size={14} />,
        content: <a class="pl-contact-link" href='mailto:madhavat1@srmist.edu.in' target='_blank'>madhavat1@srmist.edu.in</a>
      },
      {
        icon:<BsTelephone size={14} />,
        content: <a class="pl-contact-link" href='tel:9842916830'>9842916830</a>
      },
      {
        icon:<BsTelephone size={14} />,
        content: <a class="pl-contact-link" href='tel:8489903631'>8489903631</a>
      }
    ]
  },
  {
    name: 'R. Edwin Samraj M.E; (Ph.D)',
    role: 'Placement Officer - SRMIST',
    initial: 'RS',
    img: member2,
    contactDetail:[
      {
        icon:<FiMail size={14} />,
        content: <a class="pl-contact-link" href='mailto:placementofficer.try@srmist.edu.in' target='_blank'>placementofficer.try@srmist.edu.in</a>
      }
    ]
  }
];

const ContactUs = () => {
    return(
        <section className="pl-section pl-bg-white" id='contact' style={{ padding: '80px 0' }}>
        <div className="wrap">
          <span className="s-tag">Contact</span>
          <h2 className="s-title">Contact Us</h2>
          <div className="gold-bar"></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8", maxWidth: "800px", marginBottom: "48px" }}>
            Dedicated placement professionals committed to bridging the gap between talented students and industry opportunities.
          </p>

          <div className="pl-contact-grid">
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
                <div className="pl-contact-divider" />
                 <div className='pl-contact-detail-grid'>
                  {s.contactDetail.map((contact, j) => (
                  <div key={j} className="pl-staff-contact" style={{display:'flex',alignItems:'start',gap:'5px'}}>
                    {contact.icon}
                    {contact.content}
                  </div>
                 ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default ContactUs