import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 mt-auto border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-zinc-800 pb-16 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-6 pr-0 lg:pr-12">
            <h2 className="text-2xl font-heading font-extrabold text-white mb-4 tracking-tight">
              {siteConfig.name}
            </h2>
            <p className="text-zinc-400 max-w-md mb-10 text-sm leading-relaxed text-balance">
              Ideas, opinions and stories about technology, design, AI, politics, culture and life. Exploring the intersections of the digital world and human experience through thoughtful essays and articles.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/articles" className="hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Topics</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/category/ui-ux" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/category/ai" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/category/politics" className="hover:text-white transition-colors">Politics</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Connect</h3>
            <div className="flex flex-col space-y-4 text-sm">
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-brand-blue" /> Twitter
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-brand-blue" /> LinkedIn
              </a>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-brand-blue" /> GitHub
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-brand-blue" /> Instagram
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
