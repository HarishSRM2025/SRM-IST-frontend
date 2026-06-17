import React from 'react';
import {
  FiBriefcase, FiStar,
} from 'react-icons/fi';
import { BsTrophy } from 'react-icons/bs';
const TIMELINE = [
  {
    title: 'Marquee Companies',
    salary: 'Rs. 20,00,000+ Per Annum',
    body: 'Wells Fargo, Adobe, Morgan Stanley, Moser O, Atlassian, Paypal, CISCO, BNY Mellon, Rich Panel, Nutanix, Google India, Amazon, Arista Networks, Squadcast, Commvault among others.',
    icon: BsTrophy,
  },
  {
    title: 'Super Dream Companies',
    salary: 'Rs. 10,00,000+ Per Annum',
    body: 'Google, Microsoft, Aruba Networks, Optum, GE Digital & Power Conversion, Udaan.com, Neilson, Amazon, Honda, MIQ, Paypal, Barclays, Amadeus, ZS Associates, VM Ware among others.',
    icon: FiStar,
  },
  {
    title: 'Dream Companies',
    salary: 'Rs. 5,00,000+ Per Annum',
    body: 'Deloitte, Capgemini, Siemens, Amdocs, ABB, RBS, Daimler, IFB, KPMG, L&T Construction, Berger Paints, Hashedin, Temenos, TCS, CTS, Infosys, Wipro among others.',
    icon: FiBriefcase,
  },
];
const FlowChart = () => {
    return (
        <section className="pl-section pl-bg-white" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <span className="s-tag">Placements</span>
          <h2 className="s-title">Striving For Student's <em>Dreams To Be Realized</em></h2>
          <div className="gold-bar"></div>
          <p style={{ fontSize: "16px", color: "var(--gray)", lineHeight: "1.8",  marginBottom: "48px" }}>
           We partner with industry leaders across all levels — from dream companies to marquee global brands — to place students in roles that match their ambitions and skills, ensuring strong career growth opportunities and long-term professional success.
          </p>

          <div className="pl-timeline-track">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              return (
                <div className="pl-timeline-item" key={i}>
                  {i % 2 === 0 ? (
                    <>
                      <div className="pl-tl-content">
                        <div className="pl-tl-card">
                          <div className="pl-tl-card-icon">
                            <Icon size={20} />
                          </div>
                          <div className="pl-tl-salary-badge">{item.salary}</div>
                          <h3 className="pl-tl-card-title">{item.title}</h3>
                          <p className="pl-tl-card-body">{item.body}</p>
                        </div>
                      </div>
                      <div className="pl-tl-center">
                        <div className="pl-tl-dot" />
                      </div>
                      <div className="pl-tl-empty" />
                    </>
                  ) : (
                    <>
                      <div className="pl-tl-empty" />
                      <div className="pl-tl-center">
                        <div className="pl-tl-dot" />
                      </div>
                      <div className="pl-tl-content">
                        <div className="pl-tl-card">
                          <div className="pl-tl-card-icon">
                            <Icon size={20} />
                          </div>
                          <div className="pl-tl-salary-badge">{item.salary}</div>
                          <h3 className="pl-tl-card-title">{item.title}</h3>
                          <p className="pl-tl-card-body">{item.body}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    )
}

export default FlowChart