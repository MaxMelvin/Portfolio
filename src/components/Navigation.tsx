import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="container-wide py-4 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-sm text-foreground hover:text-primary transition-colors"
        >
          {'</>'}
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollTo('projects')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('approach')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Approach
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
