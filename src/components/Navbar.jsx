import { Link, useLocation } from 'react-router-dom';
import { Shield } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <Shield className="text-primary group-hover:scale-110 transition-transform" size={24} />
            <span className="font-mono text-xl font-bold tracking-wider text-primary drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]">
              XITSAHMX77
            </span>
          </Link>
          <div className="flex items-center gap-1 md:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md font-mono text-sm uppercase tracking-wider transition-all ${
                isActive('/') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md font-mono text-sm uppercase tracking-wider transition-all ${
                isActive('/about') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              About
            </Link>
            <Link
              to="/policy"
              className={`px-3 py-2 rounded-md font-mono text-sm uppercase tracking-wider transition-all ${
                isActive('/policy') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              Policy
            </Link>
            <Link
              to="/legal"
              className={`px-3 py-2 rounded-md font-mono text-sm uppercase tracking-wider transition-all ${
                isActive('/legal') ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
              }`}
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
