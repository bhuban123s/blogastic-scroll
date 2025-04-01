
import { useEffect, useState } from "react";
import { useBlogStore } from "./data/posts";
import LoadingScreen from "@/components/LoadingScreen";
import { toast } from "sonner";

const BlogProvider = () => {
  const fetchPosts = useBlogStore((state) => state.fetchPosts);
  const startAutoFetch = useBlogStore((state) => state.startAutoFetch);
  const loading = useBlogStore((state) => state.loading);
  const error = useBlogStore((state) => state.error);
  const [progress, setProgress] = useState(0);
  const [initialFetchDone, setInitialFetchDone] = useState(false);

  useEffect(() => {
    fetchPosts(); // Ensure data loads initially
  }, [fetchPosts]);
  
  useEffect(() => {
    // Start progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90; // Cap at 90% until actual loading completes
        }
        return prev + 10;
      });
    }, 200);
  
    // Fetch posts without async/await
    fetchPosts()
      .then(() => {
        setInitialFetchDone(true);
  
        // Add a console log to verify data loading in production
        console.log("Blog posts loaded successfully in BlogProvider");
      })
      .catch(err => {
        console.error("Error in BlogProvider:", err);
      })
      .finally(() => {
        // Complete progress and clear interval
        clearInterval(progressInterval);
        setProgress(100);
      });
  
    const stopAutoFetch = startAutoFetch(); // Start auto-fetching
    
    return () => {
      stopAutoFetch(); // Cleanup on unmount
    };
  }, [fetchPosts, startAutoFetch]);
  

  // Show loading screen during initial load
  if (loading && !initialFetchDone && progress < 100) {
    return <LoadingScreen message="Loading blog content..." progress={progress} />;
  }

  if (error && !initialFetchDone) {
    console.error("Failed to load blog posts:", error);
    toast.error("Failed to load blog posts. Please try refreshing the page.");
  }

  return null;
};

export default BlogProvider;
