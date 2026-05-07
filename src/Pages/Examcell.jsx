import React, { useEffect } from 'react';
import { 
  FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave, FaIdCard, 
  FaFileAlt, FaDownload, FaCheckCircle, FaGraduationCap, 
  FaEnvelope, FaPhone, FaBuilding, FaBus, FaCertificate, FaGlobe, FaChartLine
} from 'react-icons/fa';
import '../css/Examcell.css';

// Placeholder Images
import HeroImg from '../assets/images/home/campus-home.JPG';
import ConvoImg from '../assets/images/home/hero-home.JPG';

import Breadcrum from '../Components/Common/Breadcrum';

const Examcell = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 1. Hero Banner with Breadcrum */}
      <Breadcrum 
        title="Controller of Examinations"
        subtitle="Office of the Controller of Examinations"
        bgImage={HeroImg}
        paths={[
          { name: 'Home', link: '/' },
          { name: 'Students', link: '/students' },
          { name: 'Examcell' }
        ]}
      />

      {/* 2. Controller's Message */}
      <section className="exam-section exam-navy">
        <div className="wrap">
          <div className="ctrl-wrapper">
            <div className="ctrl-img-box">
              <img src='https://img.magnific.com/premium-vector/default-avatar-profile-icon-gray-placeholder-vector-illustration_514344-14757.jpg?w=360' alt="Controller of Examinations" className="ctrl-img" />
              <div className="ctrl-name">Dr. S. Ponnusamy</div>
              <div className="ctrl-title">Controller of Examinations</div>
            </div>
            <div className="ctrl-msg">
              <p>
                "Welcome to the Office of the Controller of Examinations. We are committed to ensuring the smooth conduct of examinations, timely publication of results, and maintaining the highest standards of academic integrity and confidentiality. Our digital initiatives aim to provide seamless services to our students, alumni, and faculty."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Exam Cell */}
      <section className="exam-section exam-white">
        <div className="wrap">
          <h2 className="exam-section-title">About Us</h2>
          <p className="exam-desc">The primary functions of the Office of the Controller of Examinations include:</p>
          <ul className="exam-about-list">
            <li>Scheduling and conducting Continuous Assessment and End Semester Examinations.</li>
            <li>Processing of examination applications and fee collection.</li>
            <li>Issue of Hall Tickets and coordination of examination centers.</li>
            <li>Valuation of answer scripts and publication of results.</li>
            <li>Issue of Grade Cards, Consolidated Mark Sheets, and Provisional Certificates.</li>
            <li>Arrangement for the Annual Convocation and issue of Degree Certificates.</li>
            <li>Verification of academic credentials and processing of WES requests.</li>
            <li>Handling student grievances related to examinations.</li>
          </ul>
        </div>
      </section>

      {/* 4. Examination Calendar */}
      <section className="exam-section exam-navy text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Examination Calendar</h2>
          <p className="exam-desc">Download the latest academic schedule and examination calendar.</p>
          <button className="btn-gold">
            <FaCalendarAlt style={{ marginRight: '10px' }} /> Download Examination Schedule
          </button>
        </div>
      </section>

      {/* 5. Time Table & Seating Plan */}
      <section className="exam-section exam-light">
        <div className="wrap">
          <h2 className="exam-section-title">Time Table & Seating Plan</h2>
          <p className="exam-desc">Access examination schedules and venue details for the current semester.</p>
          <div className="exam-card-grid-2">
            <a href="#timetable" className="exam-card">
              <FaCalendarAlt />
              Time Table - Apr/May 2024
            </a>
            <a href="#seating" className="exam-card">
              <FaMapMarkerAlt />
              Seating Plan - Apr/May 2024
            </a>
          </div>
        </div>
      </section>

      {/* 6. Fee Payment */}
      <section className="exam-section exam-navy text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Fee Payment</h2>
          <p className="exam-desc">Pay your regular and arrear examination fees securely through our online portal.</p>
          <button className="btn-gold">
            <FaMoneyBillWave style={{ marginRight: '10px' }} /> Fee Payment
          </button>
        </div>
      </section>

      {/* 7. Hall Ticket */}
      <section className="exam-section exam-white text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Hall Ticket</h2>
          <p className="exam-desc">Download your hall ticket for the upcoming end-semester examinations.</p>
          <button className="btn-gold">
            <FaIdCard style={{ marginRight: '10px' }} /> Download Hall Ticket
          </button>
        </div>
      </section>

      {/* 8. Syllabus & Academic Regulations */}
      <section className="exam-section exam-navy">
        <div className="wrap">
          <h2 className="exam-section-title">Syllabus & Academic Regulations</h2>
          <div className="reg-buttons">
            <button className="btn-outline-white">B.Tech / B.Des / B.Arch</button>
            <button className="btn-outline-white">M.Tech / M.Des / M.Arch</button>
            <button className="btn-outline-white">MBA</button>
            <button className="btn-outline-white">Science & Humanities</button>
            <button className="btn-outline-white">Medical & Health Sciences</button>
            <button className="btn-outline-white">Agriculture</button>
            <button className="btn-outline-white">Law</button>
          </div>
          
          <h3 className="exam-section-title" style={{ fontSize: '24px', marginTop: '40px' }}>Summary of Credits and Academic Regulations</h3>
          <div className="center-box">
            <button className="btn-gold">PG Phase Out</button>
            <button className="btn-gold">Summary of Credits and Regulations</button>
          </div>
        </div>
      </section>

      {/* 9. Duplicate Mark Sheet / Certificate */}
      <section className="exam-section exam-white text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Duplicate Mark Sheet / Certificate</h2>
          <p className="exam-desc">Apply for duplicate mark sheets or degree certificates in case of loss or damage.</p>
          <div className="exam-card-grid-2">
            <a href="#duplicate-marksheet" className="exam-card">
              <FaFileAlt />
              Duplicate Mark Sheet
            </a>
            <a href="#duplicate-degree" className="exam-card">
              <FaCertificate />
              Duplicate Degree Certificate
            </a>
          </div>
        </div>
      </section>

      {/* 10. Duplicate Identity Card / Bus Pass */}
      <section className="exam-section exam-light text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Duplicate Identity Card / Bus Pass</h2>
          <p className="exam-desc">Request a duplicate ID card or bus pass by submitting the required forms.</p>
          <button className="btn-gold">
            <FaBus style={{ marginRight: '10px' }} /> Duplicate ID / Bus Pass
          </button>
        </div>
      </section>

      {/* 11. Certificate Verification */}
      <section className="exam-section exam-white text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Certificate Verification</h2>
          <p className="exam-desc">Official verification of academic records for employers, agencies, and higher education institutions.</p>
          <div className="exam-card-grid-4">
            <a href="#genuine" className="exam-card small">
              <FaCheckCircle /> Genuine Verification
            </a>
            <a href="#wes" className="exam-card small">
              <FaGlobe /> WES / NNAS / IQAS / ICAS / CGFNS
            </a>
            <a href="#transcripts" className="exam-card small">
              <FaFileAlt /> Transcripts (Official Copies)
            </a>
            <a href="#medium" className="exam-card small">
              <FaGraduationCap /> Medium of Instruction
            </a>
            <a href="#cgpa" className="exam-card small">
              <FaChartLine /> CGPA to Percentage
            </a>
            <a href="#degree-verify" className="exam-card small">
              <FaCertificate /> Degree Certificate Verification
            </a>
          </div>
        </div>
      </section>

      {/* 12. WES Requirements */}
      <section className="exam-section exam-light text-center">
        <div className="wrap">
          <h2 className="exam-section-title">WES Requirements (USA & Canada)</h2>
          <div className="exam-card-grid-2" style={{ gridTemplateColumns: '1fr' }}>
            <a href="#wes-req" className="exam-card">
              <FaGlobe />
              WES Requirements - Read Here
            </a>
          </div>
        </div>
      </section>

      {/* 13. Digital Certificate */}
      <section className="exam-section exam-white text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Digital Certificate</h2>
          <p className="exam-desc">Access your academic awards through the National Academic Depository (NAD) / DigiLocker.</p>
          <p className="exam-desc">
            DigiLocker is a flagship initiative of Ministry of Electronics & IT (MeitY) under Digital India programme. 
            Students can access their digital degrees anytime, anywhere.
          </p>
          <button className="btn-gold">
            <FaDownload style={{ marginRight: '10px' }} /> Access Digital Certificates
          </button>
        </div>
      </section>

      {/* 14. Downloads */}
      <section className="exam-section exam-light text-center">
        <div className="wrap">
          <h2 className="exam-section-title">Downloads (Forms / Applications)</h2>
          <div className="exam-card-grid-2" style={{ gridTemplateColumns: '1fr' }}>
            <a href="#forms" className="exam-card">
              <FaDownload />
              Download Forms / Applications
            </a>
          </div>
        </div>
      </section>

      {/* 15. Convocation */}
      <section className="exam-convocation" style={{ backgroundImage: `url(${ConvoImg})` }}>
        <div className="wrap">
          <h2 className="exam-section-title" style={{ color: 'white' }}>Convocation</h2>
          <p className="exam-desc" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Information regarding the upcoming Annual Convocation, registration procedures, and collection of degree certificates.
          </p>
          <button className="btn-gold">
            <FaGraduationCap style={{ marginRight: '10px' }} /> View Details
          </button>
        </div>
      </section>

      {/* 16. Get In Touch */}
      {/* <section className="exam-section exam-light">
        <div className="wrap">
          <h2 className="exam-section-title">Get In Touch</h2>
          <div className="exam-contact-box">
            <div className="exam-contact-item">
              <FaBuilding />
              <div>
                <strong>Office of the Controller of Examinations</strong>
                <p>SRM Institute of Science and Technology<br/>Kattankulathur, Chengalpattu District<br/>Tamil Nadu - 603203, India.</p>
              </div>
            </div>
            <div className="exam-contact-item">
              <FaPhone />
              <div>
                <strong>Phone</strong>
                <p>+91-44-2741 7000 / +91-44-2745 2270</p>
              </div>
            </div>
            <div className="exam-contact-item">
              <FaEnvelope />
              <div>
                <strong>Email</strong>
                <p>coe@srmist.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Examcell;
