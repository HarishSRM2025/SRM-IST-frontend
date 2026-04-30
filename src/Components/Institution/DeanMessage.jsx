import React from "react";

const DeanMessage = () => {
  return (
    <section className="mgmt-section" id="dean-message">
      <div className="wrap">
        <div>
          <span className="s-tag" style={{ color: "var(--gold)" }}>Leadership</span>
          <h2 className="s-title">Dean's <em>Message</em></h2>
          <div className="gold-bar"></div>
        </div>

        <div className="mgmt-card">
          <img
            src="https://img.magnific.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360"
            alt="Dean Profile"
            className="mgmt-photo"
            loading="lazy"
          />
          <div>
            <div className="mgmt-role">DEAN OF INSTITUTION</div>
            <div className="mgmt-name">Dr. Placeholder Name</div>
            <div className="mgmt-quote">
              "Our institution is dedicated to fostering a community of innovative thinkers, ethical leaders, and dedicated professionals. We believe in providing an environment that encourages intellectual curiosity, hands-on learning, and a commitment to societal progress. Through our rigorous academic programs and robust industry partnerships, we strive to prepare our students to excel in an ever-evolving global landscape."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeanMessage;
