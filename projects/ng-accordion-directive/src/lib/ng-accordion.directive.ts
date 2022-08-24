import { Directive, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

@Directive({ selector: '[ndtkAccordion]' })
export class AccordionDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.handleAccordionClickEvents();
  }

  handleAccordionClickEvents() {
    const hostElement = this.elementRef.nativeElement;
    const headerElement = hostElement.children[0];
    const contentElement = hostElement.children[1];
    this.renderer.setStyle(contentElement, 'display', 'none');
    this.renderer.addClass(headerElement, 'ndtk-mat-icon');
    this.renderer.addClass(headerElement, 'key-up');

    this.renderer.listen(hostElement, 'click', () => {
      if (hostElement.classList.contains('is-open')) {
        this.renderer.removeClass(hostElement, 'is-open');
        this.renderer.removeClass(headerElement, 'key-down');
        this.renderer.addClass(headerElement, 'key-up');
        this.renderer.setStyle(contentElement, 'maxHeight', '0');
        this.renderer.setStyle(contentElement, 'display', 'none');
      } else {
        this.renderer.addClass(hostElement, 'is-open');
        this.renderer.removeClass(headerElement, 'key-up');
        this.renderer.addClass(headerElement, 'key-down');
        this.renderer.setStyle(contentElement, 'maxHeight', '100px');
        this.renderer.setStyle(contentElement, 'display', 'block');
      }
    });
  }
}
