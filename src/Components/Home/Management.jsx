import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Management = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/about/leadership/getall?displayInHome=true`
      )
      .then((res) => setLeaders(res.data))
      .catch((err) => console.log(err));
  }, []);
  const API_BASE = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000';  
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
                <img className="mgmt-photo" src={API_BASE+'/public/uploads/'+leader.image} alt={leader.name} />

                <div>
                  <div className="mgmt-role">{leader.role}</div>
                  <div className="mgmt-name">{leader.name}</div>
                  <div className="mgmt-quote">{leader.leadershipMessage}</div>
                
                </div>
              </div>
            </div>
          ))}

      </div>
    </section>
  );
};

export default Management;