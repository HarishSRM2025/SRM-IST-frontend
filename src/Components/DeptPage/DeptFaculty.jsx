import { useState, useEffect } from "react";

export default function DeptFaculty() {
  const [selected, setSelected] = useState(null);

  
const faculty = [
  { name: "Dr. Rajesh Kumar", designation: "Professor & HoD", qual: "Ph.D, IIT Madras", exp: "22 Years", specialization: ["AI & ML", "Data Science"], research: ["Deep Learning", "NLP", "Computer Vision"], pubs: ["Transformer-based NLP models for low-resource languages, IEEE Trans. 2024", "Scalable federated learning for edge devices, Springer 2023"] },
  { name: "Dr. Priya Suresh", designation: "Associate Professor", qual: "Ph.D, Anna University", exp: "14 Years", specialization: ["Cybersecurity", "Networks"], research: ["Blockchain Security", "IoT Security"], pubs: ["Blockchain-based identity management, IJCS 2023", "Intrusion detection in 5G networks, Elsevier 2022"] },
  { name: "Mr. Arjun Nair", designation: "Assistant Professor", qual: "M.Tech, NIT Trichy", exp: "8 Years", specialization: ["Cloud Computing", "DevOps"], research: ["Serverless Architectures", "Container Orchestration"], pubs: ["Comparative study of serverless platforms, ACM 2024"] },
  { name: "Dr. Lavanya Mohan", designation: "Professor", qual: "Ph.D, VIT Vellore", exp: "18 Years", specialization: ["Bioinformatics", "ML"], research: ["Genomic Data Mining", "Protein Structure Prediction"], pubs: ["ML approaches for gene expression, Nature Sci Rep 2023", "Deep learning in drug discovery, Elsevier 2022"] },
  { name: "Ms. Kavitha Rajan", designation: "Assistant Professor", qual: "M.E., SRM University", exp: "6 Years", specialization: ["Web Technologies", "UI/UX"], research: ["Progressive Web Apps", "Accessibility"], pubs: ["WCAG compliance in academic portals, ICSE 2023"] },
  { name: "Dr. Suresh Babu", designation: "Associate Professor", qual: "Ph.D, IIT Bombay", exp: "16 Years", specialization: ["Computer Vision", "Robotics"], research: ["Autonomous Systems", "3D Reconstruction"], pubs: ["Point cloud segmentation for autonomous vehicles, IEEE 2024", "Real-time object detection, CVPR 2022"] },
  { name: "Mr. Dinesh Prabhu", designation: "Assistant Professor", qual: "M.Tech, SASTRA", exp: "5 Years", specialization: ["Database Systems", "Big Data"], research: ["Graph Databases", "Data Warehousing"], pubs: ["Optimizing graph traversal in Neo4j, ACM SIGMOD 2023"] },
  { name: "Dr. Meena Krishnan", designation: "Professor", qual: "Ph.D, Bharathidasan University", exp: "20 Years", specialization: ["Software Engineering", "Agile"], research: ["DevSecOps", "Test Automation"], pubs: ["Agile adoption in Indian IT SMEs, IEEE Software 2023", "SAST tools comparison, Springer 2022"] },
];

  const selectedFaculty = faculty.find(f => f.id === selected);

  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  return (
    <>
      <section className="dept-faculty" >
        <div className="dept-faculty-inner">
          <div className="dept-section-header">
            <div>
              <div className="dept-section-label">Our Team</div>
              <h2 className="dept-section-title">
                Meet Our <em>Faculty</em>
              </h2>
            </div>
            {/* <button className="btn-gold">View All Faculty</button> */}
          </div>

          <div className="faculty-grid">
            {faculty.map((f) => (
              <div
                className="faculty-card"
                key={f.id}
                onClick={() => setSelected(f.id)}
              >
                <div className="faculty-photo" />
                <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360" alt="" width={'100%'} />
                <div className="faculty-card-body">
                  <div className="faculty-name">{f.name}</div>
                  <div className="faculty-designation">{f.designation}</div>
                  <div className="faculty-qual">{f.qual}</div>

                  <div className="faculty-tags">
                    {f.specialization.map((s, i) => (
                      <div className="faculty-tag" key={i}>
                        {s}
                      </div>
                    ))}
                  </div>

                  <div className="faculty-exp">
                    <div className="faculty-exp-dot" />
                    {f.exp} Experience
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Modal */}
      {selectedFaculty && (
        <div
          className="faculty-modal-overlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="faculty-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="faculty-modal-close"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="faculty-modal-header">
              <div className="faculty-modal-photo" />

              <div>
                <div className="faculty-modal-name">
                  {selectedFaculty.name}
                </div>
                <div className="faculty-modal-desig">
                  {selectedFaculty.designation}
                </div>
                <div className="faculty-modal-qual">
                  {selectedFaculty.qual} · {selectedFaculty.exp} Experience
                </div>
              </div>
            </div>

            <div className="faculty-modal-body">
              <div className="faculty-modal-section">
                <div className="fms-label">Research Areas</div>
                <div className="fms-chips">
                  {selectedFaculty.research.map((r, i) => (
                    <div className="fms-chip" key={i}>
                      {r}
                    </div>
                  ))}
                </div>
              </div>

              <div className="faculty-modal-section">
                <div className="fms-label">Publications</div>
                {selectedFaculty.pubs.map((p, i) => (
                  <div className="fms-pub" key={i}>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}