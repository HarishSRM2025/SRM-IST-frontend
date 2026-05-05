import { useState } from "react";
import {
  FaTools,
  FaMicrophone,
  FaIndustry,
  FaLightbulb,
  FaShieldAlt,
  FaBroadcastTower
} from "react-icons/fa";


export default function DeptEvents() {
  const [filter, setFilter] = useState("All");

  const events = [
    { id: 1, type: "Workshop", icon: <FaTools />, title: "ML Bootcamp", date: "14 Feb 2025", desc: "Hands-on ML training.", organizer: "CSE Dept" },
    { id: 2, type: "Seminar", icon: <FaMicrophone />, title: "Quantum Talk", date: "28 Jan 2025", desc: "Quantum computing seminar.", organizer: "IBM" },
    { id: 3, type: "Visit", icon: <FaIndustry />, title: "Zoho Visit", date: "10 Dec 2024", desc: "Industry exposure.", organizer: "Zoho" },
    { id: 4, type: "Workshop", icon: <FaShieldAlt />, title: "Ethical Hacking", date: "5 Nov 2024", desc: "Security workshop.", organizer: "OWASP" },
    { id: 5, type: "Activity", icon: <FaLightbulb />, title: "Hackathon", date: "18 Oct 2024", desc: "Innovation event.", organizer: "Students" },
    { id: 6, type: "Seminar", icon: <FaBroadcastTower />, title: "5G AI", date: "2 Sep 2024", desc: "Tech seminar.", organizer: "Qualcomm" },
  ];

  const filters = ["All", "Workshop", "Seminar", "Visit", "Activity"];

  const filtered =
    filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <>

      <section className="dept-events">
        <div className="dept-events-inner">

          <div>
            <div className="section-label">Campus Life</div>
            <h2 className="section-title" style={{color:'#fff'}}>Events & <em>Activities</em></h2>
          </div>

          <div className="events-filters">
            {filters.map((f) => (
              <button
                key={f}
                className={`events-filter ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="events-grid">
            {filtered.map((e) => (
              <div className="event-card" key={e.id}>
                <div className="event-img">
                  <div className="event-icon">{e.icon}</div>
                  <div className="event-type-badge">{e.type}</div>
                </div>

                <div className="event-body">
                  <div className="event-date">{e.date}</div>
                  <div className="event-title">{e.title}</div>
                  <div className="event-desc">{e.desc}</div>
                  <div className="event-meta">By {e.organizer}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}