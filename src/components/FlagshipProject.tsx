import { portfolioData } from '@/data/portfolio';

const FlagshipProject = () => {
  const { featuredProject } = portfolioData;

  return (
    <section id="flagship" className="py-24">
      <div className="container-wide">
        <p className="section-heading">Featured Case Study</p>

        <div className="card-glass p-8 md:p-12 relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10 group-hover:bg-primary/10 transition-colors duration-700" />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Context */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-primary/80 font-medium">
                  Multimodal Assistive System
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {featuredProject.problem}
                </p>
              </div>
            </div>

            {/* Right column - Solution & Outcome */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">The Solution</h3>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {featuredProject.solution}
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">Key Outcome</h3>
                <p className="text-foreground leading-relaxed">
                  {featuredProject.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {featuredProject.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-primary/10 border border-primary/20 rounded-full text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipProject;
