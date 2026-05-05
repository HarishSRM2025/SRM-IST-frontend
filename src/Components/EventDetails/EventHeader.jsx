import React from 'react';

const EventHeader = ({ event }) => {
  return (
    <div style={{ background: 'var(--navy)', padding: '40px', color: '#fff', textAlign: 'center', position: 'relative' }}>
      <div style={{ fontSize: '48px', color: 'var(--gold)', marginBottom: '15px' }}>
        {event.icon}
      </div>
      <h1 style={{ margin: '0 0 15px 0', fontSize: '2.5rem', fontWeight: '700' }}>{event.title}</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '5px 15px', borderRadius: '20px', fontSize: '14px' }}>
          {event.type}
        </div>
        {event.status && (
          <div style={{ display: 'inline-block', background: event.status === 'Upcoming' ? '#10b981' : '#6b7280', padding: '5px 15px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            {event.status}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventHeader;
