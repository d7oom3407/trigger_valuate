import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Gallery from './components/Gallery';
import Process from './components/Process';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';
import AuditPage from './components/AuditPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import OrderPage from './components/OrderPage';
import { translations } from './i18n';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('ar');
  const [currentPage, setCurrentPage] = useState<'home' | 'audit' | 'about' | 'projects' | 'order'>('home');
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigateToAudit = () => {
    setCurrentPage('audit');
    scrollToTop();
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    scrollToTop();
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    scrollToTop();
  };

  const navigateToProjects = () => {
    setCurrentPage('projects');
    scrollToTop();
  };

  const navigateToOrder = () => {
    setCurrentPage('order');
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-white selection:bg-[#ccff00] selection:text-black transition-all duration-300" dir={t.dir}>
      <Navbar 
        isScrolled={isScrolled} 
        toggleLang={toggleLang} 
        lang={lang} 
        t={t} 
        onNavigateHome={navigateToHome}
        onNavigateAudit={navigateToAudit}
        onNavigateAbout={navigateToAbout}
        onNavigateProjects={navigateToProjects}
        onNavigateOrder={navigateToOrder}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero t={t.hero} onAuditClick={navigateToAudit} />
            <Problem t={t.problem} />
            <Solution t={t.solution} />
            <TargetAudience t={t.sectors} />
            <Gallery t={t.gallery} onAuditClick={navigateToAudit} />
            <Process t={t.process} />
          </>
        )}
        {currentPage === 'audit' && (
          <AuditPage t={t.audit} onBack={navigateToHome} />
        )}
        {currentPage === 'about' && (
          <AboutPage t={t.about} onBack={navigateToHome} />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage t={t.projects} onBack={navigateToHome} onAuditClick={navigateToAudit} />
        )}
        {currentPage === 'order' && (
          <OrderPage t={t.order} onBack={navigateToHome} />
        )}
      </main>
      
      <Footer t={t.footer} brand={t.brand} onNavigateAbout={navigateToAbout} onNavigateProjects={navigateToProjects} onNavigateOrder={navigateToOrder} />
    </div>
  );
};

export default App;