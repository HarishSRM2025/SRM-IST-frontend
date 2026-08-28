import { useEffect, useState } from 'react';
import Breadcrum from '../Components/Common/Breadcrum';
import acdPdf1 from '../assets/pdf/acd/1.pdf';
import acdPdf1_1 from '../assets/pdf/acd/1_1.pdf';
import acdPdf1_2 from '../assets/pdf/acd/1_2.pdf';
import acdPdf1_3 from '../assets/pdf/acd/1_3.pdf';
import acdPdf1_4 from '../assets/pdf/acd/1_4.pdf';
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
    pdf: acdPdf1,
    listOfPdf:[
      {title:"Academic Calendar -AY 2026-27 Odd Semester (I Year)",pdf:acdPdf1_1},
      {title:"Academic Calendar  – AY 2026 - 27 (ODD SEMESTER)",pdf:acdPdf1_2},
      {title:"Academic Calendar  – AY 2025 - 26 (EVEN SEMESTER)",pdf:acdPdf1_3},
      {title:"Academic Calendar 2025 Odd Semester (II, III and IV Year)",pdf:acdPdf1_4}
    ]
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
  const [isEngineeringPdfListOpen, setIsEngineeringPdfListOpen] = useState(false);

  useEffect(() => {
    if (!isEngineeringPdfListOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsEngineeringPdfListOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [isEngineeringPdfListOpen]);

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
                  {item.id !== 1 &&
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                  >
                    View PDF
                  </a>}
                  {item.id === 1 && (
                    <button
                      type="button"
                      className="btn-outline"
                      onClick={() => setIsEngineeringPdfListOpen(true)}
                    >
                      View List of PDFs
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {isEngineeringPdfListOpen && (
        <div
          className="academic-pdf-modal-overlay"
          role="presentation"
          onClick={() => setIsEngineeringPdfListOpen(false)}
        >
          <div
            className="academic-pdf-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="academic-pdf-list-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="academic-pdf-modal-header">
              <h3 id="academic-pdf-list-title">Academic Calendar PDFs</h3>
              <button
                type="button"
                className="academic-pdf-modal-close"
                aria-label="Close PDF list"
                onClick={() => setIsEngineeringPdfListOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="academic-pdf-list">
              {academicCalendars[0].listOfPdf.map((pdfItem) => (
                <a
                  key={pdfItem.id}
                  href={pdfItem.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="academic-pdf-list-button"
                >
                  {pdfItem.title}
                  <span>Open PDF</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademicCalendar;
