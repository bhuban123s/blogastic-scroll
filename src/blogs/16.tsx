
import { BlogPost } from "@/data/blogData";

const post: BlogPost = {
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
  featuredSize: "medium", // Properly typed as one of the allowed values
};

export default post;
