import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import logo from '../assets/logo-jw4u.png';

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-zinc-400 mt-auto border-t border-white/10 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-5 pr-0 lg:pr-12 flex flex-col">
            <Link to="/" className="inline-block mb-6" aria-label={siteConfig.name}>
              <img
                src={logo}
                alt={siteConfig.name}
                className="h-12 w-auto invert hue-rotate-180 transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-zinc-400 max-w-md text-sm leading-relaxed text-balance">
              Ideas, opinions and stories about technology, design, AI, politics, culture, life and literature. Exploring the intersections of the digital world and human experience through thoughtful essays and articles.
            </p>
          </div>
          
          {/* Mission / Descriptive Text */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16 lg:border-l border-white/10 relative">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-brand-blue/50 lg:hidden mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight mb-6 tracking-tight">
              A space dedicated to the <span className="text-brand-blue font-medium">pursuit of knowledge</span>, the joy of discovery, and the art of storytelling.
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl text-balance">
              I believe in the power of words to connect, inspire, and challenge perspectives. My goal is to provide a platform for thoughtful discourse, deep dives into modern challenges, and a celebration of human creativity.
            </p>
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
