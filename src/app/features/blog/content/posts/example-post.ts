import { BlogPost } from '../../models/blog-post';

/** Copy this file for each article. Drafts never appear on the public blog. */
export const examplePost: BlogPost = {
  slug: 'your-first-article',
  title: 'Your first article',
  excerpt: 'Replace this summary with a short introduction to your article.',
  publishedAt: '2026-10-20',
  tags: ['Design', 'Development'],
  draft: true,
  blocks: [
    { type: 'paragraph', text: 'Write your introduction here.' },
    { type: 'heading', text: 'A section heading' },
    { type: 'paragraph', text: 'Add your ideas, process, and lessons learned.' },
    { type: 'list', items: ['Your first point', 'Your second point'] },
    { type: 'code', text: 'const greeting = "Hello, world!";' }
  ]
};
