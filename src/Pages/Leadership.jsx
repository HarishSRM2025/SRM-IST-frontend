import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Breadcrum from "../Components/Common/Breadcrum";
import  "../css/leadership.css";
const categoryMap = {
  all: [
    "Chairman",
    "Founder",
    "Vice Chairman",
    "Leadership",
  ],
  academic: ["Academic Heads"],
  admin: ["Administrative Heads"],
};

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  useEffect(() => {
    const fetchLeaders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/about/leadership/getall`
        );

        const data = res.data || [];

        const allowedCategories =
          categoryMap[filter] || categoryMap.all;

        const filtered = data.filter((leader) =>
          allowedCategories.includes(leader.category)
        );

        setLeaders(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaders();
  }, [filter]);
  
  const apexLeaders = leaders.filter((item) =>
    ["Founder"].includes(item.category)
  );

  const remainingLeaders = leaders.filter(
    (item) =>
      !["Founder"].includes(item.category)
  );
    const breadCrumbTitle = {
        all: "Apex Leadership",
        academic: "Academic Heads",
        admin: "Administrative Heads",
    }[filter] || "Leadership";

  const API_BASE = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000';  

  return (
    <>
      <Breadcrum 
      title={breadCrumbTitle} 
      paths={[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: breadCrumbTitle}]}
      />
      <div className="leadership-container">
        <section className="leadership-section">
            <div className="container">

            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                {/* Apex Leadership */}
                {filter === "all" && apexLeaders.length > 0 && (
                    <div className="apex-section">
                    {apexLeaders.map((leader) => (
                        <div className="apex-card" key={leader._id}>
                        <img
                            src={API_BASE+'/public/uploads/'+leader.image}
                            alt={leader.name}
                        />

                        <div className="apex-content">
                            <span>{leader.category}</span>
                            <h2>{leader.name}</h2>
                            <h4>{leader.role}</h4>

                            {leader.leadershipMessage && (
                            <p style={{fontSize: '1rem',lineHeight:1.3,color:'var(--gray)',textAlign:'justify',whiteSpace:'pre-wrap'}}>{leader.leadershipMessage}</p>
                            )}
                        </div>
                        </div>
                    ))}
                    </div>
                )}

                {/* Other Leadership */}
                <div className="leadership-grid">
                    {(filter === "all"
                    ? remainingLeaders
                    : leaders
                    ).map((leader) => (
                    <div className="leader-card" key={leader._id}>
                        <div className="leader-image">
                        <img
                            src={API_BASE+'/public/uploads/'+leader.image}
                            alt={leader.name}
                        />
                        </div>

                        <div className="leader-content">
                        <h4>{leader.name}</h4>
                        <p>{leader.role}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </>
            )}
            </div>
        </section>
       </div>
    </>
  );
};

export default Leadership;