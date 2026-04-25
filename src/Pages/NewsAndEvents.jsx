import React, { useState } from 'react';
import { FaTools, FaMicrophone, FaIndustry, FaLightbulb, FaShieldAlt, FaBroadcastTower } from 'react-icons/fa';
import Breadcrum from '../Components/Common/Breadcrum';
import NewsSidebar from '../Components/NewsAndEvents/NewsSidebar';
import NewsGrid from '../Components/NewsAndEvents/NewsGrid';
import NewsPagination from '../Components/NewsAndEvents/NewsPagination';
import '../css/Department.css';

import { dummyEvents } from '../Data/NewsEventsData';

const NewsAndEvents = () => {
  const [activeYear, setActiveYear] = useState("All");
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const years = ["All", "2025", "2024", "2023"];
  const departments = ["All", "CSE Dept", "IT Dept", "ECE Dept", "Bio-Med Dept", "Aero Dept", "Students Club"];

  const filteredEvents = dummyEvents.filter(e => {
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
      
      <div className="dept-events" style={{ background: '#f3f4f6', minHeight: '80vh', padding: '60px 20px' }}>
        <div className="dept-events-inner" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '50px', alignItems: 'start', maxWidth: '1200px', margin: '0 auto' }}>
          
          <NewsSidebar 
            years={years} 
            departments={departments} 
            activeYear={activeYear} 
            activeDepartment={activeDepartment} 
            handleYearFilter={handleYearFilter} 
            handleDeptFilter={handleDeptFilter} 
          />

          {/* Main Content */}
          <div>
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
            
            <NewsGrid currentEvents={currentEvents} />

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
