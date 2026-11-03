# DC3: Viral Menace / S-Qubed case study

Route: `/dc3-viral-menace`. The page retains the existing header, cover-image hero, metadata, reusable website button, palette, typography, and responsive media.

## Editing

- `dc3-viral-menace.content.ts`: seven copy categories (`goals`, `responsibilities`, `designProcess`, `iteration`, `development`, `outcome`, `reflection`). `dc3Project` retains project metadata, palette, navigation labels, and seven contents entries.
- `dc3-viral-menace.component.html`: seven independently editable sections. Design Process contains sitemap, wireframes, visual direction, and high-fidelity subsections. Development & CMS keeps distinct implementation and content-management subsections. Local card/list loops do not control whole-section layouts.
- `dc3-viral-menace.component.css`: existing scoped layouts, plus spacing for merged steps and a responsive three-card iteration grid.
- `dc3-viral-menace.component.spec.ts`: seven-section structure, merged and legacy fragment targets, both co-op roles, media, silent video attributes, and contents navigation.

## Content optimization

The narrative follows Project Overview & Goals → My Role & Responsibilities → Design Process → Design Decisions & Iterations → Development & CMS → Final Outcomes → Reflection.

The four design sections were merged into a visual progression, and development/CMS now share one section. Goals are a four-item list. Responsibilities retain distinct 2025 design and 2026 development placements. Iteration keeps Steam CTA, readability, and hierarchy examples using problem/change/intent; the overlapping Color Balance explanation is removed. CMS capabilities appear once as a compact feature list. Outcomes summarize the deployed website, CMS, and reported SEO result; the former eight-item list is removed. Reflection is one personal learning paragraph. Unused content properties were removed alongside their bindings.

All existing image and video paths, alternative text, silent video labels, and muted/inline attributes are retained. Old `#architecture`, `#low-fidelity`, `#visual-design`, `#high-fidelity`, and `#cms` fragments still target their corresponding subsections. The contents now links to `#design-process` for the merged design narrative.

## Evidence

This is the author's professional co-op project: design in 2025 and development in 2026. The 90+ PageSpeed Insights SEO result is supplied by the author, not an independently rerun audit or a performance score. No traffic, conversion, wishlist, or usability improvement is claimed. Iteration improvements are explicitly design intentions.

No new assets were required. The current showcase, sitemap, wireframes, high-fidelity mockup, iteration comparison, two CMS views, and two silent implementation clips remain. A dated PageSpeed Insights report or screenshot would further substantiate the supplied SEO result; none has been invented.

## Reading estimate and validation

The seven rendered main sections contain 651 English words, including headings, palette labels, and the outcome link, but excluding hero metadata, navigation, and text inside images. At 200–250 words/minute, reading takes about 2.6–3.3 minutes. Allow another 1.5–2 minutes for visuals and video review: approximately 4–5 minutes in total.

Both component tests pass. Browser checks at 1440px, 768px, and 390px found seven sections, loaded images, muted inline videos, and no horizontal overflow. `git diff --check` passes.

The standard production build encounters a Google Fonts HTTP 403 during font inlining in this cloud environment. Production compilation succeeds with only font inlining temporarily disabled (script/style optimization and production budgets retained); `angular.json` is restored unchanged. Existing unrelated style-budget/unused-import warnings remain.
