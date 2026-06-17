import React from "react";
import {
  FaServer,
  FaShieldAlt,
  FaRobot,
  FaLaptopCode,
  FaChartBar,
  FaMicrochip,
} from "react-icons/fa";

export default function InstituteFacilities({ facilities }) {
  if (!facilities || facilities.length === 0) return null;

  return (
    <section className="dept-facilities" style={{backgroundColor:'#fff'}}>
      <div className="dept-facilities-inner">
        <div className="dept-section-header">
          <div>
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">
              World-Class <em>Facilities</em>
            </h2>
          </div>
        </div>

        <div className="facilities-grid">
          {facilities.map((f) => (
            <div className="facility-card" key={f._id}>
              <div 
                className="facility-img" 
                style={{
                  backgroundImage: `url(${import.meta.env.VITE_API_URL.replace('/api', '')}/public/uploads/${f.infraImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '180px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  position: 'relative'
                }}
              >
                {/* Gradient overlay to make text readable */}
                <div style={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0, top: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))'
                }}></div>

                {f.capacity && (
                  <div className="facility-img-label" style={{ position: 'relative', zIndex: 1 }}>
                    Capacity: {f.capacity} Persons
                  </div>
                )}
              </div>

              <div className="facility-body">
                <div className="facility-name">{f.infraName}</div>
                <div className="facility-desc">{f.infraDesc}</div>

                {f.equipment?.length > 0 && (
                  <>
                    <div className="facility-divider" />

                    <div className="facility-equip-label">
                      Equipment Available
                    </div>

                    <div className="facility-equip-list">
                      {f.equipment.map((e, i) => (
                        <div className="facility-equip-chip" key={i}>
                          {e}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
