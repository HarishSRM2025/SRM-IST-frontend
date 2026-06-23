import React from "react";
import "../../../css/govInnerPage.css";
import { governanceInnerData } from "./data/governanceInnerData";
import Breadcrum from "../../Common/Breadcrum";

const BoardManagement = ({ page }) => {
  const currentPage = page || "board-management";
  const data = governanceInnerData[currentPage];

  if (!data) {
    return (
      <>
        <Breadcrum title="404" />
        <div className="exam-cream" style={{ padding: "80px 0", textAlign: "center", fontFamily: '-apple-system', fontSize: '25px', color: 'var(--navy)' }}>
          <h1>404 Data Not Found</h1>
        </div>
      </>
    );
  }

  const { title, subtitle, groups = [], termsOfReference = [] } = data;

  return (
    <>
      <Breadcrum
        title={title}
        paths={[
          { name: "Home", link: "/" },
          { name: "About", link: "/about" },
          { name: "Governance", link: "/governance" },
          { name: title },
        ]}
      />

      <section className="board-section">
        <div className="wrap">
          
          {/* Main Context Subtitle (e.g. for Academic Council description) */}
          {subtitle && (
            <div className="board-main-desc" style={{ marginBottom: "40px", fontStyle: "italic", color: "#555", fontSize: "16px", textAlign: "center" }}>
              <p>{subtitle}</p>
            </div>
          )}

          {/* Dynamic Groups Generation */}
          {groups.map((group, groupIdx) => (
            <div className="board-group" key={groupIdx} style={{ marginBottom: "50px" }}>
              <h3 className="board-group-title" style={{ borderBottom: "2px solid var(--navy)", paddingBottom: "10px", marginBottom: "25px" }}>
                {group.title}
              </h3>

              <div className="board-grid">
                {group.items.map((item, idx) => (
                  <div className="board-card" key={idx}>
                    <span>{item.role || group.title.slice(0, -1)}</span>
                    <h4>{item.name}</h4>
                    <p>{item.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Terms Of Reference (Conditional - safely rendered at the end of the research advisory page) */}
          {currentPage === "research-advisory" && termsOfReference.length > 0 && (
            <div className="board-group" style={{ marginTop: "60px" }}>
              <h3 className="board-group-title" style={{ borderBottom: "2px solid var(--navy)", paddingBottom: "10px", marginBottom: "25px" }}>
                Terms of Reference
              </h3>
              <ul className="terms-list" style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
                {termsOfReference.map((item, index) => (
                  <li key={index} style={{ marginBottom: "12px" }}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BoardManagement;