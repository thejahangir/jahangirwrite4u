export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  coverImage?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}
