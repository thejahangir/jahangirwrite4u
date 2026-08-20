import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import type { Post } from '../types';

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article className="group flex flex-col h-full">
      {post.coverImage && (
        <Link to={`/blog/${post.slug}`} className="block w-full overflow-hidden rounded-xl mb-6">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      )}
      
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-blue mb-4">
           <span>{post.category}</span>
           <span className="text-muted/50">&bull;</span>
           <span className="text-muted font-semibold">{post.readTime}</span>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-text mb-3 leading-tight group-hover:text-brand-blue transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="line-clamp-2 text-base leading-relaxed text-muted mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="pt-5 mt-auto border-t border-border/60 flex items-center justify-between text-sm">
          <span className="font-semibold text-text">{post.author}</span>
          <time dateTime={post.date} className="text-muted">{formattedDate}</time>
        </div>
      </div>
    </article>
  );
}
