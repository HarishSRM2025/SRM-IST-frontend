import React from 'react';
import { Link } from 'react-router-dom';

const NewsGrid = ({ currentEvents }) => {
  return (
    <div className="events-grid" style={{ marginBottom: '50px' }}>
      {currentEvents.length > 0 ? (
        currentEvents.map((e) => (
          <Link to={`/event/${e.id}`} key={e.id} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="event-card" style={{ background: '#fff', borderColor: '#e5e7eb', height: '100%' }}>
              <div className="event-img" style={{ position: 'relative' }}>
                {e.status === 'Upcoming' && (
                  <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', padding: '3px 8px', background: '#10b981', color: '#fff', fontWeight: 'bold', borderRadius: '2px', textTransform: 'uppercase', zIndex: 2, letterSpacing: '0.5px' }}>
                    Upcoming
                  </div>
                )}
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
          </Link>
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
