import React from "react";

const libraryResources = {
  printResources: [
    {
      category: "Books",
      items: [
        { label: "Total No. of Volumes", value: "19,148" },
        { label: "Total No. of Titles", value: "2,949" }
      ]
    },
    {
      category: "Periodicals (Print)",
      items: [
        { label: "International", value: "36" },
        { label: "National", value: "39" },
        { label: "Total", value: "75" }
      ]
    },
    {
      category: "Magazine",
      items: [{ label: "Total", value: "34" }]
    }
  ],

  onlineResources: [
    {
      category: "EBSCO",
      items: [
        { label: "E-Books", value: "23,000" },
        { label: "E-Journals", value: "1400+" }
      ]
    },
    {
      category: "IEEE",
      items: [{ label: "E-Journals", value: "207" }]
    },
    {
      category: "DELNET",
      items: [
        { label: "E-Books", value: "10,000+" },
        { label: "E-Journals", value: "1500+" }
      ]
    },
    {
      category: "Other Resources",
      items: [{ label: "CDs / DVDs", value: "137" }]
    }
  ]
};

const ResourceSection = ({ title, data }) => (
  <div className="resource-section">
    <h3 className="resource-heading">{title}</h3>

    <div className="resource-grid">
      {data.map((resource, index) => (
        <div className="resource-card" key={index}>
          <h4>{resource.category}</h4>

          {resource.items.map((item, idx) => (
            <div className="resource-item" key={idx}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const LibraryResources = () => (
  <section className="lib-sectionBg" id="resources">
    <div className="wrap">
      <div>
        <span className="s-tag">Collection</span>
        <h2 className="s-title">
          Library <em>Resources</em>
        </h2>
        <div className="gold-bar"></div>
      </div>

      <ResourceSection
        title="Print Resources"
        data={libraryResources.printResources}
      />

      <ResourceSection
        title="Online Resources"
        data={libraryResources.onlineResources}
      />
    </div>
  </section>
);

export default LibraryResources;