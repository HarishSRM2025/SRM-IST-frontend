import React from "react";
import Breadcrum from "../Components/Common/Breadcrum";

const grantsData = [
  { sno: "1", pi: "Dr.S. Kanaga Suba Raja", title: "AI-based Vehicle Parking System for Smart Cities", scheme: "MSME", cost: "17,000", date: "25/7/2022", status: "Sanctioned & Ongoing" },
  { sno: "2", pi: "Dr.S. Kanaga Suba Raja", title: "Design and Development of Crop and Fertilizer Recommendation System for Farmers using Generative Artificial Intelligence", scheme: "TNSCST", cost: "400,000", date: "2023", status: "Applied" },
  { sno: "3", pi: "Dr.S Kanaga Suba Raja", title: "AI - Enabled Mental Health Monitoring System for Rehabilitation Centers", scheme: "ICSSR-Major Project Scheme 2023-2024", cost: "1,904,000", date: "2023", status: "Applied" },
  { sno: "4", pi: "Dr.S Kanaga Suba Raja", title: "An Ingenious Seasonal Crop Recommendation System for Sustainable Agriculture and Rainwater Management Driven with Artificial Intelligence Integrating Arthashastra, Based on Kautilya's Astrological Monsoon Prediction.", scheme: "IKS (INDIAN KNOWLEDGE SYSTEMS) Competitive Research Proposals Program 2023-24", cost: "1,200,000", date: "2023", status: "Applied" },
  { sno: "5", pi: "Dr.S Kanaga Suba Raja", title: "Developing an AI Based Monitoring System for Tracking malnourished children and Targeting Delivery of ICDS Services and Look To The Profile of 0 - 36 Months Children and Formulation of High Protein & Nutrient Biscuit and Implementation of BCC Package to Reduce Malnourishment", scheme: "ICMR", cost: "2,900,477", date: "2023", status: "Applied" },
  { sno: "6", pi: "Dr.Balaji Ganesh", title: "Application/Observational research using ChatGPT as a Decision Support to", scheme: "Melinda-Gates Foundation", cost: "USD 15,000", date: "5/6/2023", status: "Applied" },
  { sno: "7", pi: "Dr.N Malmurugan / Dr.S. Jayasankari / Dr.R Danoolakshmi / Dr. J. Yuvaraj", title: "Development of Road Traffic Accident Victim Management System using Crowd Sourced Information & technology Demonstrated Project (Golden Hour Accident Aid App)", scheme: "NHAI-SPACE scheme", cost: "50,00,000", date: "29/11/2022", status: "Applied" },
  { sno: "8", pi: "Dr.N Malmurugan / Dr.Balaji Ganesh", title: "DST-SATHI Centre of Excellence in Augmented Reality and Virtual Reality Technologies", scheme: "DST-Sophisticated Analytical and Technical Help Institutes (SATHI)", cost: "Rs.6,26,57,519", date: "14/10/2022", status: "Applied. PMC Attended" },
  { sno: "9", pi: "Dr.Balaji Ganesh", title: "Design of intelligent Systems based on Deep Learning to analyze EEG/fMRI Brain Signals of Sanskrit Pandits and Purohits for Cognitive Studies", scheme: "Indian Knowledge System", cost: "Rs.8,10,000", date: "31/7/2023", status: "Applied" },
  { sno: "10", pi: "Dr.R.Doolalakshmi / Dr.S Padmapriya SRM Arts College", title: "Unveiling Cognitive Influences on E-Learning Preferences", scheme: "ICSSR Minor Projects", cost: "10,00,000", date: "October 18 2023", status: "Applied" },
  { sno: "11", pi: "Dr.P.Shanmuga Sundari", title: "AgitAI: An Intelligent Assistant for Revolutionizing Farming with plant health monitoring System", scheme: "TNSCST", cost: "385000", date: "2023", status: "Applied" },
  { sno: "12", pi: "Dr.P.Shanmuga Sundari", title: "Route Vision Navigator RVN A smart assisting model for visually challenged persons to navigate with confidence", scheme: "SERB-TIDE", cost: "2486200", date: "2023", status: "Applied" }
];

const consultancyData = [
  { sno: "1", pi: "Dr.Balaji Ganesh", title: "Development of Scalable DL based OCR Engine for Computer assisted Medical Coding System", scheme: "e-MedLogix, Chennai & USA", cost: "Rs. 2,48,000", date: "25-08-2023", status: "Sanctioned & On-going" }
];

const DataTable = ({ title, data }) => (
  <div style={{ marginBottom: "60px", width: "100%", overflowX: "auto" }}>
    <h3 style={{ textAlign: "center", fontSize: "24px", fontWeight: "700", color: "var(--navy)", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
      {title}
    </h3>
    <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "900px", fontFamily: "'DM Sans', sans-serif" }}>
      <thead>
        <tr style={{ background: "rgba(200, 149, 42, 0.1)" }}>
          {["S.No", "PI/Co-PI", "Title", "Name of the Scheme/Company", "Project Cost", "Date of Applied/Received", "Status"].map((h) => (
            <th key={h} style={{ padding: "16px", border: "1px solid var(--border)", textAlign: "left", fontSize: "14px", fontWeight: "600", color: "var(--navy)" }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} style={{ background: "#fff", transition: "background 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "#f9fafb"} onMouseOut={(e) => e.currentTarget.style.background = "#fff"}>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)" }}>{row.sno}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--navy)", fontWeight: "500" }}>{row.pi}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)", maxWidth: "350px", lineHeight: "1.6" }}>{row.title}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)" }}>{row.scheme}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)" }}>{row.cost}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)" }}>{row.date}</td>
            <td style={{ padding: "16px", border: "1px solid var(--border)", fontSize: "14px", color: "var(--gray)" }}>
              <span style={{ 
                display: "inline-block", 
                padding: "4px 10px", 
                borderRadius: "50px", 
                fontSize: "12px", 
                fontWeight: "600",
                background: row.status.includes("Sanctioned") ? "rgba(40, 167, 69, 0.1)" : "rgba(200, 149, 42, 0.1)",
                color: row.status.includes("Sanctioned") ? "#28a745" : "var(--gold)"
              }}>
                {row.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SponsoredResearch = () => {
  return (
    <>
      <Breadcrum 
        title="Sponsored Research" 
        paths={[{ name: "Home", link: "/" }, { name: "Sponsored Research" }]}
        bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop"
      />
      
      <section style={{ padding: '80px 0', background: 'var(--cream)' }}>
        <div className="wrap" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid var(--border)' }}>
            <DataTable title="Grants Applied" data={grantsData} />
            <DataTable title="Consultancy Work" data={consultancyData} />
          </div>

        </div>
      </section>
    </>
  );
};

export default SponsoredResearch;
