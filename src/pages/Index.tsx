
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import FeaturedPost from "@/components/FeaturedPost";
import BlogCard from "@/components/BlogCard";
import ScrollToTop from "@/components/ScrollToTop";
import { getFeaturedPosts, getPostsByCategory, getRecentPosts } from "@/data/blogData";
import { ChevronRight, ChevronDown, Volume, Volume2 } from "lucide-react";

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const entertainmentPosts = getPostsByCategory("Entertainment", 3);
  const technologyPosts = getPostsByCategory("Technology", 3);
  const moviePosts = getPostsByCategory("Movies", 4);
  const recentPosts = getRecentPosts(6);

  const [activeTag, setActiveTag] = useState<string>("All");
  const [filteredPosts, setFilteredPosts] = useState(recentPosts);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Filter posts when tag changes
  useEffect(() => {
    if (activeTag === "All") {
      setFilteredPosts(recentPosts);
    } else {
      setFilteredPosts(recentPosts.filter(post => post.category === activeTag));
    }
  }, [activeTag]);

  // Section animation with Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  // Categories for the filter
  const categories = ["All", "Technology", "Entertainment", "Lifestyle", "Gaming"];

  return (
    <BlogLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
        {/* Audio Narration */}
        <audio ref={audioRef} src="#" className="hidden" />
        
        {/* Background Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-full border-l border-gray-800"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-full border-t border-gray-800"></div>
          ))}
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blog-neon/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blog-accent/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white">Welcome to the Future of</span>
              <span className="text-blog-neon text-shadow-neon-lg">Thought and Innovation</span>
            </h1>
            
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Explore cutting-edge content, futuristic insights, and tomorrow's ideas today. Your journey into the digital frontier begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button className="neon-button group">
                Explore Now
                <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="neon-button-pink group flex items-center"
                onClick={toggleAudio}
              >
                {isAudioPlaying ? (
                  <>
                    <Volume2 className="mr-2 w-5 h-5" />
                    Stop Narration
                  </>
                ) : (
                  <>
                    <Volume className="mr-2 w-5 h-5" />
                    Listen to Intro
                  </>
                )}
              </button>
            </div>
            
            <div className="animate-bounce mt-16">
              <ChevronDown className="w-8 h-8 text-blog-neon mx-auto" />
            </div>
          </div>
          
          {/* Featured Posts */}
          <div className="grid grid-cols-6 gap-4 appear-animation">
            {featuredPosts.map((post) => (
              <FeaturedPost
                key={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                size={post.featuredSize}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-8 opacity-0"
      >
        <div className="glassmorphism p-4 mb-12">
          <div className="flex flex-wrap items-center justify-between">
            <h2 className="text-xl font-bold text-blog-neon mb-4 md:mb-0">
              Filter by Category
            </h2>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTag === category
                      ? 'bg-blog-neon text-black'
                      : 'bg-blog-charcoal text-gray-300 hover:text-blog-neon'
                  }`}
                  onClick={() => setActiveTag(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 opacity-0"
      >
        <h2 className="section-title">Entertainment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 appear-animation">
          {entertainmentPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 opacity-0"
      >
        <div className="glassmorphism p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-title mb-0">Trending Now</h2>
            <Link to="#" className="text-blog-neon hover:text-blog-accent transition-colors text-sm font-medium flex items-center">
              View All
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 appear-animation">
            {recentPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Movies Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 opacity-0"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">Latest Movies</h2>
          <Link to="#" className="text-blog-neon hover:text-blog-accent transition-colors text-sm font-medium flex items-center">
            View All
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 appear-animation">
          {moviePosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* Futuristic Quote Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 opacity-0"
      >
        <div className="relative py-16 px-8 glassmorphism overflow-hidden">
          {/* Animated Glowing Orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blog-neon/30 rounded-full blur-[60px] animate-pulse"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light italic text-white mb-6 leading-relaxed">
              "The future belongs to those who believe in the beauty of their dreams, especially in the digital age where imagination becomes reality."
            </blockquote>
            <cite className="text-blog-neon font-medium block">— CyberPulse Manifesto</cite>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 opacity-0"
      >
        <h2 className="section-title">Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 appear-animation">
          {technologyPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
            />
          ))}
        </div>
      </section>

      {/* Filtered Posts Section */}
      <section 
        ref={addToRefs} 
        className="container mx-auto px-4 mt-20 mb-20 opacity-0"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title mb-0">
            {activeTag === 'All' ? 'More Articles' : `${activeTag} Articles`}
          </h2>
          <button 
            className="text-blog-neon hover:text-blog-accent transition-colors text-sm font-medium"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 appear-animation">
          {filteredPosts.slice(0, showFullText ? undefined : 3).map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
              layout="horizontal"
            />
          ))}
        </div>
        
        {!showFullText && filteredPosts.length > 3 && (
          <div className="mt-8 text-center">
            <button 
              className="neon-button-purple"
              onClick={() => setShowFullText(true)}
            >
              Load More Articles
            </button>
          </div>
        )}
      </section>
    </BlogLayout>
  );
};

export default Index;
