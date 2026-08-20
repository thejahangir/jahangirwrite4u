import React from 'react';
import { useParams, Link } from 'react-router-dom';
import categoriesData from '../data/categories.json';
import postsData from '../content/posts.json';
import { Category, Post } from '../types';
import ArticleCard from '../components/ArticleCard';

export default function CategoryDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const category = (categoriesData as Category[]).find(c => c.slug === slug);
  const posts = (postsData as Post[]).filter(
    p => p.category.toLowerCase() === category?.name.toLowerCase()
  );

  if (!category) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <p className="text-muted mb-8">This category doesn't seem to exist.</p>
        <Link to="/categories" className="text-brand-blue font-medium hover:underline">
          View all categories
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="mb-12 border-b border-border pb-12">
        <div className="flex items-center gap-4 mb-4 text-brand-blue">
           <Link to="/categories" className="text-sm font-medium hover:underline">Categories</Link>
           <span>/</span>
           <span className="text-sm font-medium">{category.name}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-4">
          {category.name}
        </h1>
        <p className="text-xl text-muted max-w-2xl">{category.description}</p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">No articles found in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
