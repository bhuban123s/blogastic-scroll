
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Blog<span className="text-blog-green">Pulse</span>
            </h3>
            <p className="text-muted-foreground">
              Your source for the latest entertainment and tech news.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Gaming
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blog-green transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest news and articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-muted text-white focus:outline-none"
              />
              <button className="bg-blog-green hover:bg-green-600 transition-colors px-4 py-2 rounded-r-md text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center text-muted-foreground">
          <p>© 2023 BlogPulse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
