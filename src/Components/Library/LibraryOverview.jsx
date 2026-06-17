import React from 'react';
import libraryImg from '../../assets/images/about/campus.JPG';

const LibraryOverview = () => (
  <section className="lib-section" id="overview">
    <div className="wrap">
      <div className="wc-grid">
        <div className="rev vis">
          <span className="s-tag">Central Library</span>
          <h2 className="s-title">
            Gateway to <em>Knowledge</em>
          </h2>
          <div className="gold-bar"></div>
          <p className="wc-body" style={{ textAlign: 'justify' }}>The Central Library of our Institute stands as an epitome of intellectual elegance and a repository of Engineering and Technology, Medicine, Science and Humanities, Hotel Management and Allied Health Sciences. The Learning Centre of the institute plays a pivotal role in the process of promoting and demonstrating a desire for information, knowledge, and understanding among the students, and so aiding them in the development of their professional, personal, and spiritual lives. The Central Library inspires and supports students, faculty and researchers in all facets of their pursuits to dream, learn, create, and share knowledge and provides access to a wide array of technical ideas and information.</p>
          <p className="wc-body" style={{ textAlign: 'justify' }}>It is Centralized Air Conditioned the fully automated resources Centre provides an ambience conducive for the teaching and learning process with the support of 18,100 volumes of text and reference books with RFID based Library Management System. It holds knowledge resources predominantly related to Engineering and Technology, Science and Humanities, Hotel Management and Allied Health Science subjects.</p>
          <p className="wc-body" style={{ textAlign: 'justify' }}>It has computerized all its housekeeping activities using Library software KOHA that is being maintained and updated regularly. This enables users in searching and availing the library resources. Web Online Public Access Catalogue (Web-OPAC) facility is being followed and all the transactions are automated to save the precious time of the students. The unique feature of our Central Library is its total utilization.</p>
        </div>
        <div className="library-vm">
            <div className="library-vm-card">
              <h3>Vision</h3>
              <ul>
                <li>To support the faculty, research scholars and students in teaching and learning.</li>
                <li>To help attain excellence in higher technical education and research.</li>
                <li>To provide a hi-tech gateway and easy access to knowledge based global information and academic resources in a variety of formats.</li>
                <li>To meet the relevant and diverse demands in scientific, engineering, technological and management education.</li>
              </ul>
            </div>

            <div className="library-vm-card">
              <h3>Mission</h3>
              <ul>
                <li>To systematically and regularly collect relevant books, journals, magazines and such other publications, in conventional or in electronic media, for continuous updating and strengthening the resources of the library and its data bank.</li>
                <li>To provide the right ambience and facilities for the acquisition and dissemination of information to faculty and students.</li>
              </ul>
            </div>
          </div>
      </div>
      
    </div>
  </section>
);

export default LibraryOverview;