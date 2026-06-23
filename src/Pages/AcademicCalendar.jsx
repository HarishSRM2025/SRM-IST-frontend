import React from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import acdPdf1 from '../assets/pdf/acd/1.pdf';
import acdPdf2 from '../assets/pdf/acd/2.pdf';
import acdPdf3 from '../assets/pdf/acd/3.pdf';
import acdPdf4 from '../assets/pdf/acd/4.pdf';
import acdPdf5 from '../assets/pdf/acd/5.pdf';
import acdPdf6 from '../assets/pdf/acd/6.pdf';
import '../css/Admission.css';

const academicCalendars = [
  {
    id: 1,
    title: 'Engineering & Technology',
    pdf: acdPdf1
  },
  {
    id: 2,
    title: 'Science & Humanities',
    pdf: acdPdf2
  },
  {
    id: 3,
    title: 'Institute of Hotel Management',
    pdf: acdPdf3
  },
  {
    id: 4,
    title: 'College of Occupational Therapy',
    pdf: acdPdf4
  },
  {
    id: 5,
    title: 'College of Management',
    pdf: acdPdf5
  },
  {
    id: 6,
    title: 'College of Pysiotherapy',
    pdf: acdPdf6
  },
];
const pgTitle='Academic Calendar'
const AcademicCalendar = () => {
  return (
    <>
      <Breadcrum title={pgTitle}
      paths={[{ name: 'Home', link: '/' }, { name: 'Academics', link: '#' }, { name: pgTitle}]} 
      />

      <div className="admission-page">
        <div className="admission-container">

          <div className="admission-header">
            <span className="s-tag">ACADEMIC CALENDAR</span>

            <h2 className="s-title">
              Academic <em>Calendars</em>
            </h2>

            <div className="gold-bar"></div>
          </div>

          <div className="admission-grid2">
            {academicCalendars.map((item) => (
              <div className="admission-card" key={item.id}>
                <h4>{item.title}</h4>

                <div className="admission-actions">
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default AcademicCalendar;