import React from "react";
import { FaDownload } from "react-icons/fa";

const Brochure = () => {
  return (
    <section className="brochure-section rev">
      <div className="wrap">
        <div className="brochure-inner">

          {/* Content */}
          <div>
            <div className="brochure-title">
              Start Your Journey.
              <br />
              Download Our Prospectus.
            </div>

            <div className="brochure-sub">
              Explore programs, fees, scholarships, and admission process in detail.
            </div>
          </div>

          {/* ✅ Download Button */}
          <a
            href="/assets/brochure.pdf"   // 🔥 put your PDF in public folder
            download
            className="btn btn-dark"
          >
            <FaDownload /> Download Brochure
          </a>

        </div>
      </div>
    </section>
  );
};

export default Brochure;