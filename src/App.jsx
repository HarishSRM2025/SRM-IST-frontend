import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import DeptPage from './Pages/DeptPage';
import Research from './Pages/Research';
import Placement from './Pages/Placement';
import SponsoredResearch from './Pages/SponsoredResearch';
import CenterDetails from './Pages/CenterDetails';
import AboutUs from './Pages/AboutUs';
import CampusLife from './Pages/CampusLife';
import NewsAndEvents from './Pages/NewsAndEvents';
import Contact from './Pages/Contact';
import Institution from './Pages/Institution';
import ScrollToTop from './Components/Common/ScrollToTop';
import WhatsAppFloat from './Components/Common/WhatsAppFloat';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<DeptPage />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/placement" element={<Placement/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/campus-life" element={<CampusLife/>} />
        <Route path="/news-and-events" element={<NewsAndEvents/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sponsored-research" element={<SponsoredResearch />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/center/:id" element={<CenterDetails />} />
      </Routes>

      <WhatsAppFloat />
      <Footer />
    </Router>
  )
}

export default App