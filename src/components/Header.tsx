
import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className={`flex h-16 items-center justify-between ${isMobile ? 'px-4' : 'container'}`}>
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-quaternary rounded-md flex items-center justify-center">
            <span className="text-quaternary-foreground font-semibold text-lg">A</span>
          </div>
          <span className="font-medium text-lg">Aligner</span>
        </Link>
        <nav className="flex items-center">
          <Link 
            to="/dashboard" 
            className="px-3 py-2 text-sm font-medium hover:text-quaternary transition-colors rounded-md"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
