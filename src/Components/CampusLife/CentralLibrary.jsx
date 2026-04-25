import React from 'react';

const CentralLibrary = () => {
  return (
    <div className="dept-research" id="central-library" style={{ background: '#fff' }}>
      <div className="dept-research-inner">
        <span className="s-tag">RESOURCES</span>
        <h2 className="s-title">Central <em>Library</em></h2>
        <div className="gold-bar"></div>
        
        <div className="dept-hero-img-wrap" style={{ height: '300px', marginBottom: '40px', borderRadius: '4px', overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Central Library Books" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Main Content */}
          <div style={{ gridColumn: '1 / -1' }}>
            <div className="overview-text" style={{ marginBottom: '40px' }}>
              The Central Library of our Institute stands as an epitome of intellectual elegance and a repository of Engineering and Technology, Medicine, Science and Humanities, Hotel Management and Allied Health Sciences. The Learning Centre of the Institute plays a pivotal role in the process of promoting and demonstrating a desire for information, knowledge, and understanding among the students, and so aiding them in the development of their professional, personal, and spiritual lives. The Central Library inspires and supports students, faculty and researchers in all facets of their pursuits to dream, learn, create, and share knowledge and provides access to a wide array of technical ideas and information. It is Centralized Air Conditioned, the fully automated resources Centre provides an ambience conducive for the teaching and learning process with the support of 18,100 volumes of text and reference books with RFID based Library Management System. It holds knowledge resources predominantly related to Engineering and Technology, Science and Humanities, Hotel Management and Allied Health Science subjects.
              <br/><br/>
              It has computerized all its housekeeping activities using Library software KOHA that is being maintained and updated regularly. This enables users in searching and availing the library resources. Web Online Public Access Catalogue (Web-OPAC) facility is being followed and all the transactions are automated to save the precious time of the students. The unique feature of our Central Library is its total utilization.
            </div>

            {/* Vision & Mission identical to AboutUs VisionMission */}
            <div className="research-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginBottom: '40px' }}>
              <div className="research-card">
                <div className="rc-top">
                  <h4>Vision</h4>
                </div>
                <ul className="muted" style={{ paddingLeft: '20px', lineHeight: '1.8', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}>To support the faculty, research scholars, and students in teaching and learning.</li>
                  <li style={{ marginBottom: '10px' }}>To help attain excellence in higher technical education and research.</li>
                  <li style={{ marginBottom: '10px' }}>To provide a hi-tech gateway and easy access to knowledge based global information and academic resources in a variety of formats.</li>
                  <li style={{ marginBottom: '10px' }}>To meet the relevant and diverse demands in scientific, engineering, technological and management education.</li>
                </ul>
              </div>
              
              <div className="research-card">
                <div className="rc-top">
                  <h4>Mission</h4>
                </div>
                <ul className="muted" style={{ paddingLeft: '20px', lineHeight: '1.8', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}>To systematically and regularly collect relevant books, journals, magazines and such other publications, in conventional or in electronic media, for continuous updating and strengthening the resources of the library and its data bank.</li>
                  <li style={{ marginBottom: '10px' }}>To provide the right ambience and facilities for the acquisition and dissemination of information to faculty and students.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Image */}
        <div className="dept-hero-img-wrap" style={{ height: '400px', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=500&q=80" 
            alt="Students in Library" 
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CentralLibrary;
