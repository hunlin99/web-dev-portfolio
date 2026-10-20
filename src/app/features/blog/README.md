# Editing the blog

No CMS, backend storage, or extra dependencies are required. Articles are typed local content, rendered safely using Angular interpolation (not raw HTML).

## Folder layout

- `models/blog-post.ts`: article metadata and supported content block types.
- `content/posts/`: one TypeScript file per article.
- `content/posts.ts`: article registry, draft filtering, newest-first ordering.
- `pages/blog-list/`: `/blog` index.
- `pages/blog-post/`: `/blog/:slug` article reader and unavailable-article state.
- `blog.css`: shared responsive presentation.
- `/public/images/blog/<slug>/`: place each article's images here; reference them with `/images/blog/<slug>/filename.webp`. Create the directory when adding images.

## Add an article

1. Copy `content/posts/example-post.ts` to `content/posts/<slug>.ts` and rename its export.
2. Use a unique lowercase hyphenated slug. Set the title, excerpt, `publishedAt` (YYYY-MM-DD), and tags.
3. Write `blocks` using paragraph, heading, list, image, and code. Headings render as h2; the article title is h1. Images require meaningful alt text. Example:
   `{ type: 'image', src: '/images/blog/my-article/example.webp', alt: 'Description of the image', caption: 'Optional caption' }`.
4. Import and register the export in the `posts` array in `content/posts.ts`.
5. Keep `draft: true` while editing. Change to `false` to publish; only published articles can be opened through the blog routes. Draft content is bundled locally, so never store secrets or private material here. The date controls display/sorting, not scheduled publishing.
6. Run `npm run build -- --configuration development`, then check `/blog` and `/blog/<slug>` locally. Commit and deploy to publish changes.

The example is an unpublished template; the blog intentionally shows an empty state until you publish an article. The index and all published article URLs are prerendered at build time using the registry, so new slugs do not require a route edit. Redeploy after changing articles. Keep your host configured for Angular routes when opening links directly.

Old `/contact` links redirect to `/blog`. Blog navigation stays active while reading an article. No content migration from the old Contact placeholder is needed.
