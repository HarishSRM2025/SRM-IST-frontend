import React from "react";
import {
  FaArrowRight,
  FaChartLine,
  FaCheckCircle,
  FaRupeeSign,
  FaHandshake,
  FaCompass,
} from "react-icons/fa";

const placementsData = [
  {
    icon: <FaChartLine />,
    num: "98%",
    name: "Placement Rate",
    desc: "Consistently high across all departments with students joining leading multinationals and startups.",
    tick: "Verified by NIRF Rankings",
  },
  {
    icon: <FaRupeeSign />,
    num: "12L",
    name: "Average Package",
    desc: "Average CTC secured, with top packages exceeding ₹45 LPA from Fortune 500 companies.",
    tick: "Top offer: ₹45 LPA",
  },
  {
    icon: <FaHandshake />,
    num: "500+",
    name: "Recruiting Partners",
    desc: "Network spanning IT, core engineering, finance, consulting, and emerging tech sectors.",
    tick: "Fortune 500 firms",
  },
  {
    icon: <FaCompass />,
    num: "360°",
    name: "Career Support",
    desc: "Aptitude training, mock interviews, resume reviews and alumni mentorship — fully prepared.",
    tick: "Dedicated placement cell",
  },
];

const Placements = () => {
  return (
    <section className="pl-section rev" id="placement">
      <div className="wrap">

        {/* Header */}
        <div className="pl-hdr">
          <div>
            <span className="s-tag">Placement & Career Guidance</span>
            <h2 className="s-title light">
              Your Career <em>Starts Here</em>
            </h2>
          </div>

          {/* ✅ Fixed button */}
          <a href="/recruiters" className="btn btn-gold">
            View All Recruiters <FaArrowRight />
          </a>
        </div>

        {/* Companies */}
        <div className="companies">
          {[
            "Amazon",
            "Deloitte",
            "TCS",
            "Infosys",
            "Capgemini",
            "Wipro",
            "Cognizant",
            "HCL Tech",
            "Accenture",
          ].map((co, i) => (
            <span key={i} className="co">
              {co} {i !== 8 && <span className="co-sep">·</span>}
            </span>
          ))}
        </div>

        {/* Cards */}
        <div className="pl-cards">
          {placementsData.map((item, index) => (
            <div className="pl-card" key={index}>
              <div className="pl-ico">{item.icon}</div>
              <div className="pl-num">{item.num}</div>
              <div className="pl-name">{item.name}</div>
              <div className="pl-desc">{item.desc}</div>
              <div className="pl-tick">
                <FaCheckCircle /> {item.tick}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Placements;