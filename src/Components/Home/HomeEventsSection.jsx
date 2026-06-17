import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
const API_BASE = API_URL.replace("/api", "");

const getImageUrl = (imagePath) => {
  if (!imagePath) return "";
  // Handle array of images – use the first one
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

const HomeEventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/institution/events-and-activities/recent`);
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : [];
          setEvents(list);
        }
      } catch (err) {
        console.error("Failed to fetch institute events:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Hide section if no events
  if (!loading && events.length === 0) return null;
  if (loading) return null;

  return (
    <section className="news-section rev" id="institute-events" style={{ backgroundColor: "#f3f4f6" }}>
      <div className="wrap">

        {/* Header */}
        <div className="news-hdr">
          <div>
            <span className="s-tag">Institute Events</span>
            <h2 className="s-title">
              Events & <em>Activities</em>
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
                src={getImageUrl(events[0].eventImage)}
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
                  {events[0].location && (
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
                  src={getImageUrl(event.eventImage)}
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
                    {event.location && (
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

export default HomeEventsSection;
