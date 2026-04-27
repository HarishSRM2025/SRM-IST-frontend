import React from "react";
import img1 from "../../assets/images/home/campuslife/1.JPG";
import img2 from "../../assets/images/home/campuslife/2.jpg";
import img3 from "../../assets/images/home/campuslife/3.jpg";
import img4 from "../../assets/images/home/campuslife/4.jpg";
import img5 from "../../assets/images/home/campuslife/5.jpg";

const CampusLife = () => {
  const campusItems = [
    {
      title: "Sports & Athletics",
      img: img1,
      alt: "Sports",
      cls: "",
    },
    {
      title: "Research Labs",
      img: img2,
      alt: "Labs",
      cls: "d1",
    },
    {
      title: "Cultural Events",
      img: img3,
      alt: "Cultural",
      cls: "d2",
    },
    {
      title: "Guest Lectures",
      img: img4,
      alt: "Seminar",
      cls: "d1",
    },
    {
      title: "Library & Study",
      img: img5,
      alt: "Library",
      cls: "d2",
    },
  ];

  return (
    <section className="campus-section" style={{backgroundColor:'#fff'}} id="campus">
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
              {/* <div className="cc-ov">
                <div className="cc-ov-title">{item.title}</div>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusLife;