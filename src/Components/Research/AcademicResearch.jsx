import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const researchAreas = [
  {
    title: "Physics",
    intro: "The key research areas of the Division of Physics are:",
    sections: [
      {
        heading: "Alternate Energy and Materials Science",
        text: "Solid Oxide Fuel Cells, Cathode materials for SOFC, Electrochemical Gas Sensors, Catalysis, Ion-Solid Interactions, Energy and Environment, and Magnetic materials, Crystal growth and characterization.",
      },
      {
        heading: "Complex Systems and Nonlinear Dynamics",
        text: "Complex systems, Dynamics of Complex Networks, Nonlinear Dynamics and Chaos Theory, Mathematical modelling, and Statistical Physics.",
      },
      {
        heading: "Energy and Environment",
        text: "Carbon materials, Photocatalysis, Electrocatalysis, Heterogeneous catalysis, volatile organic compound and alcohol sensors, hierarchical nanomaterials, supercapacitors, volatile organic compound oxidation, enteric pathogen removals, wastewater treatment, enzyme technology, immobilization and adsorption, dye sensitised solar cells, and waste to energy conversion.",
      },
      {
        heading: "Micro Electro Mechanical Systems (MEMS)",
        text: "Modelling and simulation of Micro Electro Mechanical Systems using COMSOL software, and materials modelling and simulation using Quantum Espresso software.",
      },
      {
        heading: "Nanoscience and Nanotechnology",
        text: "Nanostructures, growth and characterization, quantum dots in glasses.",
      },
      {
        heading: "Photonics and Laser Technology",
        text: "Photonic glasses, fiber optic devices for sensing applications, and optoelectronic devices and nonlinear optics.",
      },
      {
        heading: "Physics of Plasma",
        text: "Basic experimental plasma physics, nonlinear experiments in DC/RF plasma, modelling of nonlinear plasma dynamics, plasma enhanced chemical vapour deposition, plasma assisted material processing, dusty plasma, space plasma, magneto plasma, diagnostics in plasma, and plasma assisted smart textile.",
      },
      {
        heading: "Relativity, Geometry, Mathematical Physics and Physics Pedagogy",
        text: "Ricci flow, general relativity, differential geometry, mathematical physics, classical and quantum physics, non-Riemannian geometry, homogeneous spaces, Lie groups, finite groups, higher order-higher derivative flows, Bech flow, conformal gravity, wormhole physics, and 2+1 gravity.",
      },
      {
        heading: "Semiconductor Materials and Thin Film Technology",
        text: "Amorphous and crystalline semiconductor materials, devices and characterization, biosensors, semiconductor based gas sensors, low dielectric constant thin films for ULSI device applications, and surface science.",
      },
      {
        heading: "Soft Matter Physics",
        text: "Physics of granular media, granular electrostatics, chaotic advection, modelling of traffic flow, jamming-unjamming transition, and pattern formation in fluids.",
      },
    ],
  },
  {
    title: "Mathematics",
    intro: "The key research areas of the Division of Mathematics are:",
    points: [
      "Computational Fluid Dynamics",
      "Optimization and data analysis",
      "Graph Theory and Networking",
      "Applied Algebra and Analysis",
      "Mathematical Modelling",
      "Transform Techniques",
      "Nonlinear differential equations",
    ],
  },
  {
    title: "Chemistry",
    intro: "The key research areas of the Division of Chemistry are:",
    points: [
      "Hypervalent chemistry",
      "Stereochemistry",
      "Antidiabetic agent synthesis",
      "Synthesis of natural product derivatives",
      "Polymer Chemistry - controlled radical polymerization techniques",
      "Design and development of functional polymethacrylates",
      "Polymethacrylamides for applications like drug delivery, imaging and biomolecules sensing",
      "Organic layered polymer nano composites",
      "Development of membranes for waste water treatment",
      "Nano clays for industrial applications",
      "Peptide Chemistry",
      "Synthetic dye chemistry",
      "Synthesis and modification of porphyrins",
      "Colloidal Ag and Au nanoparticles and their applications",
      "Coordination chemistry - transition metal complexes",
      "Synthesis of volatile complexes",
      "Thermal characterization",
      "Vapour pressure measurements",
      "Evaluation of thermodynamic parameters",
      "Chemical Vapour Deposition (CVD), thin films and its applications",
      "Solid state chemistry for functional materials intended to electronic applications",
      "Thin film deposition, sol-gel chemistry, pulsed laser deposition and nano-fluid synthesis",
      "Solid-state refrigeration, ferroelectric and energy storage devices",
      "Capacitors",
      "Thermoelectric materials for waste heat recovery",
      "Nano composites of oxides and chalcogenides with graphene for hydrogen evolution by water splitting",
      "Synthesis of nanoparticles for SERS applications",
      "Development of nanostructured carbon and silica materials",
      "Advanced nano catalysis for fine chemicals synthesis",
      "Photo catalysis, solar fuel and dye degradation",
      "Bio-molecular adsorption on porous solids",
      "Computational material science and chemistry of inorganic complexes",
    ],
  },
  {
    title: "Computer Science and Engineering",
    intro: "The key research areas in Computer Science and Engineering are:",
    points: [
      "Theoretical Computer Science",
      "Data Analytics",
      "Semantic Web Technology",
      "Computational Intelligence",
      "Network and Security",
      "Digital Image and Video Processing",
      "Cloud Computing",
      "Software Engineering",
      "Computer Architecture & Embedded System",
      "E-Learning",
    ],
  },
  {
    title: "Electrical and Electronics Engineering",
    intro: "The key research areas in Electrical and Electronics Engineering are:",
    points: [
      "Power Systems operation and control",
      "Smart grid technologies",
      "Power Electronics",
      "Applications of power electronics to Renewable Energy systems",
      "Electric drives and control",
      "Controller design using optimization techniques",
      "Nonlinear system and intelligent control techniques",
      "Process control and soft computing techniques",
    ],
  },
  {
    title: "Electronics and Communication Engineering",
    intro: "The key research areas in Electronics and Communication Engineering are:",
    points: [
      "Embedded Systems Design",
      "Microwave and Photonics",
      "Nanotechnology",
      "Signal Processing",
      "VLSI Circuits and Devices",
      "Wireless Communication and Networking",
    ],
  },
  {
    title: "Mechanical Engineering",
    intro: "The key research areas in Mechanical Engineering are:",
    points: [
      "Design",
      "Thermal and Automotive",
      "Manufacturing",
      "Energy",
      "Mechatronics",
      "Nano-Materials",
    ],
  },
];

const AcademicResearch = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="dept-programmes" style={{ background: "var(--cream)", padding: "60px 0" }}>
      <div className="dept-programmes-inner" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px" }}>
        <div className="prog-layout" style={{ gridTemplateColumns: "1fr", border: "none" }}>
          <div className="prog-detail" style={{ border: "1px solid var(--border)", borderRadius: "6px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", padding: "40px", background: "#fff" }}>
            <div className="prog-detail-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "30px" }}>
              <div>
                <span className="s-tag">OPPORTUNITIES</span>
                <h2 className="s-title" style={{ marginTop: "5px" }}>Academic <em>Research</em></h2>
                <div className="gold-bar" style={{ margin: "15px 0 0 0" }}></div>
              </div>
              <button className="btn-gold" style={{ padding: "10px 24px", border: "none", background: "var(--gold)", color: "#fff", borderRadius: "4px", cursor: "pointer", fontWeight: "600" }}>Explore Research</button>
            </div>

            <p className="prog-desc" style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--gray)", marginBottom: "25px" }}>
              SRM Institute of Science and Technology, Tiruchirappalli organizes Conferences, Seminars and Workshops periodically. These
              activities and forums help expose young minds to the latest innovations and scientific trends, thereby generating an interest in
              research.
            </p>

            <div className="prog-eligibility" style={{ marginBottom: "40px", display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ width: "4px", height: "40px", background: "var(--gold)", borderRadius: "2px" }}></div>
              <p style={{ margin: 0, fontSize: "16px", color: "var(--text)", lineHeight: "1.6" }}>
                Students are also encouraged to take up innovative, socially relevant research projects. Such projects are funded by SRM Institute
                of Science and Technology, Tiruchirappalli.
              </p>
            </div>

            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--navy)", marginBottom: "20px", fontFamily: "'Playfair Display', serif", borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
              Research Areas
            </h3>

            <div style={{ textAlign: "left" }}>
              {researchAreas.map((area, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={area.title}
                    style={{
                      border: "1px solid var(--border)",
                      borderBottom: index === researchAreas.length - 1 ? "1px solid var(--border)" : "none",
                      background: isOpen ? "rgba(200, 149, 42, 0.03)" : "#fff",
                      transition: "all 0.3s",
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        padding: "16px 20px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: isOpen ? "var(--gold)" : "var(--navy)",
                        outline: "none",
                        textAlign: "left",
                        transition: "color 0.3s",
                      }}
                    >
                      {isOpen ? <FaMinus style={{ flexShrink: 0, color: "var(--gold)" }} /> : <FaPlus style={{ flexShrink: 0, color: "var(--gold)" }} />}
                      {area.title}
                    </button>

                    <div
                      style={{
                        display: isOpen ? "block" : "none",
                        padding: "0 20px 24px 48px",
                      }}
                    >
                      <p style={{ color: "var(--navy)", fontSize: "15px", fontWeight: 700, lineHeight: "1.6", margin: "0 0 14px" }}>
                        {area.intro}
                      </p>

                      {area.sections ? (
                        <div style={{ display: "grid", gap: "16px" }}>
                          {area.sections.map(section => (
                            <div key={section.heading}>
                              <h4 style={{ color: "var(--navy)", fontSize: "15px", fontWeight: 700, margin: "0 0 4px" }}>
                                {section.heading}
                              </h4>
                              <p style={{ color: "var(--gray)", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>
                                {section.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul style={{ color: "var(--gray)", fontSize: "15px", lineHeight: "1.8", margin: 0, paddingLeft: "20px" }}>
                          {area.points.map(point => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicResearch;
