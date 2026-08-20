import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { siteConfig } from '../config/site';
import SearchDialog from './SearchDialog';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'Categories', path: '/categories' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-heading font-bold text-text hover:text-brand-blue transition-colors">
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-muted hover:text-brand-blue transition-colors text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(true)}
              className="text-muted hover:text-brand-blue transition-colors p-2 flex items-center gap-2" 
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
              <span className="text-xs border border-border rounded px-1.5 py-0.5 ml-1 hidden lg:block">⌘ K</span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-muted hover:text-brand-blue transition-colors p-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={toggleTheme}
              className="text-muted hover:text-brand-blue transition-colors p-2"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted hover:text-brand-blue p-2"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-muted hover:text-brand-blue hover:bg-surface rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-2">
               <button 
                 onClick={() => {
                   setSearchOpen(true);
                   setMobileMenuOpen(false);
                 }}
                 className="flex items-center text-muted hover:text-brand-blue text-base font-medium w-full text-left"
               >
                 <Search className="h-5 w-5 mr-2" /> Search
               </button>
            </div>
          </div>
        </div>
      )}

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
