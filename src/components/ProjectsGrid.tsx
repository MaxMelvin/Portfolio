import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const ProjectsGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const INITIAL_PROJECTS = 3;
  const displayedProjects = showAll ? portfolioData.projects : portfolioData.projects.slice(0, INITIAL_PROJECTS);
  const hasMoreProjects = portfolioData.projects.length > INITIAL_PROJECTS;

  return (
    <section id="projects" className="py-32 relative">
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="section-heading">Selected Work</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Engineering <span className="text-gradient">Excellence</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base">
            A selection of projects demonstrating complex system architecture, automation, and data visualization capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <article
              key={index}
              className="group relative flex flex-col h-full bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.1)] animate-in fade-in zoom-in-50 duration-500"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex bg-secondary/50 rounded-full px-2 py-0.5 w-fit">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                        {project.stack[0]} &middot; {project.stack[1]}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div>
                    <p className="text-xs font-semibold text-primary/80 mb-1 uppercase tracking-wide">The Challenge</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary/80 mb-1 uppercase tracking-wide">The Solution</p>
                    <p className="text-sm text-foreground/90 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/5 rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-secondary/50 hover:bg-secondary text-secondary-foreground font-medium rounded-full transition-all duration-300 border border-border hover:border-primary/30"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View All Projects <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
