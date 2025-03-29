

// Blog data - This simulates what would come from a backend API
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

export const blogPosts: BlogPost[] = [
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
  "id": 1,
  "slug": "ai-and-ml-evolution-impacting-industries",
  "title": "AI and ML: Revolutionizing Healthcare, Finance, and Manufacturing",
  "category": "Technology",
  "excerpt": "Artificial Intelligence (AI) and Machine Learning (ML) are transforming key sectors, driving innovation and efficiency in healthcare, finance, and manufacturing.",
  "content": "Artificial Intelligence (AI) and Machine Learning (ML) are no longer futuristic concepts; they have become integral components of modern industries, driving innovation and efficiency across various sectors. From healthcare to finance and manufacturing, AI and ML are transforming operations and creating new opportunities.\n\n**Understanding AI and ML**\nArtificial Intelligence refers to the simulation of human intelligence in machines designed to think and learn like humans. Machine Learning, a subset of AI, focuses on algorithms that enable machines to learn from and make decisions based on data. While AI encompasses a broad range of technologies, ML specifically deals with data-driven learning and pattern recognition.\n\n**Impact on Healthcare**\nIn healthcare, AI and ML are revolutionizing patient care and diagnostics. AI-powered diagnostic tools analyze medical images with remarkable accuracy, aiding early disease detection. For instance, AI systems can examine X-rays and MRIs to identify signs of cancer that might be overlooked by human eyes. Moreover, ML algorithms predict patient outcomes and assist in developing personalized treatment plans, enhancing the effectiveness of medical interventions.\n\n**Transformation in Finance**\nThe financial sector has embraced AI and ML to enhance decision-making and security. AI algorithms are employed for fraud detection by analyzing transaction patterns to identify anomalies. Additionally, ML aids in investment analysis and automates trading processes, optimizing financial strategies and operations.\n\n**Advancements in Manufacturing**\nManufacturing industries are leveraging AI and ML to streamline operations and improve product quality. Predictive maintenance powered by AI monitors equipment health, anticipating failures before they occur and reducing downtime. Robotics, guided by ML, automates repetitive tasks, enhancing precision and efficiency in production lines.\n\n**Future Outlook**\nThe trajectory of AI and ML indicates a future where these technologies are deeply embedded in various aspects of life. In healthcare, we can anticipate more sophisticated diagnostic tools and personalized treatments. The financial sector may see more advanced risk assessment models and customer service chatbots. Manufacturing could witness fully automated production lines and intelligent supply chain management systems. However, this rapid advancement also necessitates careful consideration of ethical implications and the development of regulatory frameworks to ensure that AI and ML technologies are used responsibly and benefit society as a whole.\n\nAs AI and ML continue to evolve, their influence across sectors will undoubtedly expand, offering new solutions to complex challenges and creating opportunities for innovation and growth.",
  "image": "https://drive.google.com/uc?export=view&id=10Pqlrqh575OoRcxpMd-EycgU0sB3CF7k",
  "readTime": "5 min read",
  "featured": true,
  "createdAt": "2025-03-28",
    featuredSize: "large",
},
  {
    id: 2,
    slug: "dark-black-mountains-brings-the-detective-to-rogers-mcu",
    title: "Dark Black Mountains Brings The Detective To Rogers MCU Movie",
    category: "Movies",
    excerpt: "The upcoming Dark Black Mountains film introduces a compelling detective character to the Rogers MCU timeline, adding a noir element to the superhero universe.",
    content: "Artificial Intelligence (AI) and Machine Learning (ML) are no longer futuristic concepts; they have become integral components of modern industries, driving innovation and efficiency across various sectors. From healthcare to finance and manufacturing, AI and ML are transforming operations and creating new opportunities.\n\n**Understanding AI and ML**\nArtificial Intelligence refers to the simulation of human intelligence in machines designed to think and learn like humans. Machine Learning, a subset of AI, focuses on algorithms that enable machines to learn from and make decisions based on data. While AI encompasses a broad range of technologies, ML specifically deals with data-driven learning and pattern recognition.\n\n**Impact on Healthcare**\nIn healthcare, AI and ML are revolutionizing patient care and diagnostics. AI-powered diagnostic tools analyze medical images with remarkable accuracy, aiding early disease detection. For instance, AI systems can examine X-rays and MRIs to identify signs of cancer that might be overlooked by human eyes. Moreover, ML algorithms predict patient outcomes and assist in developing personalized treatment plans, enhancing the effectiveness of medical interventions.\n\n**Transformation in Finance**\nThe financial sector has embraced AI and ML to enhance decision-making and security. AI algorithms are employed for fraud detection by analyzing transaction patterns to identify anomalies. Additionally, ML aids in investment analysis and automates trading processes, optimizing financial strategies and operations.\n\n**Advancements in Manufacturing**\nManufacturing industries are leveraging AI and ML to streamline operations and improve product quality. Predictive maintenance powered by AI monitors equipment health, anticipating failures before they occur and reducing downtime. Robotics, guided by ML, automates repetitive tasks, enhancing precision and efficiency in production lines.\n\n**Future Outlook**\nThe trajectory of AI and ML indicates a future where these technologies are deeply embedded in various aspects of life. In healthcare, we can anticipate more sophisticated diagnostic tools and personalized treatments. The financial sector may see more advanced risk assessment models and customer service chatbots. Manufacturing could witness fully automated production lines and intelligent supply chain management systems. However, this rapid advancement also necessitates careful consideration of ethical implications and the development of regulatory frameworks to ensure that AI and ML technologies are used responsibly and benefit society as a whole.\n\nAs AI and ML continue to evolve, their influence across sectors will undoubtedly expand, offering new solutions to complex challenges and creating opportunities for innovation and growth.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
     createdAt: "2024-06-30",
    readTime: "4 min read",
    featured: true,
    featuredSize: "medium",
  },
  {
    id: 3,
    slug: "inside-scifi-director-film-making-process",
    title: "Inside Sci-Fi Director's Film Making Process",
    category: "Movies",
    excerpt: "Get an exclusive behind-the-scenes look at how one of Hollywood's most innovative sci-fi directors approaches the filmmaking process.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80",
     createdAt: "2024-06-30",
    readTime: "8 min read",
    featured: true,
    featuredSize: "medium",
  },
  {
    id: 4,
    slug: "movie-franchise-is-getting-a-reboot",
    title: "This Major Movie Franchise Is Getting A Complete Reboot Next Year",
    category: "Movies",
    excerpt: "A beloved film franchise is set for a complete reimagining next year, with new cast, directors, and a fresh approach to the storyline.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=978&q=80",
     createdAt: "2024-06-30",
    readTime: "6 min read",
    featured: true,
    featuredSize: "small",
  },
  {
    id: 5,
    slug: "streaming-platform-announces-price-increase",
    title: "Major Streaming Platform Announces Price Increase Starting Next Month",
    category: "Technology",
    excerpt: "One of the leading streaming services has announced a significant price hike that will affect all subscription tiers beginning next month.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
     createdAt: "2024-03-27",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "fantasy-series-season-4-renewed",
    title: "Popular Fantasy Series Gets Renewed for Season 4 Before Season 3 Airs",
    category: "TV Shows",
    excerpt: "In an unprecedented move, the hit fantasy show has already secured a fourth season before the third has even premiered, signaling strong confidence from the network.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
    image: "https://images.unsplash.com/photo-1571680283474-de79f1bf95a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
     createdAt: "2024-06-30",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "award-winning-actress-joins-superhero-universe",
    title: "Award-Winning Actress Joins Superhero Universe in Unexpected Role",
    category: "Movies",
    excerpt: "A critically acclaimed, Oscar-winning actress has signed on to play a surprising character in the expanding superhero film universe.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
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

// Utility functions
export const getFeaturedPosts = (): BlogPost[] => {
  return sortBlogPosts(blogPosts.filter((post) => post.featured));
};

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
