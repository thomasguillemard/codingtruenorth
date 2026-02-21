import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="TrueNorth logo" className="h-7 w-7 rounded-lg object-contain" />
            <span className="font-bold text-foreground">TrueNorth</span>
          </Link>

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
