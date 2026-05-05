import React from 'react';
import { FaCalendarAlt, FaUserTie, FaTag } from 'react-icons/fa';

const EventMeta = ({ event }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px', padding: '20px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <FaCalendarAlt style={{ fontSize: '24px', color: 'var(--gold)' }} />
        <div>
          <div style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: '600', textTransform: 'uppercase' }}>Date</div>
          <div style={{ color: 'var(--navy)', fontWeight: '500' }}>{event.date}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <FaUserTie style={{ fontSize: '24px', color: 'var(--gold)' }} />
        <div>
          <div style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: '600', textTransform: 'uppercase' }}>Organizer</div>
          <div style={{ color: 'var(--navy)', fontWeight: '500' }}>{event.organizer}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <FaTag style={{ fontSize: '24px', color: 'var(--gold)' }} />
        <div>
          <div style={{ fontSize: '12px', color: 'var(--gray)', fontWeight: '600', textTransform: 'uppercase' }}>Category</div>
          <div style={{ color: 'var(--navy)', fontWeight: '500' }}>{event.type}</div>
        </div>
      </div>
    </div>
  );
};

export default EventMeta;
