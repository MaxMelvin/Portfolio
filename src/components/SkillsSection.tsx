import { portfolioData } from '@/data/portfolio';

const SkillsSection = () => {
  const { skills } = portfolioData;
  const topSkills = skills.slice(0, 6); // Assume first 6 are most used
  const otherSkills = skills.slice(6);

  return (
    <section id="skills" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container-narrow relative z-10">
        <p className="section-heading text-center">Capabilities</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Expertise</span>
        </h2>

        {/* Most Used / Top Skills Bar */}
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-6 text-center">Most Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {topSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative px-6 py-3 bg-card border border-primary/20 rounded-xl m-1 transition-all hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
              >
                <span className="relative z-10 font-semibold text-lg">{skill}</span>
                <div className="absolute inset-0 bg-primary/5 rounded-xl -z-0 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills Cloud */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">Additional Tools & Concepts</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {otherSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-secondary/50 border border-white/5 rounded-full text-muted-foreground hover:text-foreground hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
