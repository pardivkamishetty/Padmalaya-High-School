import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navItems } from '../../data';
import Logo from '../../assets/logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gradient-to-r from-primary-blue-900/90 to-primary-blue-800/90 text-white py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <Logo className="w-12 h-12" />
            <div>
              <h1 className={`font-display text-xl font-bold ${isScrolled ? 'text-primary-blue-900' : 'text-white'}`}>
                PADMALAYA HIGH SCHOOL
              </h1>
              <p className={`text-xs font-medium ${isScrolled ? 'text-primary-blue-700' : 'text-secondary-yellow-300'}`}>
                "EVERY MIGHTY TREE BEGINS WITH A SMALL SEED"
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  isActive(item.path) 
                    ? 'nav-link-active' 
                    : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white hover:text-secondary-yellow-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions#register"
              className={`btn ${
                isScrolled 
                  ? 'btn-primary' 
                  : 'bg-secondary-yellow-400 text-primary-blue-900 hover:bg-secondary-yellow-300'
              } ml-4`}
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link px-4 py-2 ${
                  isActive(item.path) 
                    ? 'nav-link-active' 
                    : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white hover:text-secondary-yellow-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions#register"
              className={`btn ${
                isScrolled 
                  ? 'btn-primary' 
                  : 'bg-secondary-yellow-400 text-primary-blue-900 hover:bg-secondary-yellow-300'
              } mx-4 mt-4`}
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;