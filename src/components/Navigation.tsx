import { useState, useEffect } from 'react';
import { Home, Briefcase, Award, Cpu, Mail, Layers } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'About Me', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'approach', label: 'Approach', icon: Layers },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <>
      {/* Mobile Top Navigation */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
          }`}
      >
        <div className="container p-4 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">Mr. Melvin Philip<span className="text-primary">.</span></span>
        </div>
      </nav>

      {/* Desktop Left Sidebar Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 xl:w-64 z-50 flex-col items-center xl:items-start py-8 bg-background/50 backdrop-blur-sm border-r border-white/5">

        <div className="mb-12 px-4 xl:px-8">
          <span className="font-bold text-2xl tracking-tight hidden xl:block">Mr. Melvin Philip<span className="text-primary">.</span></span>
          <span className="font-bold text-2xl tracking-tight xl:hidden">M<span className="text-primary">.</span></span>
        </div>

        <div className="flex-1 w-full flex flex-col gap-2 px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  relative w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                  ${isActive
                    ? 'bg-primary/10 shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]'
                    : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'}
                `}
              >
                {/* Active Indicator Line (Left) */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full shadow-[0_0_10px_hsl(var(--primary))]"></div>
                )}

                <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />

                <span className={`hidden xl:block text-sm font-medium ${isActive ? 'text-gradient font-bold' : ''}`}>
                  {item.label}
                </span>

                {/* Sparkle Text Effect for Active Item */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
                )}
              </button>
            );
          })}
        </div>

        <div className="px-4 xl:px-8 mt-auto">
          <div className="text-xs text-muted-foreground hidden xl:block">
            © 2024 Portfolio
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
