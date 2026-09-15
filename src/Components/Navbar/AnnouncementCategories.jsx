import { FaArrowCircleRight } from 'react-icons/fa';

export default function AnnouncementCategories({ categories = [], announcements = [], onNavigate }) {
  return categories.length ? categories.map(category => (
    <div className="announcement-category" key={category._id}>
      <h3 className="category-title">{category.name}</h3>
      <ul className="category-list announcement-category-links">
        {announcements.filter(announcement => announcement.announcement_category_id === category._id).map(announcement => (
          <li key={announcement._id}>
            <a href={announcement.url} target="_blank" rel="noopener noreferrer" onClick={onNavigate} title={announcement.title}>
              <FaArrowCircleRight className="a-arrow" />
              <span className="announcement-title-text">{announcement.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )) : <p>No announcement categories available.</p>;
}
