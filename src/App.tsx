import { useState, useEffect } from 'react';
import { Navbar, TabId } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>(() => {
    const hash = window.location.hash.replace('#', '') as TabId;
    if (['about', 'projects', 'skills', 'experience', 'contact'].includes(hash)) {
      return hash;
    }
    return 'about';
  });

  const handleSelectTab = (tab: TabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
    // Ensure viewport stays at the top without jumping
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabId;
      if (['about', 'projects', 'skills', 'experience', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-zinc-200 selection:bg-zinc-800 selection:text-zinc-100 flex flex-col font-sans antialiased">
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      <main className="flex-1 transition-opacity duration-150">
        {activeTab === 'about' && <Hero onSelectTab={handleSelectTab} />}
        {activeTab === 'projects' && <ProjectGrid />}
        {activeTab === 'skills' && <SkillsSection />}
        {activeTab === 'experience' && <ExperienceSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
