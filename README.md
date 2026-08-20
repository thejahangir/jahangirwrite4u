# jahangirWrite4u

A modern, static, editorial-style personal blog built with React, Vite, TypeScript, and Tailwind CSS.

## Features
- **File-based Content:** Add articles simply by writing Markdown files and updating a JSON file. No backend or database required.
- **Editorial Design:** Premium typography, subtle animations, and thoughtful use of whitespace.
- **Dark Mode:** Built-in dark mode with a toggle switch, saving preference to local storage.
- **Client-Side Search:** Instantly search across all articles using `Cmd/Ctrl + K` or the search button.
- **Responsive:** Fully responsive design from mobile to large desktop screens.

## Getting Started

### Installation
1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

## Managing Content

### How to add a new article

1. **Create the Markdown file:**
   Create a new file in `src/content/posts/` with your article's slug as the filename (e.g., `my-new-post.md`). Write your content using standard Markdown.

2. **Update the Metadata:**
   Open `src/content/posts.json` and add a new object to the array with your post's details:
   ```json
   {
     "id": "unique-id-here",
     "slug": "my-new-post",
     "title": "My New Post",
     "excerpt": "A short summary...",
     "category": "Technology",
     "tags": ["Tag1"],
     "author": "Jahangir Alam",
     "date": "2026-08-20",
     "readTime": "4 min read",
     "featured": false,
     "coverImage": "optional-image-url.jpg"
   }
   ```
   *Make sure the `slug` exactly matches the name of your `.md` file (without the `.md` extension).*

### Customization

- **Site Information:** Edit `src/config/site.ts` to change the blog's name, description, author info, and social links.
- **Colors:** Open `src/index.css` to update the CSS variables (`--color-primary`, `--color-secondary`, etc.) for both light and dark modes.
- **Categories:** Edit `src/data/categories.json` to add or modify categories.

## Building and Deployment

This is a static site that can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, Nginx, Apache).

To create a production build:
```bash
npm run build
```

This will generate a `dist/` directory containing all your static assets. You can upload the contents of this folder directly to your web server.




md
# My First Post
This is the introductory paragraph.
## A new section
Here is some more content...