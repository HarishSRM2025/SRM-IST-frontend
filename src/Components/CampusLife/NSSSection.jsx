import React from 'react';
import { FaBook, FaHeart, FaHospital, FaLeaf, FaTree } from 'react-icons/fa';
import { SectionHeading } from './Shared';
import nssImg from "../../assets/images/campus/nss.webp";
import nssRep from "../../assets/images/campus/nssRep.png";
const nssObjectives = [
  {
    icon: <FaLeaf />,
    title: "Personality Development",
    desc: "Develop the personality and character of students through community service."
  },
  {
    icon: <FaHospital />,
    title: "Community Service",
    desc: "Instill a sense of social responsibility and commitment towards community welfare."
  },
  {
    icon: <FaBook />,
    title: "National Integration",
    desc: "Promote national unity, social harmony, and cultural integration among youth."
  },
  {
    icon: <FaTree />,
    title: "Social Awareness",
    desc: "Create awareness on health, environment, literacy, and other societal issues through outreach activities."
  }
];
const motto2={
  photo: nssRep,
  name: "Dr. M.Suresh",
  designation: "NSS Program Officer",
  college: "SRM Institute of Science and Technology, Tiruchirappalli"
}
const motto= {
  title: "Motto of NSS",
  quote: "Not Me But You",
  description:
    "The motto of NSS, 'Not Me But You', reflects the essence of democratic living and emphasizes the importance of selfless service. It encourages students to develop empathy, appreciate the perspectives of others, and show compassion towards all living beings. The philosophy of NSS is deeply rooted in this motto, highlighting the belief that the welfare of an individual is ultimately dependent on the welfare of society as a whole. Therefore, NSS volunteers strive to contribute to the well-being and progress of the community through dedicated service and social responsibility."
}
const NSSSection = ({ image }) => (
  <section className="cl-sec" id='nss'>
    <div className="cl-container">
      <SectionHeading label="Service" prefix="National Service" highlight="Scheme (NSS)" />
      <div className="cl-split">
        <div className="cl-split__body">
          <center>
          <img src={nssImg} alt="" height={'160px'} className='logo'/> 
          </center>
          <br />
          <p className="cl-lead">
            National Service Scheme (NSS) is a widely recognized and influential youth-centric program in colleges across the country. NSS was established in 1969, the year Mahatma Gandhi celebrated his birth, with the primary goal of fostering the character and personality of student youth via volunteer community service. The ideals of Mahatma Gandhi provide inspiration for the NSS’s ideological stance. “NOT ME, BUT YOU” is the NSS motto.
            The activities of the SRMIST, Tiruchirappalli NSS mainly focus on Community Development Services, Social Services, Environmental Awareness Programs, Health Awareness Programs and Technology Transfer Programs. The NSS at SRMIST, Tiruchirppalli has guidelines to conduct various Regular and Special Camping activities.
          </p>
          <div className="cl-activity-grid">
            {nssObjectives.map(a => (
              <div className="cl-activity" key={a.title}>
                <div className="cl-activity__icon">{a.icon}</div>
                <div className="cl-activity__title">{a.title}</div>
                <div className="cl-activity__desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cl-split__body">
            <div className="motto-card" >
              <blockquote>
                "{motto.quote}"
              </blockquote>
              <div>
                <p>{motto.description}</p>
              </div>
            </div>
            <br/>
            <div className="motto-card">
              <div className="motto-profile">
                <center> <img
                  src={motto2.photo}
                  alt="Name"
                  className="motto-profile-img"
                /></center>

                <div className="motto-profile-info">
                  <h4>{motto2.name}</h4>
                  <div className="desig">
                    <p>{motto2.designation}</p>
                    <p>{motto2.college}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);

export default NSSSection;
