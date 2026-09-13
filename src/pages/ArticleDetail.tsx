import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { marked } from 'marked';
import postsData from '../content/posts.json';
import type { Post } from '../types';
import { format, parseISO } from 'date-fns';
import ArticleCard from '../components/ArticleCard';
import { siteConfig } from '../config/site';
import PageMeta from '../components/PageMeta';
import ArticleTags from '../components/ArticleTags';
import ArticleActions from '../components/ArticleActions';

function getRelatedPosts(post: Post, all: Post[], count = 2): Post[] {
  const others = all.filter((p) => p.id !== post.id);
  return others
    .map((p) => {
      const tagScore = p.tags.filter((tag) => post.tags.includes(tag)).length;
      const categoryScore = p.category === post.category ? 2 : 0;
      return { post: p, score: tagScore + categoryScore };
    })
    .sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date))
    .slice(0, count)
    .map((item) => item.post);
}

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
          // Allow for optional leading whitespace/newlines and handle carriage returns
          const strippedContent = mdContent.replace(/^\s*#\s+[^\n]*\r?\n+/, '');
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
        <PageMeta title="Article Not Found" description="The article you're looking for doesn't exist." />
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted">The article you're looking for doesn't exist.</p>
      </div>
    );
  }

  const formattedDate = format(parseISO(post.date), 'MMMM d, yyyy');
  const relatedPosts = getRelatedPosts(post, postsData as Post[]);

  return (
    <article className="pb-20">
      <PageMeta title={post.title} description={post.excerpt} type="article" />

      <header className="max-w-3xl mx-auto px-4 pt-16 md:pt-24 pb-8 md:pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-blue mb-6">
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-text leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-6 text-balance leading-relaxed">
            {post.excerpt}
          </p>
          <ArticleTags tags={post.tags} className="mb-8" />
          <div className="flex items-center gap-4">
            <img 
              src={siteConfig.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover object-[center_18%] shadow-sm"
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

      <div className="max-w-3xl mx-auto px-4">
        <div 
          className="prose prose-lg dark:prose-invert prose-brand mx-auto font-sans leading-relaxed text-text mb-16"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <ArticleActions />
        {relatedPosts.length > 0 && (
          <section className="related-articles border-t border-border pt-12 print:hidden">
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted mb-6">Related articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((related) => (
                <ArticleCard key={related.id} post={related} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
