import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyEvents } from '../Data/NewsEventsData';
import Breadcrum from '../Components/Common/Breadcrum';

import EventHeader from '../Components/EventDetails/EventHeader';
import EventGallery from '../Components/EventDetails/EventGallery';
import EventMeta from '../Components/EventDetails/EventMeta';
import EventAbout from '../Components/EventDetails/EventAbout';
import EventRegistration from '../Components/EventDetails/EventRegistration';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const event = dummyEvents.find(e => e.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'var(--navy)' }}>Event Not Found</h2>
        <button 
          onClick={() => navigate('/news-and-events')}
          style={{ marginTop: '20px', padding: '10px 20px', background: 'var(--navy)', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <>
      <Breadcrum title="Event Details" />
      <div style={{ background: '#f3f4f6', minHeight: '70vh', padding: '60px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          
          <EventHeader event={event} />

          <div style={{ padding: '40px' }}>
            <EventGallery event={event} />
            <EventMeta event={event} />
            <EventAbout event={event} />
            <EventRegistration event={event} />

            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button 
                onClick={() => navigate('/news-and-events')}
                style={{ padding: '12px 30px', background: 'transparent', color: 'var(--navy)', border: '2px solid var(--navy)', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: '600', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.target.style.background = 'var(--navy)'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--navy)'; }}
              >
                Back to All Events
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default EventDetails;
