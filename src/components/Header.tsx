import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Hortus<span className="text-blue-600">AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium' : 'hover:text-blue-500'
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium' : 'hover:text-blue-500'
                  }
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium' : 'hover:text-blue-500'
                  }
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium block' : 'hover:text-blue-500 block'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/news" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium block' : 'hover:text-blue-500 block'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => 
                    isActive ? 'text-blue-600 font-medium block' : 'hover:text-blue-500 block'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
