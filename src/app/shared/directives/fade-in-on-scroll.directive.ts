import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  style,
  animate
} from '@angular/animations';

// This directive provides the fade in effect as user scrolls to it
@Directive({
  selector: '[fadeInOnScroll]',
  standalone: false
})

export class FadeInOnScrollDirective implements OnInit {

  // Can set these on individual element in template
  @Input() scrollOffset: number = 0.2; // Default threshold is 20%
  @Input() animationDuration: string = '500ms'; // Default animation duration
  @Input() animationTiming: string = 'ease-in'; // Default timing function

  private player: AnimationPlayer | undefined;
  private observer: IntersectionObserver | undefined;

  constructor(
    private element: ElementRef,
    private builder: AnimationBuilder,
  ) { }

  ngOnInit() {
    // Initially set the element to be invisible
    this.element.nativeElement.style.opacity = '0';

    // Create the animation factory
    const factory = this.makeAnimationFactory();

    // Create player (but don't play the animation yet)
    this.player = factory.create(this.element.nativeElement);

    // Set up the intersection observer
    this.setupIntersectionObserver();
  }

  private makeAnimationFactory(): AnimationFactory {
    return this.builder.build([
      style({ opacity: 0 }),
      animate(`${this.animationDuration} ${this.animationTiming}`, style({ opacity: 1 }))
    ]);
  }

  private setupIntersectionObserver() {
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: this.scrollOffset
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && this.player) {
          // Play the animation when the element enters the viewport
          this.player.play();

          // Stop observing after animation is triggered
          if (this.observer) {
            this.observer.unobserve(entry.target);
          }
        }
      });
    }, options);

    // Start observing the element
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    // Clean up resources
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.player) {
      this.player.destroy();
    }
  }
}
