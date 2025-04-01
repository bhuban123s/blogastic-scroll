
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbzf0VinqJxKhdytV0NwUtneq1l--weG_cTUkoR9tUMwgQ6uUdjH3b_Kj27qCBxLulgZWg/exec";

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
      console.log(`Post "${post.title}" (ID: ${post.id}): No time setting, will display`);
      return true;
    }
    
    // Check if the post date is from a previous day compared to current date
    const postDate = new Date(post.createdAt);
    const today = new Date();
    
    // Reset time parts to compare just the dates
    const postDateOnly = new Date(postDate.getFullYear(), postDate.getMonth(), postDate.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    
    // If post is from a previous day, always show it regardless of time
    if (postDateOnly < todayOnly) {
      console.log(`Post "${post.title}" (ID: ${post.id}): From previous day (${postDate.toLocaleDateString()}), will display regardless of time`);
      return true;
    }
    
    // If it's today's post, check the time
    if (postDateOnly.getTime() === todayOnly.getTime()) {
      // Verify time format (HH.MM)
      if (!/^\d{1,2}\.\d{1,2}$/.test(post.time)) {
        console.error(`Post ID ${post.id} has invalid time format: ${post.time}`);
        return false;
      }
      
      // Parse hours and minutes
      const [hoursStr, minutesStr] = post.time.split('.');
      const scheduledHours = parseInt(hoursStr, 10);
      const scheduledMinutes = parseInt(minutesStr, 10);
      
      // Basic validation
      if (isNaN(scheduledHours) || isNaN(scheduledMinutes) || 
          scheduledHours < 0 || scheduledHours > 23 || 
          scheduledMinutes < 0 || scheduledMinutes > 59) {
        console.error(`Post ID ${post.id} has invalid time values: ${post.time}`);
        return false;
      }
      
      // Create a Date object for comparison (today with specified time)
      const postTime = new Date();
      postTime.setHours(scheduledHours, scheduledMinutes, 0, 0);
      
      // Compare with current time
      const shouldDisplay = today.getTime() >= postTime.getTime();
      
      console.log(`Post "${post.title}" (ID: ${post.id}, Slug: ${post.slug}):
        - Time setting: ${post.time}
        - Current time: ${today.toLocaleTimeString()}
        - Scheduled time: ${postTime.toLocaleTimeString()}
        - Should display: ${shouldDisplay}`);
      
      return shouldDisplay;
    }
    
    // If it's a future date, don't display
    if (postDateOnly > todayOnly) {
      console.log(`Post "${post.title}" (ID: ${post.id}): Future date (${postDate.toLocaleDateString()}), will not display`);
      return false;
    }
    
    return true;
  } catch (err) {
    console.error("Error checking post display status:", err, post);
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
          console.log("Fetching posts from API...");
          set({ loading: true, error: null });
          
          const response = await axios.get(API_URL);
          const newPosts: BlogPost[] = response.data;
          
          console.log(`Fetched ${newPosts.length} posts from API`);
          
          // Process posts - ensure content is a string
          const processedPosts = newPosts.map(post => ({
            ...post,
            content: typeof post.content === 'string' ? post.content : '',
          }));
          
          // Update store with new posts
          set({ 
            blogPosts: [...processedPosts], 
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
        
        console.log(`Total posts: ${allPosts.length}, Published posts: ${publishedPosts.length}`);
        
        return publishedPosts;
      },

      startAutoFetch: () => {
        console.log("Starting auto-fetch interval");
        const interval = setInterval(() => {
          get().fetchPosts();
        }, 20000); // Fetch every minute
        
        return () => {
          console.log("Clearing auto-fetch interval");
          clearInterval(interval);
        };
      },
    }),
    {
      name: "blog-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
