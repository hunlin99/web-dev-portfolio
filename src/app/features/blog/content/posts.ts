import { BlogPost } from '../models/blog-post';
import { examplePost } from './posts/example-post';

/** Register new article files here. No filesystem scanning or CMS is required. */
export const posts: readonly BlogPost[] = [examplePost];

export function publishedPosts(articles: readonly BlogPost[] = posts): readonly BlogPost[] {
  return articles.filter(post => !post.draft)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
