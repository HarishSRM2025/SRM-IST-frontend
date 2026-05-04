import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CampusLife from '../../assets/images/home/campus-home.JPG';
import Awards from '../../assets/images/home/award-home.JPG';
import innovationImage from '../../assets/images/home/innovation-home.jpg';

const News = () => {
  return (
    <section className="news-section" id="news" style={{backgroundColor:'#f3f4f6'}}>
      <div className="wrap">

        {/* Header */}
        <div className="news-hdr">
          <div>
            <span className="s-tag">Latest News & Articles</span>
            <h2 className="s-title">
              Events & Recent<em> Highlights</em>
            </h2>
          </div>

          <Link to="/news-and-events" className="btn btn-outline-dark">
            View All <FaArrowRight />
          </Link>
        </div>

        {/* Grid */}
        <div className="news-grid">

          {/* Big Card */}
          <div className="nc nc-big">
            <img
              src={CampusLife}
              alt="Placement achievement"
              loading="lazy"
            />
            <div className="nc-body">
              <div className="nc-tag">Achievement</div>
              <div className="nc-title">
                Placement Milestone — Students placed in Fortune 500 companies surpasses all-time records
              </div>
              <div className="nc-date">February 14, 2026</div>
            </div>
          </div>

          {/* Side */}
          <div className="news-stack">

            <div className="nc nc-sm">
              <img
                src={innovationImage}
                alt="Innovation news"
                loading="lazy"
              />
              <div className="nc-body">
                <div className="nc-tag">Innovation</div>
                <div className="nc-title">
                  Students lead breakthrough research in renewable energy storage
                </div>
                <div className="nc-date">Feb 8, 2026</div>
              </div>
            </div>

            <div className="nc nc-sm">
              <img
                src={Awards}
                alt="Awards news"
                loading="lazy"
              />
              <div className="nc-body">
                <div className="nc-tag">Awards</div>
                <div className="nc-title">
                  SRM Trichy earns NAAC A+ re-accreditation for academic excellence
                </div>
                <div className="nc-date">Feb 5, 2026</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default News;