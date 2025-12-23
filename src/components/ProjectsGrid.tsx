import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
}

const projects: Project[] = [
  {
    title: 'Document Processing Pipeline',
    problem: 'Legal team spent 40+ hours weekly manually extracting data from contracts and compliance documents.',
    solution: 'Developed an OCR + NLP pipeline using GPT-4 for entity extraction, with a review interface for edge cases.',
    outcome: '85% reduction in manual processing time. 99.2% extraction accuracy after human review.',
    stack: ['Python', 'OpenAI API', 'Tesseract', 'React', 'PostgreSQL'],
  },
  {
    title: 'Predictive Maintenance Dashboard',
    problem: 'Manufacturing plant experienced $500K annual losses from unplanned equipment downtime.',
    solution: 'Built sensor data aggregation system with ML models predicting failures 72 hours in advance.',
    outcome: '43% reduction in unplanned downtime. ROI achieved in 5 months.',
    stack: ['Python', 'TensorFlow', 'InfluxDB', 'Grafana', 'Docker'],
  },
  {
    title: 'Executive Decision Support System',
    problem: 'C-suite needed consolidated view of KPIs across 12 business units with varying data formats.',
    solution: 'Created unified data model and automated ETL pipelines feeding real-time executive dashboards.',
    outcome: 'Monthly reporting cycle reduced from 2 weeks to 2 days. Enabled weekly strategic reviews.',
    stack: ['dbt', 'Snowflake', 'Metabase', 'Airflow', 'Python'],
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container-wide">
        <p className="section-heading">Systems Portfolio</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Additional Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article key={index} className="card-glass p-6 flex flex-col h-full group">
              <h3 className="text-lg font-semibold mb-4 flex items-start justify-between">
                {project.title}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </h3>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Solution</p>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Outcome</p>
                  <p className="text-sm text-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-xs font-mono bg-muted/50 rounded text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
