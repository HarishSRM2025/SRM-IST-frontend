import React from "react";
import { nccData } from "./nccData";

const NCCRaisingUnit = ({ image }) => (
  <section className="cl-sec" id="raising-unit">
    <div className="cl-container">
      <div className="two-col">
        <div className="event-card">
          <h3>{nccData.raisingUnit.title}</h3>
          <p>{nccData.raisingUnit.description}</p>
        </div>

        <div>
          <img
            src={image}
            alt={nccData.raisingUnit.title}
            className="section-image"
            loading="lazy"
            style={{ height: "320px" }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default NCCRaisingUnit;
