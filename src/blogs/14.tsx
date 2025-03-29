
import { BlogPost } from "@/data/blogData";

const post: BlogPost = {
  id: 14,
  slug: "indie",
  title: "Indie ",
  category: "Gaming",
  excerpt: "A small independent game developer has revealed their upcoming project that ambitiously combines elements from several different gaming genres.",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nulla euismod, nisl eget ultricies aliquam, quam nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
  image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  readTime: "6 min read",
  featured: false,
  featuredSize: "medium", // Added with appropriate type
  createdAt: "2025-03-28", 
};

export default post;
