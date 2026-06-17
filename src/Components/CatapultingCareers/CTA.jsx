import React from "react"
import { FiAward, FiMail, FiArrowRight } from 'react-icons/fi';


const CTA = () => {
    return(
         <section className="pl-cta">
        <div className="pl-cta-inner">
          <div className="pl-cta-icon">
            <FiAward />
          </div>
          <h2 className="pl-cta-title">Start Your Placement Journey</h2>
          <p className="pl-cta-desc">
            Download our placement brochure or reach out to the Career Development Centre to learn more about opportunities waiting for you.
          </p>
          <a href="#" className="pl-cta-btn">
            Download Prospectus <FiArrowRight size={16} />
          </a>
        </div>
      </section>
    )
}

export default CTA
