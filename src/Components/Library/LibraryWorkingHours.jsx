import React from 'react';
import { FaClock } from 'react-icons/fa';

const workingHours = [
{
title: "Monday to Friday",
note: "Circulations will be closed 30 minutes before the library closing time.",
timings: "Saturdays",
  timings: [
    {
      label: "Study/ Reference",
      value: "09:00am to 07:00pm"
    },
    {
      label: "Transactions",
      value: "09:00am to 05:00pm"
    }
  ]
},
{
  title: "Saturdays",
  timings: [
    {
      label: "Study/ Reference/ Transactions",
      value: "09:00am to 05:00pm"
    }
  ]
}
];

const LibraryWorkingHours = () => {
return ( <section className="exam-section exam-light" id="hours"> <div className="wrap"> <div className="hours-header"> <span className="s-tag">Timings</span> <h2 className="s-title">
Working <em>Hours</em> </h2> <div className="gold-bar hours-gold-bar"></div> </div>

    <div className="hours-grid">
      {workingHours.map((card, index) => (
        <div key={index} className="hours-card">
          <h3 className="hours-card-title">{card.title}</h3>

          {card.timings.map((item, idx) => (
            <div
              key={idx}
              className={`hours-row ${
                idx === card.timings.length - 1
                  ? "hours-row-last"
                  : ""
              }`}
            >
              <span className="hours-label">{item.label}</span>

              <span  className="hours-value">
                {item.value}
              </span>
            </div>
          ))}

         
        </div>
      ))}
    </div>
  </div>
</section>

);
};

export default LibraryWorkingHours;
