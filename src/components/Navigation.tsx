
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ChevronDown, ExternalLink, Home, BookOpen, Users, Mail } from "lucide-react";
import NightModeToggle from "./NightModeToggle";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-blog-dark/90 backdrop-blur-lg border-b border-gray-800 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Sidebar Trigger Button */}
              <button 
                className="mr-4 text-blog-neon hover:text-blog-accent transition-colors duration-300"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
              
              {/* Logo */}
              <Link to="/" className="text-2xl font-bold text-white flex items-center">
                Cyber<span className="text-blog-neon text-shadow-neon-lg">Pulse</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-blog-neon transition-colors duration-300 text-shadow-neon">
                Home
              </Link>
              
              {/* Category Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-white hover:text-blog-neon transition-colors duration-300">
                  Categories <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="glassmorphism p-4 space-y-2">
                    <Link to="/category/Technology" className="block text-white hover:text-blog-neon transition-colors duration-300">
                      Technology
                    </Link>
                    <Link to="/category/Entertainment" className="block text-white hover:text-blog-neon transition-colors duration-300">
                      Entertainment
                    </Link>
                    <Link to="/category/Lifestyle" className="block text-white hover:text-blog-neon transition-colors duration-300">
                      Lifestyle
                    </Link>
                    <Link to="/category/Gaming" className="block text-white hover:text-blog-neon transition-colors duration-300">
                      Gaming
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link to="/team" className="text-white hover:text-blog-neon transition-colors duration-300">
                Our Team
              </Link>
              <Link to="/contact" className="text-white hover:text-blog-neon transition-colors duration-300">
                Contact
              </Link>
              
              <div className="flex items-center space-x-4">
                {/* Search Button */}
                <button 
                  className="text-white hover:text-blog-neon transition-colors duration-300"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="w-5 h-5" />
                </button>
                
                {/* Night Mode Toggle */}
                <NightModeToggle />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <button 
                className="text-white hover:text-blog-neon transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </button>
              <NightModeToggle />
              <button
                className="text-white hover:text-blog-neon transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Bar (Slide down when active) */}
          <div 
            className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
              isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for cybernetic knowledge..."
                className="w-full bg-blog-charcoal border border-gray-700 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-blog-neon focus:ring-1 focus:ring-blog-neon transition-all duration-300"
              />
              <button className="absolute right-3 top-3 text-blog-neon hover:text-blog-accent transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-blog-darker/95 backdrop-blur-lg transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex-1">
            <div className="grid grid-cols-1 gap-4 text-center">
              <Link 
                to="/" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/category/Technology" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                to="/category/Entertainment" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Entertainment
              </Link>
              <Link 
                to="/category/Lifestyle" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lifestyle
              </Link>
              <Link 
                to="/category/Gaming" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gaming
              </Link>
              <Link 
                to="/team" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300 border-b border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                to="/contact" 
                className="py-4 text-xl text-white hover:text-blog-neon transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blog-darker border-r border-gray-800 transition-all duration-500 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-xl font-bold text-white">
              Cyber<span className="text-blog-neon text-shadow-neon">Pulse</span>
            </Link>
            <button 
              className="text-white hover:text-blog-neon transition-colors duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Home className="w-5 h-5 mr-3" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/Technology" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    <span>Articles</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Users className="w-5 h-5 mr-3" />
                    <span>Our Team</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Mail className="w-5 h-5 mr-3" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/category/Technology" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="w-2 h-2 bg-blog-neon rounded-full mr-3"></span>
                    <span>Technology</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/Entertainment" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="w-2 h-2 bg-blog-accent rounded-full mr-3"></span>
                    <span>Entertainment</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/Lifestyle" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="w-2 h-2 bg-blog-purple rounded-full mr-3"></span>
                    <span>Lifestyle</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/category/Gaming" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span>Gaming</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/privacy-policy" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms-of-service" 
                    className="flex items-center text-white hover:text-blog-neon transition-colors duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
