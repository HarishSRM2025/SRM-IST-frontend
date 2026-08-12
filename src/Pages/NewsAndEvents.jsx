import React, { useEffect, useMemo, useState } from 'react';
import { FaTools, FaMicrophone, FaIndustry, FaLightbulb, FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUserTie, FaBuilding } from 'react-icons/fa';
import Breadcrum from '../Components/Common/Breadcrum';
import NewsSidebar from '../Components/NewsAndEvents/NewsSidebar';
import NewsGrid from '../Components/NewsAndEvents/NewsGrid';
import NewsPagination from '../Components/NewsAndEvents/NewsPagination';
import '../css/Department.css';

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

const getEventYear = (value) => {
  if (!value) return '';
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) return String(date.getFullYear());
  const match = String(value).match(/\b(20\d{2})\b/);
  return match ? match[1] : '';
};

const getSchoolName = (school) => (
  typeof school === 'object' && school !== null ? school.name : ''
);

const getDivisionName = (division) => (
  typeof division === 'object' && division !== null ? division.name : ''
);

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  const img = Array.isArray(imagePath) ? imagePath[0] : imagePath;
  if (!img || typeof img !== 'string') return '';
  if (img.startsWith('http')) return img;
  const normalized = img.replace(/\\/g, '/');
  if (normalized.startsWith('public/')) return `${API_BASE}/${normalized}`;
  return `${API_BASE}/public/uploads/${normalized.split('/').pop()}`;
};

const mapApiEvent = (event) => {
  const schoolName = getSchoolName(event.school);
  const divisionName = getDivisionName(event.schoolDivisionId);
  const institutionName = typeof event.institutionId === 'object' && event.institutionId !== null ? event.institutionId.name : '';
  return {
    id: event._id,
    type: event.type || 'activity',
    icon: getEventIcon(event.type),
    title: event.name || 'Untitled Event',
    date: formatDate(event.eventDateTime),
    year: getEventYear(event.eventDateTime),
    desc: event.description || '',
    organizer: divisionName || schoolName || institutionName || event.conductedBy || 'SRM IST',
    status: event.status ? event.status.charAt(0).toUpperCase() + event.status.slice(1) : '',
    imageUrl: getImageUrl(event.eventImage),
    announcement: Boolean(event.announcement),
    location: event.location,
    conductedBy: event.conductedBy,
    co_ordinator: event.co_ordinator,
    resourcePerson: event.resourcePerson,
    resourcePersonDesignation: event.resourcePersonDesignation,
  };
};

const NewsAndEvents = () => {
  const [activeYear, setActiveYear] = useState("All");
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError("");
      try {
        const [schoolResponse, divisionResponse, institutionResponse] = await Promise.all([
          fetch(`${API_URL}/schools/events-and-activities/getall`),
          fetch(`${API_URL}/school-division/events-and-activities/getall`),
          fetch(`${API_URL}/institution/events-and-activities/getall`)
        ]);

        let schoolList = [];
        if (schoolResponse.ok) {
          const data = await schoolResponse.json();
          schoolList = Array.isArray(data) ? data : data?.data ? (Array.isArray(data.data) ? data.data : [data.data]) : [];
        } else {
          console.error("Failed to fetch school events");
        }

        let divisionList = [];
        if (divisionResponse.ok) {
          const data = await divisionResponse.json();
          divisionList = Array.isArray(data) ? data : data?.data ? (Array.isArray(data.data) ? data.data : [data.data]) : [];
        } else {
          console.error("Failed to fetch division events");
        }

        let institutionList = [];
        if (institutionResponse.ok) {
          const data = await institutionResponse.json();
          institutionList = Array.isArray(data) ? data : data?.data ? (Array.isArray(data.data) ? data.data : [data.data]) : [];
        } else {
          console.error("Failed to fetch institution events");
        }

        const combinedList = [...schoolList, ...divisionList, ...institutionList];

        combinedList.sort((a, b) => {
          const dateA = new Date(a.eventDateTime);
          const dateB = new Date(b.eventDateTime);
          const timeA = Number.isNaN(dateA.getTime()) ? 0 : dateA.getTime();
          const timeB = Number.isNaN(dateB.getTime()) ? 0 : dateB.getTime();
          return timeB - timeA;
        });

        setEvents(combinedList.map(mapApiEvent));
      } catch (err) {
        console.error("Error loading news and events:", err);
        setError("Unable to load news and events. Please try again later.");
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const years = useMemo(() => {
    const uniqueYears = [...new Set(events.map(event => event.year).filter(Boolean))].sort((a, b) => b.localeCompare(a));
    return ["All", ...uniqueYears];
  }, [events]);

  const departments = useMemo(() => {
    const uniqueDepartments = [...new Set(events.map(event => event.organizer).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    return ["All", ...uniqueDepartments];
  }, [events]);

  const filteredEvents = events.filter(e => {
    const matchesYear = activeYear === "All" || e.year === activeYear;
    const matchesDept = activeDepartment === "All" || e.organizer === activeDepartment;
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.desc.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          e.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          e.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesDept && matchesSearch;
  });

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  
  const currentEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleYearFilter = (year) => {
    setActiveYear(year);
    setCurrentPage(1);
  };

  const handleDeptFilter = (dept) => {
    setActiveDepartment(dept);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Breadcrum title="News & Events" />
      
      <div className="dept-events latest-news-page">
        <div className="dept-events-inner latest-news-layout">
          
          <NewsSidebar 
            years={years} 
            departments={departments} 
            activeYear={activeYear} 
            activeDepartment={activeDepartment} 
            handleYearFilter={handleYearFilter} 
            handleDeptFilter={handleDeptFilter} 
          />

          {/* Main Content */}
          <div className="latest-news-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '25px', flexWrap: 'wrap', gap: '20px' }}>
               <div>
                 <span className="s-tag" style={{ color: 'var(--navy)', marginBottom: '8px', display: 'inline-block' }}>HAPPENINGS</span>
                 <h2 className="s-title" style={{ color: 'var(--navy)', margin: 0 }}>Latest <em>News & Events</em></h2>
               </div>
               
               {/* Search Bar */}
               <div style={{ width: '100%', maxWidth: '300px' }}>
                  <input 
                    type="text" 
                    placeholder="Search events..." 
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                    style={{ 
                      width: '100%', 
                      padding: '12px 18px', 
                      border: '1px solid var(--border)', 
                      borderRadius: '4px', 
                      outline: 'none', 
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      background: '#fff'
                    }}
                  />
               </div>
            </div>
            
            <div className="gold-bar" style={{ margin: '0 0 40px 0' }}></div>
            
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '8px', color: 'var(--gray)' }}>
                Loading news and events...
              </div>
            ) : error ? (
              <div style={{ textAlign: 'center', padding: '60px', background: '#fff', borderRadius: '8px', color: '#b91c1c' }}>
                {error}
              </div>
            ) : (
              <NewsGrid currentEvents={currentEvents} />
            )}

            <NewsPagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              handlePageChange={handlePageChange} 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsAndEvents;
