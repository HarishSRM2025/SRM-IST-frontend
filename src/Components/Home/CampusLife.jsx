import React from "react";

const CampusLife = () => {
  const campusItems = [
    {
      title: "Sports & Athletics",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80",
      alt: "Sports",
      cls: "",
    },
    {
      title: "Research Labs",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
      alt: "Labs",
      cls: "d1",
    },
    {
      title: "Cultural Events",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
      alt: "Cultural",
      cls: "d2",
    },
    {
      title: "Guest Lectures",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
      alt: "Seminar",
      cls: "d1",
    },
    {
      title: "Library & Study",
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80",
      alt: "Library",
      cls: "d2",
    },
  ];

  return (
    <section className="campus-section rev" id="campus">
      <div className="wrap">

        {/* Header */}
        <div>
          <span className="s-tag">Campus Life</span>
          <h2 className="s-title">
            Life Beyond <em>the Classroom</em>
          </h2>
          <div className="gold-bar"></div>
        </div>

        {/* Grid */}
        <div className="campus-grid">
          {campusItems.map((item, index) => (
            <div key={index} className={`cc ${item.cls}`}>
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"   // ✅ performance fix
              />
              <div className="cc-ov">
                <div className="cc-ov-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusLife;