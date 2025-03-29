
import { BlogPost } from "@/data/blogData";

const post: BlogPost = {
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
  featuredSize: "medium", // Changed to explicit string literal type
};

export default post;
