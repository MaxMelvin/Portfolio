const ApproachSection = () => {
  return (
    <section id="approach" className="py-24">
      <div className="container-narrow">
        <p className="section-heading">How I Think</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-12">
          Problem-Solving Approach
        </h2>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Handling Ambiguity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-world problems rarely arrive with clean specifications. I start by mapping
                what we know versus what we assume, identifying who holds critical context,
                and defining the smallest experiment that can reduce uncertainty. I'd rather
                build a rough prototype in a week than a perfect spec in a month.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">When to Use AI</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI is a tool, not a solution. I use it when: the task involves pattern
                recognition at scale, traditional rules would require constant maintenance,
                or when human judgment needs to be augmented rather than replaced. For
                deterministic workflows, simpler logic wins.
              </p>
            </div>
          </div>

          <div className="card-glass p-8">
            <h3 className="text-lg font-semibold mb-6 text-foreground">My Decision Framework</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-semibold">01</span>
                </div>
                <h4 className="font-medium text-foreground">Clarify Constraints</h4>
                <p className="text-sm text-muted-foreground">
                  Budget, timeline, team capabilities, existing infrastructure
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-semibold">02</span>
                </div>
                <h4 className="font-medium text-foreground">Map Dependencies</h4>
                <p className="text-sm text-muted-foreground">
                  Data sources, system integrations, stakeholder workflows
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-semibold">03</span>
                </div>
                <h4 className="font-medium text-foreground">Define Success</h4>
                <p className="text-sm text-muted-foreground">
                  Measurable outcomes, not feature checklists
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono text-sm font-semibold">04</span>
                </div>
                <h4 className="font-medium text-foreground">Ship Incrementally</h4>
                <p className="text-sm text-muted-foreground">
                  Deliver value early, iterate based on real feedback
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">On Technical Debt</h3>
            <p className="text-muted-foreground leading-relaxed">
              Some debt is strategic—moving fast to validate an idea before over-engineering.
              The key is documenting it, communicating it, and having a plan to address it.
              I keep a running log of trade-offs made and their expiration dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
