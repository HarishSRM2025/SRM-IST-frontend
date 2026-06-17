import React from 'react';

export const SectionHeading = ({ label, prefix, highlight }) => (
  <div className="cl-heading">
    <p className="cl-heading__label">{label}</p>
    <h2 className="cl-heading__title">
      {prefix} <em className="cl-heading__em">{highlight}</em>
    </h2>
  </div>
);

export const StatBadge = ({ icon, value, label }) => (
  <div className="cl-stat">
    <div className="cl-stat__icon">{icon}</div>
    <div className="cl-stat__val">{value}</div>
    <div className="cl-stat__lbl">{label}</div>
  </div>
);

export const Pill = ({ icon, label, dark }) => (
  <span className={`cl-pill${dark ? ' cl-pill--dark' : ''}`}>
    <span className="cl-pill__icon" aria-hidden="true">{icon}</span>
    {label}
  </span>
);

export const HItem = ({ icon, text, dark }) => (
  <li className={`cl-hitem${dark ? ' cl-hitem--dark' : ''}`}>
    <span className="cl-hitem__icon" aria-hidden="true">{icon}</span>
    <span>{text}</span>
  </li>
);
