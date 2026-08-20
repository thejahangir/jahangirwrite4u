import React from 'react';
import { Link } from 'react-router-dom';
import categoriesData from '../data/categories.json';
import postsData from '../content/posts.json';
import { Category, Post } from '../types';

export default function Categories() {
  const categories = categoriesData as Category[];
  const posts = postsData as Post[];

  const getPostCount = (categorySlug: string) => {
    // In posts.json we store category name, but let's assume slug matching or name matching
    // Let's match by name ignoring case
    const category = categories.find(c => c.slug === categorySlug);
    if (!category) return 0;
    return posts.filter(p => p.category.toLowerCase() === category.name.toLowerCase()).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-4">Categories</h1>
        <p className="text-xl text-muted">Explore topics that interest you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            to={`/category/${category.slug}`}
            className="group block p-8 bg-surface border border-border rounded-2xl hover:border-brand-blue hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-2xl font-heading font-bold text-text group-hover:text-brand-blue mb-2 transition-colors">
              {category.name}
            </h2>
            <p className="text-muted mb-6 h-12">
              {category.description}
            </p>
            <span className="inline-block px-3 py-1 bg-background text-sm font-medium rounded-full text-muted border border-border">
              {getPostCount(category.slug)} Articles
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
