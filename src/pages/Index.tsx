import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FlagshipProject from '@/components/FlagshipProject';
import ProjectsGrid from '@/components/ProjectsGrid';
import ApproachSection from '@/components/ApproachSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FlagshipProject />
        <ProjectsGrid />
        <ApproachSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
