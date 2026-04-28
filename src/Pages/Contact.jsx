import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Breadcrum from '../Components/Common/Breadcrum';
import '../css/Department.css'; // Utilizing standard templates

const Contact = () => {
  return (
    <>
      <Breadcrum title="Contact Us" />
      
      <div className="dept-research" style={{ background: '#f3f4f6', padding: '60px 20px', minHeight: '80vh' }}>
        <div className="dept-research-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="s-tag" style={{ color: 'var(--navy)' }}>GET IN TOUCH</span>
            <h2 className="s-title" style={{ color: 'var(--navy)' }}>We'd Love To <em>Hear From You</em></h2>
            <div className="gold-bar" style={{ margin: '15px auto 0' }}></div>
            <p className="overview-text" style={{ maxWidth: '700px', margin: '20px auto 0', textAlign: 'center' }}>
              Whether you have a question about admissions, need assistance, or just want to learn more about our campus, our team is ready to answer all your questions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            
            {/* Contact Info & Map */}
            <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '25px', fontSize: '24px', fontFamily: 'var(--font-serif)' }}>Contact Information</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '20px', marginTop: '2px' }}><FaMapMarkerAlt /></div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--navy)', fontSize: '16px' }}>Campus Address</h4>
                    <p style={{ margin: 0, color: 'var(--gray)', lineHeight: '1.6' }}>
                      SRM Institute of Science and Technology,<br />
                      Tiruchirappalli Campus,<br />
                      SRM Nagar, Trichy - Chennai Highway,<br />
                      Irungalur Village, Trichy - 621 105.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '20px' }}><FaPhoneAlt /></div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--navy)', fontSize: '16px' }}>Phone Numbers</h4>
                    <p style={{ margin: 0, color: 'var(--gray)' }}>+91 431 2250200 / +91 97868 62222</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ color: 'var(--gold)', fontSize: '20px' }}><FaEnvelope /></div>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0', color: 'var(--navy)', fontSize: '16px' }}>Email Address</h4>
                    <p style={{ margin: 0, color: 'var(--gray)' }}>admissions@ist.srmtrichy.edu.in</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div style={{ width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.593671239774!2d78.73500008715816!3d10.9521593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafb9b231ae861%3A0xe015b4e7a6e2c2d6!2sSRM%20Institute%20of%20Science%20%26%20Technology%2C%20Tiruchirapalli%20Campus!5e0!3m2!1sen!2sin!4v1777350999764!5m2!1sen!2sin" width={'100%'} height={'100%'}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid var(--border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: '25px', fontSize: '24px', fontFamily: 'var(--font-serif)' }}>Send Us a Message</h3>
              
              <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your full name" 
                    required 
                    style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email address" 
                    required 
                    style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="subject" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    placeholder="What is this regarding?" 
                    required 
                    style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy)' }}>Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    placeholder="Write your message here..." 
                    required 
                    style={{ padding: '12px 15px', border: '1px solid var(--border)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold" style={{ marginTop: '10px', width: '100%' }}>
                  Submit Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
