
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import BlogCard from "@/components/BlogCard";
import { getPostsByCategory } from "@/data/blogData";
import { Search, Filter, Grid3X3, List } from "lucide-react";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Capitalize category for display
  const displayCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";
  
  // Get posts for the selected category
  const categoryPosts = category ? getPostsByCategory(displayCategory) : [];
  
  // Filter posts based on search term
  const filteredPosts = categoryPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <BlogLayout>
      <div className="pt-32 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blog-neon/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blog-accent/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="bg-blog-neon text-black px-3 py-1 rounded-md mb-4 text-sm font-medium">
                Category
              </div>
              <h1 className="text-5xl font-bold mb-4 text-blog-neon text-shadow-neon">{displayCategory}</h1>
              <p className="text-gray-300 max-w-2xl">
                Explore the latest {displayCategory.toLowerCase()} news, trends, and featured stories from the future.
              </p>
            </div>
            
            {/* Search & Filter Bar */}
            <div className="glassmorphism p-4 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={`Search in ${displayCategory}...`}
                    className="w-full bg-blog-charcoal border border-gray-700 px-4 py-2 rounded-md text-white focus:outline-none focus:border-blog-neon transition-colors duration-300 pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-md bg-blog-charcoal text-gray-400 hover:text-blog-neon transition-colors duration-300">
                    <Filter className="w-5 h-5" />
                  </button>
                  <button 
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      viewMode === 'grid' 
                        ? 'bg-blog-neon text-black' 
                        : 'bg-blog-charcoal text-gray-400 hover:text-blog-neon'
                    }`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-5 h-5" />
                  </button>
                  <button 
                    className={`p-2 rounded-md transition-colors duration-300 ${
                      viewMode === 'list' 
                        ? 'bg-blog-neon text-black' 
                        : 'bg-blog-charcoal text-gray-400 hover:text-blog-neon'
                    }`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className={`
              ${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'grid grid-cols-1 gap-6'
              }
            `}>
              {filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  image={post.image}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  layout={viewMode === 'list' ? 'horizontal' : 'vertical'}
                />
              ))}
            </div>
          ) : (
            <div className="glassmorphism p-16 text-center">
              <h3 className="text-2xl font-medium mb-3 text-blog-neon">No posts found</h3>
              <p className="text-gray-300 mb-8">
                We couldn't find any posts in the {displayCategory.toLowerCase()} category matching your search.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/"
                  className="neon-button"
                >
                  Return to Homepage
                </Link>
                <button
                  onClick={() => setSearchTerm('')}
                  className="neon-button-pink"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
};

export default CategoryPage;
