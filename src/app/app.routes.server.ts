import { RenderMode, ServerRoute } from '@angular/ssr';
import { publishedPosts } from './features/blog/content/posts';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return publishedPosts().map(post => ({ slug: post.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
