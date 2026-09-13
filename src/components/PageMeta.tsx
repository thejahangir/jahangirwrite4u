import { useEffect } from 'react';
import { siteConfig } from '../config/site';

interface PageMetaProps {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
}

function setMeta(selector: string, attr: 'content', value: string) {
  const el = document.head.querySelector(selector);
  if (el) {
    el.setAttribute(attr, value);
  }
}

export default function PageMeta({
  title,
  description = siteConfig.description,
  type = 'website',
}: PageMetaProps) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  useEffect(() => {
    document.title = pageTitle;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', type);
    setMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [pageTitle, description, type]);

  return null;
}
