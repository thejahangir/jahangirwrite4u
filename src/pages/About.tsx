import React from 'react';
import { siteConfig } from '../config/site';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-text mb-6">About {siteConfig.name}</h1>
        <p className="text-xl text-muted text-balance leading-relaxed">
          {siteConfig.description}
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert prose-brand mb-16 text-text">
        <h2>Why I write</h2>
        <p>
          Writing is the best way to crystallize thought. I write to understand things better, to share what I've learned, and to connect with others who are interested in the intersection of technology, design, and culture.
        </p>
        
        <h2>What I write about</h2>
        <ul>
          <li><strong>Technology:</strong> The tools we build and how they shape our world.</li>
          <li><strong>Design:</strong> Creating things that are both beautiful and useful.</li>
          <li><strong>AI:</strong> The future of intelligence and human-computer interaction.</li>
          <li><strong>Politics & Society:</strong> How technology affects the way we govern and live together.</li>
          <li><strong>Culture & Life:</strong> Observations on modern life, work, and everything in between.</li>
        </ul>
      </div>

      <hr className="border-border mb-16" />

      <div>
        <h2 className="text-3xl font-heading font-bold text-text mb-8">About Jahangir</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-48 h-48 rounded-2xl bg-border overflow-hidden flex-shrink-0 relative group">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" 
              alt={siteConfig.author}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-text mb-2">{siteConfig.author}</h3>
            <p className="text-brand-blue font-medium mb-4">UI/UX Designer &middot; Developer &middot; Writer</p>
            <p className="text-muted leading-relaxed mb-6">
              I am a digital product designer and developer with a passion for creating elegant solutions to complex problems. 
              I believe in the power of good design to make technology more accessible and enjoyable for everyone.
            </p>
            
            <div className="flex gap-4">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text hover:text-brand-blue transition-colors">Twitter</a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text hover:text-brand-blue transition-colors">LinkedIn</a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text hover:text-brand-blue transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
