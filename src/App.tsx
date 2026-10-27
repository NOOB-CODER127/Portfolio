import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-cyber-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <ProjectGrid />
        <ServicesSection onSelectService={handleSelectService} />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Terminal Drawer/Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
