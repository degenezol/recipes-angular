import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBoxShadowEffect]'
})
export class BoxShadowEffectDirective {

  @Input() shadowType = 'box-shadow';
  @Input() shadowX = '0';
  @Input() shadowY = '0';
  @Input() shadowBlur = '0';
  @Input() shadowColor = 'black';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      this.shadowType,
      `${this.shadowX} ${this.shadowY} ${this.shadowBlur} ${this.shadowColor}`
    );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, this.shadowType, 'none');
  }

}
