import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AdmissionsPage from './pages/AdmissionsPage';
import SchoolAchievementsPage from './pages/SchoolAchievementsPage';
import AcademicAchievementsPage from './pages/AcademicAchievementsPage';
import EventsPage from './pages/EventsPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/school-achievements" element={<SchoolAchievementsPage />} />
          <Route path="/academic-achievements" element={<AcademicAchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;