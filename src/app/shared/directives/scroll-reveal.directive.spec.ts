import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@Component({ imports: [ScrollRevealDirective], template: '<div appScrollReveal="right">Project</div>' })
class RevealHost {}

describe('ScrollRevealDirective', () => {
  it('reveals on entry, replays below the viewport, and disconnects on destruction', async () => {
    let notify!: IntersectionObserverCallback;
    const disconnect = jasmine.createSpy('disconnect');
    const observe = jasmine.createSpy('observe');
    spyOn(window, 'matchMedia').and.returnValue({
      matches: false, addEventListener: () => {}, removeEventListener: () => {}
    } as unknown as MediaQueryList);
    spyOn(window, 'IntersectionObserver').and.callFake(function (callback: IntersectionObserverCallback) {
      notify = callback;
      return { observe, disconnect } as unknown as IntersectionObserver;
    });
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();
    const fixture = TestBed.createComponent(RevealHost);
    const element: HTMLElement = fixture.nativeElement.querySelector('div');
    spyOn(element, 'getBoundingClientRect').and.returnValue({ top: 2000 } as DOMRect);
    fixture.detectChanges();
    await fixture.whenStable();
    await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    expect(observe).toHaveBeenCalledWith(element);
    expect(element.classList.contains('scroll-reveal-pending')).toBeTrue();
    expect(element.getAttribute('data-scroll-reveal')).toBe('right');
    const enter = (isIntersecting: boolean, top: number) => notify([
      { isIntersecting, boundingClientRect: { top } } as IntersectionObserverEntry
    ], {} as IntersectionObserver);
    enter(true, 200);
    expect(element.classList.contains('scroll-reveal-pending')).toBeFalse();
    enter(false, -200);
    expect(element.classList.contains('scroll-reveal-pending')).toBeFalse();
    enter(false, 2000);
    expect(element.classList.contains('scroll-reveal-pending')).toBeTrue();
    fixture.destroy();
    expect(disconnect).toHaveBeenCalled();
  });

  it('leaves content visible when reduced motion is requested', async () => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: true } as MediaQueryList);
    const observer = spyOn(window, 'IntersectionObserver');
    await TestBed.configureTestingModule({ imports: [RevealHost] }).compileComponents();
    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(observer).not.toHaveBeenCalled();
    expect(fixture.nativeElement.querySelector('.scroll-reveal-pending')).toBeNull();
  });
});
