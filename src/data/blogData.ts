import { format, subDays } from "date-fns";

// Blog data - This simulates what would come from a backend API

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredSize?: "large" | "medium" | "small";
  createdAt: Date; // Added for automatic date generation
}

// Helper function to generate a random date within the last 60 days
const getRandomRecentDate = (maxDaysAgo: number = 60) => {
  const daysAgo = Math.floor(Math.random() * maxDaysAgo);
  return subDays(new Date(), daysAgo);
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "marvel-studios-announces-new-mcu-series-for-upcoming-streaming",
    title: "Marvel Studios Announces New MCU Series Will Appear In Upcoming Streaming In November",
    category: "Entertainment",
    excerpt: "Marvel Studios has revealed plans for an exciting new series set to debut on Disney+ this November, expanding the MCU with new characters and storylines.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "5 min read",
    featured: true,
    featuredSize: "large",
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 2,
    slug: "dark-black-mountains-brings-the-detective-to-rogers-mcu",
    title: "Dark Black Mountains Brings The Detective To Rogers MCU Movie",
    category: "Movies",
    excerpt: "The upcoming Dark Black Mountains film introduces a compelling detective character to the Rogers MCU timeline, adding a noir element to the superhero universe.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "4 min read",
    featured: true,
    featuredSize: "medium",
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 3,
    slug: "inside-scifi-director-film-making-process",
    title: "Inside Sci-Fi Director's Film Making Process",
    category: "Movies",
    excerpt: "Get an exclusive behind-the-scenes look at how one of Hollywood's most innovative sci-fi directors approaches the filmmaking process.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "8 min read",
    featured: true,
    featuredSize: "medium",
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 4,
    slug: "movie-franchise-is-getting-a-reboot",
    title: "This Major Movie Franchise Is Getting A Complete Reboot Next Year",
    category: "Movies",
    excerpt: "A beloved film franchise is set for a complete reimagining next year, with new cast, directors, and a fresh approach to the storyline.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "6 min read",
    featured: true,
    featuredSize: "small",
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 5,
    slug: "streaming-platform-announces-price-increase",
    title: "Major Streaming Platform Announces Price Increase Starting Next Month",
    category: "Technology",
    excerpt: "One of the leading streaming services has announced a significant price hike that will affect all subscription tiers beginning next month.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "3 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 6,
    slug: "fantasy-series-season-4-renewed",
    title: "Popular Fantasy Series Gets Renewed for Season 4 Before Season 3 Airs",
    category: "TV Shows",
    excerpt: "In an unprecedented move, the hit fantasy show has already secured a fourth season before the third has even premiered, signaling strong confidence from the network.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1571680283474-de79f1bf95a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "5 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 7,
    slug: "award-winning-actress-joins-superhero-universe",
    title: "Award-Winning Actress Joins Superhero Universe in Unexpected Role",
    category: "Movies",
    excerpt: "A critically acclaimed, Oscar-winning actress has signed on to play a surprising character in the expanding superhero film universe.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "4 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 8,
    slug: "tech-company-unveils-revolutionary-device",
    title: "Tech Giant Unveils Revolutionary New Device That Could Change the Industry",
    category: "Technology",
    excerpt: "A leading technology company has revealed a groundbreaking new product that industry experts believe could transform how we interact with digital media.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "7 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 9,
    slug: "beloved-sitcom-stars-reunite-for-special-project",
    title: "Beloved Sitcom Stars Reunite for Special Project 20 Years After Show Ended",
    category: "TV Shows",
    excerpt: "The cast of a classic sitcom is coming back together two decades after their final episode for a special project that has fans buzzing with excitement.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1567593810070-7a3d471af022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "6 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 10,
    slug: "streaming-wars-intensify-with-new-player",
    title: "Streaming Wars Intensify as New Player Enters the Market with Exclusive Content",
    category: "Entertainment",
    excerpt: "The battle for streaming supremacy heats up with the arrival of a new platform boasting exclusive rights to highly anticipated content.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1522869635100-187f6605241d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "5 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 11,
    slug: "director-teases-sequel-to-hit-action-movie",
    title: "Director Teases Sequel to Hit Action Movie: 'It Will Be Even More Intense'",
    category: "Movies",
    excerpt: "The director of last summer's blockbuster action film has confirmed a sequel is in development, promising an even more thrilling experience than the original.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "4 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  },
  {
    id: 12,
    slug: "indie-game-studio-announces-innovative-title",
    title: "Indie Game Studio Announces Innovative Title That Blends Multiple Genres",
    category: "Gaming",
    excerpt: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    date: format(getRandomRecentDate(7), "MMM d, yyyy"),
    readTime: "6 min read",
    featured: false,
    createdAt: getRandomRecentDate(7)
  }
];

// Update all blog posts to have proper dates if they don't already
blogPosts.forEach((post, index) => {
  if (!post.createdAt) {
    // Assign a date based on ID to ensure consistent ordering
    post.createdAt = getRandomRecentDate(60 - index);
    post.date = format(post.createdAt, "MMM d, yyyy");
  }
});

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (count: number = 6): BlogPost[] => {
  return [...blogPosts].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  }).slice(0, count);
};

export const getPostsByCategory = (category: string, count?: number): BlogPost[] => {
  const filteredPosts = blogPosts.filter(post => post.category === category);
  return count ? filteredPosts.slice(0, count) : filteredPosts;
};

export const getRelatedPosts = (currentPostId: number, count: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === currentPost.category)
    .slice(0, count);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
