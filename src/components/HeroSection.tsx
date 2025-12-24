import { ArrowDown, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const { name, tagline, bio, photo, location } = portfolioData.personal;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-start text-left">
          <div className="flex items-center gap-2 mb-4 fade-in">
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Available for work
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <MapPin className="w-3 h-3" />
              {location}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, I'm <span className="text-gradient block mt-2">{name}</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
            {tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed fade-in" style={{ animationDelay: '0.3s' }}>
            {bio}
          </p>

          <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_-5px_hsl(var(--primary)/0.6)]"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors border border-border"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end fade-in scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
            {/* Glossy Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px] -z-10" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-card/50 backdrop-blur-sm group">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>


          </div>
        </div>

      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </section>
  );
};

export default HeroSection;
