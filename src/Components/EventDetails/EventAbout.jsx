import React from 'react';

const EventAbout = ({ event }) => {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ color: 'var(--navy)', marginBottom: '20px', fontSize: '1.5rem', borderBottom: '2px solid var(--gold)', paddingBottom: '10px', display: 'inline-block' }}>
        About the Event
      </h3>
      <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem' }}>
        {event.desc}
      </p>
      <p style={{ color: '#4b5563', lineHeight: '1.8', fontSize: '1.1rem', marginTop: '15px' }}>
        Join us for this exciting {event.type.toLowerCase()} organized by {event.organizer}. 
        This event is designed to provide valuable insights and hands-on experience in the field. 
        Don't miss this opportunity to expand your knowledge and network with peers.
      </p>
    </div>
  );
};

export default EventAbout;
