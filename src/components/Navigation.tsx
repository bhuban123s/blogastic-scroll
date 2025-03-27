
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blog-dark/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Blog<span className="text-blog-green">Pulse</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blog-green transition-colors">
              Home
            </Link>
            <Link to="/" className="text-white hover:text-blog-green transition-colors">
              Entertainment
            </Link>
            <Link to="/" className="text-white hover:text-blog-green transition-colors">
              Technology
            </Link>
            <Link to="/" className="text-white hover:text-blog-green transition-colors">
              Lifestyle
            </Link>
            <button className="text-white hover:text-blog-green transition-colors">
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-down">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-blog-green transition-colors">
                Home
              </Link>
              <Link to="/" className="text-white hover:text-blog-green transition-colors">
                Entertainment
              </Link>
              <Link to="/" className="text-white hover:text-blog-green transition-colors">
                Technology
              </Link>
              <Link to="/" className="text-white hover:text-blog-green transition-colors">
                Lifestyle
              </Link>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-secondary p-2 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blog-green"
                />
                <Search size={20} className="absolute right-3 top-2.5 text-muted-foreground" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
