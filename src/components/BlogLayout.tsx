
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ChatWidget from "./ChatWidget";
import NewsletterPopup from "./NewsletterPopup";
import FloatingParticles from "./FloatingParticles";
import { User } from "lucide-react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    // Check if user has visited before
    const storedName = localStorage.getItem('username');
    if (storedName) {
      setUsername(storedName);
      setShowWelcome(true);
      
      // Hide welcome message after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  // For demo purposes - set a username after first visit
  useEffect(() => {
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', 'Explorer');
    }
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen bg-blog-dark">
      {/* Particle Background */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Welcome Message */}
      {showWelcome && username && (
        <div className="fixed top-20 right-4 z-40 max-w-sm">
          <div className="glassmorphism p-4 animate-fade-in flex items-center">
            <div className="w-10 h-10 bg-blog-neon rounded-full flex items-center justify-center text-black mr-3 animate-pulse">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white">
                Welcome back, <span className="font-bold text-blog-neon">{username}</span>!
              </p>
              <p className="text-sm text-gray-400">Discover new insights today.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <main className="flex-grow">{children}</main>
      
      {/* Footer */}
      <Footer />
      
      {/* Utilities */}
      <ScrollToTop />
      <ChatWidget />
      <NewsletterPopup />
      
      {/* Night Mode Styles */}
      <style jsx global>{`
        .night-mode {
          --blog-neon-intensity: 0.7;
        }
        
        .night-mode .animate-glow {
          filter: brightness(0.7);
        }
        
        .night-mode img {
          filter: brightness(0.8);
        }
        
        .night-mode .text-shadow-neon,
        .night-mode .text-shadow-neon-lg,
        .night-mode .text-shadow-neon-pink,
        .night-mode .text-shadow-neon-purple {
          filter: brightness(0.7);
        }
      `}</style>
    </div>
  );
};

export default BlogLayout;
