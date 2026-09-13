import React from 'react';
import ArticleCard from '../components/ArticleCard';
import postsData from '../content/posts.json';
import { Post } from '../types';
import PageMeta from '../components/PageMeta';
import { siteConfig } from '../config/site';

export default function ArticleListing() {
  const posts = [...(postsData as Post[])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <PageMeta
        title="Articles"
        description={`Articles on ${siteConfig.topics} by ${siteConfig.author}.`}
      />
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-4">All Articles</h1>
        <p className="text-xl text-muted">A collection of thoughts, ideas, and stories.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
