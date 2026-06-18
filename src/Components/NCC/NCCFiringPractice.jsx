import React from "react";
import { nccData } from "./nccData";

const NCCFiringPractice = ({ images }) => (
  <section className="cl-sec" id="firing-practice">
    <div className="cl-container">
      <h2 className="s-title" style={{ textAlign: "center", marginBottom: "10px" }}>
        {nccData.firingPractice.title}
      </h2>

      <div className="gallery-grid">
        {images?.map((img, i) => (
          <div className="gallery-card" key={i}>
            <img
              src={img}
              alt={`Firing practice ${i + 1}`}
              className="gallery-image"
              loading="lazy"
              style={{ height: "220px" }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NCCFiringPractice;
