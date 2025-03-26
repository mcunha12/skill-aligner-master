
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="text-primary-foreground font-semibold text-lg">A</span>
          </div>
          <span className="font-medium text-lg">Aligner</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            to="/dashboard" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
