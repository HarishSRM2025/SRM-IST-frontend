import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FaUser } from "react-icons/fa";
import founder from '../../assets/images/home/founder.webp';
import chairman from '../../assets/images/home/chairman.jpg';   
import cochairman from '../../assets/images/home/co_chairman.jpg';   

const Management = () => {
  const leaders = [
    {
      name: "Dr. T.R. Paarivendhar",
      role: "Founder & Chancellor",
      img: founder,
      desc: "Visionary leadership that drives innovation across SRM Trichy, shaping an academic culture focused on research, industry collaboration, and student success.",
    },
    {
      name: "Dr. R. Shivakumar",
      role: "Chairman",
      img: chairman,
      desc: "Our mission at SRM Trichy is to create an environment where academic rigor meets real-world application. We are committed to developing not just engineers and managers, but compassionate, curious global citizens who will shape tomorrow.",
    },
    {
      name: "Mr. S. Niranjan",
      role: "Co-Chairman",
      img: cochairman,
      desc: "To position SRM Trichy as a globally recognized institution that transforms students into industry-ready professionals, innovators, and leaders through cutting-edge research, industry integration, and holistic development.",
    }
  ];

  return (
    <section className="mgmt-section">
      <div className="wrap">

        <div className="rev">
          <span className="s-tag">Our Management</span>
          <h2 className="s-title">
            Leadership & <em>Vision</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

   
          {leaders.map((leader, index) => (
            <div key={index}>
              <div className="mgmt-card">
                <img className="mgmt-photo" src={leader.img} alt={leader.name} />

                <div>
                  <div className="mgmt-role">{leader.role}</div>
                  <div className="mgmt-name">{leader.name}</div>
                  <div className="mgmt-quote">{leader.desc}</div>
                  <button className="btn btn-gold" style={{ marginTop: '24px' }}>
                    <FaUser style={{ marginRight: '10px' }} /> Read Full Profile
                  </button>
                </div>
              </div>
            </div>
          ))}

      </div>
    </section>
  );
};

export default Management;