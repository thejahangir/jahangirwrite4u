import React, { useState } from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import postsData from '../content/posts.json';
import type { Post } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const posts = postsData as Post[];
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const recentPosts = posts.filter(p => p.id !== featuredPost.id).slice(0, 5);

  return (
    <div className="flex flex-col gap-20 pb-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center mb-10 border-b border-border">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop)' }}
        >
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/10 dark:from-background dark:via-background/90 dark:to-transparent"></div>
          {/* Subtle brand tint */}
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
        </div>

        {/* Content Container (Constrained width for alignment) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-text tracking-tight mb-6 text-balance leading-[1.1]">
              Thoughts on the <span className="text-brand-blue">Modern World.</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-text font-medium mb-12 leading-relaxed text-balance">
              Ideas, opinions and stories about technology, design, AI, politics, culture and life.
            </p>
            <div>
              <a 
                href="#featured" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-brand-blue hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Explore Articles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FeaturedArticle post={featuredPost} />
      </section>

      {/* Latest Articles Section - Editorial Split Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <h2 className="text-4xl lg:text-6xl font-heading font-extrabold text-text mb-6 tracking-tight">The Latest.</h2>
             <p className="text-muted text-lg lg:text-xl leading-relaxed mb-10 text-balance">
               A collection of my most recent thoughts, explorations, and essays on technology, design, and culture.
             </p>
             <Link to="/articles" className="group inline-flex items-center text-brand-blue font-bold tracking-wide uppercase text-sm hover:text-brand-green transition-colors">
               View all articles <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
             </Link>
          </div>
          
          {/* Scrolling Article List */}
          <div className="lg:col-span-7 flex flex-col gap-16 lg:gap-24">
            {recentPosts.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
