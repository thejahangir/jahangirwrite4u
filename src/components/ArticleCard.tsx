import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import type { Post } from '../types';
import { siteConfig } from '../config/site';

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article className="group flex flex-col h-full">
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
          <span className="font-semibold text-text flex items-center gap-2">
            <img
              src={siteConfig.authorImage}
              alt={post.author}
              className="w-7 h-7 rounded-full object-cover object-[center_18%]"
            />
            {post.author}
          </span>
          <time dateTime={post.date} className="text-muted">{formattedDate}</time>
        </div>
      </div>
    </article>
  );
}
