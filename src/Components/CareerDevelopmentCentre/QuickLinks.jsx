import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookReader, FaBriefcase, FaUsers, FaCogs } from 'react-icons/fa';

const QUICK_LINKS = [
  { label: 'Board of Studies', icon: FaBookReader, href: '/placement' },
  { label: 'CDC Programs', icon: FaBriefcase, href: '/placement/captapulating-careers' },
  { label: 'Alumni Connect', icon: FaUsers, href: '/placement' },
  { label: 'CDC Team', icon: FaCogs, href: '/placement/captapulating-careers' }
];

const QuickLinks = () => {
  return (
    <div className="cdc-horizontal-bar-links">
      {QUICK_LINKS.map(({ label, icon: Icon, href }) => (
        <Link key={label} to={href} className="cdc-horizontal-bar-link">
          <span className="cdc-horizontal-bar-ico">
            <Icon />
          </span>
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default QuickLinks;
