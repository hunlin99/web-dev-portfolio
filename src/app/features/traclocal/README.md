# TravLocal case study

Route: `/traclocal` (the existing `/tracLocal` alias remains). The display name is TravLocal, following the supplied case study; the route and component folder remain stable.

## Editing

- `traclocal.content.ts`: editable copy grouped by each of the 13 section categories, hero metadata, and contents titles. Arrays follow their explicit HTML bindings.
- `traclocal.component.html`: one independently editable section per topic. This is not a generic section renderer.
- `traclocal.component.css`: responsive navy/teal presentation, image slots, and ticket-exchange diagram.
- `/public/images/TravLocal/`: published images. Keep Illustrator source outside this public folder; files here are deployed publicly.

## Supplied artwork

The uploaded Illustrator file is PDF-compatible and contains four artboards. Artboard 1 was exported as `product-showcase.webp`; artboard 2 as `landing-page.webp`. These are actual supplied design mockups, not screenshots of a released app. The existing mobile-screen sheet was resized and exported as `mobile-interface.webp`. Existing `logo.jpg` and `UI.jpg` match the supplied brand/component boards and are reused.

Hero and closing presentation use the product showcase; Overview uses the mobile screens; UI Design uses the logo variants; Mobile App Interface uses the component board; Landing Page uses the laptop artboard. Intrinsic dimensions reserve layout space and below-fold images are lazy-loaded.

## Image placeholders to replace

Each slot is visibly labeled **IMAGE PLACEHOLDER**. No broken image requests or invented research graphics are used.

| Section | Slot ID | Suggested replacement | Priority |
| --- | --- | --- | --- |
| Understanding the Target Audience | `audience-profile` | Original audience profile or supporting illustration from pitch-deck page 9 | Recommended |
| Competitive Analysis | `competitive-comparison` | Original team comparison table from pitch-deck page 11, with date and source context | Needed to show comparison evidence |
| User Journey | `annotated-journey` | Labeled flow: discovery → selection → availability → booking review → meeting verification → recap | Recommended |
| Key Features | `booking-sequence` | Readable date-selection and booking-review close-ups showing guide details and meeting location | Recommended |

Add images to `/public/images/TravLocal/` and replace the corresponding `<figure data-placeholder="…">` in HTML with a real image and caption. Use accurate width/height and meaningful alt text; keep accompanying copy in its content category. The pitch deck itself was not supplied, so its audience/comparison pages could not be extracted. A detailed booking-review sequence was not available as a standalone readable image in the attached artboards. Optional discovery/reward/verification close-ups can further strengthen the Key Features section; the current Overview already provides a supplied screen overview.

## Content scope

This is a Studio Practice 2 student UX/UI design concept from April 2025 by Ling Chang and Nancy Huang. Ticket purchases, rewards, verification, partnerships, and business models are proposed, not validated or launched features. The original competitor comparison is not presented as a current market audit. No interviews, user counts, or measured business outcomes are invented. The existing GitHub Pages URL is labeled as a landing-page prototype, not a production app. The four-step exchange diagram summarizes the supplied concept in HTML. Text in the attachment describing image placement was used as editorial context, not executed as instructions.
