interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'System Development',
    description: 'Designing and building production-grade applications and APIs',
    skills: ['Python', 'TypeScript', 'FastAPI', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'AI & Intelligence',
    description: 'Applying machine learning where it creates measurable value',
    skills: ['scikit-learn', 'TensorFlow', 'OpenAI API', 'LangChain', 'NLP', 'Time Series'],
  },
  {
    title: 'Data & Dashboards',
    description: 'Transforming raw data into actionable business intelligence',
    skills: ['SQL', 'dbt', 'Snowflake', 'Metabase', 'D3.js', 'Pandas', 'Apache Airflow'],
  },
  {
    title: 'Tools & Infrastructure',
    description: 'Ensuring systems are reliable, scalable, and maintainable',
    skills: ['Docker', 'AWS', 'Terraform', 'GitHub Actions', 'Kafka', 'Linux', 'Git'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container-wide">
        <p className="section-heading">Capabilities</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Skills Mapped to Outcomes
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Technologies I use regularly, organized by the problems they solve. 
          Each skill listed here is demonstrated in the projects above.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-glass p-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-muted rounded-md text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
