import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export default function AnnouncementListing() {
  const { id } = useParams();
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const refresh = async () => {
      try {
        const response = await fetch(`${API}/announcements/public`, { signal: controller.signal });
        if (!response.ok) throw new Error('Unable to load announcements. Please try again.');
        setResult(await response.json()); setError('');
      } catch (err) { if (err.name !== 'AbortError') setError(err.message); }
    };
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => { controller.abort(); clearInterval(timer); };
  }, [id]);
  const category = result?.categories.find(row => row._id === id);
  const rows = result?.announcements.filter(row => row.announcement_category_id === id) || [];
  return <main className="container" style={{ paddingTop: 60, paddingBottom: 60, minHeight: '50vh' }}>
    <h1>{category?.name || 'Announcements'}</h1>
    {error ? <p role="alert">{error}</p> : !result ? <p>Loading announcements…</p> : !rows.length ? <p>No active announcements in this category.</p> :
      <ul style={{ paddingLeft: 24, marginTop: 24 }}>{rows.map(row => <li key={row._id} style={{ marginBottom: 20 }}>
        <a href={row.url}>{row.title}</a>
        {row.publish_date && <div><small>Published {new Date(row.publish_date).toLocaleDateString('en-IN')}</small></div>}
      </li>)}</ul>}
  </main>;
}
