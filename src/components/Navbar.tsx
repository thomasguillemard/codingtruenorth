import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Problem", href: "/#problem" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Prioritization", href: "/#prioritization" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
          <img src={logo} alt="TrueNorth logo" className="h-8 w-8 rounded-lg object-contain" />
          <span className="font-bold text-lg text-foreground">TrueNorth</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            )
          )}
          <Link to="/early-access" className="inline-flex h-9 px-4 items-center rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Get Early Access
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={link.label} to={link.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ) : (
                  <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </a>
                )
              )}
              <Link to="/early-access" onClick={() => setOpen(false)} className="inline-flex h-9 px-4 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                Get Early Access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
