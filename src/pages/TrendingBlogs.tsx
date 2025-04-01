
import React, { useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getRecentPosts } from "@/data/blogData";

// Lazy load the BlogCard component
const BlogCard = lazy(() => import("@/components/BlogCard"));

const POSTS_PER_PAGE = 10;

const TrendingBlogs = () => {
  const navigate = useNavigate();
  const allPosts = getRecentPosts(100); // Get a large number as a pool
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
  };

  const displayedPosts = allPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < allPosts.length;

  // Loading fallback component for BlogCard
  const CardSkeleton = () => (
    <div className="animate-pulse bg-secondary rounded-lg h-32 md:h-40"></div>
  );

  return (
    <BlogLayout>
      <div className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">Trending Now</h1>
            <button 
              onClick={() => navigate(-1)} 
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Go back"
            >
              &larr; Back
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:gap-6 mb-8 md:mb-10">
            {displayedPosts.map((post) => (
              <Suspense key={post.id} fallback={<CardSkeleton />}>
                <BlogCard
                  image={post.image}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.createdAt}
                  authorName={post.authorName}
                  slug={post.slug}
                  layout="horizontal"
                />
              </Suspense>
            ))}
          </div>
          
          {hasMorePosts && (
            <div className="flex justify-center mt-8 md:mt-10">
              <button
                onClick={handleLoadMore}
                className="px-5 py-2.5 md:px-6 md:py-3 bg-white hover:bg-white/80 text-black font-medium rounded-md transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
};

export default TrendingBlogs;
