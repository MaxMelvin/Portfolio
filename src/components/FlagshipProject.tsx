import { ExternalLink } from 'lucide-react';

const FlagshipProject = () => {
  return (
    <section id="flagship" className="py-24">
      <div className="container-wide">
        <p className="section-heading">Featured Case Study</p>
        
        <div className="card-glass p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left column - Context */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Real-Time Operations Intelligence Platform
                </h2>
                <p className="text-muted-foreground">
                  A decision intelligence system for a logistics company processing 50K+ daily transactions.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">The Problem</h3>
                <p className="text-secondary-foreground leading-relaxed">
                  Operations managers relied on end-of-day reports to identify bottlenecks. 
                  By the time issues surfaced, delays had already cascaded through the supply chain. 
                  Existing BI tools provided dashboards, but not actionable alerts or root-cause analysis.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">Why Existing Solutions Failed</h3>
                <ul className="space-y-2 text-secondary-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    Traditional BI required manual query building for each investigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    Alert systems generated noise without context or priority ranking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    No unified view connecting warehouse, transport, and customer data
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column - Solution & Outcome */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">System Architecture</h3>
                <p className="text-secondary-foreground leading-relaxed mb-4">
                  Built a three-layer system: ingestion layer processing Kafka streams, 
                  an analytics engine running anomaly detection and trend forecasting, 
                  and a presentation layer with role-based dashboards.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-muted-foreground">
                  <pre>{`├── ingestion/     # Kafka consumers, CDC
├── analytics/     # Python ML pipelines
├── api/           # FastAPI + Redis cache
└── dashboard/     # React + D3 viz`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">Key Decisions</h3>
                <ul className="space-y-2 text-secondary-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">→</span>
                    Chose streaming over batch to enable sub-minute alerting
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">→</span>
                    Implemented explain-ability layer for AI predictions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">→</span>
                    Designed drill-down UX for non-technical managers
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-3">Outcome</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-foreground">68%</p>
                    <p className="text-sm text-muted-foreground">faster issue detection</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-foreground">$2.1M</p>
                    <p className="text-sm text-muted-foreground">annual savings</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Python', 'Kafka', 'PostgreSQL', 'React', 'D3.js', 'FastAPI', 'scikit-learn'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground">
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
