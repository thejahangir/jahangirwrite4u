import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-orange/10 text-brand-orange",
      className
    )}>
      {category}
    </span>
  );
}
