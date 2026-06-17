import React from 'react';
import {
FaLaptopHouse,
FaBookOpen,
FaBookmark,
FaCompactDisc,
FaDesktop,
FaPeopleArrows,
FaGlobe,
FaExchangeAlt,
FaNewspaper,
FaSearch,
FaDatabase,
FaPrint,
FaShieldAlt,
FaChartBar,
FaUserTie,
FaDirections,
FaFileAlt,
FaPenFancy
} from "react-icons/fa";

const iconMap = {
  remote: FaLaptopHouse,
  ebook: FaBookOpen,
  reservation: FaBookmark,
  cdrom: FaCompactDisc,
  desktop: FaDesktop,
  ill: FaPeopleArrows,
  internet: FaGlobe,
  lending: FaExchangeAlt,
  newspaper: FaNewspaper,
  opac: FaSearch,
  dspace: FaDatabase,
  print: FaPrint,
  plagiarism: FaShieldAlt,
  research: FaChartBar,
  reference: FaUserTie,
  referral: FaDirections,
  literature: FaFileAlt,
  publishing: FaPenFancy,
};

const services = [
    {
      icon: "remote",
      title: "Remote Access",
      desc: "Access library resources and subscribed content remotely from anywhere."
    },
    {
      icon: "ebook",
      title: "E-Access",
      desc: "Access E-Journals, E-Books, Question Banks, and Project Reports."
    },
    {
      icon: "reservation",
      title: "Book Reservation",
      desc: "Reserve books online for convenient borrowing."
    },
    {
      icon: "cdrom",
      title: "CD-ROM Access",
      desc: "Access educational and research content available in CD-ROM collections."
    },
    {
      icon: "desktop",
      title: "Desktop Publishing",
      desc: "Support for document formatting and academic content preparation."
    },
    {
      icon: "ill",
      title: "Inter Library Loan",
      desc: "Borrow resources from partner libraries when unavailable locally."
    },
    {
      icon: "internet",
      title: "Internet Browsing",
      desc: "High-speed internet access for academic and research purposes."
    },
    {
      icon: "lending",
      title: "Lending Service",
      desc: "Automated book issue and return services using RFID technology."
    },
    {
      icon: "newspaper",
      title: "Newspaper Clippings",
      desc: "Access archived newspaper articles and important news collections."
    },
    {
      icon: "opac",
      title: "OPAC",
      desc: "Online Public Access Catalogue for searching library collections."
    },
    {
      icon: "dspace",
      title: "D-Space Repository",
      desc: "24×7 access to previous years' question papers and institutional resources."
    },
    {
      icon: "print",
      title: "Reprography",
      desc: "Printing, scanning, and photocopying facilities."
    },
    {
      icon: "plagiarism",
      title: "Anti-Plagiarism Tools",
      desc: "Originality checking and plagiarism detection support."
    },
    {
      icon: "research",
      title: "Research Productivity & Impact Tools",
      desc: "Tools to analyze publication impact and research performance."
    },
    {
      icon: "reference",
      title: "Reference Service",
      desc: "Professional assistance in locating research materials."
    },
    {
      icon: "referral",
      title: "Referral Service",
      desc: "Guidance to external information sources and specialized libraries."
    },
    {
      icon: "literature",
      title: "Literature Search Support",
      desc: "Assistance with literature reviews and information retrieval."
    },
    {
      icon: "publishing",
      title: "Research & Publishing Support",
      desc: "Support for scholarly communication and publishing workflows."
    }
];


const LibraryServices = () => (
  <section className="news-section" id="services" style={{ background: '#fff' }}>
    <div className="wrap">
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="s-tag">Facilitating Learning</span>
        <h2 className="s-title">Library <em>Services</em></h2>
        <div className="gold-bar" style={{ margin: '15px auto' }}></div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
     
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <div key={index} className="service-card" >
              <div className="service-icon">
                <Icon />
              </div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LibraryServices;