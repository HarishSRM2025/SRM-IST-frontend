import React from "react";
import "../../css/governance.css";
import { useSearchParams } from "react-router-dom";
import { governanceData } from "./governanceData";
import { Link } from "react-router-dom";
import Breadcrum from "../Common/Breadcrum";
import BoardManagement from "./Governance/BoardManagement";

const Governance = () => {
  const { section1, cards } = governanceData;  
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");  
  if (page) {
    return <BoardManagement page={page} />;
  }
  return (
    <>
    
         <Breadcrum
            title="Governance"
            paths={[{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name:  'Governance'}]}
        />
        <section className="governance-section">
        <div className="wrap">



            {/* Featured Governance */}
            <div className="gov-feature">
            <div className="gov-image">
                <img src={section1.image} alt={section1.title} />
            </div>

            <div className="gov-content">
                <h3>{section1.title}</h3>

                <p>{section1.description}</p>

                <Link to={section1.btnLink} className="btn btn-gold">
                {section1.btnText}
                </Link>
            </div>
            </div>

            {/* Cards */}
            <div className="gov-grid">
            {cards.map((card) => (
                <div className="gov-card" key={card.id}>
                <div className="gov-card-image">
                    <img src={card.image} alt={card.title} />
                </div>

                <div className="gov-card-body">
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <Link to={card.link} class='view_link'>View Details</Link>
                </div>
                </div>
            ))}
            </div>

        </div>
        </section>
    </>
  );
};

export default Governance;