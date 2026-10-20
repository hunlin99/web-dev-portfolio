import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { posts, publishedPosts } from './content/posts';
import { BlogPost } from './models/blog-post';

const article: BlogPost = {
  slug: 'test-article', title: 'A published article', excerpt: 'An article summary',
  publishedAt: '2026-10-20', tags: ['Design'], draft: false,
  blocks: [
    { type: 'paragraph', text: '<script>This is text, not HTML</script>' },
    { type: 'heading', text: 'Section heading' },
    { type: 'list', items: ['First point'] },
    { type: 'code', text: 'const answer = 42;' },
    { type: 'image', src: '/favicon.ico', alt: 'An example illustration', caption: 'A caption' }
  ]
};

describe('Blog', () => {
  it('excludes drafts and sorts articles newest first without changing the registry', () => {
    const old = { ...article, slug: 'older', publishedAt: '2025-01-01' };
    const draft = { ...article, slug: 'draft', draft: true };
    const input = [old, draft, article];
    expect(publishedPosts(input)).toEqual([article, old]);
    expect(input).toEqual([old, draft, article]);
  });

  it('renders index, article blocks, navigation, draft protection, and the Contact redirect', async () => {
    const registry = posts as BlogPost[];
    registry.push(article);
    try {
      await TestBed.configureTestingModule({ providers: [provideRouter(routes)] }).compileComponents();
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl('/blog');
      expect(harness.routeNativeElement?.textContent).toContain(article.title);
      expect(harness.routeNativeElement?.querySelector('a[href="/blog/test-article"]')).not.toBeNull();
      await harness.navigateByUrl('/blog/test-article');
      const page = harness.routeNativeElement!;
      expect(page.querySelector('h1')?.textContent).toBe(article.title);
      expect(page.querySelector('.article-body script')).toBeNull();
      expect(page.textContent).toContain('<script>This is text, not HTML</script>');
      expect(page.querySelector('.article-body h2')?.textContent).toBe('Section heading');
      expect(page.querySelector('figcaption')?.textContent).toBe('A caption');
      expect(page.querySelector('pre code')?.textContent).toBe('const answer = 42;');
      expect(page.querySelector('nav a[href="/blog"]')?.classList.contains('active')).toBeTrue();
      expect(page.querySelector('nav a[href="/blog"] i')?.textContent).toBe('article');
      await harness.navigateByUrl('/blog/your-first-article');
      expect(harness.routeNativeElement?.textContent).toContain('Article not found');
      await harness.navigateByUrl('/blog/nonexistent');
      expect(harness.routeNativeElement?.textContent).toContain('Article not found');
      await harness.navigateByUrl('/contact');
      expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Ideas, process');
    } finally {
      registry.splice(registry.indexOf(article), 1);
    }
  });

  it('shows a useful empty state when there are no published articles', async () => {
    await TestBed.configureTestingModule({ providers: [provideRouter(routes)] }).compileComponents();
    const harness = await RouterTestingHarness.create('/blog');
    expect(harness.routeNativeElement?.textContent).toContain('New stories are on the way.');
    expect(harness.routeNativeElement?.querySelector('.post-card')).toBeNull();
  });
});
