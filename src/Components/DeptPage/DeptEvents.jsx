import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  FaTools,
  FaMicrophone,
  FaIndustry,
  FaLightbulb,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUser,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

export default function DeptEvents({ id, onVisibilityChange }) {
  const location = useLocation();
  const deptName = location.state?.deptName || "Computer Science Engineering";
  console.log(id);
  const [eventsList, setEventsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const descriptionLimit = 150;
  const categoryOrder = ['competition', 'activity', 'visit', 'workshop', 'seminar', 'conference', 'other'];

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Fetch all schools
        const schoolRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/getall`);
        if (!schoolRes.ok) throw new Error("Failed to fetch schools");
        const schools = await schoolRes.json();
        
        // Find matching school (using cascading fuzzy matching)
        const deptSlug = location.state?.deptSlug;
        let matchedSchool = null;

        if (Array.isArray(schools)) {
          if (location.state?.schoolId) {
            matchedSchool = schools.find(s => s._id === location.state.schoolId);
          }
          if (!matchedSchool && deptSlug) {
            matchedSchool = schools.find(s => s.slug && s.slug.toLowerCase() === deptSlug.toLowerCase());
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase() === deptName.toLowerCase());
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && (
              deptName.toLowerCase().includes(s.name.toLowerCase()) || 
              s.name.toLowerCase().includes("computing") && deptName.toLowerCase().includes("computer") ||
              s.name.toLowerCase().includes("management") && deptName.toLowerCase().includes("business")
            ));
          }
          if (!matchedSchool) {
            matchedSchool = schools.find(s => s.name && s.name.toLowerCase().includes(deptName.toLowerCase()));
          }
        }

        const sourceType = location.state?.sourceType;
        const schoolDivisionId = location.state?.schoolDivisionId;

        if (sourceType === 'schoolDivision' && schoolDivisionId) {
          const eventsRes = await fetch(`${import.meta.env.VITE_API_URL}/school-division/events-and-activities/getall`);
          if (eventsRes.ok) {
            const eventsJson = await eventsRes.json();
            const allEvents = Array.isArray(eventsJson)
              ? eventsJson
              : (eventsJson.data ? (Array.isArray(eventsJson.data) ? eventsJson.data : [eventsJson.data]) : []);

            const filtered = allEvents.filter(e => {
              const eDivisionId = typeof e.schoolDivisionId === 'object' ? e.schoolDivisionId?._id : e.schoolDivisionId;
              return eDivisionId === schoolDivisionId;
            });

            setEventsList(filtered);
          } else {
            setEventsList([]);
          }
        } else if (matchedSchool) {
          const eventsRes = await fetch(`${import.meta.env.VITE_API_URL}/schools/events-and-activities/getall`);
          if (eventsRes.ok) {
            const eventsJson = await eventsRes.json();
            const allEvents = Array.isArray(eventsJson) 
              ? eventsJson 
              : (eventsJson.data ? (Array.isArray(eventsJson.data) ? eventsJson.data : [eventsJson.data]) : []);
            
            // Filter events belonging to the matched school
            const filtered = allEvents.filter(e => {
              const eSchoolId = typeof e.school === 'object' ? e.school?._id : e.school;
              return eSchoolId === matchedSchool._id;
            });
            
            setEventsList(filtered);
          } else {
            setEventsList([]);
          }
        } else {
          setEventsList([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEventsList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [deptName, location.state?.deptSlug, location.state?.schoolId, location.state?.schoolDivisionId, location.state?.sourceType]);

  const getCategoryLabel = (type) => {
    switch (type) {
      case 'competition':
        return 'Competition';
      case 'activity':
        return 'Activity';
      case 'visit':
        return 'Visit';
      case 'workshop':
        return 'Workshop';
      case 'seminar':
        return 'Seminar';
      case 'conference':
        return 'Conference';
      case 'other':
        return 'Other';
      default:
        return type ? type.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()) : 'Other';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'competition':
        return <FaTrophy />;
      case 'workshop':
        return <FaTools />;
      case 'seminar':
      case 'conference':
        return <FaMicrophone />;
      case 'visit':
        return <FaIndustry />;
      case 'activity':
      case 'other':
      default:
        return <FaLightbulb />;
    }
  };

  const getStatusBadgeStyle = (status) => {
    const s = (status || 'upcoming').toLowerCase();
    switch (s) {
      case 'ongoing':
        return { background: '#b91010', color: '#fff' }; // Vibrant Emerald Green
      case 'completed':
        return { background: '#10b981', color: 'rgba(255, 255, 255, 0.85)'}; // Muted glass style
      case 'upcoming':
      default:
        return { background: '#c8952a', color: '#0c4da2' }; // Brand Gold & Navy
    }
  };

  const formatDateTime = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    try {
      const date = new Date(dateTimeStr);
      if (isNaN(date.getTime())) {
        return dateTimeStr; // Legacy plain text
      }
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    } catch {
      return dateTimeStr;
    }
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    const img = Array.isArray(imagePath) ? imagePath[0] : imagePath;
    if (!img || typeof img !== 'string') return null;
    const cleanName = img.split(/[\\/]/).pop();
    return `${import.meta.env.VITE_API_URL.replace('/api', '')}/public/uploads/${cleanName}`;
  };

  const getEventKey = (event, index) => event._id || event.id || index;

  const getDescriptionPreview = (description, isExpanded) => {
    const text = description || '';

    if (isExpanded || text.length <= descriptionLimit) {
      return text;
    }

    return `${text.slice(0, descriptionLimit).trim()}...`;
  };

  const toggleDescription = (eventKey) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [eventKey]: !prev[eventKey],
    }));
  };

  const eventCategories = Array.from(new Set(eventsList.map((event) => event.type).filter(Boolean)))
    .sort((a, b) => {
      const aIndex = categoryOrder.indexOf(a);
      const bIndex = categoryOrder.indexOf(b);

      if (aIndex === -1 && bIndex === -1) {
        return getCategoryLabel(a).localeCompare(getCategoryLabel(b));
      }

      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
  const filters = [
    { label: "All", value: "All" },
    ...eventCategories.map((category) => ({
      label: getCategoryLabel(category),
      value: category,
    })),
  ];
  const activeFilter = filters.some((item) => item.value === filter) ? filter : "All";

  const filtered = activeFilter === "All" 
    ? eventsList 
    : eventsList.filter((e) => e.type === activeFilter);

  useEffect(() => {
    if (!loading) {
      onVisibilityChange?.(eventsList.length > 0);
    }
  }, [eventsList.length, loading, onVisibilityChange]);

  if (!loading && eventsList.length === 0) {
    return null;
  }

  return (
    <>
      <section id={id} className="dept-events">
        <div className="dept-events-inner">
          <div>
            <div className="section-label">Campus Life</div>
            <h2 className="section-title" style={{ color: '#fff' }}>Events & <em>Activities</em></h2>
          </div>

          <div className="events-filters">
            {filters.map((f) => (
              <button
                key={f.value}
                className={`events-filter ${activeFilter === f.value ? "active" : ""}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ fontSize: '18px', fontWeight: '500' }}>Loading events and activities...</span>
            </div>
          ) : (
            <div className="events-grid">
              {filtered.length > 0 ? (
                filtered.map((e, index) => {
                  const eventKey = getEventKey(e, index);
                  const imageUrl = getImageUrl(e.eventImage);
                  const description = e.description || '';
                  const isExpanded = Boolean(expandedDescriptions[eventKey]);
                  const shouldShowReadMore = description.length > descriptionLimit;

                  return (
                    <Link to={`/event/${e._id || e.id}`} key={eventKey} style={{ textDecoration: 'none', display: 'block' }}>
                    <div className="event-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div 
                        className="event-img" 
                        style={imageUrl ? { 
                          backgroundImage: `url(${imageUrl})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        } : {}}
                      >
                        {!imageUrl && <div className="event-icon">{getEventIcon(e.type)}</div>}
                        
                        {/* Dynamic Status Badge (Top-Left) */}
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
                            ...getStatusBadgeStyle(e.status)
                          }}
                        >
                          {e.status || 'upcoming'}
                        </div>

                        {/* Type Badge (Top-Right) */}
                        <div className="event-type-badge" style={{ textTransform: 'uppercase', fontWeight: '700', borderRadius: '2px' }}>
                          {e.type}
                        </div>
                        {e.announcement && (
                          <div
                            style={{
                              position: 'absolute',
                              bottom: '10px',
                              left: '10px',
                              fontSize: '9px',
                              padding: '3px 8px',
                              borderRadius: '2px',
                              textTransform: 'uppercase',
                              fontWeight: '700',
                              letterSpacing: '0.05em',
                              background: 'var(--gold)',
                              color: 'var(--navy)',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                            }}
                          >
                            Announcement
                          </div>
                        )}
                      </div>

                      <div className="event-body" style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '20px' }}>
                        <div className="event-date" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--gold2)', fontWeight: '600', marginBottom: '8px' }}>
                          <FaCalendarAlt />
                          <span>{formatDateTime(e.eventDateTime)}</span>
                        </div>
                        
                        <div className="event-title" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--white)', marginBottom: '8px', lineHeight: '1.4' }}>
                          {e.name}
                        </div>
                        
                        <div className="event-desc" style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: '1.5', marginBottom: '16px' }}>
                          {getDescriptionPreview(description, isExpanded)}
                          {shouldShowReadMore && (
                            <button
                              type="button"
                              className="event-read-more"
                              onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); toggleDescription(eventKey); }}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                        </div>

                        {/* Premium Metadata Info Section (Venue, Organizer, Coordinator, Speaker) */}
                        <div style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '8px', 
                          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                          paddingTop: '12px',
                          marginTop: 'auto',
                          fontSize: '12px',
                          color: 'rgba(255, 255, 255, 0.55)'
                        }}>
                          {/* Location - REQUIRED */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--gold)', flexShrink: 0 }} />
                            <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                              <strong>Venue:</strong> {e.location}
                            </span>
                          </div>

                          {/* Conducted By - OPTIONAL */}
                          {e.conductedBy && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <FaBuilding style={{ color: 'var(--gold)', flexShrink: 0 }} />
                              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                <strong>Conducted by:</strong> {e.conductedBy}
                              </span>
                            </div>
                          )}

                          {/* Coordinator Name - OPTIONAL */}
                          {e.co_ordinator && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <FaUser style={{ color: 'var(--gold)', flexShrink: 0 }} />
                              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                <strong>Coordinator:</strong> {e.co_ordinator}
                              </span>
                            </div>
                          )}

                          {/* Resource Person Name - OPTIONAL */}
                          {e.resourcePerson && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <FaUserTie style={{ color: 'var(--gold)', flexShrink: 0 }} />
                              <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                <strong>Speaker:</strong> {e.resourcePerson}
                                {e.resourcePersonDesignation && ` (${e.resourcePersonDesignation})`}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    </Link>
                  );
                })
              ) : (
                <div style={{ gridColumn: 'span 3', textAlign: 'center', padding: '48px', color: 'rgba(255,255,255,0.5)' }}>
                  No events found under this category.
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
