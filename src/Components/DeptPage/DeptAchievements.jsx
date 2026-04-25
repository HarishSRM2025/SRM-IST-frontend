import {
  FaTrophy,
  FaMedal,
  FaFlask,
  FaStar,
  FaNewspaper,
  FaRocket,
  FaCogs,
  FaDownload
} from "react-icons/fa";


const facultyAchievements = [
  {
    icon: <FaTrophy />,
    title: "Best Research Paper Award",
    name: "Dr. Rajesh Kumar",
    org: "IEEE, USA · 2024",
    desc: "Recognized for groundbreaking work on federated learning frameworks for privacy-preserving healthcare analytics."
  },
  {
    icon: <FaMedal />,
    title: "Distinguished Educator Award",
    name: "Dr. Meena Krishnan",
    org: "CSI India · 2024",
    desc: "Honoured for 20 years of excellence in education."
  },
  {
    icon: <FaFlask />,
    title: "Young Scientist Fellowship",
    name: "Dr. Lavanya Mohan",
    org: "DST India · 2023",
    desc: "Awarded for contributions to bioinformatics research."
  }
];

const studentAchievements = [
  {
    icon: <FaTrophy />,
    student: "Aditya Ramesh (III CSE)",
    title: "1st Place – Smart India Hackathon",
    event: "Ministry of Education",
    date: "Dec 2024"
  },
  {
    icon: <FaMedal />,
    student: "Divya Krishnan (IV CSE)",
    title: "2nd Place – ACM ICPC",
    event: "ACM Regional",
    date: "Nov 2024"
  },
  {
    icon: <FaStar />,
    student: "Prateek Iyer (III CSE)",
    title: "Best Project – Google Challenge",
    event: "GDSC",
    date: "Apr 2024"
  },
  {
    icon: <FaRocket />,
    student: "Sneha B (II CSE)",
    title: "Top 10 – Microsoft Cup",
    event: "Microsoft",
    date: "Mar 2024"
  }
];

const awards = [
  {
    title: "Best Department Award",
    recipient: "Department of CSE",
    org: "SRM Group · 2024"
  },
  {
    title: "NBA Accreditation",
    recipient: "B.E. CSE",
    org: "NBA India · 2023–2026"
  },
  {
    title: "Top 10 CSE Departments",
    recipient: "NIRF Ranking",
    org: "Ministry of Education"
  }
];

const newsletters = [
  {
    title: "CSE Chronicle",
    edition: "Vol. 5 · Jan 2025",
    icon: <FaNewspaper />
  },
  {
    title: "Tech Horizons",
    edition: "Vol. 4 · Jul 2024",
    icon: <FaRocket />
  },
  {
    title: "The Algorithm",
    edition: "Vol. 3 · Jan 2024",
    icon: <FaCogs />
  }
];

export default function DeptAchievements() {
  return (
    <>

      <section className="dept-achievements">
        <div className="dept-achievements-inner">

          {/* Header */}
          <div className="dept-section-header">
            <div>
              <div className="section-label">Honours & Recognition</div>
              <h2 className="section-title">
                Achievements & <em>Newsletter</em>
              </h2>
            </div>
          </div>

          {/* Top Layout */}
          <div className="achieve-layout">

            {/* Faculty */}
            <div>
              <div className="achieve-col-title">Faculty Achievements</div>

              {facultyAchievements.map((a, i) => (
                <div className="fa-card" key={i}>
                  <div className="fa-icon">{a.icon}</div>
                  <div className="fa-content">
                    <div className="fa-title">{a.title}</div>
                    <div className="fa-name">{a.name}</div>
                    <div className="fa-org">{a.org}</div>
                    <div className="fa-desc">{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Students */}
            <div>
              <div className="achieve-col-title">Student Achievements</div>

              {studentAchievements.map((s, i) => (
                <div className="sa-card" key={i}>
                  <div className="sa-medal">{s.icon}</div>
                  <div className="sa-content">
                    <div className="sa-student">{s.student}</div>
                    <div className="sa-title">{s.title}</div>
                    <div className="sa-event">{s.event}</div>
                  </div>
                  <div className="sa-date">{s.date}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Layout */}
          <div className="achieve-bottom">

            {/* Awards */}
            <div>
              <div className="achieve-col-title">Awards</div>

              {awards.map((a, i) => (
                <div className="award-card" key={i}>
                  <div className="award-star">
                    <FaStar />
                  </div>
                  <div>
                    <div className="award-title">{a.title}</div>
                    <div className="award-recipient">{a.recipient}</div>
                    <div className="award-org">{a.org}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <div className="achieve-col-title">Newsletter</div>

              {newsletters.map((n, i) => (
                <div className="newsletter-card" key={i}>
                  <div className="newsletter-cover"><img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width="100%" height="100%" alt="" /></div>
                  <div style={{ flex: 1 }}>
                    <div className="newsletter-title">{n.title}</div>
                    <div className="newsletter-edition">{n.edition}</div>

                    <button className="newsletter-dl">
                      <FaDownload size={12} />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>
    </>
  );
}