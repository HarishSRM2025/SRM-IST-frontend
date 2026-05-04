import { useState } from "react";
import {
  FaImage,
  FaVideo,
  FaDownload,
  FaFileAlt,
  FaPlay,
  FaFilePdf,
  FaChartLine,
  FaUniversity
} from "react-icons/fa";


const photos = Array(8).fill(0);

const videos = [
  { title: "Department Tour", desc: "Complete overview of labs" },
  { title: "Alumni Talk", desc: "Industry insights" },
  { title: "Research Demo", desc: "Live experiments" },
];

const downloads = [
  { title: "Department Brochure", date: "Aug 2024" },
  { title: "Academic Calendar", date: "Jun 2024" },
  { title: "Annual Report", date: "May 2024" },
  { title: "Placement Report", date: "Jul 2024" },
];

const reports = [
  { title: "NAAC Report", year: "2023" },
  { title: "NBA Report", year: "2023" },
];

export default function InstituteGallery() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { label: "Photos", icon: <FaImage /> },
    { label: "Videos", icon: <FaVideo /> },
    { label: "Downloads", icon: <FaDownload /> },
    { label: "Reports", icon: <FaFileAlt /> },
  ];

  return (
    <>
      

      <section className="dept-gallery" style={{backgroundColor:"#f8f6f1"}}>
        <div className="dept-gallery-inner">

          <h2 className="section-title">
            Gallery & <span style={{ color: "#c8952a" }}>Resources</span>
          </h2>

          {/* Tabs */}
          <div className="gallery-tabs">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`gallery-tab ${tab === i ? "active" : ""}`}
                onClick={() => setTab(i)}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>

          {/* Photos */}
          {tab === 0 && (
            <div className="photo-grid">
              {photos.map((_, i) => (
                <div key={i} className="photo-item">
                  <FaImage />
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {tab === 1 && (
            <div className="video-grid">
              {videos.map((v, i) => (
                <div key={i} className="video-card">
                  <div className="video-thumb">
                    <div className="video-play">
                      <FaPlay />
                    </div>
                  </div>
                  <div className="video-body">
                    <div className="dl-title">{v.title}</div>
                    <div className="dl-meta">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Downloads */}
          {tab === 2 && (
            <div className="downloads-grid">
              {downloads.map((d, i) => (
                <div key={i} className="download-item">
                  <FaFilePdf className="dl-icon" />
                  <div>
                    <div className="dl-title">{d.title}</div>
                    <div className="dl-meta">{d.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reports */}
          {tab === 3 && (
            <div className="downloads-grid">
              {reports.map((r, i) => (
                <div key={i} className="download-item">
                  <FaChartLine className="dl-icon" />
                  <div>
                    <div className="dl-title">{r.title}</div>
                    <div className="dl-meta">{r.year}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}