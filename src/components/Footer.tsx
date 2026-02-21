import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">TN</span>
            </div>
            <span className="font-bold text-foreground">TrueNorth</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
            <a href="#workflow" className="hover:text-foreground transition-colors">Workflow</a>
            <a href="#integrations" className="hover:text-foreground transition-colors">Integrations</a>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </div>

          <p className="text-xs text-muted-foreground">© 2026 TrueNorth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
