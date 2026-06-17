import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import CampusLife from '../../assets/images/home/campus-home.JPG';
import Awards from '../../assets/images/home/award-home.JPG';
import innovationImage from '../../assets/images/home/innovation-home.jpg';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE = API_URL.replace("/api", "");

const staticNews = [
  {
    _id: "static-1",
    isStatic: true,
    type: "Achievement",
    name: "Placement Milestone — Students placed in Fortune 500 companies surpasses all-time records",
    eventDateTime: "2026-02-14T00:00:00.000Z",
    eventImage: CampusLife,
  },
  {
    _id: "static-2",
    isStatic: true,
    type: "Innovation",
    name: "Students lead breakthrough research in renewable energy storage",
    eventDateTime: "2026-02-08T00:00:00.000Z",
    eventImage: innovationImage,
  },
  {
    _id: "static-3",
    isStatic: true,
    type: "Awards",
    name: "SRM Trichy earns NAAC A+ re-accreditation for academic excellence",
    eventDateTime: "2026-02-05T00:00:00.000Z",
    eventImage: Awards,
  }
];

const getImageUrl = (event) => {
  if (event.isStatic) {
    return event.eventImage;
  }
  const imagePath = event.eventImage;
  if (!imagePath) return "";
  const img = Array.isArray(imagePath) ? imagePath[0] : imagePath;
  if (!img) return "";
  if (img.startsWith("http")) return img;
  const normalized = img.replace(/\\/g, "/");
  if (normalized.startsWith("public/")) return `${API_BASE}/${normalized}`;
  return `${API_BASE}/public/uploads/${normalized.split("/").pop()}`;
};

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const News = () => {
  const [events, setEvents] = useState(staticNews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/institution/events-and-activities/recent`);
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : [];
          
          // Merge dynamic events with static news
          const combined = [...list, ...staticNews];
          
          // Sort by eventDateTime descending
          combined.sort((a, b) => {
            const dateA = new Date(a.eventDateTime);
            const dateB = new Date(b.eventDateTime);
            return dateB - dateA;
          });
          
          setEvents(combined);
        }
      } catch (err) {
        console.error("Failed to fetch institute events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className="news-section rev" id="news" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="wrap">

        {/* Header */}
        <div className="news-hdr">
          <div>
            <span className="s-tag">Latest News & Articles</span>
            <h2 className="s-title">
              Events & Recent<em> Highlights</em>
            </h2>
          </div>

          <Link to="/news-and-events" className="btn btn-outline-dark">
            View All <FaArrowRight />
          </Link>
        </div>

        {/* Grid */}
        <div className="news-grid">

          {/* Big Card – first event */}
          {events[0] && (
            <div className="nc nc-big">
              <img
                src={getImageUrl(events[0])}
                alt={events[0].name || "Event"}
                loading="lazy"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="nc-body">
                <div className="nc-tag">{events[0].type || "Event"}</div>
                <div className="nc-title">{events[0].name || "Untitled Event"}</div>
                <div className="nc-date" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <FaCalendarAlt style={{ fontSize: "11px", color: "var(--gold)" }} />
                    {formatDate(events[0].eventDateTime)}
                  </span>
                  {!events[0].isStatic && events[0].location && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <FaMapMarkerAlt style={{ fontSize: "11px", color: "var(--gold)" }} />
                      {events[0].location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Side cards */}
          <div className="news-stack">
            {events.slice(1, 3).map((event) => (
              <div className="nc nc-sm" key={event._id}>
                <img
                  src={getImageUrl(event)}
                  alt={event.name || "Event"}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div className="nc-body">
                  <div className="nc-tag">{event.type || "Event"}</div>
                  <div className="nc-title">{event.name || "Untitled Event"}</div>
                  <div className="nc-date" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                      <FaCalendarAlt style={{ fontSize: "11px", color: "var(--gold)" }} />
                      {formatDate(event.eventDateTime)}
                    </span>
                    {!event.isStatic && event.location && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        <FaMapMarkerAlt style={{ fontSize: "11px", color: "var(--gold)" }} />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;