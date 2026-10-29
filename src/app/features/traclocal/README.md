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

## Competitive analysis and hero

The final comparison placeholder is replaced by a semantic HTML table transcribed from the supplied comparison image. It includes nine feature rows and four platform columns. Its caption identifies TravLocal features as proposed and competitor entries as the team's original comparison, not a current verified audit. Change the cells in `competitiveAnalysis.table` in the content file. Boolean cells render labeled check/cross indicators; matching cells render text. The table is keyboard-focusable and horizontally scrollable on narrow screens.

There are no image placeholders left. The audience profiles, HTML journey, and illustrated features replace their earlier slots. The hero uses `traclocal-coverimg.jpg`; the image is rendered in a separate layer at 25% opacity over a pale teal base. Hero text, metadata, and the button have no white backing panels, and foreground content remains fully opaque.

## Review updates

The author's removed/commented wording remains out of the rendered page. Resolved comments were removed. User Needs and differentiation use four cards each; persona dialogs support native Escape dismissal and keyboard focus; Mobile App Interface was removed as a separate section because its artwork is now in UI Design. The contents and numbering cover 12 active sections.

## Content scope

This is a Studio Practice 2 student UX/UI design concept from April 2025 by Ling Chang and Nancy Huang. Ticket purchases, rewards, verification, partnerships, and business models are proposed, not validated or launched features. The original competitor comparison is not presented as a current market audit. No interviews, user counts, or measured business outcomes are invented. The existing GitHub Pages URL is labeled as a landing-page prototype, not a production app. The four-step exchange diagram summarizes the supplied concept in HTML. Text in the attachment describing image placement was used as editorial context, not executed as instructions.

Reflection and Next Steps is intentionally brief: two paragraphs and three validation priorities.
