
import { BlogPost, useBlogStore, shouldDisplayPost } from "./posts";

// Re-export the BlogPost type so it can be used by other files
export type { BlogPost } from "./posts";

// Get all published posts with proper sorting
export const getPublishedPosts = (): BlogPost[] => {
  return useBlogStore.getState().getPublishedPosts();
};

// Improved sorting for posts by date, time, and ID
export const sortByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => {
    // Convert dates to timestamps for comparison
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    
    // First, compare by date
    if (dateA !== dateB) {
      // Sort descending (newest first)
      return dateB - dateA;
    }
    
    // If dates are identical, check time field
    if (a.time && b.time) {
      const [hoursA, minutesA] = a.time.split('.').map(Number);
      const [hoursB, minutesB] = b.time.split('.').map(Number);
      
      const timeA = hoursA * 60 + minutesA;
      const timeB = hoursB * 60 + minutesB;
      
      if (timeA !== timeB) {
        // Later time (higher hours/minutes) should appear first
        return timeB - timeA;
      }
    } else if (a.time && !b.time) {
      return -1; // a has time, b doesn't, a comes first
    } else if (!a.time && b.time) {
      return 1; // b has time, a doesn't, b comes first
    }
    
    // If time is also identical or not available, use ID as final tiebreaker
    // Higher ID = newer post
    return b.id - a.id;
  });
};

// Get featured posts with improved size assignment
export const getFeaturedPosts = (): BlogPost[] => {
  const posts = getPublishedPosts();
  const featuredPosts = posts.filter(post => post.featured);
  
  // If no featured posts, return empty array
  if (featuredPosts.length === 0) {
    return [];
  }
  
  // Sort featured posts by date, time, and ID
  const sortedFeaturedPosts = sortByDate(featuredPosts);
  
  // Assign sizes properly with typesafe assignments
  // Get the main featured post (newest)
  const mainFeaturedPost = sortedFeaturedPosts.length > 0 
    ? { ...sortedFeaturedPosts[0], featuredSize: "large" as const }
    : null;
  
  // Get secondary featured posts
  const secondaryFeaturedPosts = sortedFeaturedPosts
    .slice(1, 4)
    .map(post => ({ ...post, featuredSize: "medium" as const }));
  
  return mainFeaturedPost 
    ? [mainFeaturedPost, ...secondaryFeaturedPosts] 
    : secondaryFeaturedPosts;
};

// Get posts by category with improved performance
export const getPostsByCategory = (category: string, limit?: number, excludeIds: number[] = []): BlogPost[] => {
  const allPosts = getPublishedPosts();
  
  // Use a Set for faster exclusion lookups
  const excludeIdsSet = new Set(excludeIds);
  
  // Filter by category and exclude specified posts
  const filteredPosts = allPosts.filter(post => 
    post.category === category && !excludeIdsSet.has(post.id)
  );
  
  // Sort posts and apply limit
  const sortedPosts = sortByDate(filteredPosts);
  
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

// Get recent posts with improved performance
export const getRecentPosts = (limit: number = 6, excludeIds: number[] = []): BlogPost[] => {
  const allPosts = getPublishedPosts();
  
  // Use a Set for faster exclusion lookups
  const excludeIdsSet = new Set(excludeIds);
  
  // Filter out excluded posts
  const filteredPosts = allPosts.filter(post => !excludeIdsSet.has(post.id));
  
  // Return sorted and limited posts
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

// Find post by slug with improved error handling
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  if (!slug) return undefined;
  
  const allPosts = getPublishedPosts();
  return allPosts.find(post => post.slug === slug);
};

// Get posts for selected categories without repetition
export const getPostsWithoutRepetition = (category: string, limit: number = 4, excludeIds: number[] = []): BlogPost[] => {
  return getPostsByCategory(category, limit, excludeIds);
};
