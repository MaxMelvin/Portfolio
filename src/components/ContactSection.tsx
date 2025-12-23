import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container-narrow">
        <p className="section-heading">Get in Touch</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Let's Build Something
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Available for full-time roles, consulting engagements, and technical advisory work.
          Particularly interested in problems involving data systems, automation, and applied AI.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="mailto:hello@example.com"
            className="card-glass p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
          >
            <Mail className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground">Email</span>
            <span className="text-xs text-muted-foreground mt-1">hello@example.com</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
          >
            <Github className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground">GitHub</span>
            <span className="text-xs text-muted-foreground mt-1">View repositories</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
          >
            <Linkedin className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground">LinkedIn</span>
            <span className="text-xs text-muted-foreground mt-1">Connect</span>
          </a>

          <a
            href="/resume.pdf"
            className="card-glass p-6 flex flex-col items-center text-center hover:border-primary/50 transition-colors group"
          >
            <FileText className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground">Resume</span>
            <span className="text-xs text-muted-foreground mt-1">Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
