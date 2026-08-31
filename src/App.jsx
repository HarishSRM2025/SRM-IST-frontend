import React from 'react'
import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Common/Header'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import DeptPage from './Pages/DeptPage';
import DivisionPage from './Pages/DivisionPage';
import Research from './Pages/Research';
import Placement from './Pages/Placement';
import SponsoredResearch from './Pages/SponsoredResearch';
import CenterDetails from './Pages/CenterDetails';
import AboutUs from './Pages/AboutUs';
import Policy from './Pages/Policy';
import CampusLife from './Pages/CampusLife';
import NewsAndEvents from './Pages/NewsAndEvents';
import Contact from './Pages/Contact';
import Institution from './Pages/Institution';
import EventDetails from './Pages/EventDetails';
import InternationalRelations from './Pages/InternationalRelations';
import Library from './Pages/Library';
import Students from './Pages/Students';
import Examcell from './Pages/Examcell';
import Careers from './Pages/Careers';
import ScrollToTop from './Components/Common/ScrollToTop';
import WhatsAppFloat from './Components/Common/WhatsAppFloat';
import PlacementPage from './Pages/CatapultingCareers';
import CareerDevelopmentCentre from './Pages/CareerDevelopmentCentre';
import Sports from './Pages/Sports';
import NationalCadetCorps from './Pages/NationalCadetCorps';
import Admission from './Pages/Admission';
import AcademicCalendar from './Pages/AcademicCalendar';
import Leadership from './Pages/Leadership';
import Governance from './Components/AboutUs/Governance';
import Communication from './Pages/Communication';
import FacultyDetailPage from './Pages/FacultyDetailPage';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<DeptPage />} />
        <Route path="/departments/:slug" element={<DeptPage />} />
        <Route path="/division-details" element={<DivisionPage />} />
        <Route path="/division-details/:slug" element={<DivisionPage />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/placement" element={<Placement/>} />
        <Route path='/placement/captapulating-careers' element={<PlacementPage/>} />
        <Route path="/placement/career-development-centre" element={<CareerDevelopmentCentre />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/campus-life" element={<CampusLife/>} />
        <Route path="/news-and-events" element={<NewsAndEvents/>} />
        <Route path="/governance" element={<Governance/>} />
        <Route path="/governance" element={<Governance/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admission" element={<Admission/>} />
        <Route path="/academic_calendar" element={<AcademicCalendar/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/sponsored-research" element={<SponsoredResearch />} />
        <Route path="/library" element={<Library />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/institution" element={<Institution />} />
        <Route path="/institution/:slug" element={<Institution />} />
        <Route path="/center/:id" element={<CenterDetails />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/international-relations" element={<InternationalRelations />} />
        <Route path="/students" element={<Students />} />
        <Route path="/examcell" element={<Examcell />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/ncc" element={<NationalCadetCorps />} />
        <Route path="/faculty-detail" element={<FacultyDetailPage />} />
      </Routes>

      <WhatsAppFloat />
      <Footer />
    </Router>
  )
}

export default App
