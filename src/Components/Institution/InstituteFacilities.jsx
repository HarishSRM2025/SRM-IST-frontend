import React from "react";
import {
  FaServer,
  FaShieldAlt,
  FaRobot,
  FaLaptopCode,
  FaChartBar,
  FaMicrochip,
} from "react-icons/fa";

export default function InstituteFacilities() {
  const facilities = [
    {
      id: 1,
      name: "Advanced Computing Lab",
      icon: <FaServer />,
      desc: "High-performance computing environment for ML and parallel processing.",
      capacity: "60 Students",
      equipment: ["GPU Workstations", "Linux Servers", "Network Switches"],
    },
    {
      id: 2,
      name: "Cybersecurity Research Lab",
      icon: <FaShieldAlt />,
      desc: "Dedicated lab for ethical hacking and security research.",
      capacity: "30 Students",
      equipment: ["Kali Linux", "Firewalls", "SIEM Tools"],
    },
    {
      id: 3,
      name: "AI & Robotics Studio",
      icon: <FaRobot />,
      desc: "Space for AI innovation and robotics development.",
      capacity: "24 Students",
      equipment: ["Arduino", "Raspberry Pi", "3D Printer"],
    },
    {
      id: 4,
      name: "Software Development Centre",
      icon: <FaLaptopCode />,
      desc: "Agile development workspace with real-world tools.",
      capacity: "80 Students",
      equipment: ["CI/CD", "Cloud Access", "Testing Tools"],
    },
    {
      id: 5,
      name: "Data Science Lab",
      icon: <FaChartBar />,
      desc: "Big data analytics and visualization lab.",
      capacity: "45 Students",
      equipment: ["Hadoop", "Spark", "Tableau"],
    },
    {
      id: 6,
      name: "IoT & Embedded Systems Lab",
      icon: <FaMicrochip />,
      desc: "Hands-on IoT and embedded systems lab.",
      capacity: "30 Students",
      equipment: ["NodeMCU", "FPGA", "Sensors"],
    },
  ];

  return (
    <section className="dept-facilities" style={{backgroundColor:'#fff'}}>
      <div className="dept-facilities-inner">
        <div className="dept-section-header">
          <div>
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">
              World-Class <em>Facilities</em>
            </h2>
          </div>
        </div>

        <div className="facilities-grid">
          {facilities.map((f) => (
            <div className="facility-card" key={f.id}>
              <div className="facility-img">
                <div className="facility-icon">{f.icon}</div>

                <div className="facility-img-label">
                  Capacity: {f.capacity}
                </div>
              </div>

              <div className="facility-body">
                <div className="facility-name">{f.name}</div>
                <div className="facility-desc">{f.desc}</div>

                <div className="facility-divider" />

                <div className="facility-equip-label">
                  Equipment Available
                </div>

                <div className="facility-equip-list">
                  {f.equipment.map((e, i) => (
                    <div className="facility-equip-chip" key={i}>
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}