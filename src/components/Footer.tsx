const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with precision
        </p>
        <p className="text-xs font-mono text-muted-foreground">
          Designed for clarity, optimized for impact
        </p>
      </div>
    </footer>
  );
};

export default Footer;
