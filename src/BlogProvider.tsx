
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

  // Use a more aggressive prefetching strategy
  useEffect(() => {
    let isMounted = true;
    
    // Start progress animation more quickly
    const progressInterval = setInterval(() => {
      if (isMounted) {
        setProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90; // Cap at 90% until actual loading completes
          }
          return prev + 15; // Increase faster
        });
      }
    }, 100); // More frequent updates
  
    // Immediately start fetching
    console.log("Initial fetch started in BlogProvider");
    fetchPosts()
      .then(() => {
        if (isMounted) {
          console.log("Initial fetch completed successfully");
          setInitialFetchDone(true);
          setProgress(100);
        }
      })
      .catch(err => {
        console.error("Error in initial data fetch:", err);
        if (isMounted) {
          toast.error("Failed to load content. Retrying...");
          // Retry once on failure
          return fetchPosts();
        }
      })
      .finally(() => {
        if (isMounted) {
          clearInterval(progressInterval);
          setProgress(100);
        }
      });
  
    const stopAutoFetch = startAutoFetch(); // Start auto-fetching with optimized interval
    
    return () => {
      isMounted = false;
      clearInterval(progressInterval);
      stopAutoFetch();
    };
  }, [fetchPosts, startAutoFetch]);

  // Show loading screen during initial load
  if (loading && !initialFetchDone) {
    return <LoadingScreen message="Loading blog content..." progress={progress} />;
  }

  if (error && !initialFetchDone) {
    console.error("Failed to load blog posts:", error);
    toast.error("Failed to load blog posts. Please try refreshing the page.");
  }

  return null;
};

export default BlogProvider;
