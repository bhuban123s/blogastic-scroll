import post1 from "@/blogs/1";
import post2 from "@/blogs/2";
import post3 from "@/blogs/3";
import post4 from "@/blogs/4";
import post5 from "@/blogs/5";
import post6 from "@/blogs/6";

// Blog data interface
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  createdAt: string;
  readTime: string;
  featured: boolean;
  featuredSize?: "large" | "medium" | "small";
}

// Import all blog posts - organizing them in dedicated files
export const blogPosts: BlogPost[] = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  // The remaining blog posts will eventually move to their own files
  {
    id: 7,
    slug: "award-winning-actress-joins-superhero-universe",
    title: "Award-Winning Actress Joins Superhero Universe in Unexpected Role",
    category: "Movies",
    excerpt: "A critically acclaimed, Oscar-winning actress has signed on to play a surprising character in the expanding superhero film universe.",
    content: "A critically acclaimed, Oscar-winning actress has signed on to play a surprising character in the expanding superhero film universe. This casting announcement has generated significant buzz among both film critics and comic book fans.\n\nThe actress, known primarily for her work in dramatic independent films and period pieces, will reportedly take on the role of a complex anti-hero with a morally ambiguous backstory. Industry insiders suggest this character will feature prominently in multiple upcoming films and potentially a dedicated streaming series.\n\nIn a statement, the actress expressed her excitement about joining the franchise, noting that she had been seeking roles that would challenge her in new ways. She also mentioned her children's enthusiasm about her finally entering the superhero genre.\n\nThe studio has remained tight-lipped about specific details regarding the character, though concept art is expected to be revealed at an upcoming fan convention. Production is scheduled to begin within the next few months, with the character likely to make her first appearance in a film slated for release next year.\n\nThis casting continues the trend of prestigious actors joining superhero franchises, further blurring the line between what was once considered 'serious cinema' and popular entertainment.",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    createdAt: "2024-06-30",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 8,
    slug: "tech-company-unveils-revolutionary-device",
    title: "Tech Giant Unveils Revolutionary New Device That Could Change the Industry",
    category: "Technology",
    excerpt: "A leading technology company has revealed a groundbreaking new product that industry experts believe could transform how we interact with digital media.",
    content: "A leading technology company has revealed a groundbreaking new product that industry experts believe could transform how we interact with digital media. The device, which has been in development for several years, represents a significant leap forward in user interface design and functionality.\n\nAt a press conference, the company showcased the device's capabilities, highlighting its intuitive controls, seamless integration with existing platforms, and potential applications across various sectors. The device is expected to be available for purchase in the coming months, with pre-orders already exceeding initial projections.\n\nIndustry analysts have praised the device's innovative features and potential to disrupt the market. However, some have raised concerns about its price point and potential impact on user privacy.\n\nThe company has emphasized its commitment to addressing these concerns, stating that it has implemented robust security measures to protect user data and is working to make the device accessible to a wide range of consumers.\n\nThis unveiling marks a major milestone for the company and could potentially reshape the future of digital media consumption.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
     createdAt: "2025-03-23",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 9,
    slug: "beloved-sitcom-stars-reunite-for-special-project",
    title: "Beloved Sitcom Stars Reunite for Special Project 20 Years After Show Ended",
    category: "TV Shows",
    excerpt: "The cast of a classic sitcom is coming back together two decades after their final episode for a special project that has fans buzzing with excitement.",
    content: "The cast of a classic sitcom is coming back together two decades after their final episode for a special project that has fans buzzing with excitement. The reunion, which has been shrouded in secrecy, is expected to be a one-off special that revisits the characters and storylines that made the show a cultural phenomenon.\n\nDetails about the project remain scarce, though sources close to the production have hinted that it will involve a mix of new and archival footage, as well as appearances from guest stars who were part of the show's original run.\n\nFans have taken to social media to speculate about the nature of the reunion, with many expressing hope that it will capture the same humor and heart that made the sitcom so beloved.\n\nThe project is being produced by a major streaming service, with a premiere date expected to be announced in the coming months. This reunion marks a rare opportunity for fans to reconnect with the characters and actors who defined a generation of television comedy.",
    image: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
     createdAt: "2024-06-30",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 10,
    slug: "streaming-wars-intensify-with-new-player",
    title: "Streaming Wars Intensify as New Player Enters the Market with Exclusive Content",
    category: "Entertainment",
    excerpt: "The battle for streaming supremacy heats up with the arrival of a new platform boasting exclusive rights to highly anticipated content.",
    content: "The battle for streaming supremacy heats up with the arrival of a new platform boasting exclusive rights to highly anticipated content. The new service, backed by a major media conglomerate, is set to launch with a diverse library of original series, films, and documentaries.\n\nIn a bid to attract subscribers, the platform is offering a range of competitive pricing plans, including a free ad-supported tier. The service is also investing heavily in marketing and promotion, with a series of high-profile campaigns planned for the coming months.\n\nIndustry analysts predict that the new platform will further fragment the streaming landscape, forcing existing players to innovate and differentiate their offerings. Consumers are expected to benefit from increased competition, with more choices and potentially lower prices.\n\nHowever, some have raised concerns about the long-term sustainability of the streaming model, with multiple platforms vying for a limited pool of subscribers. The arrival of this new player is likely to accelerate the consolidation of the industry, with smaller services potentially being acquired by larger companies.",
    image: "https://images.unsplash.com/photo-1522869635100-187f6605241d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    createdAt: "2024-06-30",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 11,
    slug: "director-teases-sequel-to-hit-action-movie",
    title: "Director Teases Sequel to Hit Action Movie: 'It Will Be Even More Intense'",
    category: "Movies",
    excerpt: "The director of last summer's blockbuster action film has confirmed a sequel is in development, promising an even more thrilling experience than the original.",
    content: "The director of last summer's blockbuster action film has confirmed a sequel is in development, promising an even more thrilling experience than the original. In a recent interview, the director revealed that the sequel will feature even more elaborate stunts, cutting-edge visual effects, and a deeper exploration of the characters' backstories.\n\nThe original film, which grossed over $1 billion worldwide, was praised for its high-octane action sequences and compelling performances. The sequel is expected to reunite the original cast, with several new additions rumored to be in talks for key roles.\n\nProduction is scheduled to begin early next year, with a release date tentatively set for the summer of 2026. The director has hinted that the sequel will push the boundaries of the action genre, delivering an unforgettable cinematic experience.\n\nFans have expressed their excitement about the sequel, with many eagerly anticipating the return of their favorite characters and the promise of even more adrenaline-pumping action.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    readTime: "4 min read",
    featured: false,
    createdAt: "2025-02-30"
  },
  {
    id: 12,
    slug: "indie-game-studio-announces-innovative-title",
    title: "Indie Game Studio Announces Innovative Title That Blends Multiple Genres",
    category: "Gaming",
    excerpt: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres.",
    content: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres. The game, which is currently in early development, promises to offer a unique and immersive experience for players.\n\nThe studio has released a teaser trailer showcasing the game's stunning visuals, innovative gameplay mechanics, and intriguing storyline. The game is expected to be released on multiple platforms, including PC, consoles, and mobile devices.\n\nFans of indie games have expressed their excitement about the project, with many praising the studio's creativity and ambition. The game is expected to be a major contender in the indie gaming scene and could potentially attract a large audience.\n\nThe studio has emphasized its commitment to delivering a high-quality gaming experience and is working closely with the community to gather feedback and refine the game's design.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    readTime: "6 min read",
    featured: false,
    createdAt: "2024-06-30"
  },
  {
    id: 13,
    slug: "indie-game",
    title: "Indie Game Studio Announces Innovative Title horrify",
    category: "Gaming",
    excerpt: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    readTime: "6 min read",
    featured: false,
    createdAt: "2025-03-27", 
  },
  {
    id: 14,
    slug: "indie",
    title: "Indie ",
    category: "Gaming",
    excerpt: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    readTime: "6 min read",
    featured: false,
    createdAt: "2025-03-28", 
  },
  {
    id: 15,
    slug: "streaming-intensify-with-new-player",
    title: "Streaming Wars Enters the Market with Exclusive Content",
    category: "Entertainment",
    excerpt: "The battle with the arrival of a new platform boasting exclusive rights to highly anticipated content.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1522869635100-187f6605241d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    createdAt: "2025-03-28",
    readTime: "5 min read",
    featured: false,
    featuredSize: "large",
  },
  {
    id: 16,
    slug: "movie-is-getting-a-reboot",
    title: "This Major Movie Is Getting A Complete Reboot Next Year",
    category: "Movies",
    excerpt: "A beloved film set for a complete reimagining next year, with new cast, directors, and a fresh approach to the storyline.",
    content: "Lorem ipsu consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80",
     createdAt: "2025-03-28",
    readTime: "6 min read",
    featured: false,
    featuredSize: "large",
  },
];

// Sorting by createdAt in descending order (newest first)
export const sortBlogPosts = (posts: BlogPost[]): BlogPost[] => {
  const now = new Date().getTime(); 

  return [...posts]
    .filter(post => post.createdAt && new Date(post.createdAt).getTime() <= now) 
    .sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA; // Sort newest first
    });
};

// Get featured posts ensuring we have the right sizes and limits
export const getFeaturedPosts = (): BlogPost[] => {
  const allFeaturedPosts = sortBlogPosts(blogPosts.filter((post) => post.featured));
  
  // First, find the most recent large featured post
  let largeFeaturedPost = allFeaturedPosts.find(post => post.featuredSize === "large");
  
  // If no large featured post exists, take the most recent featured post and make it large
  if (!largeFeaturedPost && allFeaturedPosts.length > 0) {
    // Create a copy of the first post with featuredSize set to "large"
    largeFeaturedPost = { ...allFeaturedPosts[0], featuredSize: "large" };
  }
  
  // Get medium featured posts (limit to 5)
  const mediumFeaturedPosts = allFeaturedPosts
    .filter(post => post.id !== (largeFeaturedPost?.id || 0))
    .map(post => ({ ...post, featuredSize: "medium" })) // Ensure they're all medium size
    .slice(0, 5);
  
  // Combine large post with medium posts, ensuring we don't exceed 6 total
  const result = largeFeaturedPost ? [largeFeaturedPost, ...mediumFeaturedPosts] : [...mediumFeaturedPosts];
  
  // Limit to 6 total featured posts (1 large + 5 medium)
  return result.slice(0, 6);
};

// Utility functions
export const getRecentPosts = (count: number = 6): BlogPost[] => {
  return sortBlogPosts(blogPosts).slice(0, count);
};

export const getPostsByCategory = (category: string, count?: number): BlogPost[] => {
  const filteredPosts = blogPosts.filter((post) => post.category === category);
  return count ? sortBlogPosts(filteredPosts).slice(0, count) : sortBlogPosts(filteredPosts);
};

export const getRelatedPosts = (currentPostId: number, count: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find((post) => post.id === currentPostId);
  if (!currentPost) return [];

  return sortBlogPosts(
    blogPosts.filter((post) => post.id !== currentPostId && post.category === currentPost.category)
  ).slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
