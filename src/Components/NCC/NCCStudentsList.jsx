import React from "react";
import { nccData } from "./nccData";

const NCCStudentsList = ({ image }) => (
  <section className="cl-sec exam-cream" id="students">
    <div className="cl-container">
      <div className="cl-split2">
        <div className="cl-split__body1">
          <span className="s-tag">{nccData.students.tag}</span>
          <h2 className="s-title">
            List of <em>Students</em>
          </h2>
          <p style={{ color: "var(--gray)", lineHeight: "1.8", marginBottom: "20px" }}>
            {nccData.students.subtitle}
          </p>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff" }}>
                  <th style={{ padding: "12px", textAlign: "left" }}>S.No</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
                  <th style={{ padding: "12px", textAlign: "left" }}>Department</th>
                </tr>
              </thead>
              <tbody>
                {nccData.students.list.map((student) => (
                  <tr
                    key={student.sNo}
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <td style={{ padding: "10px 12px" }}>{student.sNo}</td>
                    <td style={{ padding: "10px 12px" }}>{student.name}</td>
                    <td style={{ padding: "10px 12px" }}>{student.department}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="cl-split__img1">
          <img src={image} alt="NCC Cadet" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default NCCStudentsList;
