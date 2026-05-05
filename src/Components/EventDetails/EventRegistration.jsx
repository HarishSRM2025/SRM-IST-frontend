import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const EventRegistration = ({ event }) => {
  if (event.status !== 'Upcoming' || !event.registrationLink) return null;

  return (
    <div style={{ background: 'var(--gold)', padding: '30px', borderRadius: '8px', textAlign: 'center', marginBottom: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 15px 0', color: 'var(--navy)', fontSize: '1.5rem' }}>Secure Your Spot!</h3>
      <p style={{ margin: '0 0 20px 0', color: 'var(--navy)', fontSize: '1.1rem' }}>Registration is now open for {event.title}. Limited seats available.</p>
      <a 
        href={event.registrationLink} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 30px', background: 'var(--navy)', color: '#fff', textDecoration: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: 'bold', transition: 'transform 0.2s ease, boxShadow 0.2s ease' }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        Register Now <FaExternalLinkAlt />
      </a>
    </div>
  );
};

export default EventRegistration;
