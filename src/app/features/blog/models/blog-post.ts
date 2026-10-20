export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: readonly string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'code'; text: string };

export interface BlogPost {
  /** Unique lowercase URL segment, e.g. designing-for-accessibility. */
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date: YYYY-MM-DD. */
  publishedAt: string;
  tags: readonly string[];
  draft: boolean;
  blocks: readonly ArticleBlock[];
}
