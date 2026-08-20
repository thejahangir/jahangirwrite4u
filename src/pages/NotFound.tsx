import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-heading font-extrabold text-brand-blue/20 mb-4 select-none">404</h1>
        <h2 className="text-3xl font-heading font-bold text-text mb-4">Looks like this page took a wrong turn.</h2>
        <p className="text-xl text-muted mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-blue hover:bg-brand-blue/90 transition-colors shadow-sm hover:shadow"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
