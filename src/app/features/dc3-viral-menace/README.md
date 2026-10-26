# DC3: Viral Menace / S-Qubed case study

The page follows the updated AMPA layout: shared project header, two-column hero and project goals, metadata grid, numbered contents links, alternating section backgrounds, responsive media, and the expanding portfolio link button.

## Editing

- `dc3-viral-menace.content.ts`: `dc3Content` holds text grouped by goals, responsibilities, architecture, visualDesign, highFidelity, iteration, development, cms, outcome, and reflection. `dc3Project` holds hero metadata, navigation labels, palette values, and contents entries (titles reference the section copy).
- `dc3-viral-menace.component.html`: 10 individually editable sections with their own layout, headings, paragraphs, lists, images, and silent implementation videos. Text binds to its named `content` category; arrays follow the explicit HTML binding order. Edit layout by section `id`, and copy in the content file; there is no shared section-rendering loop.
- `dc3-viral-menace.component.css`: scoped layout, game-inspired navy/light-blue palette, typography, and mobile styles.
- `/public/images/DC3-Viral-Menace/`: media assets.

The supplied case-study text replaces the older personal continuation narrative with the 2025 design co-op and 2026 development co-op. The 90+ PageSpeed Insights SEO result is the author's supplied result, not an independently rerun audit. It refers to SEO, not the performance score.

## Missing supporting assets

The attachment requests several screenshots not currently present in the repository:

- `lofi-1.png`, `lofi-2.png`: low-fidelity wireframes.
- Additional annotated high-fidelity screens, if desired; the supplied `hi-fi.png` is now displayed.
- `image(20261026-070503).png`: original palette image (the page renders the six supplied colors as CSS swatches instead).
- Dedicated mobile and full-page final website screenshots, if desired; the supplied `landing-showcase.png` is displayed with the project goals.
- A dedicated image-upload workflow screenshot, if available; both supplied CMS administration screenshots are displayed.
- PageSpeed Insights evidence showing the reported 90+ SEO score.

Overview, Wireframing, and Deployment and SEO were removed at the author’s request to avoid duplicate content; the contents and section numbering now cover 10 sections. Responsibilities use two phase cards, iteration uses four cards, and development pairs concise explanations with the two silent demos. Resolved review comments have been removed.

No broken placeholder images are rendered. Existing project showcase, sitemap, iteration comparison, hero mockup, and two silent implementation clips are used with captions. Add missing images and their real dimensions directly to the relevant HTML section when supplied; do not substitute unrelated imagery for CMS or audit evidence.

CMS layout: equal text/gallery columns, with two equally sized screenshot rows on desktop and natural-height rows on mobile. H1/H2 use Limelight; other text uses Roboto. Icon fonts remain available for the link icons.
