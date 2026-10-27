import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectDetailPageHeaderComponent } from './project-detail-page-header.component';
import { ProjectWebsiteButtonComponent } from '../project-website-button/project-website-button.component';

@Component({
  imports: [ProjectDetailPageHeaderComponent, ProjectWebsiteButtonComponent],
  template: `
    <app-project-detail-page-header />
    <app-project-website-button style="position: fixed; left: 40px; top: 200px;"
      href="https://example.com/" label="Visit project" />
  `
})
class LayerTestHost {}

describe('Project detail mobile menu layering', () => {
  it('covers the project button while open and exposes it again after closing', async () => {
    await TestBed.configureTestingModule({ imports: [LayerTestHost], providers: [provideRouter([])] }).compileComponents();
    const fixture = TestBed.createComponent(LayerTestHost);
    fixture.detectChanges();
    const page: HTMLElement = fixture.nativeElement;
    document.body.appendChild(page);
    try {
      const button = page.querySelector('app-project-website-button')!;
      const circle = button.querySelector('.circle')!;
      const bounds = circle.getBoundingClientRect();
      const point = () => document.elementFromPoint(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2);
      expect(button.contains(point())).toBeTrue();
      page.querySelector<HTMLElement>('#menuBtn')!.click();
      fixture.detectChanges();
      const menu = page.querySelector('#mobileMenu')!;
      expect(getComputedStyle(menu).display).toBe('flex');
      expect(menu.contains(point())).withContext('Menu must paint above the button circle and icon').toBeTrue();
      page.querySelector<HTMLElement>('#closeBtn')!.click();
      fixture.detectChanges();
      expect(getComputedStyle(menu).display).toBe('none');
      expect(button.contains(point())).toBeTrue();
    } finally {
      fixture.destroy();
      page.remove();
    }
  });
});
