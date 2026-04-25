import { useState } from "react";
import {
  FaFlask,
  FaProjectDiagram,
  FaUserGraduate,
  FaBook,
  FaLightbulb
} from "react-icons/fa";

export default function DeptResearch() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { id: 0, label: "Research Areas", icon: <FaFlask /> },
    { id: 1, label: "Funded Projects", icon: <FaProjectDiagram /> },
    { id: 2, label: "Scholars", icon: <FaUserGraduate /> },
    { id: 3, label: "Publications", icon: <FaBook /> },
    { id: 4, label: "Patents", icon: <FaLightbulb /> },
  ];

  const researchAreas = [
    { title: "Artificial Intelligence & ML", desc: "AI models and real-world deployment." },
    { title: "Cybersecurity & Privacy", desc: "Zero-trust, blockchain, and security systems." },
    { title: "Computer Vision", desc: "3D reconstruction and video analytics." },
  ];

  const projects = [
    { title: "Federated Learning", pi: "Dr. Rajesh Kumar", agency: "DST", amount: "₹28.5L", duration: "2022–25", status: "Ongoing" },
  ];

  const scholars = [
    { name: "K. Praveenkumar", guide: "Dr. Rajesh", title: "Explainable AI", year: "2021", status: "Ongoing" },
  ];

  const journals = [
    { title: "Federated NLP", authors: "Kumar R.", journal: "IEEE", year: "2024" },
  ];

  const conferences = [
    { title: "Object Detection", authors: "Babu S.", conference: "CVPR", year: "2024" },
  ];

  const patents = [
    { title: "AI Detection System", inventor: "Dr. Rajesh", number: "IN123456", status: "Granted" },
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "ongoing":
        return "status-ongoing";
      case "completed":
      case "granted":
        return "status-completed";
      default:
        return "status-ongoing";
    }
  };

  return (
    <section className="dept-research">
      <div className="dept-research-inner">

        {/* Header */}
        <div className="dept-section-header">
          <div>
            <div className="section-label">Scholarship & Discovery</div>
            <h2 className="section-title">
              Research & <em>Publications</em>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="research-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`research-tab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              <span className="tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === 0 && (
          <div className="research-areas-grid">
            {researchAreas.map((r) => (
              <div key={r.title} className="research-area-card">
                <div className="ra-title">{r.title}</div>
                <div className="ra-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div className="research-card-grid">
            {projects.map((p) => (
              <div className="research-card" key={p.title}>
                <div className="rc-top">
                  <h4>{p.title}</h4>
                  <span className={`status-badge ${getStatusClass(p.status)}`}>
                    {p.status}
                  </span>
                </div>

                <div className="rc-body">
                  <p><strong>PI:</strong> {p.pi}</p>
                  <p><strong>Agency:</strong> {p.agency}</p>
                  <p><strong>Duration:</strong> {p.duration}</p>
                  <p className="amount">{p.amount}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div className="research-card-grid">
            {scholars.map((s) => (
              <div className="research-card" key={s.name}>
                <div className="rc-top">
                  <h4>{s.name}</h4>
                  <span className="status-badge status-ongoing">{s.status}</span>
                </div>

                <p className="muted">{s.title}</p>
                <p><strong>Guide:</strong> {s.guide}</p>
                <p><strong>Year:</strong> {s.year}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div className="research-card-grid">
            {journals.map((j) => (
              <div className="research-card" key={j.title}>
                <h4>{j.title}</h4>
                <p className="muted">{j.authors}</p>
                <p>{j.journal} • {j.year}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div className="research-card-grid">
             {patents.map((p) => (
              <div className="research-card" key={p.title}>
                <h4>{p.title}</h4>
                <p style={{margin:"10px 0 0"}} className="muted"><span className={`status-badge ${getStatusClass(p.status)}`}>
                      {p.status}
                    </span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}