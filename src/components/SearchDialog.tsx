import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import postsData from '../content/posts.json';
import { Post } from '../types';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = (postsData as Post[]).filter((post) => {
      return (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.category.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
        post.author.toLowerCase().includes(lowerQuery)
      );
    });
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-24 px-4 bg-background/80 backdrop-blur-sm">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl bg-surface border border-border shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 border-b border-border">
          <SearchIcon className="h-5 w-5 text-muted" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 h-14 px-4 bg-transparent border-0 focus:ring-0 text-text placeholder-muted text-lg outline-none"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-2 text-muted hover:text-text rounded-md transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {query.trim() !== '' && (
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length === 0 ? (
              <div className="p-8 text-center text-muted">
                No results found for "{query}"
              </div>
            ) : (
              <ul className="space-y-1">
                {results.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      onClick={onClose}
                      className="flex flex-col p-4 rounded-xl hover:bg-background transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-brand-blue">{post.category}</span>
                        <span className="text-xs text-muted">{post.date}</span>
                      </div>
                      <h4 className="text-base font-semibold text-text group-hover:text-brand-green transition-colors">{post.title}</h4>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
