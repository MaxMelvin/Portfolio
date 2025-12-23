import { ArrowDown, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative">
      <div className="container-narrow pt-20">
        <p className="section-heading fade-in">Systems Engineer & AI Practitioner</p>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
          I build intelligent systems that{' '}
          <span className="text-gradient">transform data into decisions</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed fade-in" style={{ animationDelay: '0.2s' }}>
          Designing and implementing dashboards, automation pipelines, and AI-assisted
          analysis tools for organizations that need to move faster and think clearer.
        </p>

        <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </button>
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
    </section>
  );
};

export default HeroSection;
