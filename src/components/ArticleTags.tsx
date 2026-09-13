import React from 'react';

interface ArticleTagsProps {
  tags?: string[];
  className?: string;
}

export default function ArticleTags({ tags, className = '' }: ArticleTagsProps) {
  if (!tags?.length) return null;

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-0.5 text-xs font-medium text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
