
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-blog-dark to-blog-darker py-16 overflow-hidden border-t border-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blog-neon/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blog-accent/5 rounded-full blur-[100px]"></div>
      </div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="h-px w-full bg-blog-neon absolute top-1/4"></div>
        <div className="h-px w-full bg-blog-neon absolute top-2/4"></div>
        <div className="h-px w-full bg-blog-neon absolute top-3/4"></div>
        <div className="w-px h-full bg-blog-accent absolute left-1/4"></div>
        <div className="w-px h-full bg-blog-accent absolute left-2/4"></div>
        <div className="w-px h-full bg-blog-accent absolute left-3/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <Link to="/" className="text-3xl font-bold text-white block mb-4">
              Cyber<span className="text-blog-neon text-shadow-neon">Pulse</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Bringing you into the future with cutting-edge content and futuristic insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blog-neon hover:border-blog-neon transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blog-neon hover:border-blog-neon transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blog-neon hover:border-blog-neon transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blog-neon hover:border-blog-neon transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-blog-neon font-semibold mb-6 tracking-wide">Categories</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/category/Entertainment" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blog-neon rounded-full mr-3"></span>
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/category/Technology" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blog-accent rounded-full mr-3"></span>
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/category/Lifestyle" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-blog-purple rounded-full mr-3"></span>
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link to="/category/Gaming" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                  Gaming
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-blog-neon font-semibold mb-6 tracking-wide">About</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/team" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-blog-neon flex items-center transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-blog-neon font-semibold mb-6 tracking-wide">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest tech insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-l-md bg-blog-charcoal border-y border-l border-gray-700 text-white focus:outline-none focus:border-blog-neon w-full transition-colors duration-300"
                />
                <button type="submit" className="bg-blog-neon hover:bg-blog-neon/80 transition-colors px-4 py-3 rounded-r-md text-black font-medium">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500">
            © {new Date().getFullYear()} CyberPulse. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blog-neon transition-colors duration-300 mr-4">
              <Github className="w-5 h-5" />
            </a>
            <Link to="#" className="text-gray-500 hover:text-blog-neon transition-colors duration-300">
              Development & Design by CyberTeam
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
