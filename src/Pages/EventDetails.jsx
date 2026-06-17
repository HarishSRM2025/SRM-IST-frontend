import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaIndustry, FaLightbulb, FaMicrophone, FaTools, FaTrophy } from 'react-icons/fa';
import Breadcrum from '../Components/Common/Breadcrum';

import EventHeader from '../Components/EventDetails/EventHeader';
import EventGallery from '../Components/EventDetails/EventGallery';
import EventMeta from '../Components/EventDetails/EventMeta';
import EventAbout from '../Components/EventDetails/EventAbout';
import EventRegistration from '../Components/EventDetails/EventRegistration';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE = API_URL.replace("/api", "");

const getEventIcon = (type) => {
  switch ((type || '').toLowerCase()) {
    case 'competition':
      return <FaTrophy />;
    case 'workshop':
      return <FaTools />;
    case 'seminar':
      return <FaMicrophone />;
    case 'visit':
      return <FaIndustry />;
    case 'activity':
    default:
      return <FaLightbulb />;
  }
};

const formatDate = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  if (imagePath.startsWith('http')) return imagePath;
  const normalized = imagePath.replace(/\\/g, '/');
  if (normalized.startsWith('public/')) return `${API_BASE}/${normalized}`;
  return `${API_BASE}/public/uploads/${normalized.split('/').pop()}`;
};

const getDivisionName = (division) => (
  typeof division === 'object' && division !== null ? division.name : ''
);

const mapApiEvent = (event) => {
  const schoolName = typeof event.school === 'object' && event.school !== null ? event.school.name : '';
  const institutionName = typeof event.institutionId === 'object' && event.institutionId !== null ? event.institutionId.name : '';
  const divisionName = getDivisionName(event.schoolDivisionId);
  // Process images: support array of image paths or single fallback
  const images = Array.isArray(event.eventImage)
    ? event.eventImage.map(img => getImageUrl(img))
    : [];

  return {
    id: event._id,
    type: event.type || 'activity',
    icon: getEventIcon(event.type),
    title: event.name || 'Untitled Event',
    date: formatDate(event.eventDateTime),
    desc: event.description || '',
    organizer: divisionName || schoolName || institutionName || event.conductedBy || 'SRM IST',
    status: event.status ? event.status.charAt(0).toUpperCase() + event.status.slice(1) : '',
    images: images,
    location: event.location,
    conductedBy: event.conductedBy,
    co_ordinator: event.co_ordinator,
    resourcePerson: event.resourcePerson,
    resourcePersonDesignation: event.resourcePersonDesignation,
    announcement: Boolean(event.announcement),
  };
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      try {
        let response = await fetch(`${API_URL}/schools/events-and-activities/get/${id}`);
        if (!response.ok) {
          // Fallback to fetching school division event
          response = await fetch(`${API_URL}/school-division/events-and-activities/getone/${id}`);
        }
        if (!response.ok) {
          // Fallback to fetching institution event
          response = await fetch(`${API_URL}/institution/events-and-activities/getone/${id}`);
        }
        if (!response.ok) throw new Error('Failed to fetch event');
        const data = await response.json();
        setEvent(mapApiEvent(data));
      } catch (error) {
        console.error('Error loading event details:', error);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return (
      <>
        <Breadcrum title="Event Details" />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray)' }}>
          Loading event details...
        </div>
      </>
    );
  }

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
