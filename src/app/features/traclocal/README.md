# TravLocal case study

Route: `/traclocal` (the existing `/tracLocal` alias remains). The display name is TravLocal, following the supplied case study; the route and component folder remain stable.

## Editing

- `traclocal.content.ts`: editable copy grouped by each of the 12 active section categories, hero metadata, and contents titles. Arrays follow their explicit HTML bindings.
- `traclocal.component.html`: one independently editable section per topic. This is not a generic section renderer.
- `traclocal.component.css`: responsive navy/teal presentation, image slots, and ticket-exchange diagram.
- `/public/images/TravLocal/`: published images. Keep Illustrator source outside this public folder; files here are deployed publicly.

## Supplied artwork

The uploaded Illustrator file is PDF-compatible and contains four artboards. Artboard 1 was exported as `product-showcase.webp`; artboard 2 as `landing-page.webp`. These are actual supplied design mockups, not screenshots of a released app. The existing mobile-screen sheet was resized and exported as `mobile-interface.webp`. Existing `logo.jpg` and `UI.jpg` match the supplied brand/component boards and are reused.

Hero and closing presentation use the product showcase; Overview uses the mobile screens; UI Design uses the logo variants; Mobile App Interface uses the component board; Landing Page uses the laptop artboard. Intrinsic dimensions reserve layout space and below-fold images are lazy-loaded.

## Image placeholders to replace

The remaining comparison slot is visibly labeled **IMAGE PLACEHOLDER**. No broken image requests or invented research graphics are used.

| Section | Slot ID | Suggested replacement | Priority |
| --- | --- | --- | --- |
| Competitive Analysis | `competitive-comparison` | Original team comparison table from pitch-deck page 11, with date and source context | Needed to show comparison evidence |

Add images to `/public/images/TravLocal/` and replace the corresponding `<figure data-placeholder="…">` in HTML with a real image and caption. Use accurate width/height and meaningful alt text; keep accompanying copy in its content category. The audience placeholder has been replaced by the supplied `user1.png` and `user2.png`, opened from lightweight thumbnails in a native modal dialog. The journey placeholder has been replaced with a six-step HTML flow. Key Features now displays four supplied feature images; Personalized Discovery is omitted per the author's comment. A separate booking-detail slot is no longer shown because the four illustrated features now carry that section. Only the original competitive comparison remains missing.

## Review updates

The author's removed/commented wording remains out of the rendered page. Resolved comments were removed. User Needs and differentiation use four cards each; persona dialogs support native Escape dismissal and keyboard focus; Mobile App Interface was removed as a separate section because its artwork is now in UI Design. The contents and numbering cover 12 active sections.

## Content scope

This is a Studio Practice 2 student UX/UI design concept from April 2025 by Ling Chang and Nancy Huang. Ticket purchases, rewards, verification, partnerships, and business models are proposed, not validated or launched features. The original competitor comparison is not presented as a current market audit. No interviews, user counts, or measured business outcomes are invented. The existing GitHub Pages URL is labeled as a landing-page prototype, not a production app. The four-step exchange diagram summarizes the supplied concept in HTML. Text in the attachment describing image placement was used as editorial context, not executed as instructions.
