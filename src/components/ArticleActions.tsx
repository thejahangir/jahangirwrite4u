import { useState } from 'react';
import { Printer, FileDown, Link2, Check } from 'lucide-react';

export default function ArticleActions() {
  const [copied, setCopied] = useState(false);

  const printArticle = () => {
    window.print();
  };

  const copyLink = async () => {
    const url = window.location.href;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      input.setAttribute('readonly', '');
      input.style.position = 'absolute';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  };

  const actionClass =
    'inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted hover:text-brand-blue hover:border-brand-blue/40 transition-colors cursor-pointer';

  return (
    <div className="article-actions flex flex-wrap items-center gap-3 mb-16 print:hidden">
      <button type="button" onClick={printArticle} className={actionClass}>
        <Printer className="h-4 w-4" />
        Print
      </button>
      <button type="button" onClick={printArticle} className={actionClass}>
        <FileDown className="h-4 w-4" />
        Save as PDF
      </button>
      <button type="button" onClick={copyLink} className={actionClass}>
        {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  );
}
