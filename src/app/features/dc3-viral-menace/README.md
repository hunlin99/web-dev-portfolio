# DC3: Viral Menace / S-Qubed case study

The page follows the updated AMPA layout: shared project header, two-column hero and overview, metadata grid, numbered contents links, alternating section backgrounds, responsive media, and the expanding portfolio link button.

## Editing

- `dc3-viral-menace.content.ts`: all 13 case-study sections and their content blocks, metadata, palette, and image captions/dimensions.
- `dc3-viral-menace.component.html`: shared rendering for sections plus the palette and silent implementation videos.
- `dc3-viral-menace.component.css`: scoped layout, game-inspired navy/light-blue palette, typography, and mobile styles.
- `/public/images/DC3-Viral-Menace/`: media assets.

The supplied case-study text replaces the older personal continuation narrative with the 2025 design co-op and 2026 development co-op. The 90+ PageSpeed Insights SEO result is the author's supplied result, not an independently rerun audit. It refers to SEO, not the performance score.

## Missing supporting assets

The attachment requests several screenshots not currently present in the repository:

- `lofi-1.png`, `lofi-2.png`: low-fidelity wireframes.
- `hifi-1.png`, `hifi-2.png`: high-fidelity designs and annotations.
- `image(20261026-070503).png`: original palette image (the page renders the six supplied colors as CSS swatches instead).
- Completed desktop/mobile screenshots and a full-page final website screenshot.
- CMS dashboard, article editor, image-upload, and final CMS screenshots.
- PageSpeed Insights evidence showing the reported 90+ SEO score.

No broken placeholder images are rendered. Existing project showcase, sitemap, iteration comparison, hero mockup, and two silent implementation clips are used with captions. Add missing images and their real dimensions to the relevant section's `images` array when supplied; do not substitute unrelated imagery for CMS or audit evidence.
