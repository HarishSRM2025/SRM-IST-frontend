import { FaArrowCircleRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

function AnnouncementTitle({ title }) {
  const viewport = useRef(null);
  const text = useRef(null);
  const [motion, setMotion] = useState({ distance: 0, duration: 10 });

  useEffect(() => {
    const measure = () => {
      if (!viewport.current || !text.current) return;
      const width = text.current.getBoundingClientRect().width;
      const distance = Math.max(0, Math.ceil(width - viewport.current.clientWidth));
      const duration = Math.max(6, distance / 30 + 3);
      setMotion(previous => previous.distance === distance && previous.duration === duration
        ? previous : { distance, duration });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(viewport.current);
    observer.observe(text.current);
    const frame = requestAnimationFrame(measure);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [title]);

  return <span ref={viewport} className={`announcement-title-text${motion.distance > 1 ? ' is-scrolling' : ''}`}>
    <span key={title} className="announcement-title-track" style={{ '--announcement-scroll-duration': `${motion.duration}s`, '--announcement-scroll-distance': `-${motion.distance}px` }}>
      <span ref={text}>{title}</span>
    </span>
  </span>;
}

export default function AnnouncementCategories({ categories = [], announcements = [], onNavigate }) {
  return categories.length ? categories.map(category => (
    <div className="announcement-category" key={category._id}>
      <h3 className="category-title">{category.name}</h3>
      <ul className="category-list announcement-category-links">
        {announcements.filter(announcement => announcement.announcement_category_id === category._id).map(announcement => (
          <li key={announcement._id}>
            <a href={announcement.url} target="_blank" rel="noopener noreferrer" onClick={onNavigate} title={announcement.title}>
              <FaArrowCircleRight className="a-arrow" />
              <AnnouncementTitle title={announcement.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )) : <p>No announcement categories available.</p>;
}
