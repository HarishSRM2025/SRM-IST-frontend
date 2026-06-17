import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

// Support either VITE_API_URL (full api root like http://host:port/api)
// or VITE_API_BASE (base host like http://host:port)
const apiRoot = import.meta.env.VITE_API_URL || `${import.meta.env.VITE_API_BASE || 'http://localhost:3000'}/api`;

const CenterOfResearch = () => {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const res = await fetch(`${apiRoot}/research`);
        if (!res.ok) throw new Error(`Failed to load (${res.status})`);
        const data = await res.json();
        setCenters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCenters();
  }, []);

  return (
    <section style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
        <div style={{ marginBottom: "50px", textAlign: "left" }}>
          <span className="s-tag">FACILITIES</span>
          <h2 className="s-title">Centers of Excellence & <em>Research</em></h2>
          <div className="gold-bar"></div>
        </div>

        {loading && <p>Loading centers...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {centers.map((center) => (
            <Link
              key={center._id}
              to={`/center/${center._id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
                background: 'var(--lgray)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'var(--navy)',
                transition: 'all 0.3s ease',
                border: '1px solid transparent',
                cursor: 'pointer'
              }}
            >
              <div
                className="icon-wrapper"
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--navy)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                  transition: 'all 0.3s'
                }}
              >
                {/* If the backend provides an icon field (e.g., emoji), it will render; otherwise show first letter */}
                {center.icon || center.centerName?.charAt(0)}
              </div>

              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '1.4',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '10px'
              }}>
                {center.centerName}
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--gold)',
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginTop: '10px'
              }}>
                Explore <FaAngleRight />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CenterOfResearch;
