import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/starBackground/StarBackground';
import { Navbar } from '../components/nav/NavBar';
import { HeroSection } from '../components/hero/HeroSection';
import { AboutSection } from '../components/About/AboutSection';
import { SkillsSection } from '../components/skills/SkillsSection';
import { ProjectSection } from '../components/project/ProjectSection';
import { ContactSection } from '../components/contact/ContactSection';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};
