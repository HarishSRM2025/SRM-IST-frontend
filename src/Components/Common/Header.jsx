import { useState, useEffect } from 'react';
import Topbar from '../Navbar/Topbar';
import Navbar from '../Navbar/Navbar';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export default function Header() {
  const [data, setData] = useState({ marquee: [], categories: [], announcements: [] });
  useEffect(() => {
    const controller = new AbortController();
    const refresh = async () => {
      try {
        const response = await fetch(API_URL + '/announcements/public', { signal: controller.signal });
        if (!response.ok) throw new Error('Unable to load announcements');
        setData(await response.json());
      } catch (err) { if (err.name !== 'AbortError') console.error(err); }
    };
    refresh();
    const timer = setInterval(refresh, 60000);
    return () => { controller.abort(); clearInterval(timer); };
  }, []);
  return <><Topbar announcements={data.marquee} categories={data.categories} categoryAnnouncements={data.announcements} /><Navbar categories={data.categories} categoryAnnouncements={data.announcements} /></>;
}
