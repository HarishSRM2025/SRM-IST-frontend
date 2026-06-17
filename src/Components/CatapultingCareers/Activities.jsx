import React from 'react'
import {
  FiUsers, FiMapPin, FiCalendar, FiActivity, FiCpu, FiBook, FiZap
} from 'react-icons/fi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import activity1 from '../../assets/images/placement/activities/1.png';
import activity2 from '../../assets/images/placement/activities/2.png';
import activity3 from '../../assets/images/placement/activities/3.png';
import activity4 from '../../assets/images/placement/activities/4.png';
import activity5 from '../../assets/images/placement/activities/5.png';
import activity6 from '../../assets/images/placement/activities/6.png';

const ACTIVITIES = [
  {
    title: 'Career Counselling Session',
    date: '03 Oct, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-blue',
    icon: FiBook,
    img : activity1
  },
  {
    title: 'CCC Orientation Workshop',
    date: '14 Oct, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-teal',
    icon: FiUsers,  
    img : activity2
  },
  {
    title: 'Technical Skill Development',
    date: '20 Oct, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-orange',
    icon: FiCpu,
    img : activity3
  },
  {
    title: 'Mock Interview Drive',
    date: '28 Oct, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-purple',
    icon: FiActivity,
    img : activity4
  },
  {
    title: 'Industry Connect Program',
    date: '05 Nov, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-green',
    icon: HiOutlineLightBulb,
    img : activity5
  },
  {
    title: 'Placement Readiness Bootcamp',
    date: '11 Nov, 2024',
    location: 'SRMIST, India',
    colorClass: 'pl-act-navy',
    icon: FiZap,
    img : activity6
  },
];


const Activities = () => {
  return (
       <section className="pl-section pl-bg-cream" id='activities' style={{ padding: '80px 0' }}>
         <div className="wrap">
           <span className="s-tag">Training & Events</span>
           <h2 className="s-title">Latest Activities</h2>
           <div className="gold-bar"></div>
           <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8", maxWidth: "800px", marginBottom: "48px" }}>
             From career counselling sessions and mock interviews to industry connect programs, the CDC keeps students placement-ready throughout the year.
           </p>
    
           <div className="pl-activities-grid">
             {ACTIVITIES.map((act, i) => {
               const Icon = act.icon;
               return (
                 <div className="pl-activity-card" key={i}>
                   <div className="pl-activity-img-wrap">
                     <div className="pl-activity-placeholder">
                       <img src={act.img} alt={act.title} />
                     </div>
                     <div className="pl-activity-img-overlay" />
                     <span className="pl-activity-location-tag">
                       <FiMapPin className="pl-activity-location-icon" />
                       {act.location}
                     </span>
                   </div>
                   {/* <div className="pl-activity-info">
                     <div className="pl-activity-date">
                       <FiCalendar className="pl-activity-date-icon" />
                       {act.date}
                     </div>
                     <p className="pl-activity-title">{act.title}</p>
                   </div> */}
                 </div>
               );
             })}
           </div>
         </div>
       </section>
  )
}

export default Activities