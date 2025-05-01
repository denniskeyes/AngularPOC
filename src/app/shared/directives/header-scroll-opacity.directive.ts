import { Directive, ElementRef, Input, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[headerScrollOpacity]',
  standalone: false
})
export class HeaderScrollOpacityDirective implements OnInit, OnDestroy {

  @Input() minOpacity = 0.3;
  @Input() scrollThreshold = 300;

  private scrollSubscription!: Subscription;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // Set initial opacity
    this.updateOpacity();

    // Subscribe to scroll events with throttling to improve performance
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(10))
      .subscribe(() => {
        this.updateOpacity();
      });
  }

  private updateOpacity(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let opacity: number;
    if (scrollPosition <= 0) {
      opacity = 1.0;
    } else if (scrollPosition >= this.scrollThreshold) {
      opacity = this.minOpacity;
    } else {
      const scrollRatio = scrollPosition / this.scrollThreshold;
      opacity = 1.0 - scrollRatio * (1.0 - this.minOpacity);
    }

    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', opacity);
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

}
