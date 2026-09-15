import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const postsPath = path.join(rootDir, 'src', 'content', 'posts.json');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir) || !fs.existsSync(indexHtmlPath)) {
  console.error("dist/index.html not found. Make sure to build the project first.");
  process.exit(1);
}

const posts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

const domain = 'https://thejahangir.github.io/jahangirwrite4u';

console.log('Generating static HTML files for blog posts...');

posts.forEach(post => {
  const postDir = path.join(distDir, 'blog', post.slug);
  fs.mkdirSync(postDir, { recursive: true });

  const postUrl = `${domain}/blog/${post.slug}`;
  
  // Use a default image if coverImage is not specified
  const imageUrl = post.coverImage ? `${domain}/images/${post.coverImage}` : `${domain}/j4u.png`;

  const titleTagRegex = /<title>.*<\/title>/i;
  const descriptionTagRegex = /<meta\s+name=["']description["']\s+content=["'](.*?)["']\s*\/?>/i;
  
  const newTitle = `${post.title} | Jahangir`;
  const newDescription = post.excerpt.replace(/"/g, '&quot;');
  
  let newHtml = baseHtml.replace(titleTagRegex, `<title>${newTitle}</title>`);
  
  if (descriptionTagRegex.test(newHtml)) {
      newHtml = newHtml.replace(descriptionTagRegex, `<meta name="description" content="${newDescription}" />`);
  } else {
      newHtml = newHtml.replace('</head>', `  <meta name="description" content="${newDescription}" />\n</head>`);
  }

  const ogTags = `
    <meta property="og:title" content="${newTitle}" />
    <meta property="og:description" content="${newDescription}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${postUrl}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${newTitle}" />
    <meta name="twitter:description" content="${newDescription}" />
    <meta name="twitter:image" content="${imageUrl}" />
  `;
  
  newHtml = newHtml.replace('</head>', `${ogTags}\n  </head>`);

  fs.writeFileSync(path.join(postDir, 'index.html'), newHtml);
});

// Also create 404.html
fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));

// Also add default OG tags for the main index.html
const mainTitle = "Jahangir :: Article on technology, design, AI, politics, culture, life and literature";
const mainDesc = "Articles and opinions on technology, design, AI, politics, culture, life and literature by Jahangir Alam.";
const mainImageUrl = `${domain}/j4u.png`;

const mainOgTags = `
    <meta property="og:title" content="${mainTitle}" />
    <meta property="og:description" content="${mainDesc}" />
    <meta property="og:image" content="${mainImageUrl}" />
    <meta property="og:url" content="${domain}/" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${mainTitle}" />
    <meta name="twitter:description" content="${mainDesc}" />
    <meta name="twitter:image" content="${mainImageUrl}" />
`;
let newMainHtml = baseHtml.replace('</head>', `${mainOgTags}\n  </head>`);
fs.writeFileSync(indexHtmlPath, newMainHtml);

console.log(`Generated HTML pages for ${posts.length} posts.`);
