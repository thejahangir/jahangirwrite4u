import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Post } from '../types';
import CategoryBadge from './CategoryBadge';
import { ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  post: Post;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article className="relative overflow-hidden rounded-3xl bg-surface border border-border group transition-all duration-300 hover:shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:h-[400px]">
        {post.coverImage && (
          <div className="h-64 md:h-full overflow-hidden relative">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="flex items-center gap-x-4 text-xs mb-4">
            <span className="font-bold tracking-widest text-brand-blue uppercase">Featured</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text mb-4 leading-tight group-hover:text-brand-blue transition-colors">
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>
          <p className="text-muted mb-6 text-lg text-balance">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
             <div className="flex items-center gap-3 text-sm text-muted">
                <CategoryBadge category={post.category} />
                <span>&middot;</span>
                <span>{post.readTime}</span>
             </div>
             <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-brand-green transition-colors">
                Read Article <ArrowRight className="ml-1 h-4 w-4" />
             </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
