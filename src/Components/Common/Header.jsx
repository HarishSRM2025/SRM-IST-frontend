

import React, { useState, useEffect } from 'react';
import Topbar from '../Navbar/Topbar';
import Navbar from '../Navbar/Navbar';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const Header = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
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
        }

        let divisionList = [];
        if (divisionResponse.ok) {
          const data = await divisionResponse.json();
          divisionList = Array.isArray(data) ? data : data?.data ? (Array.isArray(data.data) ? data.data : [data.data]) : [];
        }

        let institutionList = [];
        if (institutionResponse.ok) {
          const data = await institutionResponse.json();
          institutionList = Array.isArray(data) ? data : data?.data ? (Array.isArray(data.data) ? data.data : [data.data]) : [];
        }

        const combinedList = [...schoolList, ...divisionList, ...institutionList];

        // Filter events that have announcement === true
        const filteredAnnouncements = combinedList.filter(e => e.announcement === true || e.announcement === "true");

        // Sort by eventDateTime descending (newest first)
        filteredAnnouncements.sort((a, b) => {
          const dateA = new Date(a.eventDateTime);
          const dateB = new Date(b.eventDateTime);
          const timeA = Number.isNaN(dateA.getTime()) ? 0 : dateA.getTime();
          const timeB = Number.isNaN(dateB.getTime()) ? 0 : dateB.getTime();
          return timeB - timeA;
        });

        setAnnouncements(filteredAnnouncements);
      } catch (err) {
        console.error("Failed to load announcements for header:", err);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <>
      <Topbar announcements={announcements} />
      <Navbar announcements={announcements} />
    </>
  );
};

export default Header;