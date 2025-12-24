import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

import confetti from 'canvas-confetti';

const ContactSection = () => {
  const { social } = portfolioData;

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2ea', '#ffffff', '#a855f7']
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container-narrow relative z-10">
        <p className="section-heading text-center">Get in Touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Let's Build <span className="text-gradient">Something</span>
        </h2>
        <p className="text-muted-foreground mb-16 max-w-2xl mx-auto text-center text-lg">
          Available for full-time roles, consulting engagements, and technical advisory work.
          Particularly interested in problems involving data systems, automation, and applied AI.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a
            href={`mailto:${social.email}`}
            onClick={triggerConfetti}
            className="card-glass p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground mb-1">Email</span>
            <span className="text-sm text-muted-foreground">{social.email}</span>
          </a>

          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground mb-1">GitHub</span>
            <span className="text-sm text-muted-foreground">View repositories</span>
          </a>

          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-primary/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground mb-1">LinkedIn</span>
            <span className="text-sm text-muted-foreground">Connect</span>
          </a>

          <a
            href="#"
            className="card-glass p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-primary/5 transition-all group opacity-50 cursor-not-allowed"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <span className="text-lg font-semibold text-foreground mb-1">Resume</span>
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
