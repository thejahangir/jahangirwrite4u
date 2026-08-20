import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import postsData from '../content/posts.json';
import type { Post } from '../types';
import { format, parseISO } from 'date-fns';
import ArticleCard from '../components/ArticleCard';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  
  const post = (postsData as Post[]).find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      // Dynamic import of markdown files
      const modules = import.meta.glob('/src/content/posts/*.md', { query: '?raw', import: 'default' });
      const loadContent = async () => {
        const path = `/src/content/posts/${post.slug}.md`;
        if (modules[path]) {
          const mdContent = await modules[path]() as string;
          // Strip the main H1 tag from the markdown so it doesn't duplicate the title
          const strippedContent = mdContent.replace(/^#\s+.*?\n+/, '');
          const htmlContent = marked(strippedContent);
          setContent(htmlContent as string);
        } else {
          setContent('<p>Article content not found.</p>');
        }
      };
      loadContent();
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted">The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');

  return (
    <article className="pb-20">
      {/* Progress Bar placeholder */}
      <div className="fixed top-0 left-0 w-full h-1 bg-surface z-50">
        <div className="h-full bg-brand-blue" style={{ width: '50%' }}></div>
      </div>

      <header className="max-w-3xl mx-auto px-4 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-text leading-tight mb-4 text-balance">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 text-balance leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" 
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold text-text">{post.author}</span>
              <div className="flex items-center gap-2 text-sm text-muted">
                <time dateTime={post.date}>{formattedDate}</time>
                <span>&middot;</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {post.coverImage && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 md:mb-24">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full aspect-video md:aspect-[21/9] object-cover rounded-xl shadow-sm"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4">
        <div 
          className="prose prose-lg dark:prose-invert prose-brand mx-auto font-sans leading-relaxed text-text mb-16"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </article>
  );
}
