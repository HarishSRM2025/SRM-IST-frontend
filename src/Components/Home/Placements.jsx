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

const companies = [
  {
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Deloitte",
    src: "https://wp.logos-download.com/wp-content/uploads/2016/10/Deloitte_logo_black.png?dl",
  },
  {
    name: "TCS",
    src: "https://i.logos-download.com/113971/29583-s1280-794fe2ef6d1227957d3a7ac75642f397.png/Tata_Consultancy_Services_Logo_2020-s1280.png",
  },
  {
    name: "Infosys",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Capgemini",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
  },
  {
    name: "Wipro",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "Cognizant",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/1280px-Cognizant_logo_2022.svg.png",
  },
  {
    name: "HCL Tech",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/HCL_Technologies_logo.svg/3840px-HCL_Technologies_logo.svg.png",
  },
  {
    name: "Accenture",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    name: "IBM",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];

const CompanyLogo = ({ name, src }) => {
  const handleError = (e) => {
    e.target.style.display = "none";
    const txt = document.createElement("span");
    txt.className = "co-text";
    txt.textContent = name;
    e.target.parentElement.appendChild(txt);
  };

  return (
    <div className="co-logo-wrap">
      <img
        src={src}
        alt={name}
        className="co-logo"
        loading="lazy"
        onError={handleError}
      />
    </div>
  );
};

const Placements = () => {
  return (
    <section className="pl-section" id="placement">
      <div className="wrap">

        {/* Header */}
        <div className="pl-hdr">
          <div>
            <span className="s-tag">Placement &amp; Career Guidance</span>
            <h2 className="s-title" style={{color:'#fff'}}>
              Your Career <em style={{color:'#e4b316'}}>Starts Here</em>
            </h2>
          </div>
          <a href="/recruiters" className="btn btn-gold">
            View All Recruiters <FaArrowRight />
          </a>
        </div>

        {/* Companies Grid */}
        <div className="companies">
          {companies.map((co, i) => (
            <CompanyLogo key={i} name={co.name} src={co.src} />
          ))}
        </div>

        {/* Stat Cards */}
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