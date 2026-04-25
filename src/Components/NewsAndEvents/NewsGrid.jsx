import React from 'react';

const NewsGrid = ({ currentEvents }) => {
  return (
    <div className="events-grid" style={{ marginBottom: '50px' }}>
      {currentEvents.length > 0 ? (
        currentEvents.map((e) => (
          <div className="event-card" key={e.id} style={{ background: '#fff', borderColor: '#e5e7eb' }}>
            <div className="event-img">
              <div className="event-icon">{e.icon}</div>
              <div className="event-type-badge">{e.type}</div>
            </div>

            <div className="event-body">
              <div className="event-date" style={{ color: 'var(--gold)' }}>{e.date}</div>
              <div className="event-title" style={{ color: 'var(--navy)' }}>{e.title}</div>
              <div className="event-desc" style={{ color: 'var(--gray)' }}>{e.desc}</div>
              <div className="event-meta" style={{ color: 'var(--gray)' }}>By {e.organizer}</div>
            </div>
          </div>
        ))
      ) : (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '8px', border: '1px dashed var(--border)', color: 'var(--gray)' }}>
          No events found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
