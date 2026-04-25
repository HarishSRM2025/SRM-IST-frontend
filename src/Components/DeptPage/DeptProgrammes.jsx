import { useState } from "react";

const programmes = [
  {
    id: 1,
    name: "B.E. Computer Science & Engineering",
    degree: "B.E.",
    duration: "4 Years",
    intake: "120 Seats",
    desc: "A rigorous undergraduate programme covering algorithms, systems, and software engineering.",
    eligibility: "10+2 with Maths & Physics, 60% minimum.",
    careers: ["Software Engineer", "Data Scientist", "DevOps Engineer"],
  },
  {
    id: 2,
    name: "M.E. Computer Science & Engineering",
    degree: "M.E.",
    duration: "2 Years",
    intake: "18 Seats",
    desc: "Advanced postgraduate programme focused on research and innovation.",
    eligibility: "B.E./B.Tech with 55%.",
    careers: ["Research Scientist", "Architect", "AI Lead"],
  },
];

export default function DeptProgrammes() {
  const [active, setActive] = useState(0);

  // Safe fallback
  const prog = programmes[active] || programmes[0];

  const handleKey = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      setActive(index);
    }
  };

  return (
    <section className="dept-programmes">
      <div className="dept-programmes-inner">

        <div className="dept-section-header">
          <div>
            <div className="section-label">Academic Offerings</div>
            <h2 className="section-title">Our <em>Programmes</em></h2>
          </div>
        </div>

        <div className="prog-layout">

          {/* LEFT LIST */}
          <div className="prog-list">
            {programmes.map((p, i) => (
              <div
                key={p.id}
                className={`prog-list-item ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => handleKey(e, i)}
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="prog-list-name">{p.name}</div>
                  <div className="prog-list-degree">
                    {p.degree} · {p.duration}
                  </div>
                </div>

                <div className="prog-list-arrow">›</div>
              </div>
            ))}
          </div>

          {/* RIGHT DETAIL */}
          <div className="prog-detail">

            <div className="prog-detail-header">
              <div>
                <h3 className="prog-detail-title">{prog.name}</h3>

                <div className="prog-detail-meta">
                  <div className="prog-meta-chip">
                    <span>{prog.degree}</span>
                  </div>
                  <div className="prog-meta-chip">
                    <span>{prog.duration}</span>
                  </div>
                  <div className="prog-meta-chip">
                    <span>{prog.intake}</span>
                  </div>
                </div>
              </div>

              <button className="btn-gold" type="button">
                Apply Now
              </button>
            </div>

            <p className="prog-desc">{prog.desc}</p>

            <div className="prog-sub-title">Eligibility</div>
            <div className="prog-eligibility">{prog.eligibility}</div>

            <div className="prog-sub-title">Careers</div>
            <div className="prog-careers-grid">
              {prog.careers.map((c, i) => (
                <div className="career-chip" key={i}>{c}</div>
              ))}
            </div>

            <button className="prog-download" type="button">
              Download Curriculum
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}