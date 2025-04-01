
import { BlogPost, useBlogStore } from "./posts";

// Get all published posts
export const getPublishedPosts = (): BlogPost[] => {
  return useBlogStore.getState().getPublishedPosts();
};

// Sort posts by date (newest first)
export const sortByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => {
    // Convert dates to timestamps for comparison
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    
    // Sort descending (newest first)
    return dateB - dateA;
  });
};

// Get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  const posts = getPublishedPosts();
  const featuredPosts = posts.filter(post => post.featured);
  const sortedFeaturedPosts = sortByDate(featuredPosts);
  
  // If no featured posts, return empty array
  if (sortedFeaturedPosts.length === 0) {
    return [];
  }
  
  // Get the main featured post (newest)
  const mainFeaturedPost = { 
    ...sortedFeaturedPosts[0], 
    featuredSize: "large" as const 
  };
  
  // Get additional featured posts (skip the main one)
  const additionalFeaturedPosts = sortedFeaturedPosts
    .slice(1, 4)
    .map(post => ({ ...post, featuredSize: "medium" as const }));
  
  return [mainFeaturedPost, ...additionalFeaturedPosts];
};

// Get posts by category
export const getPostsByCategory = (category: string, limit?: number, excludeIds: number[] = []): BlogPost[] => {
  const allPosts = getPublishedPosts();
  
  // Filter by category and exclude specified posts
  const filteredPosts = allPosts.filter(post => 
    post.category === category && !excludeIds.includes(post.id)
  );
  
  // Sort by date and apply limit if specified
  const sortedPosts = sortByDate(filteredPosts);
  
  console.log(`getPostsByCategory: Found ${filteredPosts.length} posts for category "${category}"`);
  
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

// Get recent posts
export const getRecentPosts = (limit: number = 6, excludeIds: number[] = []): BlogPost[] => {
  const allPosts = getPublishedPosts();
  
  // Exclude specified posts
  const filteredPosts = allPosts.filter(post => !excludeIds.includes(post.id));
  
  // Sort by date and apply limit
  return sortByDate(filteredPosts).slice(0, limit);
};

// Get related posts (same category as the current post)
export const getRelatedPosts = (currentPostId: number, limit: number = 3): BlogPost[] => {
  const allPosts = getPublishedPosts();
  const currentPost = allPosts.find(post => post.id === currentPostId);
  
  if (!currentPost) return [];
  
  // Filter posts in the same category, excluding the current post
  const relatedPosts = allPosts.filter(post => 
    post.id !== currentPostId && post.category === currentPost.category
  );
  
  // Sort by date and apply limit
  return sortByDate(relatedPosts).slice(0, limit);
};

// Get post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const allPosts = getPublishedPosts();
  return allPosts.find(post => post.slug === slug);
};

// Get posts for selected categories without repetition
export const getPostsWithoutRepetition = (category: string, limit: number = 4, excludeIds: number[] = []): BlogPost[] => {
  return getPostsByCategory(category, limit, excludeIds);
};
