import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaUserTie,
  FaBuilding
} from 'react-icons/fa';

const getStatusBadgeStyle = (status) => {
  const s = (status || 'upcoming').toLowerCase();
  switch (s) {
    case 'ongoing':
      return { background: '#b91010', color: '#fff' };
    case 'completed':
      return { background: '#10b981', color: 'rgba(255, 255, 255, 0.85)' };
    case 'upcoming':
    default:
      return { background: '#c8952a', color: '#0c4da2' };
  }
};

const formatDateTime = (dateStr) => {
  if (!dateStr) return '';
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

const NewsGrid = ({ currentEvents }) => {
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const limit = 150;

  return (
    <div className="events-grid" style={{ marginBottom: '50px' }}>
      {currentEvents.length > 0 ? (
        currentEvents.map((e) => {
          const isExpanded = Boolean(expandedDescriptions[e.id]);
          const description = e.desc || '';
          const shouldShowReadMore = description.length > limit;
          const displayDesc = isExpanded || !shouldShowReadMore 
            ? description 
            : `${description.slice(0, limit).trim()}...`;

          return (
            <Link to={`/event/${e.id}`} key={e.id} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="event-card" style={{ background: '#fff', borderColor: '#e5e7eb', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div
                  className="event-img"
                  style={{
                    position: 'relative',
                    ...(e.imageUrl ? {
                      backgroundImage: `url(${e.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    } : {})
                  }}
                >
                  {/* Status Badge */}
                  <div
                    className="event-status-badge"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      fontSize: '9px',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      zIndex: 2,
                      ...getStatusBadgeStyle(e.status)
                    }}
                  >
                    {e.status || 'upcoming'}
                  </div>

                  {e.announcement && (
                    <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '9px', padding: '3px 8px', background: 'var(--gold)', color: 'var(--navy)', fontWeight: '700', borderRadius: '2px', textTransform: 'uppercase', zIndex: 2, letterSpacing: '0.05em', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                      Announcement
                    </div>
                  )}
                  {!e.imageUrl && <div className="event-icon">{e.icon}</div>}
                  <div className="event-type-badge" style={{ textTransform: 'uppercase', fontWeight: '700', borderRadius: '2px' }}>{e.type}</div>
                </div>

                <div className="event-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
                  {/* Date */}
                  <div className="event-date" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--gold)', fontWeight: '600', marginBottom: '8px' }}>
                    <FaCalendarAlt />
                    <span>{e.date || formatDateTime(e.eventDateTime)}</span>
                  </div>

                  {/* Title */}
                  <div className="event-title" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--navy)', marginBottom: '8px', lineHeight: '1.4' }}>
                    {e.title}
                  </div>

                  {/* Description */}
                  <div className="event-desc" style={{ fontSize: '13px', color: 'var(--gray)', lineHeight: '1.5', marginBottom: '16px' }}>
                    {displayDesc}
                    {shouldShowReadMore && (
                      <button
                        type="button"
                        className="event-read-more"
                        onClick={(event) => toggleDescription(e.id, event)}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>

                  {/* Metadata Section - matches DeptEvents/InstituteEvents structure */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '12px',
                    marginTop: 'auto',
                    fontSize: '12px',
                    color: 'var(--gray)'
                  }}>
                    {/* Location */}
                    {e.location && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaMapMarkerAlt style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          <strong>Venue:</strong> {e.location}
                        </span>
                      </div>
                    )}

                    {/* Conducted By */}
                    {e.conductedBy && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaBuilding style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          <strong>Conducted by:</strong> {e.conductedBy}
                        </span>
                      </div>
                    )}

                    {/* Coordinator */}
                    {e.co_ordinator && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaUser style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          <strong>Coordinator:</strong> {e.co_ordinator}
                        </span>
                      </div>
                    )}

                    {/* Resource Person */}
                    {e.resourcePerson && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaUserTie style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          <strong>Speaker:</strong> {e.resourcePerson}
                          {e.resourcePersonDesignation && ` (${e.resourcePersonDesignation})`}
                        </span>
                      </div>
                    )}

                    {/* Organizer fallback when no metadata */}
                    {!e.location && !e.conductedBy && !e.co_ordinator && !e.resourcePerson && (
                      <div className="event-meta" style={{ color: 'var(--gray)', fontSize: '12px' }}>By {e.organizer}</div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '8px', border: '1px dashed var(--border)', color: 'var(--gray)' }}>
          No events found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
