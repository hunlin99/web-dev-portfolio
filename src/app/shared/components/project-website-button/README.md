# Project website button

Import `ProjectWebsiteButtonComponent` into a standalone component and use:

```html
<app-project-website-button
  [href]="project.website"
  [label]="project.visitLabel"
  [ariaLabel]="project.visitAriaLabel">
</app-project-website-button>
```

`href` and `label` are required. `ariaLabel` is optional; its default announces that the link opens in a new tab. Use external website URLs. Links always include `target="_blank"` and `rel="noopener noreferrer"`.

Theme the component host with `--project-button-width`, `--project-button-border`, `--project-button-color`, `--project-button-fill`, `--project-button-font`, `--project-button-font-size`, and `--project-button-focus`. Shared animation, focus treatment, and reduced-motion support live only in this component. Font Awesome icons use the portfolio's existing global icon stylesheet.
