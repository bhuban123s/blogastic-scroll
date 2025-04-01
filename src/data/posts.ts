
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbzf0VinqJxKhdytV0NwUtneq1l--weG_cTUkoR9tUMwgQ6uUdjH3b_Kj27qCBxLulgZWg/exec";

// Add caching to improve load times
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
let lastFetchTime = 0;
let cachedData: BlogPost[] | null = null;

export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  createdAt: string;
  readTime: string;
  time: string; // Time field for scheduling (format: "HH.MM")
  featured: boolean;
  featuredSize?: "large" | "medium" | "small";
};

type BlogStore = {
  blogPosts: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
  startAutoFetch: () => () => void;
  getPublishedPosts: () => BlogPost[];
};

// Improved function to determine if a post should be displayed
export function shouldDisplayPost(post: BlogPost): boolean {
  try {
    // If time is missing or empty, always display the post
    if (!post.time || post.time.trim() === '') {
      return true;
    }
    
    // Parse dates for comparison
    const now = new Date();
    let postDate: Date;
    
    try {
      postDate = new Date(post.createdAt);
    } catch (e) {
      console.error(`Invalid date format for post ${post.id}: ${post.createdAt}`);
      return false;
    }
    
    // Check if the post date is from a previous day
    const postDateOnly = new Date(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
    const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // If post is from a previous day, always show it
    if (postDateOnly < todayOnly) {
      return true;
    }
    
    // If it's today's post, check the time
    if (postDateOnly.getTime() === todayOnly.getTime()) {
      // Validate time format
      if (!/^\d{1,2}\.\d{1,2}$/.test(post.time)) {
        return false;
      }
      
      // Parse hours and minutes with error handling
      const [hoursStr, minutesStr] = post.time.split('.');
      const scheduledHours = parseInt(hoursStr, 10);
      const scheduledMinutes = parseInt(minutesStr, 10);
      
      if (isNaN(scheduledHours) || isNaN(scheduledMinutes) || 
          scheduledHours < 0 || scheduledHours > 23 || 
          scheduledMinutes < 0 || scheduledMinutes > 59) {
        return false;
      }
      
      // Compare with current time
      const scheduledTime = new Date();
      scheduledTime.setHours(scheduledHours, scheduledMinutes, 0, 0);
      
      return now.getTime() >= scheduledTime.getTime();
    }
    
    // If it's a future date, don't display
    return false;
    
  } catch (err) {
    console.error("Error checking post display status:", err);
    return false;
  }
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set, get) => ({
      blogPosts: [],
      loading: true,
      error: null,

      fetchPosts: async () => {
        try {
          // Check if we can use cached data
          const now = Date.now();
          if (cachedData && now - lastFetchTime < CACHE_DURATION) {
            console.log("Using cached blog data");
            set({ 
              blogPosts: cachedData, 
              loading: false, 
              error: null 
            });
            return;
          }

          console.log("Fetching posts from API...");
          set({ loading: true, error: null });
          
          // Use a timeout to abort long-running requests
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 15000);
          
          const response = await axios.get(API_URL, {
            signal: controller.signal,
            timeout: 15000
          });
          
          clearTimeout(timeoutId);
          
          if (!response.data || !Array.isArray(response.data)) {
            throw new Error("Invalid response format");
          }
          
          const newPosts = response.data as BlogPost[];
          console.log(`Fetched ${newPosts.length} posts from API`);
          
          // Process and validate posts
          const processedPosts = newPosts.map(post => ({
            ...post,
            content: typeof post.content === 'string' ? post.content : '',
            // Ensure featuredSize is a valid value if present
            featuredSize: post.featuredSize as "large" | "medium" | "small" | undefined
          }));
          
          // Sort posts by date (newest first) and ID for consistent ordering
          const sortedPosts = [...processedPosts].sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            
            if (dateA === dateB) {
              // If dates are equal, sort by ID (higher ID = newer post)
              return b.id - a.id;
            }
            
            return dateB - dateA;
          });
          
          // Update cache
          cachedData = sortedPosts;
          lastFetchTime = now;
          
          // Update store
          set({ 
            blogPosts: sortedPosts, 
            loading: false, 
            error: null 
          });
        } catch (err) {
          console.error("Error fetching posts:", err);
          set({ 
            error: "Failed to fetch blog posts", 
            loading: false 
          });
        }
      },

      getPublishedPosts: () => {
        const allPosts = get().blogPosts;
        const publishedPosts = allPosts.filter(post => shouldDisplayPost(post));
        return publishedPosts;
      },

      startAutoFetch: () => {
        console.log("Starting auto-fetch interval");
        // Reduced interval for more responsive updates
        const interval = setInterval(() => {
          get().fetchPosts();
        }, 30000); // Every 30 seconds
        
        return () => {
          console.log("Clearing auto-fetch interval");
          clearInterval(interval);
        };
      },
    }),
    {
      name: "blog-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        // Only persist blogPosts to reduce localStorage size
        blogPosts: state.blogPosts,
      }),
    }
  )
);
